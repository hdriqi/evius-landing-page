<template>
	<div >
		<div class="nav" :class="{ hide: hideNav }">
			<div class="container h-100">
				<div class="row align-items-center h-100">
					<div class="col-2 nav-logo">
						<nuxt-link to="/">
							<img src="~/assets/img/logo.png">
						</nuxt-link>
					</div>
					<div class="col-10 nav-menu d-none d-lg-block text-right">
						<nuxt-link class="small fw-600 mr-6" to="/" type="scroll">
							HOME
						</nuxt-link>
						<nuxt-link class="small fw-600 mr-6" to="work" type="scroll">
							WORK
						</nuxt-link>
						<nuxt-link class="small fw-600 mr-6" to="blog" type="scroll">
							BLOG
						</nuxt-link>
						<nuxt-link class="small fw-600" to="contact" type="scroll">
							CONTACT
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<div class="nav-placeholder"></div>
	</div>
</template>

<script>
let lastScroll = window.scrollY

export default {
	data() {
		return {
			didScroll: false,
			hideNav: false
		}
	},

	methods: {
		handleScroll(e) {
			this.didScroll = true
		},

		hasScrolled() {
			const currentScroll = window.scrollY
			if(lastScroll > currentScroll && this.hideNav) {
				this.hideNav = false
			}
			else if(lastScroll < currentScroll && !this.hideNav){
				this.hideNav = true
			}
			lastScroll = currentScroll
		},

		scrollChecker() {
			if (this.didScroll) {
				this.hasScrolled()
				this.didScroll = false
			}
			window.requestAnimationFrame(this.scrollChecker)
		}
	},

	created() {
		window.addEventListener('scroll', this.handleScroll)

		window.requestAnimationFrame(this.scrollChecker)
	},

	destroyed: function () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>


<style scoped>
.nav {
	background: rgba(255, 255, 255, 1);
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;
	height: 4rem;
	transition: transform .5s ease-out;
	box-shadow: 0 0px 4px 0px rgba(0,0,0,0.16);
}
.nav-logo img{
	height: 2rem;
	width: auto;
}
.hide {
	transform: translate3d(0,-150%,0);
}

.nav a {
	color: #4F4F4F;
	text-decoration: none;
	transition: color .25s;
	font-size: 0.875rem;
}
.nav a:hover {
	color: #0A1743;
}
.nav-placeholder {
	height: 4rem;
}
</style>

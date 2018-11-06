<template>
	<div>
		<div class="nav" id="nav">
			<div class="container my-4">
				<div class="row align-items-center">
					<div class="col-2 nav-logo">
						<img src="~/assets/img/logo.png">
					</div>
					<div class="col-10 nav-menu d-none d-lg-block text-right">
						<a class="small fw-600 mr-6" href="#service" type="scroll">
							SERVICE
						</a>
						<a class="small fw-600 mr-6" href="#work" type="scroll">
							WORK
						</a>
						<a class="small fw-600 mr-6" href="#blog" type="scroll">
							BLOG
						</a>
						<a class="small fw-600" href="#contact" type="scroll">
							CONTACT
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
let didScroll = false
let lastScroll = window.scrollY

const hasScrolled = () => {
	const currentScroll = window.scrollY
	if(lastScroll > currentScroll) {
		console.log('up')
	}
	else{
		
	}
	lastScroll = currentScroll
}
const scrollChecker = () => {
	if (didScroll) {
		hasScrolled()
		didScroll = false
	}
	window.requestAnimationFrame(scrollChecker)
}

export default {
	data() {
		return {
			didScroll: false
		}
	},

	methods: {
		handleScroll(e) {
			didScroll = true
		}
	},

	created() {
		window.addEventListener('scroll', this.handleScroll)

		window.requestAnimationFrame(scrollChecker)
	},
	destroyed: function () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>


<style>
.nav {
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;
	height: 4rem;
}
.nav-logo img{
	height: 3rem;
	width: auto;
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
</style>

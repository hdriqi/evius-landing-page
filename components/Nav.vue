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
					<div class="col-10 nav-menu d-md-none text-right" style="z-index: 9">
						<h5 class="m-0" @click="toggleMobileNav">{{ mobileNavButton }}</h5>
					</div>
					<div class="col-10 nav-menu d-none d-lg-block text-right">
						<nuxt-link class="small fw-600 mr-6" to="/" type="scroll" exact>
							HOME
						</nuxt-link>
						<nuxt-link class="small fw-600 mr-6" to="/works" type="scroll">
							WORK
						</nuxt-link>
						<nuxt-link class="small fw-600 mr-6" to="/pricing" type="scroll">
							PRICING
						</nuxt-link>
						<nuxt-link class="small fw-600 mr-6" to="/blog" type="scroll">
							BLOG
						</nuxt-link>
						<nuxt-link class="small fw-600" to="/contact" type="scroll">
							CONTACT
						</nuxt-link>
					</div>
					<div :class="{'nav-mobile-active' : mobileNavActive}" class="nav-mobile">
						<div class="row align-items-center h-100">
							<div class="col-12">
								<div class="nav-mobile-wrapper container">
									<div class="nav-mobile-list col-12 py-2" 
										v-for="(l, idx) in link" 
										:key="idx"
										:style="{transitionDelay: `${(0.75/link.length) * idx }s`}"
									>
										<nuxt-link
											:event="''"
											v-on:click.native="navigateMobile(l.route)"
											class="fw-600" 
											:to="l.route" 
											v-bind:exact="l.route === '/'"
										>
											{{ l.name }}
										</nuxt-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="nav-placeholder"></div>
	</div>
</template>

<script>
import Animatext from '~/assets/js/animatext.js'

let lastScroll = null

export default {
	data() {
		return {
			didScroll: false,
			hideNav: false,
			mobileNavActive: false,
			mobileNavButton: 'MENU',
			link: [
				{
					route: '/',
					name: 'HOME'
				},
				{
					route: '/works',
					name: 'WORK'
				},
				{
					route: '/pricing',
					name: 'PRICING'
				},
				{
					route: '/blog',
					name: 'BLOG'
				},
				{
					route: '/contact',
					name: 'CONTACT'
				}
			]
		}
	},

	methods: {
		handleScroll(e) {
			this.didScroll = true
		},

		toggleMobileNav() {
			const self = this
			this.mobileNavActive = !this.mobileNavActive
			let current = this.mobileNavButton
			let next = 'CLOSE'
			if(!this.mobileNavActive) {
				next = 'MENU'
			}
			Animatext(current, next, 25, 500, (result) => {
				this.mobileNavButton = result.text
			})
		},

		navigateMobile(route) {
			const self = this
			this.toggleMobileNav()
			setTimeout(() => {
				self.$router.push({
					path: route
				})
			}, 500)
		},

		hasScrolled() {
			const currentScroll = Math.max(0, window.scrollY)
			if(lastScroll > currentScroll && this.hideNav) {
				this.hideNav = false
			}
			else if(lastScroll < currentScroll && !this.hideNav){
				this.hideNav = true
				if(this.mobileNavActive) {
					this.mobileNavActive = false
				}
			}
			lastScroll = currentScroll
		},

		scrollChecker() {
			if (this.didScroll) {
				this.hasScrolled()
				this.didScroll = false
			}
			setTimeout(() => {
				window.requestAnimationFrame(this.scrollChecker)
			}, 25)
		}
	},

	created() {
		if(process.client) {
			lastScroll = window.scrollY
			window.addEventListener('scroll', this.handleScroll)

			window.requestAnimationFrame(this.scrollChecker)
		}
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
	color: #828282;
	text-decoration: none;
	transition: color .25s;
	font-size: 0.875rem;
}
.nav a.nuxt-link-exact-active {
	color: #0A1743;
}
.nav a.nuxt-link-active {
	color: #0A1743;
}
.nav a:hover {
	color: #0A1743;
}
.nav-placeholder {
	height: 4rem;
}

.nav-mobile{
	position: fixed;
	opacity: 0;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: white;
	width: 100%;
	z-index: 8;
	box-shadow: 0 3px 4px 0px rgba(0,0,0,0.16);
	transform: translate3d(-100%, 0, 0);
	transition: all 0.5s ease-in-out;
}
.nav-mobile a {
	font-size: 36px;	
}
.nav-mobile-active {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}
.nav-mobile-active .nav-mobile-list {
	transform: translate3d(0, 0, 0);
}
.nav-mobile-wrapper {
	position: relative;
}
.nav-mobile-list {
	transform: translate3d(-100%, 0, 0);
	transition: all 0.5s ease-in-out;
}

</style>

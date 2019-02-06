<template>
	<div class="container" id="hero">
		<div class="hero-container mw-4 m-auto">
			<div class="hero-content">
				<div class="hero-main py-4">
					<div>
						<div class="mb-3">
							<div class="text-center text-md-left">
								<h1 class="hero-text h2 h1-md fw-600 primary-color m-0 inline-block">We help</h1>
							</div>
							<div class="text-center text-md-left">
								<h1 class="h2 h1-md fw-600 primary-color m-0 inline-block">revolutionize business</h1>
							</div>
						</div>
						<div class="mb-4 mb-md-7">
							<p class="mw-1 text--semi-dark text-center text-md-left ">
								The 4th industrial revolution is coming. It’s time to digitize your business to stay relevant and become the forefront of your industry.
							</p>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-md-6 text-center text-md-left mb-4 order-2 order-md-1">
							<nuxt-link to="/contact">
								<button class="btn" @click="leadFromHero">LET'S TALK</button>
							</nuxt-link>
						</div>
						<div class="col-12 col-md-6 text-center text-md-right mb-4 order-1 order-md-2">
							<div>
								<span class="m-0 inline-block secondary-bg primary-color px-1">Don't Just Build a Business</span>
							</div>
							<div>
								<span class="m-0 inline-block secondary-bg primary-color px-1">Start a Revolution</span>
							</div>
						</div>
					</div>
				</div>
				<div class="hero-arrow text-center ">
					<a href="#service" type="scroll">
						<svg width="8" height="76" viewBox="0 0 8 76" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.64645 75.3536C3.84171 75.5488 4.15829 75.5488 4.35355 75.3536L7.53553 72.1716C7.7308 71.9763 7.7308 71.6597 7.53553 71.4645C7.34027 71.2692 7.02369 71.2692 6.82843 71.4645L4 74.2929L1.17157 71.4645C0.976311 71.2692 0.659728 71.2692 0.464466 71.4645C0.269204 71.6597 0.269204 71.9763 0.464466 72.1716L3.64645 75.3536ZM3.5 0L3.5 75H4.5L4.5 0L3.5 0Z" fill="#0A1743"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		leadFromHero() {
			this.$ga.event('lead', 'navigate', 'Hero', 1)
		}
	}
}
</script>


<style>
.hero-container {
	height: 100vh;
}
.hero-content {
	height: 100%;
	position: relative;
}
.hero-main {
	position: relative;
	background: white;
	top: 10%;
	z-index: 1;
}
.hero-arrow {
	width: 100%;
	position: absolute;
	bottom: 15%;
}
.hero-arrow a {
	text-decoration: none;
}
.hero-text {
	position: relative;
	z-index: 2;
}
.hero-text::before {
	content: "''";
	font-style: italic;
	font-size: 10rem;
	position: absolute;
	top: -3rem;
	left: -3rem;
	color: #A3F3FD;
	z-index: -1;
}
.hero-aphos {
	font-size: 10rem;
}
</style>

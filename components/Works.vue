<template>
	<div class="container py-7" id="works">
		<div class="mw-5 m-auto">
			<div class="mb-7">
				<div class="text-center">
					<h4 class="primary-color">Works</h4>
				</div>
				<div class="separator m-auto"></div>
			</div>
			<div class="row no-gutters">
				<div v-for="work in works" :key="work.company" class="col-12 col-md-4 works-list"
				:style="{
					'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0.6)), url(${JSON.parse(work.thumbnail)[0].url})`,
				}">
					<nuxt-link :to="work.company | toUrl">
						<div class="works-list-content p-4 text-center">
							<div class="works-list-text p-3">
								<h4 class="text--white fw-600">{{ work.company | capitalize }}</h4>
								<h6 class="text--semi-white">{{ work.service }}</h6>
							</div>
						</div>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		works() {
			return this.$store.getters['work/getList']
		}
	},

	filters: {
		capitalize(title) {
			return title.charAt(0).toUpperCase() + title.slice(1)
		},
		parseJSON(data) {
			return JSON.parse(data)
		},
		parseUrl(obj) {
			return obj[0].url
		},
		toUrl(company) {
			return `/works/${company}`
		}
	}
}
</script>


<style>
.works-list {
	height: 20rem;
	background-size: cover;
	background-repeat: no-repeat;
}
.works-list-content {
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.2s;
}
.works-list-content:hover {
	transform: translate3D(0,-10px,0);
}
.works-list-text {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
}
.works-list-text .text--white {
	color: white;
}
</style>

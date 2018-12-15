<template>
	<section>
		<Nav />
		<div v-if="!loading">
			<div class="container">
				<div class="mw-3 m-auto py-7">
					<h2 class="text-center">{{title}}</h2>
					<div v-html="content.background"></div>
				</div>
				<div class="mw-2 m-auto mb-7">
					<img :src="`${content.screenshot}?w=${windowWidth || 300}`" />
				</div>
				<div class="mw-3 m-auto">
					<div class="row mb-7">
						<div class="col-12 col-md-4">
							<h3 class="primary-color subsection">+ Challenge</h3>
						</div>
						<div class="col-12 col-md-8" v-html="content.challenge"></div>
					</div>
					<div class="row mb-7">
						<div class="col-12 col-md-4">
							<h3 class="primary-color subsection">+ Process</h3>
						</div>
						<div class="col-12 col-md-8" v-html="content.process"></div>
					</div>
					<div class="row">
						<div class="col-12 col-md-4">
							<h3 class="primary-color subsection">+ Result</h3>
						</div>
						<div class="col-12 col-md-8" v-html="content.result"></div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	</section>
</template>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

import { mapState } from 'vuex'

export default {
	async asyncData({ store, route }) {
		if(!store.state.work.list.length > 0) {
			await store.dispatch('work/fetch')
		}
		const current = route.params.id.toLowerCase()
		return {
			title: current.slice(0, 1).toUpperCase() + current.slice(1)
		}
	},

	computed: {
		loading() {
			return this.$store.getters['work/getLoading']
		},
		content() {
			const current = this.$route.params.id.toLowerCase()
			return this.$store.getters['work/getListById'](current)
		},
		windowWidth() {
			return this.$store.getters['global/width']
		}		
	},

	components: {
		Nav: Nav,
		Footer: Footer
	}
}
</script>

<style scoped>
</style>

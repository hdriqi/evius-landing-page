<template>
  <section>
		<Nav />
    <div class="container py-7" v-if="content">
			<div class="mw-3 m-auto">
				<div class="row">
					<div class="col-12 text-center mb-4">
						<h3>{{ content.title }}</h3>
						<p class="meta" id="dates">{{ content.createdAt | parseDate }}</p>
						<!-- <div id="socialIcon">
							<a href="#"><img src="~/assets/img/fb2_w.png"></a>
							<a href="#"><img src="~/assets/img/tw_w.png"></a>
							<a href="#"><img src="~/assets/img/ig_w.png"></a>
						</div> -->
					</div>
					<div class="col-12">
						<div id="content" v-html="content.content"></div>
					</div>
				</div>
			</div>
    </div>
		<Footer />
  </section>
</template>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

export default{
	async asyncData({ store, route }) {
		const current = route.params.id
		if(!store.state.blog.list.length > 0) {
			await store.dispatch('blog/fetch')
		}
		return {
			content: store.getters['blog/getListById'](current)
		}
	},

	mounted() {
		document.querySelectorAll('code').forEach((target) => hljs.highlightBlock(target))
	},

	watch: {
		content(val) {
			if(val) {
				this.$nextTick(() => {
					document.querySelectorAll('code').forEach((target) => hljs.highlightBlock(target))		
				})
			}
		}
	},

	filters: {
		parseDate(val) {
			return new Date(val).toDateString()
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
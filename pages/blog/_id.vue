<template>
  <section>
		<Nav />
    <div class="container py-7" v-if="content">
			<div class="mw-3 m-auto">
				<div class="row">
					<div class="col-12 text-center mb-4">
						<h3>{{ content.title }}</h3>
						<p class="meta" id="dates">{{ content.createdAt | parseDate }}</p>
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
		const split = route.params.id.split('-')
		const current = split[split.length - 1]
		if(!store.state.blog.list.length > 0) {
			await store.dispatch('blog/fetch')
		}
		return {
			content: store.getters['blog/getListById'](current)
		}
	},

	head () {
    return {
      title: this.content.title,
      meta: [
        { hid: 'description', name: 'description', content: this.content.description },
				{ hid: 'og:title', property: 'og:title', content: this.content.title },
				{ hid: 'og:description', property: 'og:description', content: this.content.description },
				{ hid: 'og:image', property: 'og:image', content: this.content.image },
				{ hid: 'og:image:secure_url', property: 'og:image:secure_url', content: this.content.image },
				{ hid: 'twitter:card', property: 'twitter:card', content: this.content.image }
      ]
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
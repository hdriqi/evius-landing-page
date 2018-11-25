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
	created() {
		if(!this.$store.state.blog.list.length > 0) {
			this.$store.dispatch('blog/fetch')
		}
	},

	mounted() {
		document.querySelectorAll('.ql-syntax').forEach((target) => hljs.highlightBlock(target))
	},

	watch: {
		content(val) {
			if(val) {
				this.$nextTick(() => {
					document.querySelectorAll('.ql-syntax').forEach((target) => hljs.highlightBlock(target))		
				})
			}
		}
	},

	computed: {
		content() {
			const current = this.$route.params.id
			return this.$store.getters['blog/getListById'](current)
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
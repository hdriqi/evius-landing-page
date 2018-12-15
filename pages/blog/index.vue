<template>
	<div>
		<Nav />
		<section class="container">
			<div class="mw-3 m-auto">
				<div class="py-7">
					<div id="border">
						<p id="borderText">LATEST POSTS</p>
						<div id="borderLine"></div>
					</div>
					<div class="blog">
						<div v-for="(item,index) in content" :key="index">
							<div class="row mb-7">
								<nuxt-link class="d-block col-12 col-md-4" :to="`/blog/${item.url}`">
									<div class="thumbnail"
										:style="{'background-image': `url(${item.image}?w=${windowWidth || 300}`}"
									>
									</div>
								</nuxt-link>
								<div class="col-12 col-md-8 description">
									<div class="titleWrap">
										<nuxt-link :to="`/blog/${item.url}`">
											<h3 class="primary-color fw-600">{{ item.title }}</h3>
										</nuxt-link>
										<nuxt-link :to="`/blog/${item.url}`">
											<p class="darkBlue date">{{ transformDate(item.createdAt) }}</p>
										</nuxt-link>
								</div>
								</div>
							</div>
						</div>
					</div>
					<div id="borderLineBottom"></div>
				</div>
			</div>
		</section>
		<Footer />
	</div>
</template>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

export default{
	async asyncData({ store }) {
		if(!store.state.blog.list.length > 0) {
			await store.dispatch('blog/fetch')
		}
	},

	methods: {
		transformDate(date) {
			const newDate = new Date(date)
			return newDate.toDateString()
		}
	},

	computed: {
		content() {
			return this.$store.state.blog.list
		},
		windowWidth() {
			return Math.min(480, this.$store.getters['global/width'])
		}
	},

	components: {
		Nav: Nav,
		Footer: Footer
	}
}
</script>

<style scoped>
.thumbnail {
	height: 200px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

p#borderText{
	display: inline;
	background-color: white;	
	text-align: center;
	z-index: 999;
	padding: 0 10px;
	flex: 0 0 100%;
}

div#borderLine, div#borderLineBottom{
	flex: 0 0 100%;	
	height: 2px;
	background-color: #EEEEEE;
	margin-top: -12px;
	margin-bottom: calc(2rem + 12px);
}

div#borderLineBottom{
	margin-bottom: 0;
	margin-top: 2rem;
}
</style>
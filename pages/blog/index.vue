<template>
	<div>
		<Nav />
		<section class="container">
			<div class="mw-3 m-auto">
				<div class="py-7">
					<!-- <div class="highLightWrap">
							<nuxt-link
								v-for="(item,index) in $store.state.blog.list.slice(0,3)"
								:key="index"
								:to="`/blog/${item._id}`"
								:class="`grid${index+1}`"
								:style="`background-image: url('${JSON.parse(item.thumbnail)[0].url}')`"
							>	
								<div id="descHighLight">		
									<p id="titleHighLight">{{item.Title}}</p>
									<p id="dateHighLight">{{item.createdAt}}</p>
								</div>
							</nuxt-link>

					</div> -->

					<div id="border">
						<p id="borderText">LATEST POSTS</p>
						<div id="borderLine"></div>
					</div>
					<div id="postWrapper">
						<div v-for="(item,index) in $store.state.blog.list.slice(0,3)" :key="index">
							<div class="row mb-7">
								<nuxt-link class="d-block col-12 col-md-4" :to="`/blog/${item._id}`">
									<div class="thumbnail"
										:style="{'background-image': `url(${JSON.parse(item.thumbnail)[0].url})`}"
									>
									</div>
								</nuxt-link>
								<div class="col-12 col-md-8 description">
									<div class="titleWrap">
										<nuxt-link :to="`/blog/${item._id}`">
											<h3 class="primary-color fw-600">{{ item.title }}</h3>
										</nuxt-link>
										<nuxt-link :to="`/blog/${item._id}`">
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
	created() {
		if(!this.$store.state.blog.list.length > 0) {
			this.$store.dispatch('blog/fetch')
		}
	},

	methods: {
		transformDate(date) {
			const newDate = new Date(date)
			return newDate.toDateString()
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
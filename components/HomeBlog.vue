<template>
	<div class="container py-7" id="blog">
		<div class="mw-3 m-auto">
			<div class="mb-7">
				<div class="text-center">
					<h4 class="primary-color">Blog</h4>
				</div>
				<div class="separator m-auto"></div>
			</div>
			<div v-for="(item,index) in $store.state.blog.list.slice(0,3)" :key="index">
				<div class="row mb-7">
					<nuxt-link class="d-block col-12 col-md-4" :to="`/blog/${item._id}`">
						<div class="thumbnail"
							style="background-image: url('https://cdn.dribbble.com/users/77628/screenshots/4516668/dribbble_genome_nationwide-800-small.png')"
						>
						</div>
					</nuxt-link>
					<div class="col-12 col-md-8 description">
						<div class="titleWrap">
							<nuxt-link :to="`/blog/${item._id}`">
								<h3 class="primary-color fw-600">{{ item.Title }}</h3>
							</nuxt-link>
							<nuxt-link :to="`/blog/${item._id}`">
								<p class="darkBlue date">{{ transformDate(item.createdAt) }}</p>
							</nuxt-link>
					</div>
					</div>
				</div>
			</div>

			<div class="text-center">
				<div>
					<nuxt-link :to="`/blog`">
						<h5 class="primary-color fw-600">VIEW ALL</h5>
					</nuxt-link>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	methods: {
		transformDate(date) {
			const newDate = new Date(date)
			return newDate.toDateString()
		}
	}
}
</script>


<style>
.thumbnail {
	height: 200px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>

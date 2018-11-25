<template>
  <section>
		<Nav />
		<div>
			<Hero />
			<Services />
			<Works />
			<HomeBlog />
			<HomeContact />
			<Footer />
		</div>
  </section>
</template>

<script>
import Nav from '~/components/Nav'
import Hero from '~/components/Hero'
import Services from '~/components/Services'
import Works from '~/components/Works'
import HomeBlog from '~/components/HomeBlog'
import HomeContact from '~/components/HomeContact'
import Footer from '~/components/Footer'

export default {
	mounted() {
		if(!this.$store.state.work.list.length > 0) {
			this.$store.dispatch('work/fetch')
		}
		if(!this.$store.state.blog.list.length > 0) {
			this.$store.dispatch('blog/fetch')
		}
	},
	
	components: {
		Nav: Nav,
		Hero: Hero,
		Services: Services,
		Works: Works,
		HomeBlog: HomeBlog,
		HomeContact: HomeContact,
		Footer: Footer
	}
}
</script>
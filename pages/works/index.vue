<template>
	<div>
		<Nav />
		<div style="min-height: 100vh">
			<Works />
		</div>
		<Footer />
	</div>
</template>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import Works from '~/components/Works'

export default{
	async asyncData({ store }) {
		if(!store.state.work.list.length > 0) {
			await store.dispatch('work/fetch')
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
		Footer: Footer,
		Works: Works
	}
}
</script>

<style scoped>
</style>
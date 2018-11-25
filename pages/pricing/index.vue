<template>
	<div id="contactWrapper">
		<Nav />
		<div class="container">
			<div class="mw-3 m-auto py-7">
				<div class="row">
					<div class="col-12 col-md-6">
						<div class="container py-7">
							<div class="col-12 pb-4">
								<h4>Business Plan</h4>
							</div>
							<div class="col-12 pb-4" style="height: 250px">
								<object width="100%" type="image/svg+xml" data="svg/undraw_business_plan_5i9d.svg"></object>	
							</div>
							<div class="col-12 pb-4 text-center">
								<h6>Start from</h6>
								<h6><span class="h3">$199</span>/project</h6>
							</div>
							<div class="col-12">
								<p>This plan is for you who already have an established business and want to digitize it. We can help you increase sales and productivity or even lower your expense.</p>
								<p>Landing Page, Redesign, Automation, E-commerce, Internal Tools. You name it, We build it.</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6">
						<div class="container py-7">
							<div class="col-12 pb-4">
								<h4>Startup Plan</h4>
							</div>
							<div class="col-12 pb-4" style="height: 250px">
								<object width="100%" type="image/svg+xml" data="svg/undraw_maker_launch_crhe.svg"></object>	
							</div>
							<div class="col-12 pb-4 text-center">
								<h6>Start from</h6>
								<h6><span class="h3">$399</span>/month</h6>
							</div>
							<div class="col-12">
								<p>You have startup idea that can revolutionize how people lives? We're in! Our startup plan manifest your idea and turn it into world-class product.</p>
								<p>Imagine having your own tech team, from Landing Page to MVP to Scaling. We will be working closely and report on weekly basis to you.</p>
							</div>
						</div>
					</div>
					<div class="col-12 py-7">
						<div class="container text-center">
							<div class="col-12 pb-2">
								<h3>Ready to work with us?</h3>
							</div>
							<div class="col-12">
								<nuxt-link to="/contact">
									<button class="btn" @click="leadFromPricing">Tell us your idea</button>
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import Works from '~/components/Works'

export default{
	created() {
		if(!this.$store.state.work.list.length > 0) {
			this.$store.dispatch('work/fetch')
		}
	},

	data() {
		return {
			name: '',
			email: '',
			description: ''
		}
	},

	methods: {
		transformDate(date) {
			const newDate = new Date(date)
			return newDate.toDateString()
		},

		leadFromPricing() {
			this.$ga.event('lead', 'navigate', 'Pricing', 1)
		},

		submit(e) {
			e.preventDefault()
			const data = {
				name: this.name,
				email: this.email,
				description: this.description
			}
			this.$store.dispatch('form/contactUs', data)
			.then((result) => {
				alert('Thank you! Your message has been delivered to us.')
				this.name = ''
				this.email = ''
				this.description = ''
			})
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
input, textarea {
	width: 100%;
}
</style>

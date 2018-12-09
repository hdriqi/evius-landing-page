<template>
	<div class="container py-7" id="blog">
		<div class="mw-4 m-auto">
			<div class="row">
				<div class="col-12 col-md-6 mb-7">
					<div class="contactGrid">
						<h3>Tell us what you want</h3>
						<p>Great things start with process. We help you start a revolution and take your business to the next level. Tell us your idea.</p>
						<nuxt-link to="contact">
							<button class="btn" @click="leadFromHomeContact">
								CONTACT US&nbsp;<span> &#x279e;</span>	
							</button>
						</nuxt-link>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="contactGrid">
						<h3>Careers</h3>
						<p>Evius was made by creative, passionate and hardworking friends and we always want to hear from talented people.</p>
						<p class="mb-0">Send your portofolio to:</p>
						<p class="fw-600">mamamia@evius.id</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		leadFromHomeContact() {
			this.$ga.event('lead', 'navigate', 'HomeContact', 1)
		}
	}
}
</script>

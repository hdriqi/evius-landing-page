<template>
	<div class="container py-7" id="works">
		<div class="mw-5 m-auto">
			<div class="mb-7">
				<div class="text-center">
					<h4 class="primary-color">Works</h4>
				</div>
				<div class="separatorWrapper">
					<div class="separator bgcyan"></div>
				</div>
			</div>
			<div class="row no-gutters">
				<div class="col-12 col-md-4 works-list" style="background-image:url(https://cdn.dribbble.com/users/77628/screenshots/4516668/dribbble_genome_nationwide-800-small.png)">
					<div class="works-list-content p-4 text-center">
						<div class="works-list-text p-3">
							<h4 class="text--white fw-600">Genome Nationwite</h4>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-4 works-list" style="background-image:url(https://cdn.dribbble.com/users/77628/screenshots/4902420/usaa-genome_final_dribbble_b.jpg)">
					<div class="works-list-content p-4 text-center">
						<div class="works-list-text p-3">
							<h4 class="text--white fw-600">USAA Genome</h4>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-4 works-list" style="background-image:url(https://cdn.dribbble.com/users/77628/screenshots/5017748/northwestern_mutual_800x600.png)">
					<div class="works-list-content p-4 text-center">
						<div class="works-list-text p-3">
							<h4 class="text--white fw-600">Northwestern Mutual</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.works-list {
	height: 20rem;
	background-size: cover;
	background-repeat: no-repeat;
}
.works-list-content {
	position: relative;
	width: 100%;
	height: 100%;
	background: linear-gradient(to bottom, rgba(10, 23, 67, 0), rgba(10, 23, 67, 0.1) 90%, rgba(10, 23, 67, 0.3));
}
.works-list-text {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
}
.works-list-text .text--white {
	color: white;
}
</style>

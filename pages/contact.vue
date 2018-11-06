<template>

	<div id="contactWrapper">
		<div id="wrap">
			<div id="leftContact" class="grid-item grid1 bgdarkBlue">
				<div id="formWrapper">
					<div class="title">
						<p class="h2 white">CONTACT US</p>
					</div>
					<p class="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
					<div class="formSingle">
						<input type="text" name="" placeholder="Name">	
					</div>
					<div class="formSingle">
						<input type="text" name="" placeholder="Email">	
					</div>
					<div class="formSingle">
						<textarea type="text" name="" placeholder="Message"></textarea>
					</div>
					<div id="button">
						<a class="button bgcyan darkBlue fw-6" href="#">Submit</a>
					</div>
				</div>	
			</div>
			<div id="rightContact" class="grid-item grid2 bggrey">
				<div id="infoWrapper">
					<div class="title">
						<p class="h3 fw-6 darkBlue">Contact Information</p>
					</div>
					<p>Lorem ipsum dolor 21st.</p>
					<p>Bulaksumur 55295</p>
					<p>Yogyakarta</p>	
					<p>Call at +6282-3456-7884</p>
					<p>Send Message on Monday-Friday</p>
					<p>9.00 AM - 6.00 PM</p>	
					<div class="h3 fw-6" id="socialIcon">
						<p>Follow Us</p>
						<a href="#"><img src="~/assets/img/fb2.png"></a>
						<a href="#"><img src="~/assets/img/tw.png"></a>
						<a href="#"><img src="~/assets/img/ig.png"></a>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>

div#contactWrapper{
	height: 100vh;
	display: flex;
	justify-content: center;
}

div#wrap{
	width: 100%;
	height: 100%;	
	background: blue;
	display: grid;
}

.grid-item{

}

.grid1{
	height: 100%;	
	grid-column: 1 / 3;
	grid-row: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

div#formWrapper{
	width: 66%;
	max-width: 720px;
}

div#formWrapper p{
	text-align: center;
	margin-bottom: 2rem;
}

div#formWrapper div.formSingle{
	margin-bottom: 2rem;
	border-bottom: 1px solid white;
}

div#formWrapper input, div#formWrapper textarea{
	width: 100%;
	padding: 0.6rem 1.25rem;
	background: transparent;
	border: 0;
	color: white
}

div#formWrapper textarea{
	padding: 0.6rem 1.25rem 0rem;
	resize: vertical;
	height: 75px;
	max-height: 75px;
}

::placeholder { 
    color: white;
    opacity: 1; 
}

:-ms-input-placeholder { 
    color: white;
}

::-ms-input-placeholder {
    color: white;
}

input:focus, textarea:focus {
    outline:none;
}

div#button{
	margin-top: 4rem;
	text-align: right;
}

div#button a{
	padding: 0.75rem 2.25rem;
}

.grid2{
	height: 100%;
	grid-column: 3;
	grid-row: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

div#infoWrapper div.title p{
	text-align: left;
}

div#infoWrapper p:nth-child(4){
	margin-bottom: 1rem;
}

div#infoWrapper div#socialIcon{
	margin-top: 2rem;
}

div#infoWrapper div#socialIcon img{
	height: 24px;
	margin: 0.5rem 1rem 0 0;
}

</style>

<style scoped>
/* Extra small devices (phones, up to 480px) */
@media screen and (max-width: 767px) {
  #leftContact, #rightContact{
    padding: 75px 0;
  }

  div#formWrapper input, div#formWrapper textarea{
    padding: 0.6rem 1.25rem 0.6rem 0;
  }

  .grid1, .grid2{
    height: auto;
    width: 100%;
    grid-column: 1;
    grid-row: 1;
  }

  .grid2{
    grid-row: 2;
  }
}
</style>
<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
	mounted() {
		if(window.innerWidth > 720) {
			this.$store.dispatch('global/setWidth', 720)
		}
		else if(window.innerWidth > 480) {
			this.$store.dispatch('global/setWidth', 480)
		}
	}
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Cabin:400,600');
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
	font-family: 'Cabin', sans-serif;
}

a {
	text-decoration: underline;
	text-decoration-color: #0A1743;
}

.blog a{
	text-decoration: none;
}
.blog a:hover{
	text-decoration: underline;
	text-decoration-color: #0A1743;
}

a:hover {
	color: #0A1743;
}

code {
	font-family: 'Inconsolata', monospace !important;
	font-size: 14px;
}

input, textarea {
	font-family: 'Cabin', sans-serif;
	font-size: 16px;
}

.primary-color {
	color: #0A1743;
}
.primary-bg {
	background: #0A1743;
}
.secondary-color {
	color: #A3F3FD;
}
.secondary-bg {
	background: #A3F3FD
}

.text--dark {
	color: #333333;
}
.text--semi-dark {
	color: #4F4F4F;
}
.text--grey {
	color: #828282;
}
.text--semi-grey {
	color: #BDBDBD;
}
.text--semi-white {
	color: #E0E0E0;
}
.text--white {
	color: #F2F2F2;
}

.bg--dark {
	background-color: #333333;
}
.bg--semi-dark {
	background-color: #4F4F4F;
}
.bg--grey {
	background-color: #828282;
}
.bg--semi-grey {
	background-color: #BDBDBD;
}
.bg--semi-white {
	background-color: #E0E0E0;
}
.bg--white {
	background-color: #F2F2F2;
}

.btn {
	display: inline-block;
	background: #0A1743;
	color: white;
	font-weight: 600;
	text-decoration: none;
	font-size: 0.8rem;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.inline {
	display: inline;
}
.inline-block {
	display: inline-block;
}

.separator {
	height: 2px;
	background-color: #0A1743;
	width: 2rem;
}

</style>
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
	data() {
    return {
      data: ''
    }
	},
	
  mounted() {
    document.querySelectorAll('a[type^="scroll"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()

				document.querySelector(this.getAttribute('href')).scrollIntoView({
					block: "start", 
					inline: "nearest",
					behavior: 'smooth'
				})
			})
    })
  },

  created() {
		const self = this
    function loadJSON(callback) {   

      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', 'blog.json', true); 
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          try {
            var data = JSON.parse(xobj.responseText);
          } catch(err) {
            console.log('error')
            return;
          }
          callback(data);
        }
      };
      xobj.send(null);  
    }
    loadJSON(function(data) {
			self.$store.commit('blog/addBulk', data.data)
    })
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
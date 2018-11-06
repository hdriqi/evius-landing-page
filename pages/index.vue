<template>
  <section>
		<Nav />

  <div id="menuHamburger">
    <div class="bgdarkBlue"></div>
    <div class="bgdarkBlue"></div>
    <div class="bgdarkBlue"></div>
  </div>

  <div id="contentWrapper">

    <Hero />

    <Services />

		<Works />

    <div id="solution">
      <div class="title">
        <p class="darkBlue h2">Solutions</p>
      </div>
      <div class="separatorWrapper">
        <div class="separator bgcyan"></div>
      </div>
      <div id="solutionGrid">
        <div class="gridSolCell">
          <p class="fw-6">Online Store</p>
          <img src="~/assets/img/aa.png">
        </div>
        <div class="gridSolCell">
          <p class="fw-6">SaaS</p>
          <img src="~/assets/img/bb.png">
        </div>
        <div class="gridSolCell">
          <p class="fw-6">Social Network</p>
          <img src="~/assets/img/cc.png">
        </div>
      </div>
      <div id="demo">
        <div id="demoWrapper">
          <input type="text" name="" placeholder="Email">
          <a class="button bgdarkBlue white" href="mailto:mamamia@evius.com">REQUEST A DEMO</a>
        </div>
      </div>
    </div>
   

		<div class="bggrey" id="service">
      <div class="title">
        <p class="darkBlue h2">Works</p>
      </div>
      <div class="separatorWrapper">
        <div class="separator bgcyan"></div>
      </div>
      <div id="sliderWrapper">
        <div>

				</div>
      </div>
    </div>

    <div id="blog">
      <div class="title">
        <p class="darkBlue h2">Blog</p>
      </div>
      <div class="separatorWrapper">
        <div class="separator bgcyan"></div>
      </div>
      <div id="postWrapper">

        <nuxt-link
          v-for="(item,index) in data"
          :key="index"
          :to="`/blog/${item._id}`"
        >
          <div class="post">
            <div 
              class="thumbnail" 
              :style="`background-image: url('${item.Thumbnail}')`"
            >
              
            </div>
            <div class="description">
              <div class="titleWrap">
                <p class="darkBlue h3 title">{{ item.Title }}</p>
                <p class="darkBlue date">{{ item.createdAt }}</p>
            </div>
            </div>
          </div>
        </nuxt-link>

        <div class="post" id="viewWrapper">
          <div id="viewButton">
            <nuxt-link class="button bggrey" :to="`/blog`">VIEW ALL</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div id="contact">
      <div id="contactus">
        <div class="contactGrid">
          <p class="h3 white fw-6" id="contactTitle">Tell us what you want</p>
          <p class="white" id="contactBody">Great things start with process. We help you bring emotion to your product and take your business to the next level. Tell us your idea.</p>
          <a class="button bgcyan darkBlue fw-6" target="_blank" href="contact">CONTACT US&nbsp;<span> &#x279e;</span></a>
        </div>
      </div>
      <div id="careers">
        <div class="contactGrid">
          <p class="white h2 fw-6" id="careersTitle">Careers</p>
          <p class="white" id="careersBody">Evius was made by creative, passionate and hardworking friends and we always want to hear from talented people.</p>
          <p class="white fw-6" id="careersEmail">Send your portofolio to &nbsp;&nbsp;&nbsp; mamamia@evius.com</p>
        </div>
      </div>
    </div>

    <div id="footer">
      <div id="footerWrapper">
        <p class="darkBlue fw-6">(C) Evius. 2018</p>
        <div id="socialIcon">
          <a href="#"><img src="~/assets/img/fb2.png"></a>
          <a href="#"><img src="~/assets/img/tw.png"></a>
          <a href="#"><img src="~/assets/img/ig.png"></a>
        </div>
      </div>
    </div> -->

  </div>
  </section>
</template>

<script>
import Nav from '~/components/Nav'
import Hero from '~/components/Hero'
import Services from '~/components/Services'
import Works from '~/components/Works'

export default {
  mounted() {
    document.querySelectorAll('a[type^="scroll"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            console.log('scrolled')

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                block: "start", 
                inline: "nearest",
                behavior: 'smooth'
            });
        });
    });
  },

  data() {
    return {
      data: ''
    }
  },
  methods: {

  },
  created() {
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
    var self = this;
    loadJSON(function(data) {
      var slicedjson = data.data.slice(0,3)
      self.data = slicedjson

      for (let i in self.data) {
        let dt = self.data[i].createdAt.substring(0,10).split("-").reverse()
        self.data[i].createdAt = dt[0] + '-' + dt[1] + '-' + dt[2]  
        console.log(self.data[i].createdAt)
      }

      // console.log(self.data);
    });

	},
	
	components: {
		Nav: Nav,
		Hero: Hero,
		Services: Services,
		Works: Works
	}
}
</script>
<template>
  <section class="container">
    <div id="wrap">
      <div id="backButton" class="darkBlue bgcyan">
        <a href="/"><span>&#x2190;</span>HOME</a>
      </div>
      <div id="leftPane" class="bgdarkBlue">
        <div id="stickyPane">
          <p id="title">{{ data.title }}</p>
          <p class="meta">evius</p>
          <p class="meta" id="dates">{{ data.created }}</p>
          <div id="socialIcon">
            <a href="#"><img src="~/assets/img/fb2_w.png"></a>
            <a href="#"><img src="~/assets/img/tw_w.png"></a>
            <a href="#"><img src="~/assets/img/ig_w.png"></a>
          </div>
        </div>
      </div>
      <div id="rightPane" class="bgwhite">
        <div id="mainText">
          <p>
            {{ data.title }}
          </p>
          <p id="content" v-html="data.content">
            <!-- <p v-html="data.content"></p> -->
            
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

export default{
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
        xobj.open('GET', '/blog.json', true); 
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

      const self = this
      loadJSON(function(data) {  
        const result = data.data.filter((value) => {
          return self.$route.params.idBlog === value._id
        })

        let dt = result[0].createdAt.substring(0,10).split("-").reverse()
        
        self.data = {
          title: result[0].Title,
          content: result[0].Content,
          created: dt[0] + '-' + dt[1] + '-' + dt[2],
        }

        // console.log(dt[0] + '-' + dt[1] + '-' + dt[2])

      });

      window.addEventListener("resize", function() {

        console.log('resize!');

        if (window.innerWidth > 767) {
          document.getElementById('nav').style.left = '50%';
        }

      });

    }
}

</script>

<style scoped>

div#wrap{
  width: 100%;
  display: grid;
}

div#leftPane{
  position: fixed;
  width: 25%;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
}

div#backButton{
  position: fixed;
  top: 50px;
  left: 50px;
  border: 1px solid #A3F3FD;
  z-index: 999;
}

div#backButton a{
  display: inline-block;
  padding: 5px 5px 5px 0px;
  text-decoration: none;
  letter-spacing: 1px;
  color: #0A1743;
}

div#backButton a:focus{
  color: #0A1743;
}

div#backButton span{
  padding: 5px 7px;
  margin-right: 5px;
  color: white;
  background: #0A1743;
}

div#stickyPane{
  padding: 50px;
}

div#stickyPane p#title{
  text-align: left;
  font-size: 2.25rem;
  display:inline;
  line-height: 3rem;
  color: white;
}

div#stickyPane p.meta{
  margin-top: 2rem;
  color: white; 
  letter-spacing: 1px;  
}

div#stickyPane p#dates{
  margin-top: 0;
  margin-bottom: 2rem;
}

div#socialIcon{
  margin-left: -1rem;
}

div#socialIcon img{
  height: 24px;
  margin-left: 12px;
}

div#rightPane{
  position: absolute;
  width: 75%;
  left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;  
}

div#mainText{
  max-width: 992px;
}

div#mainText img{
  width: 100%;
  margin-bottom:2rem;
}

div#mainText p, div#mainText p#content p, div#mainText ul, div#mainText ol, div#mainText li{
  margin-bottom: 2rem;
  font-size: 1.25rem;
  line-height: 2.25rem;
}

div#mainText li{
  margin-left: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

div#mainText p:first-child{
  font-size: 2rem;
  font-weight: 600;
}

@media screen and (max-width: 767px) {
  div#backButton{
    position: absolute;
    top: 30px;
    left: 30px;
  }
  div#leftPane{
    display: none;
  }
  div#rightPane{
    width: 100%;
    position: relative;
    left: 0;
    padding: 100px 30px 50px;
  }
  div#mainText p, div#mainText ul, div#mainText ol, div#mainText li{
    font-size: 1rem;
  }
  div#mainText li{
    margin-left: 1rem;
  }
}

</style>
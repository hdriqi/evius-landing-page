(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{173:function(t,e,a){var i=a(177);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(29).default)("39d181fa",i,!0,{sourceMap:!1})},174:function(t,e,a){var i=a(179);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(29).default)("6b37c165",i,!0,{sourceMap:!1})},176:function(t,e,a){"use strict";var i=a(173);a.n(i).a},177:function(t,e,a){(t.exports=a(28)(!1)).push([t.i,"\n.nav[data-v-61ebf420]{background:#fff;position:fixed;top:0;width:100%;z-index:10;height:4rem;transition:-webkit-transform .5s ease-out;transition:transform .5s ease-out;transition:transform .5s ease-out,-webkit-transform .5s ease-out;box-shadow:0 0 4px 0 rgba(0,0,0,.16)\n}\n.nav-logo img[data-v-61ebf420]{height:2rem;width:auto\n}\n.hide[data-v-61ebf420]{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0)\n}\n.nav a[data-v-61ebf420]{color:#828282;text-decoration:none;transition:color .25s;font-size:.875rem\n}\n.nav a.nuxt-link-active[data-v-61ebf420],.nav a.nuxt-link-exact-active[data-v-61ebf420],.nav a[data-v-61ebf420]:hover{color:#0a1743\n}\n.nav-placeholder[data-v-61ebf420]{height:4rem\n}\n.nav-mobile[data-v-61ebf420]{position:fixed;opacity:0;top:0;left:0;right:0;bottom:0;background:#fff;width:100%;z-index:8;box-shadow:0 3px 4px 0 rgba(0,0,0,.16);-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);transition:all .5s ease-in-out\n}\n.nav-mobile a[data-v-61ebf420]{font-size:36px\n}\n.nav-mobile-active[data-v-61ebf420]{opacity:1\n}\n.nav-mobile-active[data-v-61ebf420],.nav-mobile-active .nav-mobile-list[data-v-61ebf420]{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.nav-mobile-wrapper[data-v-61ebf420]{position:relative\n}\n.nav-mobile-list[data-v-61ebf420]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);transition:all .5s ease-in-out\n}",""])},178:function(t,e,a){"use strict";var i=a(174);a.n(i).a},179:function(t,e,a){(t.exports=a(28)(!1)).push([t.i,"\nsvg[data-v-89e12fa4]{fill:#bdbdbd\n}\nsvg[data-v-89e12fa4]:hover{fill:#e0e0e0\n}",""])},180:function(t,e,a){"use strict";a(62),a(17);var i=function(t,e){return Math.floor(Math.random()*(e-t))+t},n=function(t,e,a){var n=i(1,30),s=Math.max(a-n,1);return Math.abs(t-e)/s},s=function(t){return t?t.charCodeAt(0):null},o=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3,r=arguments.length>4?arguments[4]:void 0,l=0,c=[],v=o/a,h=0,d=Math.abs(e.length-t.length)/v,u=t,f=e;e.length<t.length&&(u=e,f=t),u.split("").forEach(function(t,e){var a=s(u[e]),i=s(f[e]);c.push(n(a,i,v))});var m=t.split(""),p=m.map(function(t){return t.charCodeAt(0)}),g=setInterval(function(){if(m.length>e.length){var t=d+l;m=m.slice(0,m.length-Math.floor(t)),l=t%1}else if(m.length<e.length){for(var a=d+l,o=0;o<Math.floor(a);o++){var u=i(65,123),f=s(e[m.length]);c.push(n(u,f,v-h)),m.push(String.fromCharCode(u)),p.push(u)}l=a%1}m.forEach(function(t,a){if(t!=e[a])if(c[a]){var n=p[a],s=n>e.charCodeAt(a)?n-c[a]:n+c[a];p[a]=s,m[a]=String.fromCharCode(Math.round(s))}else m[a]=String.fromCharCode(i(65,123))});var b={text:m.join(""),done:!1};m.join("")===e&&(clearInterval(g),b.done=!0),h++,r(b)},a)},r=null,l={data:function(){return{didScroll:!1,hideNav:!1,mobileNavActive:!1,mobileNavButton:"MENU",link:[{route:"/",name:"HOME"},{route:"/works",name:"WORK"},{route:"/pricing",name:"PRICING"},{route:"/blog",name:"BLOG"},{route:"/contact",name:"CONTACT"}]}},methods:{handleScroll:function(t){this.didScroll=!0},toggleMobileNav:function(){var t=this;this.mobileNavActive=!this.mobileNavActive;var e=this.mobileNavButton,a="CLOSE";this.mobileNavActive||(a="MENU"),o(e,a,25,500,function(e){t.mobileNavButton=e.text})},navigateMobile:function(t){var e=this;this.toggleMobileNav(),setTimeout(function(){e.$router.push({path:t})},500)},hasScrolled:function(){var t=Math.max(0,window.scrollY);r>t&&this.hideNav?this.hideNav=!1:r<t&&!this.hideNav&&(this.hideNav=!0,this.mobileNavActive&&(this.mobileNavActive=!1)),r=t},scrollChecker:function(){var t=this;this.didScroll&&(this.hasScrolled(),this.didScroll=!1),setTimeout(function(){window.requestAnimationFrame(t.scrollChecker)},25)}},created:function(){r=window.scrollY,window.addEventListener("scroll",this.handleScroll),window.requestAnimationFrame(this.scrollChecker)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},c=(a(176),a(16)),v=Object(c.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"nav",class:{hide:t.hideNav}},[a("div",{staticClass:"container h-100"},[a("div",{staticClass:"row align-items-center h-100"},[a("div",{staticClass:"col-2 nav-logo"},[a("nuxt-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"https://5be7ac1db55dfa50cebc6f5e.evius.id/media/49a00ac0-005b-11e9-8b34-19d1462d373f/image/png?w=50"}})])],1),t._v(" "),a("div",{staticClass:"col-10 nav-menu d-lg-none text-right",staticStyle:{"z-index":"9"}},[a("h5",{staticClass:"m-0",on:{click:t.toggleMobileNav}},[t._v(t._s(t.mobileNavButton))])]),t._v(" "),a("div",{staticClass:"col-10 nav-menu d-none d-lg-block text-right"},[a("nuxt-link",{staticClass:"small fw-600 mr-6",attrs:{to:"/",type:"scroll",exact:""}},[t._v("\n\t\t\t\t\t\tHOME\n\t\t\t\t\t")]),t._v(" "),a("nuxt-link",{staticClass:"small fw-600 mr-6",attrs:{to:"/works",type:"scroll"}},[t._v("\n\t\t\t\t\t\tWORK\n\t\t\t\t\t")]),t._v(" "),a("nuxt-link",{staticClass:"small fw-600 mr-6",attrs:{to:"/pricing",type:"scroll"}},[t._v("\n\t\t\t\t\t\tPRICING\n\t\t\t\t\t")]),t._v(" "),a("nuxt-link",{staticClass:"small fw-600 mr-6",attrs:{to:"/blog",type:"scroll"}},[t._v("\n\t\t\t\t\t\tBLOG\n\t\t\t\t\t")]),t._v(" "),a("nuxt-link",{staticClass:"small fw-600",attrs:{to:"/contact",type:"scroll"}},[t._v("\n\t\t\t\t\t\tCONTACT\n\t\t\t\t\t")])],1),t._v(" "),a("div",{staticClass:"nav-mobile",class:{"nav-mobile-active":t.mobileNavActive}},[a("div",{staticClass:"row align-items-center h-100"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"nav-mobile-wrapper container"},t._l(t.link,function(e,i){return a("div",{key:i,staticClass:"nav-mobile-list col-12 py-2",style:{transitionDelay:.75/t.link.length*i+"s"}},[a("nuxt-link",{staticClass:"fw-600",attrs:{event:"",to:e.route,exact:"/"===e.route},nativeOn:{click:function(a){t.navigateMobile(e.route)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t")])],1)}))])])])])])]),t._v(" "),a("div",{staticClass:"nav-placeholder"})])},[],!1,null,"61ebf420",null);v.options.__file="Nav.vue";e.a=v.exports},181:function(t,e,a){"use strict";a(178);var i=a(16),n=Object(i.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer primary-bg py-7 mt-7"},[e("div",{staticClass:"container"},[e("div",{staticClass:"mw-4 m-auto"},[e("div",{staticClass:"row"},[this._m(0),this._v(" "),e("div",{staticClass:"col-12 col-md-8 text-right"},[e("a",{staticClass:"mr-4",attrs:{href:"#"}},[e("svg",{attrs:{height:"20px","aria-labelledby":"simpleicons-facebook-icon",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("title",{attrs:{id:"simpleicons-facebook-icon"}},[this._v("Facebook icon")]),e("path",{attrs:{d:"M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"}})])]),this._v(" "),e("a",{staticClass:"mr-4",attrs:{href:"#"}},[e("svg",{attrs:{height:"20px","aria-labelledby":"simpleicons-twitter-icon",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("title",{attrs:{id:"simpleicons-twitter-icon"}},[this._v("Twitter icon")]),e("path",{attrs:{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"}})])]),this._v(" "),e("a",{staticClass:"mr-4",attrs:{href:"#"}},[e("svg",{attrs:{height:"20px","aria-labelledby":"simpleicons-instagram-icon",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("title",{attrs:{id:"simpleicons-instagram-icon"}},[this._v("Instagram icon")]),e("path",{attrs:{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"}})])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-4"},[e("p",{staticClass:"text--semi-white"},[this._v("(c) Evius. 2018")])])}],!1,null,"89e12fa4",null);n.options.__file="Footer.vue";e.a=n.exports},189:function(t,e,a){var i=a(203);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(29).default)("1b84c284",i,!0,{sourceMap:!1})},202:function(t,e,a){"use strict";var i=a(189);a.n(i).a},203:function(t,e,a){(t.exports=a(28)(!1)).push([t.i,"",""])},214:function(t,e,a){"use strict";a.r(e);a(17),a(62),a(30);var i,n=a(3),s=a.n(n),o=a(180),r=a(181),l={asyncData:(i=s()(regeneratorRuntime.mark(function t(e){var a,i,n,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.store,i=e.route,n=i.params.id.split("-"),s=n[n.length-1],!(!a.state.blog.list.length>0)){t.next=6;break}return t.next=6,a.dispatch("blog/fetch");case 6:return t.abrupt("return",{content:a.getters["blog/getListById"](s)});case 7:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)}),head:function(){return{title:this.content.title,meta:[{hid:"description",name:"description",content:this.content.description},{hid:"og:title",property:"og:title",content:this.content.title},{hid:"og:description",property:"og:description",content:this.content.description},{hid:"og:image",property:"og:image",content:this.content.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.content.image},{hid:"twitter:card",property:"twitter:card",content:this.content.image}]}},mounted:function(){document.querySelectorAll("code").forEach(function(t){return hljs.highlightBlock(t)})},watch:{content:function(t){t&&this.$nextTick(function(){document.querySelectorAll("code").forEach(function(t){return hljs.highlightBlock(t)})})}},filters:{parseDate:function(t){return new Date(t).toDateString()}},components:{Nav:o.a,Footer:r.a}},c=(a(202),a(16)),v=Object(c.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Nav"),t._v(" "),t.content?a("div",{staticClass:"container py-7"},[a("div",{staticClass:"mw-3 m-auto"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center mb-4"},[a("h3",[t._v(t._s(t.content.title))]),t._v(" "),a("p",{staticClass:"meta",attrs:{id:"dates"}},[t._v(t._s(t._f("parseDate")(t.content.createdAt)))])]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{attrs:{id:"content"},domProps:{innerHTML:t._s(t.content.content)}})])])])]):t._e(),t._v(" "),a("Footer")],1)},[],!1,null,"78c11b0f",null);v.options.__file="_id.vue";e.default=v.exports}}]);
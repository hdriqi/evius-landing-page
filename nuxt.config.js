const pkg = require('./package')
const axios = require('axios')

module.exports = {
	mode: 'universal',
	server: {
		port: 8001
	},

  /*
  ** Headers of the page
  */
  head: {
    title: 'Evius Industri',
    meta: [
      { charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:image', property: 'og:image', content: '/favicon.ico' },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: '/favicon.ico' },
      { hid: 'description', name: 'description', content: 'We help revolutionaze business. The 4th industrial revolution is coming. It’s time to digitize your business to stay relevant and stay at the forefront of your industry.' }
    ],
    link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/monokai-sublime.min.css' }
		],
		script: [
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js' }
		]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0A1743' },

  /*
  ** Global CSS
  */
  css: [
		'~/assets/skeleton.css'
	],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
		['@nuxtjs/google-analytics', {
      id: 'UA-93228473-1'
    }]
	],

	generate: {
    routes: function (cb) {
      axios.all([
				axios.get('https://5be7ac1db55dfa50cebc6f5e.evius.id/api/Blog', {
					headers: {
						authorization: 'Bearer 2zcDZ9W8EUJTyPtwwCQLppa'
					}
				}),
				axios.get('https://5be7ac1db55dfa50cebc6f5e.evius.id/api/Works', {
					headers: {
						authorization: 'Bearer 2zcDZ9W8EUJTyPtwwCQLppa'
					}
				})
			])
			.then(axios.spread(function (blogs, works) {
					let routes1 = blogs.data.data.map((blog) => {
						return '/blog/' + blog._id
					});

					let routes2 = works.data.data.map((work) => {
						return '/works/' + work.company
					});

					cb(null, routes1.concat(routes2));
			}), function(err) {
					return next(err);
			});
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
				test: /\.svg/,
				loader: 'vue-svg-loader'	
			});
    }
  }
}

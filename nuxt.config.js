const axios = require('axios')

module.exports = {
	mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Evius Industri',
    meta: [
      { charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:image', property: 'og:image', content: 'https://5be7ac1db55dfa50cebc6f5e.evius.id/media/49a00ac0-005b-11e9-8b34-19d1462d373f/image/png?w=50' },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://5be7ac1db55dfa50cebc6f5e.evius.id/media/49a00ac0-005b-11e9-8b34-19d1462d373f/image/png?w=50' },
      { hid: 'description', name: 'description', content: 'We help revolutionize business. The 4th industrial revolution is coming. It’s time to digitize your business to stay relevant and stay at the forefront of your industry.' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'gVLQNKctedkmMacglJlVFygXJc5aCctN2x4bcF6UdbQ' }
    ],
    link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'https://5be7ac1db55dfa50cebc6f5e.evius.id/media/49a00ac0-005b-11e9-8b34-19d1462d373f/image/png?w=50' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/monokai-sublime.min.css' }
		],
		script: [
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js' }
    ],
    
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
    { src: '~plugins/googleTag.js', ssr: false }
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
    analyze: true,
    extend(config, ctx) {
      config.module.rules.push({
				test: /\.svg/,
				loader: 'vue-svg-loader'	
			});
    }
  }
}

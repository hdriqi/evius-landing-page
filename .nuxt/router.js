import Vue from 'vue'
import Router from 'vue-router'

const _34c5f654 = () => import('../pages/works/index.vue' /* webpackChunkName: "pages/works/index" */).then(m => m.default || m)
const _676543d8 = () => import('../pages/pricing/index.vue' /* webpackChunkName: "pages/pricing/index" */).then(m => m.default || m)
const _5483686f = () => import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */).then(m => m.default || m)
const _12606326 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _964e11e4 = () => import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */).then(m => m.default || m)
const _00457dbc = () => import('../pages/works/_id.vue' /* webpackChunkName: "pages/works/_id" */).then(m => m.default || m)
const _034cc5e1 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/works",
			component: _34c5f654,
			name: "works"
		},
		{
			path: "/pricing",
			component: _676543d8,
			name: "pricing"
		},
		{
			path: "/contact",
			component: _5483686f,
			name: "contact"
		},
		{
			path: "/blog",
			component: _12606326,
			name: "blog"
		},
		{
			path: "/blog/:id",
			component: _964e11e4,
			name: "blog-id"
		},
		{
			path: "/works/:id",
			component: _00457dbc,
			name: "works-id"
		},
		{
			path: "/",
			component: _034cc5e1,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}

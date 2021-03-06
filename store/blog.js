import axios from 'axios'
import slugify from 'slugify'

export const state = () => ({
  list: []
})

export const mutations = {
  add (state, post) {
    state.list.push(post)
	},
	addBulk (state, posts) {
		const temp = state.list.concat(posts)
		state.list = temp
	},
  remove (state, { post }) {
    state.list.splice(state.list.indexOf(post), 1)
  }
}

export const actions = {
	fetch ({commit}) {
		return new Promise((resolve, reject) => {
			axios.get('https://5be7ac1db55dfa50cebc6f5e.evius.id/api/Blog?_sort=-createdAt', {
				headers: {
					authorization: 'Bearer 2zcDZ9W8EUJTyPtwwCQLppa'
				}
			})
			.then((result)=>{
				const data = result.data.data.map((v) => {
					const thumbnail = JSON.parse(v.thumbnail)[0].url
					return {
						...v, 
						image: thumbnail,
						url: slugify(`${v.title} ${v._id}`, {
							remove: /[^a-zA-Z0-9 ]/g,
							lower: true
						})
					}
				})
				commit('addBulk', data)
				resolve(data)
			})
			.catch((err) => {
				reject(err)
			})
		})
	}
}

export const getters = {
	getList(state) {
    return state.list
	},
	getListById(state) {
		return (id) => {
			return state.list.find((post) => post._id === id)
		}
	},
	getKV(state) {
		return state.kv
	},
  getLoading(state) {
    return state.loading
  }
}
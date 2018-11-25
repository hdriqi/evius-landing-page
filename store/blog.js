import axios from 'axios'

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
		axios.get('https://5be7ac1db55dfa50cebc6f5e.evius.id/api/Blog', {
			headers: {
				authorization: 'Bearer 2zcDZ9W8EUJTyPtwwCQLppa'
			}
		})
		.then((result)=>{
			commit('addBulk', result.data.data)
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
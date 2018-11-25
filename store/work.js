import axios from 'axios'

export const state = () => ({
	list: [],
	kv: {},
	loading: true
})

export const mutations = {
  add (state, post) {
    state.list.push(post)
	},
	addBulk (state, works) {
		const temp = state.list.concat(works)
		state.list = temp
		temp.forEach((val, idx) => {
			state.kv[val.company] = idx
		})
	},
  remove (state, { post }) {
    state.list.splice(state.list.indexOf(post), 1)
	},
	toggleLoading (state) {
		const temp = !state.loading
		state.loading = temp
	}
}

export const actions = {
	fetch ({commit}) {
		axios.get('https://5be7ac1db55dfa50cebc6f5e.evius.id/api/Works', {
			headers: {
				authorization: 'Bearer 2zcDZ9W8EUJTyPtwwCQLppa'
			}
		})
		.then((result)=>{
			commit('addBulk', result.data.data)
			commit('toggleLoading')
		})
	},

	forceToggleLoading({commit}) {
		commit('toggleLoading')
	}
}

export const getters = {
	getList(state) {
    return state.list
	},
	getListById(state) {
		return (id) => {
			const idx = state.kv[id]
			return state.list[idx]
		}
	},
	getKV(state) {
		return state.kv
	},
  getLoading(state) {
    return state.loading
  }
}
export const state = () => ({
  width: null
})

export const mutations = {
	changeWidth (state, width) {
    state.width = width
	},
}

export const actions = {
	setWidth ({commit}, width) {
		commit('changeWidth', width)
	}
}

export const getters = {
	width(state) {
		return state.width
	}
}
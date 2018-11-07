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
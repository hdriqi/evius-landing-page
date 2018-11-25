import axios from 'axios'

export const state = () => ({
  
})

export const mutations = {
}

export const actions = {
	contactUs ({}, data) {
		return new Promise((resolve, reject) => {
			axios.post('https://5be7ac1db55dfa50cebc6f5e.evius.id/api/Contact', data, {
				headers: {
					authorization: 'Bearer Nfsh1PqLofzrqqLyZNHW99s'
				}
			})
			.then((result)=>{
				resolve(result)
			})
			.catch((err) => {
				reject(err)
			})
		})
	}
}
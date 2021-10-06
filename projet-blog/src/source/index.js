import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Source({
    actions: { 
        searchByCountry({commit, dispatch}, newsCountry){
          axios
            .get('http://api.mediastack.com/v1/news ? access_key = 7b49306447f5766ea1f87b6d8ca2bf5d'+ newsCountry)
            .then(({ data: { news } }) => {
              commit('setResultSearch', news)
            })
        },
        module: {

        },
    }
})
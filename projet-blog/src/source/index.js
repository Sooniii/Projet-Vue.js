import Vuex from 'vuex'
import Vue from 'vue'




Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    articles: [
        {
          id: 0,
          title: "Test",
          intro: "Bonjour voilà l'intro",
          content:" content 1",
          creationDate:'12/04/2020',
          author: 'Loïc'
        },
        {
          id: 1,
          title: "test2",
          intro: "affichage",
          content:" content 2",
          creationDate:'11/07/1998',
          author: 'Théo'
        },
      ],
    },

    mutations: {
      addArticle(state, data) {
        state.articles.push(data)
      },

    removeArticleByIndex(state, index){
        state.articles.splice(index, 1)
    },
    },
    actions: { 
      removeArticleById(context, id){
        id = parseInt(id)
        const index = context.state.articles.findIndex((article) => {return article.id === id})
        context.commit('removeArticleByIndex', index)
            }
        },
})
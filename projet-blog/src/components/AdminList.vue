<template>
  <div>
    <p>CHOOSE YOUR ARTICLE</p>
    <button @click = "ajouter()">Ajouter</button>
     <form>
      <input type="text" v-model="title" placeholder="Titre">
      <input type="text" v-model="intro" placeholder="Intro">
      <input type="text" v-model="content" placeholder="Content">
      <input type="text" v-model="author" placeholder="Author">
     </form>
    <ul>
      <li v-for="article in articles" v-bind:key="article.id">
        <h1>{{article.title}} <br/> {{article.intro}} <br/> {{article.content}} </h1>
        <button :key= "article.id" @click = "suppr(index)">Supprimer</button>
        <button :key= "article.id" @click = "modifier(index)">Modifier</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
      return {
        title : "",
        intro  : "",
        content : "",
        creationDate : new Date(),
        author : "",
        id : null
      }
    },
  computed: {
    
      articles() {
        return this.$store.state.articles
      },
  },  
  methods: {
  suppr(index) {
      this.articles.splice(index, 1)
    },
  modifier(index) {
      this.articles.splice(index, 1)
    },
  ajouter() {
    let actualId = this.articles.length
      this.articles.push({
        title : this.title,
        intro : this.intro,
        content : this.content,
        creationDate : new Date(),
        author :  this.author,
        id : actualId
        })
    },   
  
  }
}

</script>

<style>
</style>
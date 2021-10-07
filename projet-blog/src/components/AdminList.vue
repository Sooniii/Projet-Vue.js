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
      <li v-for="(article, index) in articles" v-bind:key="article.id">
        <h1>{{article.title}} <br/> {{article.intro}} <br/> {{article.content}} </h1>
        <button @click = "suppr(index)">Supprimer</button>
        <button @click = "modifier(index)">Modifier</button>
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
        creationDate : "",
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
  modifier() {
      this.$alert("Cette option est disponible uniquement pour les détenteurs de la version premium");
    },
  ajouter() {
      let addDate = this.createDate()
      this.articles.push({
        title : this.title,
        intro : this.intro,
        content : this.content,
        creationDate : addDate,
        author :  this.author,
        id : Math.random(0,10000000000000000)
        })
    }, 
  checkAjouter() {

  } ,

  createDate() {
      let modifiedDate = new Date()
      let day = modifiedDate.toDateString()
      let hour = modifiedDate.getHours() < 10 ? `0${modifiedDate.getHours()}` : modifiedDate.getHours()
      let minute = modifiedDate.getMinutes() < 10 ? `0${modifiedDate.getMinutes()}` : modifiedDate.getMinutes()
      let second = modifiedDate.getSeconds() < 10 ? `0${modifiedDate.getSeconds()}` : modifiedDate.getSeconds()
      let fullDate = day + " " + hour + ":" + minute + ":" + second
      return fullDate
  }
  }
}

</script>

<style>
</style>
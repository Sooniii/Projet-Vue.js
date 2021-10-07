<template>
  <div>
    <p>CHOOSE YOUR ARTICLE</p>
    <ul>
      <li v-for="article in articles" v-bind:key="article.id">
        <h1>{{article.title}}</h1>
        <h3>{{article.intro}}</h3>
        <h5>{{article.author}}
          <br>{{article.creationDate}}</h5>
        <router-link :to="`singleArticle/${article.id}`">Lire</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    
      articles() {
        return this.$store.state.articles
      },
  },

}
</script>

<style>
</style>
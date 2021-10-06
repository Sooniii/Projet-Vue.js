<template>
  <div>
    <p>CHOOSE YOUR ARTICLE</p>
    <ul>
      <li v-for="article in articles" v-bind:key="article.id">
        <h1>{{article.title}}</h1>
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

  methods: {
    getId: function (index) {
      this.articles[index].id;
    },
  },
}
</script>

<style>
</style>
<template>
 <div>
    <p>this is YOUR ARTICLE</p>
      <div v-for="article in articles" v-bind:key="article.id">
        <div v-if="article.id == urlID">
          {{article.title}}
          <br>{{article.intro}} 
          <br>{{article.content}}
        </div>
      </div>
  </div>
</template>

<script>

export default {
   computed: {
    
      articles() {
        return this.$store.state.articles
      },

      urlID() {
        return this.$route.params.id
      }
  }
}
</script>

<style>

</style>
<template>
  <dir>
      <p>{{content}}</p>
  </dir>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        intro: String,
        content: String
    }
}
</script>

<style>

</style>
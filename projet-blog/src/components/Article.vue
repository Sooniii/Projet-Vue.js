<template>
    <div>
        <p>CHOOSE YOUR ARTICLE</p>
        <div  v-for="(item,i) in arrayOfArticle" :key="arrayOfArticle[i]" class="form-check">
            <input @click="searchArticle" type="radio" :id="i" :name="item" :value="item" class="form-check-input">
            <label :for="item" class="form-check-label">{{ item }}</label>></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrayOfArticle: ["World", "Paris", "London", "Milan"]
        }
    },
    methods: {
        searchArticle(event){
        this.$store.dispach('searchByCity', event.target.value)
        }
    }

}
</script>

<style>

</style>
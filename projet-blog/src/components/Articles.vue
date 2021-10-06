<template>
    <div>
        <p>CHOOSE YOUR ARTICLE</p>
            <ul>
                <li v-for="(article) in articles" v-bind:key="article.id">
                    <Test v-bind:title="article.title" v-bind:intro="article.intro"></Test>
                </li>
            </ul>
    </div>
</template>

<script>
import Test from "./listeArticle.vue"
export default {
    components:{
        Test
    },
    data() {
        return {
            styleObject : {
                color : "blue"
            },
            articles : [
                {
                    id: 0,
                    title: "Test",
                    intro: "Bonjour voilà l'intro",
                },
                {
                    id: 0,
                    title: "test2",
                    intro: "affichage"
                }
            ]
        }
    },

}
</script>

<style>

</style>
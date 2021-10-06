<template>
    <div>
        <p> {{title}} {{intro}} {{temps}} {{content}}</p>
    </div>

</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        intro: String,
        temps: String,
        content: String,
    }

}
</script>

<style>

</style>
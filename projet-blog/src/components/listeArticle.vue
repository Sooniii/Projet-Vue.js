<template>
    <div>
        <p>{{title}} {{intro}} </p>
    </div>

</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        intro: String,
    }

}
</script>

<style>

</style>
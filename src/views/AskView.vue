<template>
    <div>
        <div v-for="(ask,idx) in this.$store.state.ask" :key="idx">{{ask.title}}</div>
    </div>
</template>

<script>

export default {
    data(){
        return{
        }
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
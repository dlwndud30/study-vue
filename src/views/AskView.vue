<template>
    <div>
        <div v-for="(ask,idx) in ask" :key="idx">{{ask.title}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    data(){
        return{
        }
    },
    computed: {
        ...mapState({
            ask: state => state.ask
        })
        // ask(){
        //     return this.$store.state.ask;
        // }
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
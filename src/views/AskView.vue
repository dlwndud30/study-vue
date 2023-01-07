<template>
    <div>
        <div v-for="(ask,idx) in fetchedAsk" :key="idx">{{ask.title}}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    data(){
        return{
        }
    },
    computed: {
        // ask(){
        //     return this.$store.state.ask;
        // }

        // ...mapState({
        //     ask: state => state.ask
        // })

        ...mapGetters({
            fetchedAsk: 'fetchedAsk',
        }),

        // ...mapGetters(['fetchedAsk']),


    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
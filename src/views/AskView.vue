<template>
    <div>
      <p v-for="(item,idx) in fetchedAsk" :key="idx">
        <a :href="item.url">
            {{item.title}}
        </a>
        <small>
            {{item.time_ago}} by {{item.user}}
        </small>
      </p>
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
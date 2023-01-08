<template>
    <div>
      <p v-for="(item,idx) in fetchedAsk" :key="idx">
        <router-link :to="`/item/${item.id}`">
            {{item.title}}
        </router-link>
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
        ...mapGetters({
            fetchedAsk: 'fetchedAsk',
        }),
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
<template>
  <div>
    <p v-for="(item,idx) in this.$store.state.news" :key="idx">
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
export default {
    data(){
        return{
        }
    },
    created(){
      this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>
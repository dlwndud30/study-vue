<template>
  <div>
    <div v-for="user in users" :key="user">{{user.title}}</div>
  </div>
</template>

<script>
import {fetchNewsList} from '@/api/index';
export default {
    data(){
        return{
            users:[],
        }
    },
    created(){
        fetchNewsList().then((response)=>{
            console.log(response);
            this.users = response.data;
        });
    }
}
</script>

<style>

</style>
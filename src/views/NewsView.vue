<template>
  <div>
    <div v-for="(user,idx) in users" :key="idx">{{user.title}}</div>
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
        console.log('호출 전: ', this);

        // var vm =this;
        // fetchNewsList().then(function(response){
        //     //비동기함수에서의 this -> this: undefined
        //     //화살표 함수 사용 -> 호출 전 this와 호출 후 this가 동일
        //     console.log('호출 후: ', this);
        
        //     console.log(response);
        //     vm.users = response.data;
        // })
        // .catch(function(error){
        //     console.log(error);
        // });

        fetchNewsList().then((response)=>{
            //비동기함수에서의 this -> this: undefined
            //화살표 함수 사용 -> 호출 전 this와 호출 후 this가 동일
            console.log('호출 후: ', this);
        
            console.log(response);
            this.users = response.data;
        })
        .catch(function(error){
            console.log(error);
        });
    }
}
</script>

<style>

</style>
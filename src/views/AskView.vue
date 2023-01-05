<template>
    <div>
        <div v-for="(ask,idx) in ask" :key="idx">{{ask.title}}</div>
    </div>
</template>

<script>
import {fetchAskList} from '@/api/index';

export default {
    data(){
        return{
            ask: [],
        }
    },
    created(){
        var vm = this;
        fetchAskList()
            .then(function(response){
                vm.ask = response.data;
            })
            .catch(function(error){
                console.log(error);
            });
    }
}
</script>

<style>

</style>
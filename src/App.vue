<template>
  <div id="app">
    <!-- <ToolBar></ToolBar>  -->
    <tool-bar></tool-bar> <!-- 이걸 추천 -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components:{
    ToolBar,
  },
  methods:{

  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>

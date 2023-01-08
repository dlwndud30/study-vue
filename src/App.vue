<template>
  <div id="app">
    <!-- <ToolBar></ToolBar>  -->
    <tool-bar></tool-bar> <!-- 이걸 추천 -->
    <transition name="page">
      <router-view></router-view>
    </transition>
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
/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<template>
  <div id="app">
    <!-- <ToolBar></ToolBar>  -->
    <tool-bar></tool-bar> <!-- 이걸 추천 -->
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import Spinner from './components/Spinner.vue';
import ToolBar from './components/ToolBar.vue';
import bus from './utils/bus';

export default {
  components:{
    ToolBar,
    Spinner,
  },
  created(){
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
    console.log(process.env.VUE_APP_TITLE);
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods:{
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  }, 
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  color: #34495e;
  text-decoration: none;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active{
  text-decoration: underline;
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

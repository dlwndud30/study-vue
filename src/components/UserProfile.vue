<template>
  <div class="user-container">
    <div>
      <i class="fa fa-user-circle-o"></i>
    </div>
    <div class="user-description">
      <slot name="username"></slot>
      <div class="time-container">
        <div class="time">
          <slot name="time"></slot>
        </div> 
        <slot name="karma"></slot>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    info: Object,
  },
//   computed:{
//     userInfo(){
//         return this.$store.state.user;
//     }
//   }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user-circle-o{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
.time-container{
  display:flex;
  font-size: 0.7rem;
}
</style>
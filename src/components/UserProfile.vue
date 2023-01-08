<template>
  <div class="user-container">
    <div>
      <i class="fa fa-user-circle-o"></i>
    </div>
    <div class="user-description">
      <div>
        {{info.id}}
      </div>
      <div class="time">
        {{info.created}}
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
</style>
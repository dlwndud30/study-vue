<template>
  <div class="user-container">
    <div>
      <i class="fa fa-user-circle-o"></i>
    </div>
    <div class="user-description">
      <div>
        {{userInfo.id}}
      </div>
      <div class="time">
        {{userInfo.created}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    userInfo(){
        return this.$store.state.user;
    }
  }
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
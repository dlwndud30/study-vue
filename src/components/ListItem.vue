<template>
  <div>
    <ul class="news-list">
      <li v-for="(item,idx) in listItems" :key="idx" class="post">
        <div class="points">
          {{item.points || 0}}
        </div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{item.title}}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`" > 
                {{item.title}}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{item.time_ago}} by 
            <template v-if="item.user">
              <router-link :to="`/user/${item.user}`" class="link-text"> 
                {{item.user}}
              </router-link>
            </template>
            <template v-else>
              <a :href="item.url">
                {{item.domain}}
              </a>
            </template>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems(){ 
      return this.$store.state.list;
      // const name = this.$route.name;
      // if(name === 'news'){
      //   return this.$store.state.news;
      // }else if(name === 'ask'){
      //   return this.$store.state.ask;
      // }else if(name === 'jobs'){
      //   return this.$store.state.jobs;
      // }else{
      //   return null;
      // }
    },
  },
}
</script>

<style scoped>
.news-list{
  margin: 0;
  padding: 0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>
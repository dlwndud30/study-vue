<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <user-profile :info="fetchedItem">
        <router-link :to="`/user/${fetchedItem.user}`" slot="username">
          {{fetchedItem.user}}
        </router-link>
        <template slot="time">
          {{'Posted ' + fetchedItem.time_ago}}
        </template>
      </user-profile>
    </section>
    <section>
      <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';
export default {
  components: { UserProfile },
  computed:{
    ...mapGetters(['fetchedItem'])
  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id);
  },
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
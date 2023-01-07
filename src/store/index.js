import Vue from 'vue'
import Vuex from 'vuex'

import {fetchNewsList} from '@/api/index';

Vue.use(Vuex);

export const store  = new Vuex.Store({
  state: {
    news: [],
  },
  getters: {

  },
  mutations: {
    SET_NEWS(state, data){
        state.news = data;
    },
  },
  actions: {
    FETCH_NEWS(context){
        fetchNewsList()
          .then((response)=>{
            console.log(response);
            context.commit('SET_NEWS', response.data);
            //state.news = response.data //store 구조 상 이게 불가능 -> mutation을 통해야함
          })
          .catch((error)=>{
            console.log(error);
          });
    },
  }
})
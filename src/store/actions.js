import {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItem} from '@/api/index';

export default {
    FETCH_NEWS(context){
        fetchNewsList()
          .then(({data})=>{
            console.log(data);
            context.commit('SET_NEWS', data);
            //state.news = response.data //store 구조 상 이게 불가능 -> mutation을 통해야함
          })
          .catch((error)=>{
            console.log(error);
          });
    },
    FETCH_ASK(context){
        fetchAskList()
        .then((response)=>{
            context.commit('SET_ASK', response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },
    FETCH_JOBS(context){
        fetchJobsList()
        .then((response)=>{
            context.commit('SET_JOBS', response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    FETCH_USER({commit}, payload) {
        fetchUserInfo(payload)
        .then(({data})=>{
            commit('SET_USER', data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    FETCH_ITEM(context, payload){
        fetchItem(payload)
        .then((response)=>{
            context.commit('SET_ITEM', response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },
  }
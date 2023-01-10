import {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItem, fetchList} from '@/api/index';

export default {
    FETCH_NEWS(context){
        return fetchNewsList()
          .then((response)=>{
            context.commit('SET_NEWS', response.data);
            return response;
          })
          .catch((error)=>{
            console.log(error);
          });
    },
    FETCH_ASK(context){
        return fetchAskList()
        .then((response)=>{
            context.commit('SET_ASK', response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },
    FETCH_JOBS(context){
        return fetchJobsList()
        .then((response)=>{
            context.commit('SET_JOBS', response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    FETCH_USER({commit}, payload) {
        return fetchUserInfo(payload)
        .then(({data})=>{
            commit('SET_USER', data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    FETCH_ITEM(context, payload){
        return fetchItem(payload)
        .then((response)=>{
            context.commit('SET_ITEM', response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    FETCH_LIST({commit}, pageName){
        return fetchList(pageName)
        .then(({data})=>{
            console.log('4');
            commit('SET_LIST', data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  }
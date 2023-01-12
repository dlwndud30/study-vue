import {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItem, fetchList} from '@/api/index';

export default {
    // //promise
    // FETCH_NEWS(context){
    //     return fetchNewsList()
    //       .then((response)=>{
    //         context.commit('SET_NEWS', response.data);
    //         return response;
    //       })
    //       .catch((error)=>{
    //         console.log(error);
    //       });
    // },

    //async
    async FETCH_NEWS(context){
        try{
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;
        }catch(error){
            console.log(error);
        }
    },
    async FETCH_ASK(context){
        const response = await fetchAskList();
        context.commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_JOBS(context){
        const response = await fetchJobsList();
        context.commit('SET_JOBS', response.data);
        return response;
    },
    async FETCH_USER({commit}, payload) {
        const response = await fetchUserInfo(payload);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM(context, payload){
        const response = await fetchItem(payload);
        context.commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST({commit}, pageName){
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
  }
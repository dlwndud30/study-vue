import Vue from 'vue'
import VueRouter from 'vue-router'

import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '@/views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', //해시값 제거
  routes:[
    {
        path:'/',
        redirect: '/news'
    },
    {
        path: '/news',  //url에 대한 정보 = url 주소
        name: 'news',
        component: createListView('NewsView'),  //url 주소로 갔을 때 표시할 컴포넌트
    },
        {
        path: '/jobs',  //url에 대한 정보 = url 주소
        name: 'jobs',
        component: createListView('JobsView'),  //url 주소로 갔을 때 표시할 컴포넌트
    },
        {
        path: '/ask',  //url에 대한 정보 = url 주소
        name: 'ask',
        component: createListView('AskView'),  //url 주소로 갔을 때 표시할 컴포넌트
    },
    {
        path: '/item/:id',  //url에 대한 정보 = url 주소
        component: ItemView,  //url 주소로 갔을 때 표시할 컴포넌트
    },
    {
        path: '/user/:id',  //url에 대한 정보 = url 주소
        component: UserView,  //url 주소로 갔을 때 표시할 컴포넌트
    },
  ]
});
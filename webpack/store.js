import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        count:1
    },
    mutations:{
        addCount(state,n){
            state.count+=n;
        }
    },
    actions:{
        asyncAddCount(context,n){
            setTimeout(function(){
                context.commit('addCount',n);
            },1000)
        }
    },
    getters:{
        getCount(state){
            return `getters的值是${state.count}`
        }
    }
})


export default store;
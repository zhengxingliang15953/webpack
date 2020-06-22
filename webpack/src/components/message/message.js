import message from './message.vue';
import Vue from 'vue';

let MESSAGE=Vue.extend(message);
let messageMode=null;

let init=function(){
    messageMode=new MESSAGE();
    messageMode.$mount();
    document.body.appendChild(messageMode.$el);
}

let caller=function(value){
    window.sessionStorage.setItem('message',value);
    if(!messageMode){
        init()
    }
    messageMode.success();
}

export default {
    install(Vue){
        Vue.prototype.$message=caller;
    }
}
import './src/assets/css/style.css';
import './src/assets/css/pc.css';
import './src/assets/css/mobail.css';
import App from './App.vue';
import Vue from 'vue';
import router from './src/router'
import './src/plugins/vconsole';
import store from './store';
import message from './src/components/message/message.js';
Vue.use(message);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');


// document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';

Vue.directive('focus', {
    bind: function (el, binding) {
        el.style.color = binding.value;
    },
    inserted: function (el, binding) {
        el.focus();
    },
})


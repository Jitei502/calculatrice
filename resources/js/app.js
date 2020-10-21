require('./bootstrap');
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = true;

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');

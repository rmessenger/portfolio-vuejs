import Vue from 'vue';
import App from './App.vue';
const sanityClient = require('@sanity/client');

Vue.config.productionTip = false;
Vue.prototype.$sanity = sanityClient({
    projectId: 'wst1m5tr',
    dataset: 'production'
});

new Vue({
    render: h => h(App),
}).$mount('#app');

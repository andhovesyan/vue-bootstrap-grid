import Vue from 'vue';
import bsGrid from './bs_grid';

import App from './App.vue';

Vue.use(bsGrid);

new Vue({
    el: '#app',
    render: h => h(App)
});

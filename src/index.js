import 'bootstrap/scss/bootstrap-grid.scss';

import bsGrid from './bs_grid/bs-grid.vue';
import bsRow from './bs_grid/bs-row.vue';
import bsCol from './bs_grid/bs-col.vue';

const plugin = {
  install(Vue, options) {
    Vue.component('bs-grid', bsGrid);
    Vue.component('bs-row', bsRow);
    Vue.component('bs-col', bsCol);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;

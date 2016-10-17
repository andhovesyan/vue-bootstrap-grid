import bsGrid from './bs_grid/bs-grid.vue';
import bsRow from './bs_grid/bs-row.vue';
import bsCol from './bs_grid/bs-col.vue';

const plugin = {
  bsGrid,
  bsRow,
  bsCol,
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;

<template>
  <div :class="cclass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: [
    'fluid',
  ],

  computed: {
    cclass() {
      return (this.fluid) ? 'container-fluid' : 'container';
    }
  }
};
</script>
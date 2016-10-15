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
      console.log(this.$slots);
      return (this.fluid) ? 'container-fluid' : 'container';
    }
  }
};
</script>

<style lang="css" scoped>
</style>
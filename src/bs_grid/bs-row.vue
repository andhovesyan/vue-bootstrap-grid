<template>
  <div class="row" :class="{'no-gutter': noGutter}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    noGutter: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
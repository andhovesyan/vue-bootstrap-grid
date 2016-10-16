<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    xs: {
      type: Number,
      default: 12,
    },
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number,
    hidden: String,
    visible: String,
    class: {
      type: [String, Array],
      default: () => [],
    }
  },
  computed: {
    classes() {
      let classes = this.class;
      if (typeof classes === 'string') {
        classes = classes.split(' ');
      }

      if (this.xs) {
        classes.push('col-xs-' + this.xs);
      }
      if (this.sm) {
        classes.push('col-sm-' + this.sm);
      }
      if (this.md) {
        classes.push('col-md-' + this.md);
      }
      if (this.lg) {
        classes.push('col-lg-' + this.lg);
      }
      if (this.xl) {
        classes.push('col-xl-' + this.xl);
      }

      if (this.hidden) {
        classes.push('hidden-' + this.hidden);
      }
      if (this.visible) {
        classes.push('visible-' + this.visible);
      }
      return classes;
    }
  }
};
</script>

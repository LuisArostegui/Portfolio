<template>
  <div :style="separatorStyle" :class="colorClass"></div>
</template>
  
<script>
export default {
  name: 'SeparatorComponent',
  props: {
    color: {
      type: String,
      required: false,
      validator: (value) => ['primary', 'white'].includes(value),
      default: 'primary'
    },
    thickness: {
      type: String,
      required: true,
      validator: (value) => ['1px', '2px', '3px'].includes(value),
      default: '1px'
    },
    customStyle: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    separatorStyle() {
      return {
        height: this.thickness,
        ...this.customStyle
      };
    },
    colorClass() {
      return 'color-' + this.color;
    }
  }
};
</script>
  
<style lang="scss" scoped>
@import '../../styles/components/elements/_separator.scss';
</style>

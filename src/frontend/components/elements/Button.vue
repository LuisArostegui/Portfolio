<template>
  <div :style="style">
    <button class="button" @click="handleButtonClick">
      <span class="button__text">{{ text }}</span>
      <div class="button__icon-container">
        <span class="circle">
          <i class="circle__icon-arrow-right"></i>
        </span>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: String,
    iconClass: {
      type: String,
      default: 'icon-arrow-right'
    },
    customStyle: {
      type: Object,
      default: () => ({ margin: '1rem' })
    }
  },
  computed: {
    style() {
      return {
        ...this.customStyle
      }
    }
  },
  methods: {
    handleButtonClick() {
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/components/elements/_button.scss';
</style>

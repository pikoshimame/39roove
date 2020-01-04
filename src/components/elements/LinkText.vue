<template>
  <span class="link-text">{{ text }}</span>
</template>

<script>
export default {
  name: 'LinkText',
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.link-text {
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    left: 12px;
    bottom: 8px;
    display: block;
    border-bottom: color(border, primary) solid 2px;
    width: 100%;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    right: -20px;
    bottom: 8px;
    display: block;
    border-right: transparent solid 8px;
    border-bottom: color(border, primary) solid 4px;
    z-index: -1;
  }
}
</style>

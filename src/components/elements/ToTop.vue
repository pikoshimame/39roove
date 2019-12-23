<template>
  <transition name="fade">
    <nuxt-link
      v-show="isShow"
      class="button-totop"
      to
      v-scroll-to="'body'"
    >
      <img src="~/assets/icons/totop.svg" alt="">
    </nuxt-link>
  </transition>
</template>

<script>
export default {
  name: 'ToTop',
  props: {
    isShow: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button-totop {
  display: block;
  width: 40px;
  height: 40px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

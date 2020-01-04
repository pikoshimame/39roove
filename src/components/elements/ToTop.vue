<template>
  <transition name="fade">
    <nuxt-link
      v-show="isShow"
      v-scroll-to="'body'"
      class="button-totop"
      to
    >
      <img
        src="~/assets/icons/totop.svg"
        alt="トップへ戻る"
      >
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
};
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

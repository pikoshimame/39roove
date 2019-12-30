<template>
  <div class="layout-container">
    <global-navi />
    <nuxt />
    <main-footer />
    <modal-contents />
  </div>
</template>

<script>
import GlobalNavi from '~/components/layouts/GlobalNavi';
import MainFooter from '~/components/layouts/MainFooter';
import ModalContents from '~/components/layouts/ModalContents';

export default {
  components: {
    GlobalNavi,
    MainFooter,
    ModalContents
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}
</style>

<style lang="scss" scoped>
.layout-container {
  background-color: color(background, white);
  font-family: $font-secondary;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: center top no-repeat;
    @include retina-background-image('~assets/images/illust-s', 'png');
    background-size: 583px 635px;

    @include mq(large) {
      @include retina-background-image('~assets/images/illust-l', 'png');
      background-size: 900px 680px;
    }
  }
}
</style>

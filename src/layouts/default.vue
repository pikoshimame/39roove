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
  background: color(background, white) center top no-repeat fixed;
  @include retina-background-image('~assets/images/illust-s', 'png');
  background-size: 583px 635px;
  font-family: $font-secondary;
  overflow: hidden;

  @include mq(large) {
    @include retina-background-image('~assets/images/illust-l', 'png');
    background-size: 900px 680px;
  }
}
</style>

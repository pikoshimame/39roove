<template>
  <div class="layout-container">
    <global-navi />
    <nuxt />
    <main-footer />
    <registration-contents />
    <modal-contents />
  </div>
</template>

<script>
import GlobalNavi from '~/components/layouts/GlobalNavi';
import MainFooter from '~/components/layouts/MainFooter';
import RegistrationContents from '~/components/layouts/RegistrationContents';
import ModalContents from '~/components/layouts/ModalContents';

export default {
  components: {
    GlobalNavi,
    MainFooter,
    RegistrationContents,
    ModalContents
  }
};
</script>

<style lang="scss" scoped>
.layout-container {
  font-family: $font-secondary;

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

    @include dark {
      filter: drop-shadow(0px 0px 10px rgba(color(background, white), .05));
    }

    @include mq(large) {
      @include retina-background-image('~assets/images/illust-l', 'png');
      background-size: 900px 680px;
    }
  }
}
</style>

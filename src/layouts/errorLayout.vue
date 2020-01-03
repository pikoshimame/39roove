<template>
  <div class="layout-container">
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  font-family: $font-primary;

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

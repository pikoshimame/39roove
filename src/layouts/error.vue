<template>
  <div class="main-container">
    <h1 class="logo">
      <img src="~/assets/images/logo.svg" alt="39roove">
    </h1>
    <error-code :status-code="statusCode" />
  </div>
</template>

<script>
import ErrorCode from '~/components/elements/ErrorCode';

export default {
  components: {
    ErrorCode
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  layout: 'errorLayout',
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  z-index: 0;
  overflow: hidden;

  > .logo {
    position: fixed;
    left: 0;
    right: 0;
    top: 456px;
    width: 320px;
    margin: 0 auto;
    z-index: 0;

    @include mq(medium) {
      width: 400px;
    }

    @include mq(large) {
      left: calc(50% - 270px);
      right: inherit;
      top: 460px;
    }

    > img {
      filter: drop-shadow(0px 0px 2px rgba(color(background, white), .2));
    }
  }
}
</style>

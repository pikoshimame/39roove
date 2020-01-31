<template>
  <div class="main-container">
    <h1 class="logo">
      <heading-logo />
    </h1>
    <error-code :status-code="statusCode" />
  </div>
</template>

<script>
import HeadingLogo from '~/components/elements/HeadingLogo';
import ErrorCode from '~/components/elements/ErrorCode';

export default {
  components: {
    HeadingLogo,
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
};
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

    /deep/ svg {
      filter: drop-shadow(0px 0px 2px rgba(color(background, white), .2));

      @include dark {
        filter: drop-shadow(0px 0px 2px rgba(color(background, dark-gray), .8));
      }
    }
  }
}
</style>

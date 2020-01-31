<template>
  <div class="error-code">
    <p class="code">
      {{ statusCode }}
    </p>
    <p class="text">
      {{ statusText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ErrorCode',
  props: {
    statusCode: {
      type: Number,
      required: true
    }
  },
  computed: {
    statusText() {
      return (this.statusCode === 404) ? 'Not Found' : 'Server Error';
    }
  }
};
</script>

<style lang="scss" scoped>
.error-code {
  position: relative;
  background-color: rgba(color(background, white), .6);
  color: color(text, black);
  text-align: center;
  height: 100vh;
  padding-top: 144px;
  z-index: 1;

  @include dark {
    background-color: rgba(color(background, dark-gray), .6);
    color: color(text, white);
  }

  > .code {
    font-size: 7.2rem;

    @include mq(medium) {
      font-size: 9.6rem;
    }
  }

  > .text {
    font-size: 4.0rem;

    @include mq(medium) {
      font-size: 5.6rem;
    }
  }
}
</style>

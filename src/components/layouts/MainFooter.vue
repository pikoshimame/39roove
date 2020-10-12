<template>
  <footer
    class="main-footer"
  >
    <div class="container">
      <small
        v-if="illustrations !== ''"
        class="illustrations"
      >{{ illustrations }}</small>
      <small class="copyright">{{ copyright }}</small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  computed: {
    illustrations() {
      return this.$store.state.illustrations.text;
    },
    copyright() {
      return this.$store.state.copyright.text;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-footer {
  position: relative;
  z-index: 0;
  background-color: color(background, dark-gray);
  color: color(text, white);
  font-size: 12px;
  font-family: $font-primary;
  text-align: center;
  padding-bottom: 104px;
  pointer-events: none;

  @include dark {
    background-color: color(background, extra-dark-gray);
  }

  > .container {
    display: inline-flex;
    flex-direction: column;

    > .button {
      padding-bottom: 24px;
      pointer-events: auto;
    }

    > .illustrations {
      padding-bottom: 4px;
      pointer-events: auto;
    }

    > .copyright {
      pointer-events: auto;
    }
  }
}
</style>

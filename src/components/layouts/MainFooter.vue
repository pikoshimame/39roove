<template>
  <footer
    class="main-footer"
  >
    <div class="container">
      <div class="button">
        <discount-tweet />
      </div>
      <small class="copyright">{{ copyright }}</small>
    </div>
  </footer>
</template>

<script>
import DiscountTweet from '~/components/elements/DiscountTweet';

export default {
  name: 'MainFooter',
  components: {
    DiscountTweet
  },
  computed: {
    copyright() {
      return this.$store.state.copyright.text;
    }
  }
}
</script>

<style lang="scss" scoped>
.main-footer {
  position: relative;
  z-index: 0;
  background-color: color(background, extra-dark-gray);
  color: color(text, white);
  font-size: 12px;
  font-family: $font-primary;
  text-align: center;
  padding-bottom: 24px;
  pointer-events: none;

  > .container {
    display: inline-flex;
    flex-direction: column;

    > .button {
      padding-bottom: 24px;
      pointer-events: auto;
    }

    > .copyright {
      pointer-events: auto;
    }
  }
}
</style>

<template>
  <footer
    class="main-footer"
  >
    <div class="container">
      <div
        v-if="existsDiscountTweet"
        class="button"
      >
        <discount-tweet ga-label="footer" />
      </div>
      <small
        v-if="illustrations !== ''"
        class="illustrations"
      >{{ illustrations }}</small>
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
    existsDiscountTweet() {
      return this.$store.getters['discountTweet/existsDiscountTweet'];
    },
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

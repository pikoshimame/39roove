<template>
  <a
    @click.prevent="click"
    class="discount-tweet"
  href="">
    <img src="~/assets/icons/discount.svg" alt="Discount Tweet">
  </a>
</template>

<script>
export default {
  name: 'DiscountTweet',
  computed: {
    discountTweet() {
      return this.$store.state.discountTweet;
    }
  },
  methods: {
    click() {
      const url = window.location.href;
      const text = this.discountTweet.text;
      const hashtags = this.discountTweet.hashtags;
      const uri = `http://twitter.com/share?url=${url}&text=${text}&hashtags=${hashtags}`;
      window.open(encodeURI(decodeURI(uri)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1');
    }
  }
}
</script>

<style lang="scss" scoped>
.discount-tweet {
  display: inline-block;
  width: 152px;
  height: 24px;
  transition: opacity .2s;

  &:hover {
    opacity: .7;
  }
}
</style>

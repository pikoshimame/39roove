<template>
  <div class="contents-entrancefee">
    <contents-heading
      text="Entrance Fee"
      class="heading"
    />
    <entrance-fee-list />
    <div class="button">
      <discount-tweet ga-label="entrancefee" />
    </div>
  </div>
</template>

<script>
import ContentsHeading from '~/components/elements/ContentsHeading';
import EntranceFeeList from '~/components/elements/EntranceFeeList';
import DiscountTweet from '~/components/elements/DiscountTweet';

export default {
  name: 'EntranceFee',
  components: {
    ContentsHeading,
    EntranceFeeList,
    DiscountTweet
  }
};
</script>

<style lang="scss" scoped>
.contents-entrancefee {
  > .heading {
    padding-bottom: 40px;
  }

  > .button {
    padding-top: 40px;
  }
}
</style>

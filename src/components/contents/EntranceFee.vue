<template>
  <div class="contents-entrancefee">
    <contents-heading
      text="Entrance Fee"
      class="heading"
    />
    <template
      v-if="entranceFees.length !== 0"
    >
      <entrance-fee-list
        :entrance-fees="entranceFees"
      />
      <div
        v-if="existsDiscountTweet"
        class="button"
      >
        <discount-tweet ga-label="entrancefee" />
      </div>
    </template>
    <p
      v-else
      class="text"
    >
      coming soon...
    </p>
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
  },
  computed: {
    entranceFees() {
      return this.$store.state.entranceFees.list;
    },
    existsDiscountTweet() {
      return this.$store.getters['discountTweet/existsDiscountTweet'];
    }
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

  > .text {
    color: color(text, white);
    font-size: 1.4rem;
    opacity: .5;
  }
}
</style>

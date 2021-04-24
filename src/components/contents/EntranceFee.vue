<template>
  <div class="contents-entrancefee">
    <contents-heading
      text="Entrance Fee"
      class="heading"
    />
    <entrance-fee-list
      v-if="entranceFees.length !== 0"
      :entrance-fees="entranceFees"
    />
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

export default {
  name: 'EntranceFee',
  components: {
    ContentsHeading,
    EntranceFeeList
  },
  computed: {
    entranceFees() {
      return this.$store.state.entranceFees.list;
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

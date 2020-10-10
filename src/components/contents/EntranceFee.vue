<template>
  <div class="contents-entrancefee">
    <contents-heading
      text="Entrance Fee"
      class="heading"
    />
    <entrance-fee-list />
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

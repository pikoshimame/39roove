<template>
  <dl class="entrancefee-list">
    <div
      v-for="(entranceFee, index) in entranceFees"
      :key="index"
      class="item"
    >
      <dt>{{ entranceFee.term }}</dt>
      <dd>{{ entranceFee.fee }} <span v-if="entranceFee.drink !== ''">({{ entranceFee.drink }})</span></dd>
    </div>
  </dl>
</template>

<script>
export default {
  name: 'EntranceFeeList',
  props: {
    entranceFees: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.entrancefee-list {
  display: inline-flex;
  flex-direction: column;
  color: color(text, white);

  > .item {
    display: flex;
    justify-content: flex-end;
    font-size: 1.6rem;

    @include mq(small) {
      font-size: 2.0rem;
    }

    & + .item {
      padding-top: 16px;
    }

    > dt {
      text-align: right;
    }

    > dd {
      text-align: left;
      padding-left: 12px;
      min-width: 176px;

      @include mq(small) {
        padding-left: 24px;
        min-width: 208px;
      }

      > span {
        font-size: 1.4rem;
      }
    }
  }
}
</style>

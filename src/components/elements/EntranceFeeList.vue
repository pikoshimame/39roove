<template>
  <dl class="entrancefee-list">
    <div
      v-for="(entranceFee, index) in entrancefeeList"
      :key="index"
      class="item"
    >
      <dt>{{ entranceFee.term }}</dt>
      <dd>{{ entranceFee.fee }} <span>(+1Drink {{ entranceFee.drink }})</span></dd>
    </div>
  </dl>
</template>

<script>
export default {
  name: 'EntranceFeeList',
  data() {
    return {
      entrancefeeList: [
        {
          term: '通常',
          fee: '￥2,000',
          drink: '￥600'
        }
      ]
    };
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

    > dd {
      padding-left: 12px;

      @include mq(small) {
        padding-left: 24px;
      }

      > span {
        font-size: 1.4rem;
      }
    }
  }
}
</style>

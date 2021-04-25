<template>
  <div class="join-contents">
    <join-link text="参加登録はこちら" />
  </div>
</template>

<script>
import JoinLink from '~/components/elements/JoinLink';

export default {
  name: 'JoinContents',
  components: {
    JoinLink
  }
};
</script>

<style lang="scss" scoped>
.join-contents {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: color(background, dark-gray);
  width: 100%;
  height: 72px;

  @include dark {
    background-color: color(background, extra-dark-gray);
  }

  @include mq(medium) {
    height: 96px;
  }
}
</style>

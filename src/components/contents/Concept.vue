<template>
  <div class="contents-concept">
    <contents-heading
      text="Concept"
      class="heading"
    />
    <p class="text -xlarge"><b>VOCALOID × GROOVE</b></p>
    <p class="text">39rooveは、ボカロ曲を主軸に、出演者全員でGROOVE（グルーヴ）を作っていくイベントです。</p>
    <p class="text">知っている大好きなボカロ曲、まだ出会ったことのなかったボカロ曲、そんな曲を聴きながらフロアで一緒にGROOVEを感じてみませんか！？</p>
    <p class="text -large"><b>GROOVE、それは言葉にできない感覚！</b></p>
  </div>
</template>

<script>
import ContentsHeading from '~/components/elements/ContentsHeading';

export default {
  name: 'Concept',
  components: {
    ContentsHeading
  }
}
</script>

<style lang="scss" scoped>
.contents-concept {
  max-width: 600px;
  margin: 0 auto;

  > .heading {
    padding-bottom: 40px;
  }

  > .text {
    color: color(text, black);
    font-size: 1.4rem;
    text-align: left;
    line-height: 2;

    @include mq(medium) {
      font-size: 1.6rem;
    }

    & + .text {
      padding-top: 24px;
    }

    &.-xlarge {
      font-size: 2.4rem;
      text-align: center;
      line-height: 1;

      @include mq(medium) {
        font-size: 2.8rem;
      }
    }

    &.-large {
      font-size: 1.4rem;
      text-align: center;
      line-height: 1;

      @include mq(small) {
        font-size: 1.6rem;
      }

      @include mq(medium) {
        font-size: 2.0rem;
      }
    }

    > b {
      font-weight: bold;
    }
  }
}
</style>

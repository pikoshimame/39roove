<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="contents-concept">
    <contents-heading
      text="Concept"
      class="heading"
    />
    <div
      class="text"
      v-html="concept.text"
    />
  </div>
</template>

<script>
import ContentsHeading from '~/components/elements/ContentsHeading';

export default {
  name: 'Concept',
  components: {
    ContentsHeading
  },
  computed: {
    concept() {
      return {
        text: this.$store.getters['concept/textHtml']
      };
    },
  }
};
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

    @include dark {
      color: color(text, white);
    }

    @include mq(medium) {
      font-size: 1.6rem;
    }

    /deep/ p {
      + p {
        padding-top: 24px;
      }

      > strong {
        display: block;
        font-size: 2.4rem;
        font-weight: bold;
        text-align: center;
        line-height: 1;

        @include mq(medium) {
          font-size: 2.8rem;
        }
      }

      > em {
        display: block;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
        line-height: 1;

        @include mq(small) {
          font-size: 1.6rem;
        }

        @include mq(medium) {
          font-size: 2.0rem;
        }
      }
    }
  }
}
</style>

<!-- eslint-disable vue/no-v-html -->
<template>
  <modal
    class="notice-modal"
    name="notice-modal"
    width="100%"
    height="auto"
    :reset="true"
    :scrollable="true"
    :click-to-close="false"
  >
    <div class="contents">
      <button-close
        class="close"
        @click="hideModal"
      />
      <article>
        <h1 class="title">
          {{ notice.title }}
        </h1>
        <div
          class="text"
          v-html="notice.text"
        />
      </article>
    </div>
  </modal>
</template>

<script>
import ButtonClose from '~/components/buttons/Close';

export default {
  name: 'NoticeModal',
  components: {
    ButtonClose
  },
  computed: {
    notice() {
      return {
        title: this.$store.state.notice.title,
        text: this.$store.getters['notice/textHtml']
      };
    },
  },
  mounted() {
    this.$modal.show('notice-modal');
  },
  methods: {
    hideModal() {
      this.$modal.hide('notice-modal');
    }
  }
};
</script>

<style lang="scss" scoped>
.notice-modal {
  &.v--modal-overlay {
    background-color: rgba(color(background, black), .8);
  }

  /deep/ .v--modal {
    background: none;
    border-radius: 0;
    box-shadow: none;
    padding: 12px 12px 120px;
    pointer-events: none;

    @include mq(small) {
      padding: 24px 24px 120px;
    }
  }

  .contents {
    position: relative;
    background-color: color(background, dark-gray);
    margin: 0 auto;
    max-width: 640px;
    min-width: 296px;
    padding: 36px 24px;
    pointer-events: auto;

    @include mq(medium) {
      padding: 36px;
    }

    > .close {
      position: absolute;
      right: 12px;
      top: 12px;
    }

    .title {
      color: color(text, secondary);
      font-size: 2.0rem;
      font-weight: bold;
      line-height: 1.5;

      @include mq(medium) {
        font-size: 2.4rem;
      }
    }

    .text {
      color: color(text, white);
      font-size: 1.6rem;
      line-height: 1.5;
      padding-top: 24px;

      /deep/ p {
        & + p {
          padding-top: 12px;
        }
      }

      /deep/ a {
        color: color(text, white);

        &:hover {
          text-decoration: none;
        }
      }

      /deep/ ul {
        li {
          text-indent: -1em;
          padding-left: 1em;

          &::before {
            content: '・';
          }

          & + li {
            padding-top: 12px;
          }
        }
      }
    }
  }
}
</style>

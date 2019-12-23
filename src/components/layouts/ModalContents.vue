<template>
  <modal
    class="modal-contents"
    name="modal"
    width="100%"
    height="auto"
    :scrollable="true"
  >
    <div class="contents">
      <button-close
        class="close"
        @click="hideModal"
      />
      <p class="name">{{ profile.name }}</p>
      <p v-if="profile.credit" class="credit">{{ profile.credit }}</p>
      <div class="img">
        <img
          :src="profile.imagePath.x1"
          :srcset="`${profile.imagePath.x1} 1x, ${profile.imagePath.x2} 2x, ${profile.imagePath.x3} 3x`"
          :alt="profile.name"
        >
      </div>
      <p class="text" v-html="profile.text"></p>
      <a
        v-if="profile.twitter"
        class="twitter"
        :href="profile.twitter"
        target="_blank"
      >
        <img src="~/assets/icons/twitter.svg" alt="Twitter">
      </a>
    </div>
  </modal>
</template>

<script>
import ButtonClose from '~/components/buttons/Close';

export default {
  name: 'ModalContents',
  components: {
    ButtonClose
  },
  computed: {
    profile() {
      return {
        ...this.$store.state.modal.profile,
        imagePath: this.$store.getters['modal/imagePath']
      }
    },
  },
  methods: {
    hideModal() {
      this.$modal.hide('modal');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-contents {
  &.v--modal-overlay {
    background-color: rgba(color(background, black), .8);
  }

  /deep/ .v--modal {
    background: none;
    border-radius: 0;
    box-shadow: none;
    padding: 12px;
    pointer-events: none;

    @include mq(small) {
      padding: 24px;
    }
  }

  .contents {
    position: relative;
    background-color: color(background, extra-dark-gray);
    margin: 0 auto;
    max-width: 640px;
    min-width: 296px;
    padding: 24px;
    pointer-events: auto;

    > .close {
      position: absolute;
      right: 12px;
      top: 12px;
    }

    > .name {
      color: color(text, secondary);
      font-size: 2.4rem;
      font-weight: bold;
      line-height: 1.5;
    }

    > .credit {
      color: color(text, white);
      font-size: 1.4rem;
      line-height: 1.5;
    }

    > .img {
      background: url('~assets/icons/loading.gif') center center no-repeat;
      min-width: 30px;
      min-height: 30px;
      margin-top: 24px;

      > img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
      }
    }

    > .text {
      color: color(text, white);
      font-size: 1.4rem;
      line-height: 1.5;
      padding-top: 24px;
    }

    > .twitter {
      display: block;
      width: 40px;
      margin-top: 40px;
    }
  }
}
</style>

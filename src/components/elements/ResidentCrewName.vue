<template>
  <button
    class="residentcrew-name"
    @click="$emit('click', $event.target.value)"
  >
    <div class="img">
      <img
        :src="thumb.x1"
        :srcset="`${thumb.x1} 1x, ${thumb.x2} 2x, ${thumb.x3} 3x`"
        :alt="resident.name"
      >
    </div>
    <p class="name">
      <link-text
        :text="resident.name"
      />
    </p>
  </button>
</template>

<script>
import LinkText from '~/components/elements/LinkText';

export default {
  name: 'ResidentCrewName',
  components: {
    LinkText,
  },
  props: {
    resident: {
      type: Object,
      required: true
    }
  },
  computed: {
    thumb() {
      const size = 120;
      return {
        x1: `${this.resident.image.path}?w=${size}&h=${size}&fit=thumb`,
        x2: `${this.resident.image.path}?w=${size * 2}&h=${size * 2}&fit=thumb`,
        x3: `${this.resident.image.path}?w=${size * 3}&h=${size * 3}&fit=thumb`
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.residentcrew-name {
  position: relative;
  background: none;
  border: none;
  color: color(text, black);
  font-size: 1.4rem;
  text-align: right;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;

  &:hover {
    > .img {
      > img {
        opacity: 1;
        filter: grayscale(0);
      }
    }
  }

  > .img {
    background-color: color(background, white);

    > img {
      display: block;
      opacity: .8;
      filter: grayscale(100%);
      transition: opacity .2s, filter .2s;
    }
  }

  > .name {
    position: absolute;
    right: 0;
    bottom: -12px;
    filter: drop-shadow(0px 0px 5px color(background, white));
  }
}
</style>

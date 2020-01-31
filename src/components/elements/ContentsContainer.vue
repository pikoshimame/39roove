<template>
  <div
    class="contents-container"
    :class="{'-dark': isDark, '-clear': isClear}"
  >
    <div class="contents">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentsContainer',
  props: {
    isDark: {
      type: Boolean,
      required: false,
      default: false
    },
    isClear: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.contents-container {
  position: relative;
  text-align: center;
  padding: 40px 0 80px;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    display: block;
    background-color: rgba(color(background, white), .8);
    width: 200%;
    height: 100%;
    z-index: -1;
    transform: translateX(-50%) rotate(-6deg);

    @include dark {
      background-color: rgba(color(background, dark-gray), .8);
    }
  }

  &.-clear {
    &::before {
      background-color: rgba(color(background, white), .6);

      @include dark {
        background-color: rgba(color(background, dark-gray), .6);
      }
    }
  }

  &.-dark {
    &::before {
      background-color: color(background, dark-gray);

      @include dark {
        background-color: color(background, extra-dark-gray);
      }
    }
  }

  > .contents {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
  }
}
</style>

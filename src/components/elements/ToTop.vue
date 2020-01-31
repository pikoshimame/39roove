<template>
  <transition name="fade">
    <nuxt-link
      v-show="isShow"
      v-scroll-to="'body'"
      class="button-totop"
      to
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
      >
        <g transform="translate(-323 -4461)">
          <title>トップへ戻る</title>
          <g
            class="circle"
            transform="translate(323 4461)"
          >
            <circle
              class="circle1"
              cx="20"
              cy="20"
              r="20"
            />
            <circle
              class="circle2"
              cx="20"
              cy="20"
              r="19.5"
            />
          </g>
          <path
            class="arrow"
            d="M0,16V0H16V2H2V16Z"
            transform="translate(343.314 4473) rotate(45)"
          />
        </g>
      </svg>
    </nuxt-link>
  </transition>
</template>

<script>
export default {
  name: 'ToTop',
  props: {
    isShow: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.button-totop {
  display: block;
  width: 40px;
  height: 40px;

  .circle {
    fill: color(background, dark-gray);
    stroke: rgba(color(background, white), .05);

    @include dark {
      fill: color(background, extra-dark-gray);
      stroke: rgba(color(background, dark-gray), .8);
    }

    > .circle1 {
      stroke: none;
    }

    > .circle2 {
      fill: none;
    }
  }

  .arrow {
    fill: color(border, secondary);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <component
    :is="!isSub ? 'h2' : 'h3'"
    class="contents-heading"
    :class="{'-sub': isSub}"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  name: 'ContentsHeading',
  props: {
    text: {
      type: String,
      required: true
    },
    isSub: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.contents-heading {
  color: color(text, secondary);
  font-family: $font-primary;
  font-size: 4.0rem;
  line-height: 1.5;

  @include mq(medium) {
    font-size: 4.8rem;
  }

  &.-sub {
    font-size: 3.2rem;

    @include mq(medium) {
      font-size: 4.0rem;
    }
  }
}
</style>

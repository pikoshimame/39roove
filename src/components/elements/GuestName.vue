<template>
  <button
    class="guest-name"
    @click="$emit('click', $event.target.value)"
  >
    <link-text
      :text="guestName"
    />
  </button>
</template>

<script>
import LinkText from '~/components/elements/LinkText';

export default {
  name: 'GuestName',
  components: {
    LinkText
  },
  props: {
    guestName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.guest-name {
  background: none;
  border: none;
  color: color(text, white);
  font-size: 2.4rem;
  line-height: 1.5;
  padding: 0;
  cursor: pointer;
  outline: none;
  transition: opacity .2s;

  &:hover {
    opacity: .7;
  }
}
</style>

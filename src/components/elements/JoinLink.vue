<template>
  <a
    class="join-link"
    :href="joinLink"
    target="_blank"
    rel="noopener"
  >
    <link-text
      :text="text"
    />
  </a>
</template>

<script>
import LinkText from '~/components/elements/LinkText';

export default {
  name: 'JoinLink',
  components: {
    LinkText
  },
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      joinLink: 'https://twipla.jp/events/462500'
    };
  }
};
</script>

<style lang="scss" scoped>
.join-link {
  color: color(text, white);
  font-size: 2.4rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  transition: opacity .2s;
  text-decoration: none;

  &:hover {
    opacity: .7;
  }
}
</style>

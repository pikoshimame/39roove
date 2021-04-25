<template>
  <a
    class="registration-link"
    :href="link"
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
  name: 'RegistrationLink',
  components: {
    LinkText
  },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.registration-link {
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

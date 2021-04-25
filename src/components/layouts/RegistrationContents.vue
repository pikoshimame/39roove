<template>
  <div
    v-if="existsRegistration"
    class="registration-contents"
  >
    <registration-link
      :text="text"
      :link="link"
    />
  </div>
</template>

<script>
import RegistrationLink from '~/components/elements/RegistrationLink';

export default {
  name: 'RegistrationContents',
  components: {
    RegistrationLink
  },
  computed: {
    existsRegistration() {
      return this.$store.getters['registration/existsRegistration'];
    },
    text() {
      return this.$store.state.registration.text;
    },
    link() {
      return this.$store.state.registration.link;
    }
  }
};
</script>

<style lang="scss" scoped>
.registration-contents {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: color(background, dark-gray);
  width: 100%;
  height: 72px;

  @include dark {
    background-color: color(background, extra-dark-gray);
  }

  @include mq(medium) {
    height: 96px;
  }
}
</style>

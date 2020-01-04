<template>
  <ul class="guest-list">
    <li
      v-for="(guest, index) in guests"
      :key="index"
      class="item"
    >
      <guest-name
        :guest-name="guest.name"
        @click="showModal(guest)"
      />
    </li>
  </ul>
</template>

<script>
import GuestName from '~/components/elements/GuestName';

export default {
  name: 'GuestList',
  components: {
    GuestName
  },
  props: {
    guests: {
      type: Array,
      required: true
    }
  },
  methods: {
    showModal(profile) {
      this.$ga.event('guests', 'click', profile.name);
      this.$store.commit('modal/setProfile', profile);
      this.$modal.show('modal');
    }
  }
};
</script>

<style lang="scss" scoped>
.guest-list {
  > .item {
    & + .item {
      padding-top: 4px;
    }
  }

  @include mq(medium) {
    display: flex;
    justify-content: center;

    > .item {
      padding: 0 24px;

      & + .item {
        padding-top: 0;
      }
    }
  }
}
</style>

<template>
  <ul class="residentcrew-list">
    <li
      v-for="(resident, index) in residents"
      :key="index"
      class="item"
    >
      <resident-crew-name
        :resident="resident"
        @click="showModal(resident)"
      />
    </li>
  </ul>
</template>

<script>
import ResidentCrewName from '~/components/elements/ResidentCrewName';

export default {
  name: 'ResidentCrewList',
  components: {
    ResidentCrewName
  },
  props: {
    residents: {
      type: Array,
      required: true
    }
  },
  methods: {
    showModal(profile) {
      this.$ga.event('residentcrew', 'click', profile.name);
      this.$store.commit('modal/setProfile', profile);
      this.$modal.show('modal');
    }
  }
};
</script>

<style lang="scss" scoped>
.residentcrew-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 272px;
  margin: 0 auto;

  @include mq(small) {
    width: 304px;
  }

  @include mq(medium) {
    width: 456px;
  }

  @include mq(large) {
    width: 608px;
  }

  > .item {
    padding: 0 8px;

    @include mq(small) {
      padding: 0 16px;
    }

    &:nth-of-type(n+3) {
      padding-top: 52px;
    }

    @include mq(medium) {
      &:nth-of-type(3) {
        padding-top: 0;
      }
    }

    @include mq(large) {
      &:nth-of-type(4) {
        padding-top: 0;
      }
    }
  }
}
</style>

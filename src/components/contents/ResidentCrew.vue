<template>
  <div class="contents-residentcrew">
    <contents-heading
      text="Resident Crew"
      class="heading"
    />
    <resident-crew-list
      :residents="residents"
    />
  </div>
</template>

<script>
import ContentsHeading from '~/components/elements/ContentsHeading';
import ResidentCrewList from '~/components/elements/ResidentCrewList';

export default {
  name: 'ResidentCrew',
  components: {
    ContentsHeading,
    ResidentCrewList
  },
  computed: {
    residents() {
      return this.$store.state.residents.list;
    }
  }
}
</script>

<style lang="scss" scoped>
.contents-residentcrew {
  > .heading {
    padding-bottom: 40px;
  }
}
</style>

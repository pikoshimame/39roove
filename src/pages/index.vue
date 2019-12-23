<template>
  <div class="main-container">
    <h1 class="logo">
      <img src="~/assets/images/logo.svg" alt="39roove">
    </h1>
    <div v-observe-visibility="visibilityChanged">
      <contents-container
        id="next"
        class="next"
        :is-dark="true"
      >
        <contents-next />
      </contents-container>
      <contents-container
        id="concept"
        class="concept"
        :is-clear="true"
      >
        <contents-concept />
      </contents-container>
      <contents-container
        id="entrancefee"
        class="entrancefee"
        :is-dark="true"
      >
        <contents-entrance-fee />
      </contents-container>
      <contents-container
        id="location"
        class="location"
      >
        <contents-location />
      </contents-container>
      <contents-container
        id="timetable"
        class="timetable"
        :is-dark="true"
      >
        <contents-time-table />
      </contents-container>
      <contents-container
        id="residentcrew"
        class="residentcrew"
      >
        <contents-resident-crew />
      </contents-container>
      <contents-container
        class="notes"
        :is-dark="true"
      >
        <contents-notes />
      </contents-container>
    </div>
    <to-top
      :is-show="isVisible"
      class="totop"
    />
  </div>
</template>

<script>
import ContentsContainer from '~/components/elements/ContentsContainer';
import ContentsNext from '~/components/contents/Next';
import ContentsConcept from '~/components/contents/Concept';
import ContentsEntranceFee from '~/components/contents/EntranceFee';
import ContentsLocation from '~/components/contents/Location';
import ContentsTimeTable from '~/components/contents/TimeTable';
import ContentsResidentCrew from '~/components/contents/ResidentCrew';
import ContentsNotes from '~/components/contents/Notes';
import ToTop from '~/components/elements/ToTop';

export default {
  components: {
    ContentsContainer,
    ContentsNext,
    ContentsConcept,
    ContentsEntranceFee,
    ContentsLocation,
    ContentsTimeTable,
    ContentsResidentCrew,
    ContentsNotes,
    ToTop
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  padding-top: 650px;
  z-index: 0;

  > .logo {
    position: fixed;
    left: 0;
    right: 0;
    top: 456px;
    width: 320px;
    margin: 0 auto;
    z-index: 0;

    @include mq(medium) {
      width: 400px;
    }

    @include mq(large) {
      left: calc(50% - 270px);
      right: inherit;
      top: 460px;
    }

    > img {
      filter: drop-shadow(0px 0px 2px rgba(color(background, white), .2));
    }
  }

  .next,
  .entrancefee,
  .timetable,
  .notes {
    position: relative;
    z-index: 1;
  }

  .concept,
  .location,
  .residentcrew {
    position: relative;
    z-index: 0;
  }

  .notes {
    padding: 60px 0;

    &::before {
      height: 200%;
    }
  }

  > .totop {
    position: fixed;
    right: 12px;
    bottom: 12px;
    z-index: 2;

    @include mq(medium) {
      right: 24px;
      bottom: 24px;
    }
  }
}
</style>

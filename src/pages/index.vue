<template>
  <div>
    <div class="main-container">
      <h1 class="logo">
        <heading-logo />
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
    </div>
    <notice-modal
      v-if="noticeExists"
    />
  </div>
</template>

<script>
import HeadingLogo from '~/components/elements/HeadingLogo';
import ContentsContainer from '~/components/elements/ContentsContainer';
import ContentsNext from '~/components/contents/Next';
import ContentsConcept from '~/components/contents/Concept';
import ContentsEntranceFee from '~/components/contents/EntranceFee';
import ContentsLocation from '~/components/contents/Location';
import ContentsTimeTable from '~/components/contents/TimeTable';
import ContentsResidentCrew from '~/components/contents/ResidentCrew';
import ContentsNotes from '~/components/contents/Notes';
import NoticeModal from '~/components/elements/NoticeModal';

export default {
  components: {
    HeadingLogo,
    ContentsContainer,
    ContentsNext,
    ContentsConcept,
    ContentsEntranceFee,
    ContentsLocation,
    ContentsTimeTable,
    ContentsResidentCrew,
    ContentsNotes,
    NoticeModal
  },
  computed: {
    noticeExists() {
      return this.$store.getters['notice/isExists'];
    }
  },
  methods: {
    visibilityChanged(visibility) {
      this.$store.commit('contents/setVisibility', visibility);
    }
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  padding-top: 650px;
  z-index: 0;
  overflow: hidden;

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

    /deep/ svg {
      filter: drop-shadow(0px 0px 2px rgba(color(background, white), .2));

      @include dark {
        filter: drop-shadow(0px 0px 2px rgba(color(background, dark-gray), .8));
      }
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
}
</style>

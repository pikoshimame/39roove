<template>
  <div class="contents-timetable">
    <contents-heading
      text="Time Table"
      class="heading"
    />
    <time-table-list
      v-if="existsTimeTable"
      :time-table="timeTable"
    />
    <p
      v-else
      class="text"
    >
      coming soon...
    </p>
  </div>
</template>

<script>
import ContentsHeading from '~/components/elements/ContentsHeading';
import TimeTableList from '~/components/elements/TimeTableList';

export default {
  name: 'TimeTable',
  components: {
    ContentsHeading,
    TimeTableList
  },
  computed: {
    timeTable() {
      return this.$store.getters['timeTable/timeTableHtml'];
    },
    existsTimeTable() {
      return this.timeTable.main !== '' || this.timeTable.lounge !== '';
    }
  }
};
</script>

<style lang="scss" scoped>
.contents-timetable {
  > .heading {
    padding-bottom: 40px;
  }

  > .text {
    color: color(text, white);
    font-size: 1.4rem;
    opacity: .5;
  }
}
</style>

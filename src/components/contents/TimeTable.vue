<template>
  <div class="contents-timetable">
    <contents-heading
      text="Time Table"
      class="heading"
    />
    <time-table-list
      :time-table="timeTable"
    />
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
  }
};
</script>

<style lang="scss" scoped>
.contents-timetable {
  > .heading {
    padding-bottom: 40px;
  }
}
</style>

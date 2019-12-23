<template>
  <div class="timetable-list">
    <div class="item">
      <time-table-contents
        title="Main Floor"
        :time-table="main"
      />
    </div>
    <div class="item">
      <time-table-contents
        title="Lounge Floor"
        :time-table="lounge"
      />
    </div>
  </div>
</template>

<script>
import TimeTableContents from '~/components/elements/TimeTableContents';

export default {
  name: 'TimeTableList',
  components: {
    TimeTableContents
  },
  props: {
    timeTable: {
      type: Object,
      required: true
    }
  },
  computed: {
    main() {
      return this.$md.render(this.timeTable.main);
    },
    lounge() {
      return this.$md.render(this.timeTable.lounge);
    }
  }
}
</script>

<style lang="scss" scoped>
.timetable-list {
  display: inline-flex;
  flex-direction: column;

  > .item {
    & + .item {
      padding-top: 40px;

      @include mq(medium) {
        padding-top: 60px;
      }
    }
  }
}

</style>

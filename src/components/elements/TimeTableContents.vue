<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="timetable-contents">
    <h3 class="heading">
      {{ title }}
    </h3>
    <div
      v-if="timeTable"
      class="timetable"
      v-html="timeTable"
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
export default {
  name: 'TimeTableContents',
  props: {
    title: {
      type: String,
      required: true
    },
    timeTable: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.timetable-contents {
  > .heading {
    position: relative;
    display: inline-block;
    color: color(text, white);
    font-family: $font-primary;
    font-size: 2.4rem;
    line-height: 1.3;
    margin-bottom: 20px;

    @include mq(medium) {
      font-size: 3.2rem;
    }

    &::before {
      content: '';
      position: absolute;
      left: 12px;
      bottom: 8px;
      display: block;
      border-bottom: color(border, secondary) solid 2px;
      width: 100%;
      z-index: -1;

      @include mq(medium) {
        left: 12px;
        bottom: 12px;
      }
    }
  }

  > .timetable {
    color: color(text, white);
    text-align: left;

    /deep/ {
      table {
        width: 100%;
        margin: 0 auto;
      }

      th {
        border-bottom: rgba(color(border, white), .5) solid 1px;
        font-family: $font-primary;
        font-size: 1.4rem;
        padding: 4px 8px;

        @include mq(small) {
          font-size: 1.6rem;
          padding: 8px 12px;
        }

        @include mq(medium) {
          font-size: 2.0rem;
          padding: 12px 16px;
        }

        &:first-of-type {
          text-align: right;
          padding-right: 16px;

          @include mq(small) {
            padding-right: 20px;
          }

          @include mq(medium) {
            padding-right: 28px;
          }
        }
      }

      td {
        font-size: 1.2rem;
        padding: 4px 8px;

        @include mq(small) {
          font-size: 1.4rem;
          padding: 8px 12px;
        }

        @include mq(medium) {
          font-size: 1.8rem;
          padding: 12px 16px;
        }

        &:first-of-type {
          text-align: right;
        }
      }
    }
  }

  > .text {
    color: color(text, white);
    font-size: 1.4rem;
    opacity: .5;
  }
}
</style>

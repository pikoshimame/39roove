<template>
  <div class="contents-next">
    <contents-heading
      text="Next"
      class="heading"
    />
    <time :datetime="datetime" class="datetime">
      <span class="date">{{ date }}</span>
      <span class="time">{{ time }}</span>
    </time>
    <contents-heading
      text="Guests"
      :is-sub="true"
      class="subheading"
    />
    <guest-list
      :guests="guests"
    />
  </div>
</template>

<script>
import ContentsHeading from '~/components/elements/ContentsHeading';
import GuestList from '~/components/elements/GuestList';

export default {
  name: 'Next',
  components: {
    ContentsHeading,
    GuestList
  },
  computed: {
    date() {
      return this.$store.state.next.date;
    },
    time() {
      return this.$store.state.next.time;
    },
    datetime() {
      return this.$store.state.next.datetime;
    },
    guests() {
      return this.$store.state.guests.list;
    }
  }
}
</script>

<style lang="scss" scoped>
.contents-next {
  > .heading {
    padding-bottom: 20px;
  }

  > .datetime {
    display: block;
    color: color(text, white);
    font-family: $font-primary;
    line-height: 1.5;
    padding-bottom: 80px;

    > .date {
      display: block;
      font-size: 3.6rem;

      @include mq(small) {
        font-size: 4.0rem;
      }
    }

    > .time {
      display: block;
      font-size: 2.4rem;
    }
  }

  > .subheading {
    padding-bottom: 20px;
  }
}
</style>

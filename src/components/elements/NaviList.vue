<template>
  <ul class="navi-list">
    <li class="item">
      <nuxt-link
        v-scroll-to="{
          el: '#next',
          onStart: scrollStart
        }"
        to
      >
        Next
      </nuxt-link>
    </li>
    <li class="item">
      <nuxt-link
        v-scroll-to="{
          el: '#concept',
          onStart: scrollStart
        }"
        to
      >
        Concept
      </nuxt-link>
    </li>
    <li class="item">
      <nuxt-link
        v-scroll-to="{
          el: '#entrancefee',
          onStart: scrollStart
        }"
        to
      >
        Entrance Fee
      </nuxt-link>
    </li>
    <li class="item">
      <nuxt-link
        v-scroll-to="{
          el: '#location',
          onStart: scrollStart
        }"
        to
      >
        Location
      </nuxt-link>
    </li>
    <li class="item">
      <nuxt-link
        v-scroll-to="{
          el: '#timetable',
          onStart: scrollStart
        }"
        to
      >
        Time Table
      </nuxt-link>
    </li>
    <li class="item">
      <nuxt-link
        v-scroll-to="{
          el: '#residentcrew',
          onStart: scrollStart
        }"
        to
      >
        Resident Crew
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NaviList',
  methods: {
    scrollStart(el) {
      this.$ga.event('navigation', 'click', el.id);
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
.navi-list {
  background-color: color(background, dark-gray);
  font-family: $font-primary;
  font-size: 2.0rem;
  padding: 72px 24px 24px;

  @include dark {
    background-color: color(background, extra-dark-gray);
  }

  > .item {
    & + .item {
      padding-top: 16px;
    }

    > a {
      display: block;
      color: color(text, secondary);
      text-decoration: none;
      line-height: 1.5;
      transition: opacity .2s;

      &:hover {
        opacity: .7;
      }
    }
  }
}
</style>

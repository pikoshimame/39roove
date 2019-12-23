<template>
  <ul class="navi-list">
    <li class="item">
      <nuxt-link to v-scroll-to="'#next'">Next</nuxt-link>
    </li>
    <li class="item">
      <nuxt-link to v-scroll-to="'#concept'">Concept</nuxt-link>
    </li>
    <li class="item">
      <nuxt-link to v-scroll-to="'#entrancefee'">Entrance Fee</nuxt-link>
    </li>
    <li class="item">
      <nuxt-link to v-scroll-to="'#location'">Location</nuxt-link>
    </li>
    <li class="item">
      <nuxt-link to v-scroll-to="'#timetable'">Time Table</nuxt-link>
    </li>
    <li class="item">
      <nuxt-link to v-scroll-to="'#residentcrew'">Resident Crew</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NaviList'
}
</script>

<style lang="scss" scoped>
.navi-list {
  background-color: color(background, extra-dark-gray);
  font-family: $font-primary;
  font-size: 2.0rem;
  padding: 72px 24px 24px;

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

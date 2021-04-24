<template>
  <ul class="notes-list">
    <li
      v-for="(notes, index) in notesList"
      :key="index"
      class="item"
    >
      <span>{{ notes.text }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Notes',
  computed: {
    notesList() {
      return this.$store.state.notes.list;
    }
  }
};
</script>

<style lang="scss" scoped>
.notes-list {
  color: color(text, white);
  font-size: 1.2rem;
  text-align: left;
  line-height: 1.5;

  > .item {
    text-indent: -1em;
    padding-left: 1em;

    &::before {
      content: '・';
    }

    & + .item {
      padding-top: 8px;
    }
  }
}
</style>

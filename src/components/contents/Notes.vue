<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="notes-list"
    v-html="notes.text"
  />
</template>

<script>
export default {
  name: 'Notes',
  computed: {
    notes() {
      return {
        text: this.$store.getters['notes/textHtml']
      };
    },
  }
};
</script>

<style lang="scss" scoped>
.notes-list {
  /deep/ ul {
    color: color(text, white);
    font-size: 1.2rem;
    text-align: left;
    line-height: 1.5;

    > li {
      text-indent: -1em;
      padding-left: 1em;

      &::before {
        content: '・';
      }

      & + li {
        padding-top: 8px;
      }
    }
  }
}
</style>

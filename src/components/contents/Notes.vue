<template>
  <ul class="notes-list">
    <li
      class="item"
      v-for="(notes, index) in notesList"
      :key="index"
    >{{ notes }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Notes',
  data() {
    return {
      notesList: [
        '未成年者の飲酒、喫煙は固くお断りします。',
        '飲食物の持ち込みは禁止させて頂いております。',
        '他のお客様のご迷惑となる行為、過度なナンパ行為等は禁止させて頂いております。場合によっては、退場して頂く場合がございます。',
        '貴重品は自己管理でお願いいたします。万が一紛失された場合、こちらでは責任を負いかねますのでご注意下さい。'
      ]
    }
  }
}
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

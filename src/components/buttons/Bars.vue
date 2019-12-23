<template>
  <button
    @click="$emit('click', $event.target.value)"
    class="button-bars"
  >
    <img src="~/assets/icons/bars.svg" alt="">
  </button>
</template>

<script>
export default {
  name: 'Bars'
}
</script>

<style lang="scss" scoped>
.button-bars {
  background: none;
  border: none;
  width: 32px;
  height: 18px;
  padding: 0;
  cursor: pointer;
  outline: none;
}
</style>

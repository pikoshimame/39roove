<template>
  <button
    class="button-close"
    @click="$emit('click', $event.target.value)"
  >
    <img
      src="~/assets/icons/close.svg"
      alt=""
    >
  </button>
</template>

<script>
export default {
  name: 'Close'
};
</script>

<style lang="scss" scoped>
.button-close {
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
}
</style>

<template>
  <nav
    class="global-navi"
  >
    <button-close
      v-if="isOpen"
      @click="buttonClick"
      class="close"
    />
    <button-bars
      v-else
      @click="buttonClick"
      class="bars"
    />
    <navi-list
      class="list"
      :class="{'-open': isOpen}"
    />
  </nav>
</template>

<script>
import ButtonBars from '~/components/buttons/Bars';
import ButtonClose from '~/components/buttons/Close';
import NaviList from '~/components/elements/NaviList';

export default {
  name: 'GlobalNavi',
  components: {
    ButtonBars,
    ButtonClose,
    NaviList
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    buttonClick() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
.global-navi {
  position: relative;
  z-index: 1;

  > .bars {
    position: fixed;
    right: 24px;
    top: 24px;
    z-index: 1;
  }

  > .close {
    position: fixed;
    right: 24px;
    top: 24px;
    z-index: 1;
  }

  > .list {
    position: fixed;
    right: -200px;
    top: 0;
    width: 200px;
    z-index: 0;
    transition: right .2s;

    &.-open {
      right: 0;
    }
  }
}
</style>

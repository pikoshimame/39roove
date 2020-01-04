<template>
  <nav
    class="global-navi"
  >
    <button-close
      v-if="isOpen"
      class="close"
      @click="buttonClick"
    />
    <button-bars
      v-else
      class="bars"
      @click="buttonClick"
    />
    <navi-list
      class="list"
      :class="{'-open': isOpen}"
      @click="buttonClick"
    />
    <to-top
      :is-show="contentsVisibility"
      class="totop"
    />
  </nav>
</template>

<script>
import ButtonBars from '~/components/buttons/Bars';
import ButtonClose from '~/components/buttons/Close';
import NaviList from '~/components/elements/NaviList';
import ToTop from '~/components/elements/ToTop';

export default {
  name: 'GlobalNavi',
  components: {
    ButtonBars,
    ButtonClose,
    NaviList,
    ToTop
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    contentsVisibility() {
      return this.$store.state.contents.visibility;
    }
  },
  methods: {
    buttonClick() {
      this.isOpen = !this.isOpen;
    }
  }
};
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

  > .totop {
    position: fixed;
    right: 12px;
    bottom: 12px;
    z-index: 2;

    @include mq(medium) {
      right: 24px;
      bottom: 24px;
    }
  }
}
</style>

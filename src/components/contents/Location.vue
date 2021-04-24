<template>
  <div class="contents-location">
    <contents-heading
      text="Location"
      class="heading"
    />
    <a
      class="location"
      :href="link"
      target="_blank"
      rel="noopener"
    >
      <link-text
        :text="name"
      />
    </a>
    <iframe
      :title="`${name} マップ`"
      class="map"
      :src="`https://maps.google.co.jp/maps?ll=${lat},${lon}&q=${name}&output=embed&t=m&z=16`"
      width="100%"
      height="320"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
    />
  </div>
</template>

<script>
import ContentsHeading from '~/components/elements/ContentsHeading';
import LinkText from '~/components/elements/LinkText';

export default {
  name: 'Location',
  components: {
    ContentsHeading,
    LinkText
  },
  computed: {
    name() {
      return this.$store.state.location.name;
    },
    lat() {
      return this.$store.state.location.lat;
    },
    lon() {
      return this.$store.state.location.lon;
    },
    link() {
      return this.$store.state.location.link;
    }
  }
};
</script>

<style lang="scss" scoped>
.contents-location {
  > .heading {
    padding-bottom: 40px;
  }

  > .location {
    color: color(text, black);
    font-size: 2.0rem;
    line-height: 1.4;
    transition: opacity .2s;

    @include dark {
      color: color(text, white);
    }

    &:hover {
      opacity: .7;
    }
  }

  > .map {
    padding-top: 20px;
  }
}
</style>

<template>
  <div class="contents-location">
    <contents-heading
      text="Location"
      class="heading"
    />
    <a
      class="location"
      :href="locationLink"
      target="_blank"
      rel="noopener"
    >
      <link-text
        text="秋葉原 MOGRA"
      />
    </a>
    <iframe
      title="秋葉原 MOGRA マップ"
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.980625594005!2d139.77279191525938!3d35.70209438018946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea71928307d%3A0xe49b9244dc37e180!2z56eL6JGJ5Y6fIE1PR1JB!5e0!3m2!1sja!2sjp!4v1619144881987!5m2!1sja!2sjp"
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
  data() {
    return {
      locationLink: 'https://club-mogra.jp/'
    };
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

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
        text="中野heavysick ZERO"
      />
    </a>
    <iframe
      title="中野heavysick ZERO マップ"
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6479.337338390021!2d139.66353233264468!3d35.70977028018768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2977487e5cf%3A0xc578e3bc3167cbd5!2sheavysick%20ZERO!5e0!3m2!1sja!2sjp!4v1577195514594!5m2!1sja!2sjp"
      width="100%"
      height="320"
      frameborder="0"
      style="border:0;"
      allowfullscreen="">
    </iframe>
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
      locationLink: 'http://www.heavysick.co.jp/zero/'
    }
  }
}
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

    &:hover {
      opacity: .7;
    }
  }

  > .map {
    padding-top: 20px;
  }
}
</style>

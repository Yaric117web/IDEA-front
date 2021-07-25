<template>
  <VueSlickCarousel v-bind="settings" class="slider">
    <div
      class="slide d-flex align-items-center justify-content-center"
      v-for="(item, idx) in MAIN_PAGE.slider"
      :key="idx"
    >
      <div class="slide-image">
        <img :src="item.img" alt="" />
      </div>
      <div v-if="item.mask" class="slide-image-mask"></div>
      <b-list-group class="slide-info">
        <b-list-group-item :to="item.info.logo">
          <img src="../assets/img/Logo/logo.png" alt="" />
        </b-list-group-item>
        <b-list-group-item>
          <h1 class="slide-title">{{ item.info.title }}</h1>
        </b-list-group-item>
        <b-list-group-item>
          <p class="slide-subtitle">{{ item.info.subtitle }}</p>
        </b-list-group-item>
        <b-list-group-item>
          <b-button
            class="slide-btn btn-hover"
            :v-if="item.info.btn.href"
            :to="item.info.btn.href"
          >
            {{ item.info.btn.title }}
          </b-button>
        </b-list-group-item>
      </b-list-group>
    </div>
  </VueSlickCarousel>
</template>
 
<script>
import { mapGetters } from "vuex";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Slider_Main",
  data() {
    return {
      settings: {
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: "progressive",
        cssEase: "ease",
        arrows: false,
        dots: true,
      },
    };
  },
  components: { VueSlickCarousel },
  computed: {
    ...mapGetters(["MAIN_PAGE"]),
  },
};
</script> 
<style lang="scss">
@import "../assets/scss/_variable.scss";
.slick-dots {
  bottom: 3rem;
  li button,
  li.slick-active button {
    &::before {
      color: $colorGold;
    }
  }
}
.slider {
  .slide {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    &-image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      &-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: $maskSlider;
        opacity: 0.7;
      }
      img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
      }
    }
    &-info {
      text-align: center;
      max-width: 55rem;
      .list-group-item {
        background: none;
        border: none;
        color: $white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    &-title {
      font-size: 7.6rem;
    }
    &-subtitle {
      font-size: 2.8rem;
    }

    &-btn {
      height: 5.6rem;
      max-width: 25.6rem;
      width: 100%;
      background: $colorGold;
      color: $color3;
      font-size: 1.8rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background: $colorGoldLite;
      }
    }
  }
}
</style>
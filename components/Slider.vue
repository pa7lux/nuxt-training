<template>
  <div class="slider" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(cell, index) in cellArray" :key="index">
        <card :title="cell.name" />
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Card from '@/components/Card';
export default {
  components: {
    card: Card,
  },
  props: ['cellArray'],
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  width: 100% !important;
}
</style>

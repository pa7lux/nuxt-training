<template>
  <div class="stream">
    <panel class="stream__panel">
      <h2 class="container__title">{{ lesson.name }}</h2>
      <video-iframe :url="lesson.iframeLink" />
      <div class="container__text" v-html="lesson.description"></div>
    </panel>
    <slider class="stream__slider" :cellArray="allLessons" />
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import VideoIframe from '@/components/VideoIframe';
import Slider from '@/components/Slider';

export default {
  components: {
    panel: Panel,
    'video-iframe': VideoIframe,
    slider: Slider,
  },
  async fetch({ store, route }) {
    await store.dispatch('lessons/fetchLessons');
    await store.dispatch('lessons/fetchLessonWithId', { id: route.params.id });
  },
  computed: {
    lesson() {
      return this.$store.getters['lessons/getCurrentLesson'];
    },
    allLessons() {
      return this.$store.getters['lessons/getLessons'];
    },
  },
};
</script>

<style>
.stream__panel {
  width: 80%;
  margin: 40px auto;
}

.stream__slider {
  width: 80%;
  margin: auto;
}
</style>

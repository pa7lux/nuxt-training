<template>
  <div class="stream">
    <panel class="stream__panel">
      <h2 class="container__title">{{ lesson.name }}</h2>
      <video-iframe :url="lesson.iframeLink" />
      <div class="container__text" v-html="lesson.description"></div>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import VideoIframe from '@/components/VideoIframe';

export default {
  components: {
    panel: Panel,
    'video-iframe': VideoIframe,
  },
  async fetch({ store, route }) {
    await store.dispatch('lessons/fetchLessonWithId', { id: route.params.id });
  },
  computed: {
    lesson() {
      return this.$store.getters['lessons/getCurrentLesson'];
    },
  },
};
</script>

<style>
.stream__panel {
  width: 80%;
  margin: 40px auto;
}
</style>

<template>
  <div class="container">
    <panel v-for="lesson in lessons" :key="lesson.id" class="container__panel">
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
  computed: {
    lessons() {
      return this.$store.getters['lessons/getLessons'];
    },
  },
  beforeMount() {
    this.$store.dispatch('lessons/fetchLessons');
  },
};
</script>

<style>
.container__panel {
  width: 80%;
  margin: 40px auto;
}

.container__title {
  margin-bottom: 20px;
}

.container__text {
  margin: 20px 0;
}

.container__text ul {
  margin: 20px 0;
}

.container__subheader {
  margin: 20px 0;
}

@media screen and (max-width: 450px) {
  .container__panel {
    width: 90%;
  }
}
</style>

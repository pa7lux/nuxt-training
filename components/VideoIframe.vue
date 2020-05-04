<template>
  <div class="video-iframe">
    <iframe
      width="560"
      height="315"
      :src="url"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
iframe {
  border: 0;
}
</style>

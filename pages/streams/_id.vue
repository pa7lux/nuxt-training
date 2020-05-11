<template>
  <div class="stream">
    <panel class="stream__panel"> </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
export default {
  components: {
    panel: Panel,
  },
};
</script>

<style>
.stream__panel {
  width: 80%;
  margin: 40px auto;
}
</style>

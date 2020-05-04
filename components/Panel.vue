<template>
  <div class="panel">
    <slot>Here will be something</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.panel {
  box-shadow: 0 0 2px grey;
  min-height: 200px;
  padding: 20px;
}
</style>

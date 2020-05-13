<template>
  <button
    :class="['button', `button_theme_${theme}`]"
    @click="$emit('btnClick', 'test emit data')"
  >
    <slot>Some Button</slot>
  </button>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.button {
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
}

.button_theme_light {
  background-color: black;
  color: white;
  border: 2px solid black;
}

.button_theme_light:hover {
  background-color: white;
  color: black;
}

.button_theme_dark {
  background-color: black;
  color: white;
  border: 2px solid white;
}

.button_theme_dark:hover {
  background-color: white;
  color: black;
}

@media screen and (max-width: 390px) {
  .button {
    font-size: 12px;
    padding: 5px;
  }
}
</style>

<template>
  <div
    :class="['card', { card_disabled: disabled }]"
    @click="$emit('cardClick')"
  >
    <h2 class="card__title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ['title', 'disabled'],
};
</script>

<style scoped>
.card {
  min-height: 300px;
  box-shadow: 0 0 2px grey;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 0 2px black;
}

.card__title {
  text-align: center;
  line-height: 1.5;
}

.card:hover .card__title {
  text-decoration: underline;
}

.card_disabled {
  opacity: 0.3;
  background-color: grey;
  color: white;
}

.card_disabled:hover {
  cursor: default;
  box-shadow: 0 0 2px grey;
}

.card_disabled:hover .card__title {
  text-decoration: none;
}
</style>

<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
    <nuxt-link to="/about" class="menu__link">О проекте</nuxt-link>
    <nuxt-link to="/streams" class="menu__link">Стримы</nuxt-link>
    <nxt-button @btnClick="showPopUp" class="menu__button" :theme="'dark'"
      >Задать вопрос</nxt-button
    >
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';

export default {
  components: {
    'nxt-button': Button,
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopUp');
    },
  },
};
</script>

<style scoped>
.menu {
  background-color: yellow;
}

.menu__link {
  margin-right: 20px;
}
</style>

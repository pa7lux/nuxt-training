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
.menu__link {
  margin-right: 20px;
}

.menu__link.nuxt-link-exact-active {
  text-decoration: underline;
}

.menu__link:last-of-type {
  margin-right: 0;
}

.menu__button {
  margin-left: 20px;
}

@media screen and (max-width: 768px) {
  .menu__link {
    line-height: 2;
    margin-right: 0;
  }

  .menu__button {
    margin-left: 0;
  }
}

@media screen and (max-width: 390px) {
  .menu {
    flex-direction: row;
    margin-top: 20px;
  }

  .menu__link {
    line-height: 2;
    margin-right: 20px;
  }

  .menu__button {
    margin-left: 20px;
  }
}
</style>

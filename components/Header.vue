<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Nuxt streams</nuxt-link
    >
    <h1 class="header__logo" v-else>Nuxt streams</h1>
    <main-menu />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
export default {
  components: {
    'main-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  min-height: 80px;
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  justify-content: space-between;
  padding: 0 40px;
}

.header /deep/ a {
  color: white;
}

.header__logo {
  text-decoration: none;
  font-size: 32px;
}

@media screen and (max-width: 450px) {
  .header__logo {
    font-size: 24px;
  }
}

@media screen and (max-width: 390px) {
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .header__logo {
    text-align: center;
  }
}
</style>

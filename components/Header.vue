<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Nuxt streams</nuxt-link
    >
    <h1 class="header__logo" v-else>Nuxt streams</h1>
    <main-menu class="header__menu" />
    <mobile-icon class="header__mobile-icon" />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import MobileIcon from '@/components/ui/MobileIcon';

export default {
  components: {
    'main-menu': Menu,
    'mobile-icon': MobileIcon,
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

.header__mobile-icon {
  display: none;
}

@media screen and (max-width: 768px) {
  .header {
    padding: 20px 40px;
  }
  .header__mobile-icon {
    display: block;
  }

  .header__menu {
    display: none;
  }
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

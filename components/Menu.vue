<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
    <nuxt-link to="/about" class="menu__link">О проекте</nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu__link {
  margin-right: 20px;
}

.menu__link:last-of-type {
  margin-right: 0;
}

@media screen and (max-width: 768px) {
  .menu {
    display: flex;
    flex-direction: column;
  }

  .menu__link {
    line-height: 2;
    margin-right: 0;
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
}
</style>

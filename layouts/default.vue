<template>
  <div>
    <main-header />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  components: {
    'main-header': Header,
  },
};
</script>

<style>
html {
  font-family: 'Jet Brains', monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  min-width: 320px;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

li {
  line-height: 1.5;
}

@media screen and (max-width: 450px) {
  html {
    font-size: 14px;
  }

  ul {
    padding-left: 1.5rem;
  }
}

@media screen and (max-width: 390px) {
  html {
    font-size: 12px;
  }
}
</style>

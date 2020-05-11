<template>
  <div>
    <main-header @btnClick="popupHandler" />
    <nuxt />
    <overlay v-if="popupShown" @overlayClick="popupHandler" />
    <pop-up v-if="popupShown" @closeClick="popupHandler" :theme="'dark'">
      <question-form />
    </pop-up>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Overlay from '@/components/ui/Overlay';
import PopUp from '@/components/PopUp';
import QuestionForm from '@/components/QuestionForm';

export default {
  components: {
    'main-header': Header,
    overlay: Overlay,
    'pop-up': PopUp,
    'question-form': QuestionForm,
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
    },
  },
  data() {
    return {
      popupShown: false,
    };
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

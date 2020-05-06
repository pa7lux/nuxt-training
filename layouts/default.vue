<template>
  <div>
    <main-header @btnClick="popupHandler" />
    <nuxt />
    <!-- ВОТ ЗДЕСЬ НАЧИНАЕТСЯ НОВОЕ -->
    <overlay v-if="popupShown" @overlayClick="popupHandler"></overlay>
    <pop-up v-if="popupShown" @closeClick="popupHandler" :theme="'dark'">
      <form @submit.prevent="submitQuestionForm" class="question-form">
        <nxt-input
          :placeholder="'Your Name'"
          :labelText="'Ваше имя'"
          :type="'text'"
          :name="'name'"
          :required="'required'"
          v-model="email"
        />
        <nxt-input
          :placeholder="'hello@jhkjhgk.ru'"
          :labelText="'Email'"
          :type="'email'"
          :name="'email'"
          :required="'required'"
          v-model="email"
        />
        <nxt-textarea
          class="question-form__textarea"
          :placeholder="'Ваше сообщение'"
          :labelText="'Ваше сообщение'"
          :name="'message'"
          :required="'required'"
          v-model="message"
        />
        <nxt-button class="question-form__button" type="submit" :theme="'light'"
          >Отправить</nxt-button
        >
      </form>
    </pop-up>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Overlay from '@/components/ui/Overlay';
import PopUp from '@/components/PopUp';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';

export default {
  components: {
    'main-header': Header,
    overlay: Overlay,
    'pop-up': PopUp,
    'nxt-button': Button,
    'nxt-input': Input,
    'nxt-textarea': TextArea,
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
    },
    submitQuestionForm() {
      console.log(
        `name: ${this.name}, email: ${this.email}, message: ${this.message}`
      );
      this.popupHandler();
    },
  },
  data() {
    return {
      popupShown: false,
      name: '',
      email: '',
      message: '',
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

/*  СТИЛИ ФОРМЫ */

.question-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.question-form__textarea {
  grid-column: span 2;
}

.question-form__button {
  grid-column: span 2;
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

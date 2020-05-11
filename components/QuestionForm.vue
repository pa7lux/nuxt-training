<template>
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
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';

export default {
  components: {
    'nxt-button': Button,
    'nxt-input': Input,
    'nxt-textarea': TextArea,
  },

  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },

  methods: {
    submitQuestionForm() {
      console.log(
        `name: ${this.name}, email: ${this.email}, message: ${this.message}`
      );
      this.popupHandler();
    },
  },
};
</script>

<style scoped>
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
</style>

<template>
  <div class="about">
    <div class="about__wrapper">
      <h1 class="about__title">О проекте</h1>
      <p>
        Для того, чтобы сделать новый сайт "Рак лечится" со студентами, нужно
        было изучить фреймворк. Мы выбрали Nuxt.js, в него можно быстро
        погрузиться из-за простоты Vue. За несколько стримов рассказали основы,
        а дальше студенты с помощью наставника в командах делали проект.
      </p>
      <nxt-button @btnClick="showPopUp" class="about__button" :theme="'light'"
        >Напишите нам</nxt-button
      >
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';

export default {
  components: {
    'nxt-button': Button,
  },
  methods: {
    showPopUp(text) {
      console.log(text);
      this.$store.commit('popup/togglePopUp');
    },
  },
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
}

.about__wrapper {
  width: 60%;
}

.about__title {
  margin-bottom: 40px;
}

.about__button {
  margin-top: 40px;
}
</style>

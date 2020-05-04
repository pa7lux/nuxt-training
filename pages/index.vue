<template>
  <div class="container">
    <panel v-for="lesson in lessons" :key="lesson.id" class="container__panel">
      <h2>{{ lesson.name }}</h2>
      <div v-html="lesson.description"></div>
      <video-iframe :url="lesson.video" />
      <h3>Полезные ссылки</h3>
      <ul>
        <li v-for="link in lesson.links" :key="link.id">
          <a :href="link.url" target="_blank">{{ link.url }}</a> —
          {{ link.description }}
        </li>
      </ul>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import VideoIframe from '@/components/VideoIframe';
export default {
  components: {
    panel: Panel,
    'video-iframe': VideoIframe,
  },
  data() {
    return {
      lessons: [
        {
          id: '1',
          name: 'Стрим 1. Инфраструктура и  структура',
          video: 'https://www.youtube.com/embed/TVADtdg-z0c',
          description:
            '<p>Мы установили nuxt.js стартовый пакет и настроили в нем конфигурацию:</p><ul><li>axios — чтобы в будущем получать данные по API</li><li>prettier  — чтобы автоматически форматировать наш код</li></ul>',
          links: [
            {
              id: '1',
              url: 'https://nuxtjs.org/',
              description: 'оф.сайт nuxt',
            },
            {
              id: '2',
              url: 'https://ru.vuejs.org/',
              description: 'оф.сайт vue',
            },
            {
              id: '3',
              url: 'https://marketplace.visualstudio.com/',
              description: 'плагин для vue',
            },
            {
              id: '4',
              url: 'https://www.npmjs.com/package/husky',
              description: 'husky на npm',
            },
            {
              id: '5',
              url: 'https://prettier.io/',
              description: 'сайт prettier',
            },
          ],
          materials: [
            {
              id: '1',
              url: 'https://github.com/pa7lux/nuxt-training',
              description: 'Ссылка на ветку в репозитории',
            },
            {
              id: '2',
              url:
                'https://github.com/pa7lux/nuxt-training/blob/master/.prettierrc',
              description: 'Конфиг с настройкой prettier',
            },
            {
              id: '3',
              url:
                'https://github.com/pa7lux/nuxt-training/blob/master/package.json',
              description: 'package.json с настройкой для husky',
            },
          ],
          hometask:
            '<p>посмотрите  на сайт <a href="https://https://raklechitsa.ru/" target="_blank">раклечится</a> и обдумайте, как будете в nuxt реализовывать структуру адресов сайта и какие вам нужны будут компоненты при строительстве</p>',
        },
        {
          id: '1',
          name: 'Стрим 1. Инфраструктура и  структура',
          video: 'https://www.youtube.com/embed/TVADtdg-z0c',
          description:
            '<p>Мы установили nuxt.js стартовый пакет и настроили в нем конфигурацию:</p><ul><li>axios — чтобы в будущем получать данные по API</li><li>prettier  — чтобы автоматически форматировать наш код</li></ul>',
          links: [
            {
              id: '1',
              url: 'https://nuxtjs.org/',
              description: 'оф.сайт nuxt',
            },
            {
              id: '2',
              url: 'https://ru.vuejs.org/',
              description: 'оф.сайт vue',
            },
            {
              id: '3',
              url: 'https://marketplace.visualstudio.com/',
              description: 'плагин для vue',
            },
            {
              id: '4',
              url: 'https://www.npmjs.com/package/husky',
              description: 'husky на npm',
            },
            {
              id: '5',
              url: 'https://prettier.io/',
              description: 'сайт prettier',
            },
          ],
          materials: [
            {
              id: '1',
              url: 'https://github.com/pa7lux/nuxt-training',
              description: 'Ссылка на ветку в репозитории',
            },
            {
              id: '2',
              url:
                'https://github.com/pa7lux/nuxt-training/blob/master/.prettierrc',
              description: 'Конфиг с настройкой prettier',
            },
            {
              id: '3',
              url:
                'https://github.com/pa7lux/nuxt-training/blob/master/package.json',
              description: 'package.json с настройкой для husky',
            },
          ],
          hometask:
            '<p>посмотрите  на сайт <a href="https://https://raklechitsa.ru/" target="_blank">раклечится</a> и обдумайте, как будете в nuxt реализовывать структуру адресов сайта и какие вам нужны будут компоненты при строительстве</p>',
        },
      ],
    };
  },
};
</script>

<style>
.container__panel {
  width: 80%;
  margin: 40px auto;
}
</style>

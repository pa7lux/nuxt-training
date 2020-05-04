<template>
  <div class="container">
    <panel v-for="lesson in lessons" :key="lesson.id" class="container__panel">
      <h2 class="container__title">{{ lesson.name }}</h2>
      <video-iframe :url="lesson.video" />
      <div class="container__text" v-html="lesson.description"></div>
      <h3 class="container__subheader">Полезные ссылки</h3>
      <ul>
        <li v-for="link in lesson.links" :key="link.id">
          <a :href="link.url" target="_blank">{{ link.description }}</a>
        </li>
      </ul>
      <h3 class="container__subheader">Материалы</h3>
      <ul>
        <li v-for="link in lesson.materials" :key="link.id">
          <a :href="link.url" target="_blank">{{ link.description }}</a>
        </li>
      </ul>
      <h3 class="container__subheader">Задание</h3>
      <div class="container__text" v-html="lesson.hometask"></div>
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
          id: '2',
          name: 'Стрим 2. Как верстать во Vue и Nuxt',
          video: 'https://www.youtube.com/embed/-FlxoqmKj-U',
          description:
            '<p>Научились:</p><ul><li>подключать внешние CSS-файлы в head (шрифты)</li><li>подключали компоненты как угодно (между собой, в  page, в layout)</li><li>попробовали условный рендеринг через директивы v-if и v-else</li><li>узнали про компонент nuxt-link</li><li>попробовали определить $route.path для условного рендеринга</li><li>использовали slot для динамического контента внутри компонента</li><li>Биндили данные из объекта, который вернулся из функции data ({{content}}, v-html, v-bind и :)</li><li>итерировали массивы данных через v-for и строили разметку</li><li>Прокинули props из компонента в родителя</li></ul>',
          links: [
            {
              id: '1',
              url: 'https://vue-meta.nuxtjs.org/',
              description: 'менеджер метатегов и содержимого head в nuxt',
            },
            {
              id: '2',
              url:
                'https://ru.vuejs.org/v2/guide/index.html#%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F-%D0%B8-%D1%86%D0%B8%D0%BA%D0%BB%D1%8B',
              description: 'Условия и циклы во Vue',
            },
            {
              id: '3',
              url: 'https://ru.vuejs.org/v2/guide/syntax.html',
              description: 'Ситнаксис шаблонов (биндинг, про события позже)',
            },
            {
              id: '4',
              url: 'https://ru.vuejs.org/v2/guide/components-slots.html',
              description:
                'Про слоты, особенно прочитайте про именованные слоты',
            },
            {
              id: '5',
              url:
                'https://router.vuejs.org/ru/api/#%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-route',
              description:
                'Свойства объяека $route (позже вы поймете, что можете просто смотреть в консоль на этот объект)',
            },
          ],
          materials: [
            {
              id: '1',
              url: 'https://github.com/pa7lux/nuxt-training/tree/stream-2',
              description: 'Ссылка на ветку в репозитории',
            },
          ],
          hometask:
            '<p>посмотрите, как я изменил верстку нашего проекта в  ветке репозитория уже после окончания вебинара. Вы можете сопоставить изменения в разделе "commits" Гитхаба. Сделайте выводы у себя в блокноте.</p>',
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

.container__title {
  margin-bottom: 20px;
}

.container__text {
  margin: 20px 0;
}

.container__text ul {
  margin: 20px 0;
}

.container__subheader {
  margin: 20px 0;
}

@media screen and (max-width: 450px) {
  .container__panel {
    width: 90%;
  }
}
</style>

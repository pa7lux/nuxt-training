<template>
  <div class="index">
    <div class="index__card-list">
      <card
        v-for="card in lessons"
        :key="card.id"
        :title="card.name"
        @cardClick="goToDetail(card.id)"
      />
      <card :disabled="true" :title="'Скоро в эфире'" />
      <card :disabled="true" :title="'Скоро в эфире'" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';
export default {
  components: {
    card: Card,
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/streams/${id}`);
    },
  },
  computed: {
    lessons() {
      return this.$store.getters['lessons/getLessons'];
    },
  },
  // beforeMount() {
  //   this.$store.dispatch('lessons/fetchLessons');
  // },

  async fetch({ store, params }) {
    await store.dispatch('lessons/fetchLessons');
  },
};
</script>

<style>
.index__card-list {
  width: 80%;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
}
</style>

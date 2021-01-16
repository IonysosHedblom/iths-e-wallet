<template>
  <section class="card-stack">
    <Card v-for="(card, cardIdx) in cards" v-bind:key="cardIdx" />
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      cards: this.$root.cards,
    };
  },
};
</script>

<style scoped>
</style>
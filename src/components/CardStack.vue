<template>
  <section class="card-stack">
    <Card
      v-for="(card, cardIdx) in cards"
      v-bind:key="cardIdx"
      v-bind:cardData="card"
      @click.native="setActive(cardIdx)"
    />
  </section>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card,
  },
  props: {
    cards: Array,
    setActive: Function,
  },
};
</script>

<style scoped>
.card-stack {
  margin: 2.7rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}
</style>
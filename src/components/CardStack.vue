<template>
  <section class="card-stack">
    <Card
      v-for="(card, cardIdx) in cards"
      v-bind:key="cardIdx"
      v-bind:cardData="card"
      @click.native="active(cardIdx)"
    />
  </section>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card,
  },
  props: ["cards", "active"],
};
</script>

<style scoped>
.card-stack {
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}
</style>
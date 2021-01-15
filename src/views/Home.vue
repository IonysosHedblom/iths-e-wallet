<template>
  <main>
    <Top header="e-wallet" subheader="active card" />
    <Card v-if="cards[active]" v-bind:cardData="cards[active]" />
  </main>
</template>

<script>
// @ is an alias to /src
import Top from "../components/Top";
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Top,
    Card,
  },
  data: function () {
    return {
      cards: this.$root.cards,
      active: 0,
    };
  },
  methods: {
    setActiveCard() {
      this.active = 5;
    },
  },
};
</script>

<style scoped>
</style>

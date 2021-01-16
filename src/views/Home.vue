<template>
  <main>
    <Top header="e-wallet" subheader="active card" />
    <Card v-if="cards[active]" v-bind:cardData="cards[active]" />
    <CardStack v-bind:active="setNewActiveCard" v-bind:cards="cards" />
    <a @click.prevent="changeRoute" href="#" class="btn">Add new card</a>
  </main>
</template>

<script>
// @ is an alias to /src
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";

export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack,
  },
  data: function () {
    return {
      cards: this.$root.cards,
      active: 0,
    };
  },
  methods: {
    changeRoute() {
      this.$router.push("/add-card");
    },
    setNewActiveCard(idx) {
      this.active = idx;
      return this.active;
    },
  },
};
</script>


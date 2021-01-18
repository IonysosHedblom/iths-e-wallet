<template>
  <main>
    <Top header="e-wallet" subheader="active card" />
    <Card v-if="cards[active]" v-bind:cardData="cards[active]" />
    <a @click="modalOpen = true" href="#" class="btn delete">Remove card</a>
    <Confirm v-if="modalOpen" />
    <CardStack
      v-bind:isActive="active"
      v-bind:setActive="setNewActiveCard"
      v-bind:cards="cards"
    />
    <a @click.prevent="changeRoute" href="#" class="btn">Add new card</a>
  </main>
</template>

<script>
// @ is an alias to /src
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";
import Confirm from "../components/Confirm";

export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack,
    Confirm,
  },
  data: function () {
    return {
      cards: this.$root.cards,
      active: 0,
      modalOpen: false,
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

<style scoped>
.delete {
  width: 40%;
  font-size: 0.9rem;
  height: 2rem;
  color: #fff;
  border: 0.1rem solid rgb(41, 27, 27);
  background-color: rgb(255, 59, 59);
  margin: 7px auto 0 auto;
}
</style>
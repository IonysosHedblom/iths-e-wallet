<template>
  <main>
    <Top header="e-wallet" subheader="active card" />
    <Card v-if="cards[active]" v-bind:cardData="cards[active]" />
    <a v-if="!modalOpen" @click="modalOpen = true" href="#" class="btn delete"
      >Remove card</a
    >
    <Confirm v-if="modalOpen" v-bind:closeModal="closeModal" />
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
    closeModal() {
      this.modalOpen = false;
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
  background-color: #ff3b3b;
  margin: 7px auto 0 auto;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  text-shadow: none;
}

.delete:hover {
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);

  text-shadow: 0.2px 0.2px 0.5px #427388;
}
</style>
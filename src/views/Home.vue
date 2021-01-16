<template>
  <main>
    <Top header="e-wallet" subheader="active card" />
    <Card v-if="cards[active]" v-bind:cardData="cards[active]" />
    <aside class="confirmation-modal" v-if="confirmModal">
      <h2>Are you sure? This can't be undone.</h2>
    </aside>
    <a class="btn delete" href="#">remove card</a>
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
      confirmModal: false,
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
  background: #ff574b;
  width: 40%;
  font-size: 0.9rem;
  height: 2rem;
  margin: 8px auto 0 auto;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  color: #fff;
  border: 0.1rem solid rgb(104, 104, 104);
  border-radius: 0.3rem;
}

.delete:hover {
  box-shadow: inset 0 0 20px rgba(199, 199, 199, 0.5),
    0 0 20px rgba(189, 189, 189, 0.2);

  border: none;
  text-shadow: 0.2px 0.2px 0.5px #427388;
}
</style>

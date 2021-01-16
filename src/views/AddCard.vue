<template>
  <main>
    <Top header="Add New Card" subheader="New Card" />
    <Card v-bind:cardData="formData" />
    <CardForm v-bind:cardData="formData" />
    <a @click.prevent="addCard" href="#" class="btn">Add card</a>
    <!-- <a @click.prevent="addCard" href="#" class="btn">Go Back</a> -->
  </main>
</template>

<script>
import Card from "../components/Card";
import Top from "../components/Top";
import CardForm from "../components/CardForm";
export default {
  name: "AddCard",
  components: {
    Card,
    Top,
    CardForm,
  },
  data: function () {
    return {
      formData: {
        cardNumber: "",
        cardName: "",
        month: "",
        year: "",
        vendor: "",
      },
    };
  },
  methods: {
    addCard() {
      if (!this.$root.cards.includes(this.formData)) {
        this.formData.id = Date.now();
        this.$root.cards.push(this.formData);
        this.$router.push("/");
      }
    },
  },
};
</script>



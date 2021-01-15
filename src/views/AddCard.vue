<template>
  <main>
    <Card v-bind:formData="formData" />
    <section class="card-form">
      <label class="col-2" for="card-number">CARD NUMBER</label>
      <input
        v-model="formData.cardNumber"
        placeholder="XXXX XXXX XXXX XXXX"
        maxlength="16"
        class="col-2"
        name="card-number"
        type="text"
      />
      <label class="col-2" for="card-name">CARDHOLDER NAME</label>
      <input
        v-model="formData.cardName"
        placeholder="Firstname Lastname"
        class="col-2"
        name="card-name"
        type="text"
      />

      <label class="col-1" for="month-dropdown">MONTH</label>
      <label class="col-1" for="year-dropdown">YEAR</label>
      <select v-model="formData.month" class="col-1" name="month-dropdown">
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select v-model="formData.year" class="col-1" name="year-dropdown">
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
      </select>
      <label class="col-2" for="vendor">VENDOR</label>
      <select v-model="formData.vendor" class="col-2" name="vendor-dropdown">
        <option value="Bitcoin Inc">Bitcoin Inc</option>
        <option value="Blockchain Inc">Blockchain Inc</option>
        <option value="Evil Corp">Evil Corp</option>
        <option value="Ninja Bank">Ninja Bank</option>
      </select>
    </section>
    <a @click.prevent="addCard" href="#" class="btn">Add card</a>
  </main>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card,
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
      console.log(this.$root.cards);
      this.$root.cards.push(this.formData);
    },
  },
};
</script>


<style scoped>
.card-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}

.col-2 {
  grid-column: auto/span 2;
}

.card-form label {
  padding: 0.25rem 0;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.card-form input,
select {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 0.8rem;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}

.btn {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: 0.125rem solid #000;
  box-sizing: border-box;
  margin: 2rem 0;
  border-radius: 0.5rem;
}
</style>
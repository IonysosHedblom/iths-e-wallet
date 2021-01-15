<template>
  <article
    v-bind:class="[
      cardData.vendor === 'Ninja Bank'
        ? 'ninja'
        : cardData.vendor === 'Bitcoin Inc'
        ? 'bitcoin'
        : cardData.vendor === 'Blockchain Inc'
        ? 'blockchain'
        : cardData.vendor === 'Evil Corp'
        ? 'evil'
        : 'blank',
    ]"
    class="card"
  >
    <header>
      <img
        v-if="cardData.vendor !== 'Bitcoin Inc'"
        src="../assets/chip-light.svg"
        alt="Light chip"
      />
      <img v-else src="../assets/chip-dark.svg" alt="Dark chip" />
      <!-- Fungerade inte, den lade till random siffror mellan filnamnet och .svg (?) <img
        v-if="cardData.vendor"
        :src="`../assets/vendor-${cardData.vendor
          .split(' ')
          .join('')
          .toLowerCase()}.svg`"
        alt="Vendor Logo"
      /> -->

      <img
        v-if="cardData.vendor === 'Ninja Bank'"
        src="../assets/vendor-ninjabank.svg"
        alt="Ninja Bank logo"
      />
      <img
        v-else-if="cardData.vendor === 'Bitcoin Inc'"
        src="../assets/vendor-bitcoininc.svg"
        alt="Bitcoin Inc logo"
      />
      <img
        v-else-if="cardData.vendor === 'Blockchain Inc'"
        src="../assets/vendor-blockchaininc.svg"
        alt="Blockchain Inc logo"
      />
      <img
        v-else-if="cardData.vendor === 'Evil Corp'"
        src="../assets/vendor-evilcorp.svg"
        alt="Blockchain Inc logo"
      />
    </header>
    <section class="number">
      {{ addSpacesToCardNum() }}
    </section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder Name</span>
        <p>{{ cardData.cardName }}</p>
      </aside>
      <aside class="valid">
        <span>Valid until</span>
        <p v-if="!cardData.month && !cardData.year">MM/YY</p>
        <p v-else-if="cardData.month && !cardData.year">
          {{ cardData.month }}/YY
        </p>
        <p v-else-if="!cardData.month && cardData.year">
          MM/{{ cardData.year }}
        </p>
        <p v-else>{{ cardData.month }}/{{ cardData.year }}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    cardData: Object,
  },
  methods: {
    addSpacesToCardNum() {
      if (this.cardData.cardNumber.length > 0) {
        const newCardNumber = this.cardData.cardNumber
          .match(/.{1,4}/g)
          .join(" ");
        return newCardNumber;
      }
    },
  },
};
</script>

<style scoped>
aside {
  display: block;
}

.card {
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
}

.card header {
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  justify-content: space-between;
  align-items: flex-start;
}

.card header [alt="chip"] {
  align-self: flex-end;
  opacity: 1;
}

.number {
  grid-column: auto/span 2;
  grid-row: auto / span 1;
  display: flex;
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
}

.info {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: flex;
}

.holder {
  -webkit-box-flex: 1;
  flex: 1;
}

.card section aside span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
}

.card section aside p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}

.card section aside.valid span,
.card section aside.valid p {
  text-align: right;
}

.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}

.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}

.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #fff;
}

.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}

.blank {
  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}
</style>
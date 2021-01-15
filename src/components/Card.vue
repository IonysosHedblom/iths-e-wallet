<template>
  <article
    v-bind:class="[
      formData.vendor === 'Ninja Bank'
        ? 'ninja'
        : formData.vendor === 'Bitcoin Inc'
        ? 'bitcoin'
        : formData.vendor === 'Blockchain Inc'
        ? 'blockchain'
        : formData.vendor === 'Evil Corp'
        ? 'evil'
        : 'blank',
    ]"
    class="card"
  >
    <header>
      <img src="../assets/chip-light.svg" alt="Light chip" />
    </header>
    <section class="number">{{ formData.cardNumber }}</section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder Name</span>
        <p>{{ formData.cardName }}</p>
      </aside>
      <aside class="valid">
        <span>Valid until</span>
        <p v-if="!formData.month && !formData.year">MM/YY</p>
        <p v-else-if="formData.month && !formData.year">
          {{ formData.month }}/YY
        </p>
        <p v-else-if="!formData.month && formData.year">
          MM/{{ formData.year }}
        </p>
        <p v-else>{{ formData.month }}/{{ formData.year }}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    formData: Object,
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

.blank {
  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}
</style>
<template>
  <header class="top">
    <h1>{{ header }}</h1>
    <p>{{ subheader }}</p>
  </header>
</template>

<script>
export default {
  props: ["header", "subheader"],
  name: "Top",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap");
.top {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
}

.top h1,
.top p {
  text-align: center;
  margin: 0;
}

.top h1 {
  flex: 2;
  line-height: 2rem;
  font-size: 2rem;
  padding: 1.5rem 0;
  font-family: Source Sans Pro, sans-serif;
}

.top p {
  flex: 1;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  padding: 0.25rem;
}
</style>
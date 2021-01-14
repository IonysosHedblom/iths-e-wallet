<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add-card">Add new card</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");
#app {
  max-width: 24rem;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  font-family: "PT Mono", monospace;
}
</style>

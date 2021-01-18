<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add-card">Add new card</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap");

#app {
  max-width: 24rem;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  font-family: PT Mono, monospace;
  box-sizing: border-box;
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

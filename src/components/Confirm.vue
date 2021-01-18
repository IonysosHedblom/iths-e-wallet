<template>
  <aside>
    <h3>Are you sure?</h3>
    <div class="buttons">
      <a @click="closeModal" href="#" class="btn cancel">Cancel</a>
      <a href="#" class="btn confirm">Confirm</a>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["closeModal"],
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-family: Source Sans Pro, sans-serif;
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

.btn {
  margin: 5px;
  width: 100%;
}

.cancel {
  color: #fff;
  border: 0.1rem solid rgb(41, 27, 27);
  background-color: #ff3b3b;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  text-shadow: none;
}

.cancel:hover {
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);

  text-shadow: 0.2px 0.2px 0.5px #427388;
}

.confirm {
  color: rgb(255, 255, 255);
  border: 0.1rem solid #35794e;
  background-color: #22c05c;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  text-shadow: none;
}

.confirm:hover {
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);

  text-shadow: 0.2px 0.2px 0.5px #427388;
}
</style>
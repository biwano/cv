<template>
  <div id="app">
    <div style="float:right">
      <img alt="Vue logo" src="./assets/photo.png" width="250px" /><br />
      <a href="mailto:bruno.ilponse@gmail.com">bruno.ilponse@gmail.com</a><br />
      <a href="www.github.com/biwano">Github</a>
    </div>
    <generator url="header@config"></generator>
    <hr/>
    <generator url="experiences@config"></generator>
  </div>
</template>

<script>
import Generator from "./components/Generator.vue";
import generators from "./generators";

export default {
  name: "App",
  components: {
    Generator
  },
  created() {
    this.$store.commit("generators", generators);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
</style>

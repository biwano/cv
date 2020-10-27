<template>
  <div id="app">
    <div style="float:right">
      <img alt="Vue logo" src="./assets/photo.png" width="250px" /><br />
      <a href="mailto:bruno.ilponse@gmail.com">bruno.ilponse@gmail.com</a><br />
      <a href="www.github.com/biwano">Github</a>
    </div>

    <g-revue template-url="root@static"></g-revue>
    <hr/>
    <!-- <generator url="experiences@config"></generator> -->
  </div>
</template>

<script>
import GRevue from "./components/GRevue.vue";
import templates from "./content/templates";
import locale from "./content/locales";

export default {
  name: "App",
  components: {
    GRevue
  },
  created() {
    this.$store.commit("templates", templates);
    this.$store.commit("locale", locale);
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

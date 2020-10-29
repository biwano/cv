<template>
  <div id="app">
    

    <g-render template-url="static://root"></g-render>
    <hr/>
    <!-- <generator url="experiences@config"></generator> -->
  </div>
</template>

<script>
import templates from "./content/templates";
import locale from "./content/locales";

export default {
  name: "App",
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
/*a {
  text-decoration: none;
}*/
div.tags:not(:last-child) {
    margin-bottom: 0
}
</style>

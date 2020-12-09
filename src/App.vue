<template>
  <div id="app">
    <div style="margin-left:5px">
      <g-render
        template-url="template://profile"
        data-url="locale://profile"
      ></g-render>
      <g-revue></g-revue>
    </div>
  </div>
</template>

<script>
import templates from "./content/templates";
import locale from "./content/locales";

export default {
  name: "App",
  created() {
    // Load templates
    this.$store.commit("templates", templates);
    // Initialize locale
    this.$store.commit("locale", locale["en"]);
    /*
    this.$store.subscribe(mutation => {
      if (mutation.type == "reload") {
        this.g_clear_cache();
        this.set_template("page_summary");
      }
    });*/
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/*a {
  text-decoration: none;
}*/
div.tags:not(:last-child) {
  margin-bottom: 0;
}
</style>

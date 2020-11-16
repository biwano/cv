<template>
  <div id="app">
    <div style="margin-left:5px">
      <g-render
        template-url="template://profile"
        data-url="locale://profile"
      ></g-render>
      <g-render :template-url="templateUrl" parent-url="app"></g-render>
    </div>
  </div>
</template>

<script>
import templates from "./content/templates";
import locale from "./content/locales";

export default {
  name: "App",
  data() {
    return { templateUrl: "" };
  },
  watch: {
    $route(to) {
      this.set_template(to.params.template);
    }
  },
  created() {
    this.set_template(this.$route.params.template);
    this.$store.commit("templates", templates);
    this.$store.commit("locale", locale["en"]);
    this.$store.subscribe(mutation => {
      if (mutation.type == "reload") {
        this.g_clear_cache();
        this.set_template("page_summary");
      }
    });
  },
  methods: {
    set_template(template) {
      if (template === undefined) template = "page_summary"
      this.templateUrl = `template://${template}`;
    }
  }
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

<template>
  <g-render :template-url="templateUrl" parent-url="app" :data="data"></g-render>
</template>

<script>

export default {
  name: "GRevue",
  data() {
    return { templateUrl: "" };
  },
  watch: {
    // Listen to route changes
    $route(to) {
      this.set_template(to.params.template);
    }
  },
  created() {
    // Implement navigation listener
    this.g_bus.$on("navigate", route => {
      this.$router.push({ "path": route });
    });
    // 
    this.set_template(this.$route.params.template);
  },
  methods: {
    set_template(template) {
      if (template === undefined) template = "page_summary"
      this.templateUrl = `template://${template}`;
      console.log("gr");
    }
  },
  computed: {
    data() {
      return { "id": this.$route.params.params };
    }
  }
};
</script>


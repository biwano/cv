<template>
  <generator :url="url"></generator>
</template>

<script>
import gMixin from "./gMixin";
//import Generator from "./Generator.vue";
let inject = (str, obj) => str.replace(/\${(.*?)}/g, (x, g) => obj[g]);
export default {
  name: "GTemplate",
  mixins: [gMixin],
  components: {
    Generator: () => import("./Generator.vue")
  },
  computed: {
    template_url() {
      return this.get_config(0);
    },
    url() {
      var raw_text = this.get_text_from_url(`${this.template_url}`);
      var values = this.config.slice();
      values.splice(0, 1);
      var interpolated_text = inject(raw_text, values);
      return `${interpolated_text}@raw`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<template>
  <component :is="component" :config="config" :data="data"></component>
</template>

<script>
import GDiv from "./GDiv";
import GText from "./GText";
import GRender from "./GRender";
import gMixin from "./gMixin";
export default {
  name: "g-proxy",
  components: { /*GSpan, GBr, GUrl, */ GText, GDiv, GRender },
  mixins: [gMixin],
  props: {
    config: Object
  },
  computed: {
    component() {
      return this.config !== null ? `g-${this.config["#name"]}` : "div";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

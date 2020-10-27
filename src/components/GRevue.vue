<template>
  <g-proxy :config="config_" :data="data"></g-proxy>
</template>

<script>
import GProxy from "./GProxy";
import gMixin from "./gMixin";
export default {
  name: "g-revue",
  components: { GProxy },
  mixins: [gMixin],
  props: {
    templateUrl: String
  },
  asyncComputed: {
    config_() {
      return this.get_xml_from_url(this.templateUrl);
    }
  }
};
</script>
<style>
div.g-pass {
  display: table-cell;
  margin: 0;
  padding: 0;
}
</style>
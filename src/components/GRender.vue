<template>
  <g-revue :template-url="templateUrl" :data="data_"></g-revue>
</template>

<script>
import gMixin from "./gMixin";
export default {
  name: "g-render",
  mixins: [gMixin],
  components: {
    GRevue: () => import("./GRevue")
  },
  computed: {
    templateUrl() {
      return this.get_attr("template-url");
    },
    data_() {
      var data = this.get_data_from_url(this.get_attr("data-url"))
      data = Object.assign({}, this.data, data);
      return data;
    }
  }
};
</script>

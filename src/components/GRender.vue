<template>
  <div class="g-pass">
    <div class="g-pass" v-if="merged_data">
      <component
        v-for="(item, index) in merged_data"
        :is="component"
        :data="item"
        :key="index"
      ></component>
    </div>
  </div>
</template>

<script>
import gMixin from "./gMixin";
export default {
  name: "g-render",
  mixins: [gMixin],
  props: {
    templateUrl: String,
    dataUrl: String,
    data: Object
  },
  asyncComputed: {
    component() {
      var component = this.get_component_name(this.templateUrl);
      return component;
    },
    data_from_url() {
      var data = this.dataUrl ? this.get_data_from_url(this.dataUrl) : {};
      if (!Array.isArray(data)) {
        data = [data];
      }
      return data;
    },
    data_from_props() {
      return this.data ? this.data : {};
    },
    merged_data() {
      var context;
      if (this.component) {
        if (this.data_from_url) {
          context = this.data_from_url.map(item => {
            return Object.assign({}, this.data_from_props, item);
          });
        } else {
          context = this.data_from_props;
        }
        console.log("[RENDER]", this.component, context);
      }
      return context;
    }
  }
};
</script>
<style scoped>
div.g-pass {
  display: table-cell;
  margin: 0;
  padding: 0;
}
</style>

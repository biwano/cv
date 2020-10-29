<template>
  <div class="g-pass" v-if="merged_data">
    <component
      :is="component"
      :data="merged_data"
    ></component>
  </div>
</template>

<script>
import gMixin from "./gMixin";
export default {
  name: "g-render",
  mixins: [gMixin],
  asyncComputed: {
    data_from_url() {
      var data = this.dataUrl ? this.get_data_from_url(this.dataUrl) : {};
      return data;
    },
    data_from_props() {
      return this.data ? this.data : {};
    },
    merged_data() {
      var context;
      if (this.component) {
        if (this.data_from_url) {
          context = Object.assign({}, this.data_from_props, this.data_from_url);
        } else {
          context = this.data_from_props;
        }
        console.debug("[RENDER] LIST - ", this.component, context);
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

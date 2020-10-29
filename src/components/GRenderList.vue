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
  name: "g-render-list",
  mixins: [gMixin],
  asyncComputed: {
    merged_data() {
      var context;
      if (this.component) {
        if (this.data_from_url) {
          context = Object.assign({}, this.data_from_url);
          for (var i in context) {
            Object.assign({}, this.data_from_props, context[i]);
          }
        }
        console.debug("[RENDER] ITEM - ", this.component, context);
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

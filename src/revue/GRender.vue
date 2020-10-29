<template>
  <div class="g-pass" v-if="context">
    <component
      :is="component.name"
      :data="context"
    ></component>
  </div>
</template>

<script>
import gMixin from "./gMixin";
export default {
  name: "g-render",
  mixins: [gMixin],
  asyncComputed: {
    context() {
      var context;
      if (this.component && this.component.name) {
        if (this.data_from_url) {
          context = Object.assign({}, this.data_from_props, this.data_from_url);
        } else {
          context = this.data_from_props;
        }
        console.debug("[RENDER] ITEM - ", this.component.url, context);
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

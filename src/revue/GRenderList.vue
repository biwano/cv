<template>
  <div class="g-pass">
    <div class="g-pass" v-if="context">
      <component
        v-for="(item, index) in context"
        :is="component.name"
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
    context() {
      var context;
      if (this.component && this.component.name) {
        if (this.data_from_url) {
          context = Object.assign({}, this.data_from_url);
          for (var i in context) {
            context[i] = Object.assign({}, this.data_from_props, context[i]);
          }
        }
        console.debug("[RENDER] LIST - ", this.component.url, context);
      }
      return context;
    }
  }
};
</script>
<style scoped>
div.g-pass {
  display: inline;
  margin: 0;
  padding: 0;
}
</style>

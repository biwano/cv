<template>
  <div class="g-pass">
    <div class="g-pass" v-if="items">
      <component
        v-for="(item, index) in items"
        :is="component.name"
        :data="item.context"
        :metadata="item.metadata"
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
    items() {
      var items;
      if (this.component && this.component.name) {
        if (this.data_from_url) {
          var contexts = Object.assign({}, this.data_from_url);
          items = {};
          for (var key in contexts) {
            items[key] = {
              "context": Object.assign({}, this.data_from_props, contexts[key]),
              "metadata": {
                list_key: key
              }
            };
          }
        }
        console.debug("[DEBUG] RENDER LIST - ", this.component.url, items);
      }
      return items;
    }
  },
};
</script>
<style scoped>
div.g-pass {
  display: inline;
  margin: 0;
  padding: 0;
}
</style>

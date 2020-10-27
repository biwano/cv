<template>
  <span>{{ text }}</span>
</template>

<script>
import gMixin from "./gMixin";
let inject = (str, obj) => str.replace(/\${(.*?)}/g, (x, g) => obj[g]);
export default {
  name: "g-text",
  mixins: [gMixin],
  computed: {
    text() {
      return inject(this.get_text(), this.data);
    }
  }
};
</script>

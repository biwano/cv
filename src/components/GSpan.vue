<template>
  <span :class="clazz">{{ text }}</span>
</template>

<script>
import gMixin from "./gMixin";
export default {
  name: "GSpan",
  mixins: [gMixin],
  computed: {
    text() {
      return this.get_config(0);
    },
    size() {
      return this.get_config(1);
    },
    clazz() {
      return this.size ? `is-size-${this.size}` : "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

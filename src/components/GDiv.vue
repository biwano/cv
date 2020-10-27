<template>
  <div><g-proxy v-for="(config, index) in children" :key="index" :config="config" :data=data></g-proxy></div>
</template>
<script>
import gMixin from "./gMixin";
export default {
  name: "GDiv",
  components: { GProxy: () => import("./GProxy.vue") },
  mixins: [gMixin]
};
</script>

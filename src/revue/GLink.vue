<template>
  <span @click="navigate">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "g-link",
  props: ["route"],
  methods: {
    navigate() {
      this.g_bus.$emit("navigate", this.route);
    },
  }
};
</script>

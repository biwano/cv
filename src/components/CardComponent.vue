<script setup>
import { computed } from "vue";
const props = defineProps(["img-position", "title", "date", "img", "link"]);
const position = computed(() =>
  props.imgPosition ? props.imgPosition : "left"
);
const isLeft = computed(() => position.value == "left");
const isRight = computed(() => position.value == "right");

const imgClass = computed(() => {
  return {
    "pull-left": isLeft.value,
    "pull-right": isRight.value,
    "pad-left": isRight.value,
    "pad-right": isLeft.value,
  };
});
const containerClass = computed(() => {
  return {
    bounceInLeft: isLeft.value,
    bounceInRight: isRight.value,
  };
});
</script>
<template>
  <div class="row">
    <div
      class="one animated bounceInLeft triple-padded"
      :class="containerClass"
    >
      <img :src="img" :class="imgClass" />

      <h3>
        <a v-if="link" :href="link" target="_blank">{{ title }}</a>
        <span v-else>{{ title }}</span>
      </h3>
      <b v-if="date">{{ date }}<br /></b
      >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
img {
  max-height: 128px;
}
</style>

<script setup>
import { computed } from "vue";
const props = defineProps([
  "img-position",
  "title",
  "date",
  "img",
  "link",
  "level",
  "tags",
]);
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
const subContainerClass = computed(() => {
  return {
    "flex-left": isLeft.value,
    "flex-right": isRight.value,
    bounceInLeft: isLeft.value,
    bounceInRight: isRight.value,
  };
});
</script>

<template>
  <div :class="containerClass">
    <div class="animated bounceInLeft triple-padded" :class="subContainerClass">
      <img :src="img" :class="imgClass" />
      <div class="content">
        <h3>
          <a v-if="link" :href="link" target="_blank">{{ title }}</a>
          <span v-else>{{ title }}</span>
        </h3>
        <b v-if="date">{{ date }}<br /></b>
        <slot></slot>
        <div v-if="level" class="level">
          <span v-for="i in [...Array(level).keys()]" :key="i"> &#9733; </span>
          <span v-for="i in [...Array(4 - level).keys()]" :key="i">
            &#9734;
          </span>
        </div>
        <div v-if="tags">
          <span v-for="tag in tags" :key="tag"> {{ tag }} &nbsp;</span>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<style scoped>
img {
  max-width: 128px;
  max-height: 128px;
}
.subContainer {
  display: table-cell;
}
.level {
  font-size: 25px;
}
</style>

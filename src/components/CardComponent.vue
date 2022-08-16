<script setup>
import {computed} from "vue";
const props = defineProps(["img-position", "title", "date", "img", "link"]);
const imgclass = computed(() => {
  const position = props.imgPosition ? props.imgPosition : "left";
  const isLeft = position == "left";
  const isRight = position == "right";
  return {
    "pull-left": isLeft,
    "pull-right": isRight,
    "pad-left": isRight,
    "pad-right": isLeft,
  }  
});
</script>
<template>
  <div class="row">
    <div class="one animated bounceInLeft triple-padded">
      <img :src="img" :class="imgclass" />
      
      <h3><a :href="link" target="_blank">{{ title }}</a></h3>
      <b v-if="date">{{date}}</b><br/>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
img {
  max-height: 128px;
}
</style>

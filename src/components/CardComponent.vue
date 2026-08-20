<script setup>
import { computed } from "vue";
const props = defineProps([
  "img-position",
  "title",
  "date",
  "img",
  "link",
  "level",
]);
const position = computed(() =>
  props.imgPosition ? props.imgPosition : "left",
);
const isLeft = computed(() => position.value == "left");
const isRight = computed(() => position.value == "right");

const imgClass = computed(() => {
  return {
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

const MAX_LEVEL = 5;
const levelLabel = computed(() =>
  props.level ? `Skill level: ${props.level} out of ${MAX_LEVEL}` : "",
);
</script>

<template>
  <div :class="containerClass">
    <div class="animated bounceInLeft triple-padded" :class="subContainerClass">
      <div class="img-container">
        <img v-if="img" :src="img" :alt="title" :class="imgClass" />
      </div>
      <div class="content">
        <h3>
          <a
            v-if="link"
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            >{{ title }}</a
          >
          <span v-else>{{ title }}</span>
        </h3>
        <b v-if="date">{{ date }}<br /></b>
        <slot></slot>
        <div
          v-if="level"
          class="level"
          role="img"
          :aria-label="levelLabel"
        >
          <span aria-hidden="true">
            <span
              v-for="i in MAX_LEVEL"
              :key="i"
              class="star"
              :class="{ empty: i > Number(level) }"
              >&#9733;</span
            >
          </span>
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
.img-container {
  min-width: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.animated.triple-padded {
  align-items: center;
}
.subContainer {
  display: table-cell;
}
.level {
  font-size: 25px;
}
.level .star.empty {
  opacity: 0.25;
}
</style>

<script setup>
import CardListComponent from "@/components/CardListComponent.vue";
import { useDatabase } from "@/hooks";
import { computed, ref } from "vue";

const { getCategoryTags, getCategoryItems } = useDatabase();

const selected_tag = ref(undefined);

const click = (tag) => {
  selected_tag.value = selected_tag.value == tag ? undefined : tag;
};
const buttonClass = (tag) => {
  return {
    blue: selected_tag.value == tag,
  };
};

const items = computed(() => {
  const items = {};
  const allitems = getCategoryItems("skill");
  for (const key in allitems) {
    const item = allitems[key];
    if (
      selected_tag.value === undefined ||
      (item.tags && item.tags.indexOf(selected_tag.value) >= 0)
    )
      items[key] = item;
  }
  return items;
});
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInRight triple-padded">
        <h1>Skills</h1>
        <span
          v-for="tag in getCategoryTags('skill')"
          :key="tag"
          class="button"
          :class="buttonClass(tag)"
          @click="click(tag)"
          >{{ tag }}</span
        >
      </div>
    </div>
    <CardListComponent :elems="items"> </CardListComponent>
  </div>
</template>
<style scoped>
.button {
  margin-right: 5px;
  text-transform: uppercase;
  font-size:  smaller;
}
</style>

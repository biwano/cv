<script setup>
import CardComponent from "@/components/CardComponent.vue";
import { useDatabase } from "@/hooks";

defineProps(["elems"]);
</script>
<template>
  <div>
    <CardComponent
      v-for="(elem, index) of elems"
      :key="index"
      :img="elem.img"
      :img-position="elem.position"
      :title="elem.title"
      :date="elem.date"
      :link="elem.link"
      :level="elem.level"
      :tags="elem.tags"
    >
      <span v-html="elem.content"></span>
    </CardComponent>
  </div>
</template>

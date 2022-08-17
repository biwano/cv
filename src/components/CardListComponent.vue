<script setup>
import CardComponent from "@/components/CardComponent.vue";
import { useDatabase } from "@/hooks";

const { highlightText } = useDatabase();
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
    >
      <span v-html="highlightText(elem.content)"></span>
    </CardComponent>
  </div>
</template>

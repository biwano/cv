<script setup>
import CardListComponent from "@/components/CardListComponent.vue";
import { useDatabase } from "@/hooks";
const { getCategoryItems } = useDatabase();
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInLeft triple-padded">
        <h1>Projects</h1>
      </div>
    </div>
    <CardListComponent :elems="getCategoryItems('project')">
    </CardListComponent>
  </div>
</template>
<style scoped></style>

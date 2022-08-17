<script setup>
import CardListComponent from "@/components/CardListComponent.vue";
import { useDatabase } from "@/hooks";
const { getCategoryItems } = useDatabase();
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInRight triple-padded">
        <h1>Career</h1>
      </div>
    </div>
    <CardListComponent :elems="getCategoryItems('job')"> </CardListComponent>
  </div>
</template>
<style scoped></style>

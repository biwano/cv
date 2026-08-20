<script setup>
import TimelineComponent from "@/components/TimelineComponent.vue";
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
    <TimelineComponent :elems="getCategoryItems('job')" />
  </div>
</template>
<style scoped></style>

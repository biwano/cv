<script setup>
import CardListComponent from "@/components/CardListComponent.vue";
import { useDatabase } from "@/hooks";
const { getCategoryItems } = useDatabase();
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInRight triple-padded">
        <h1>Studies</h1>
      </div>
    </div>
    <CardListComponent :elems="getCategoryItems('study')"> </CardListComponent>
  </div>
</template>

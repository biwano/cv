<script setup>
import CardListComponent from "@/components/CardListComponent.vue";
import jobs from "@/database/jobs";
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInLeft triple-padded">
        <h1>Career</h1>
      </div>
    </div>
    <CardListComponent :elems="jobs"> </CardListComponent>
  </div>
</template>
<style scoped></style>

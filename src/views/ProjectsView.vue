<script setup>
import CardListComponent from "@/components/CardListComponent.vue";
import projects from "@/database/projects";
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInLeft triple-padded">
        <h1>Projects</h1>
      </div>
    </div>
    <CardListComponent :elems="projects"> </CardListComponent>
  </div>
</template>
<style scoped></style>

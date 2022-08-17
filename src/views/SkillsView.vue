<script setup>
import CardListComponent from "@/components/CardListComponent.vue";
import skills from "@/database/skills";
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInLeft triple-padded">
        <h1>Skills</h1>
      </div>
    </div>
    <CardListComponent :elems="skills"> </CardListComponent>
  </div>
</template>

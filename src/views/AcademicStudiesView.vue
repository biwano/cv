<script setup>
import CardComponent from "@/components/CardComponent.vue";
</script>
<template>
  <div>
    
    <div class="row">
      <div class="one animated bounceInLeft triple-padded">
        <h1>Academic studies</h1>
      </div>
    </div>
    <CardComponent
      img="/images/telecom_sudparis.jpg"
      img-position="right"
      title="TELECOM SudParis"
      date="2003-2006"
      link="https://www.telecom-sudparis.eu/"
    >
    Masters degree in Telecommunications with major in Information Systems Auditing
    </CardComponent>
  </div>
</template>
/images/telecom_sudparis.jpg
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

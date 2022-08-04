<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
        <nav class="nav small-tablet" title="Menu">
          <ul>
          <li><RouterLink to="/">About me</RouterLink></li>
          <li><RouterLink to="/about">Scholar Curriculum</RouterLink></li>
          </ul>
        </nav>
</template>

<style scoped>
.nav{
  width:fit-content;
  float:right;
  background-color: black;
}
.nav a {
  background-color:black;
  color: white;
}
.nav a:hover { 
  background-color:white;
  color: black;
}



</style>

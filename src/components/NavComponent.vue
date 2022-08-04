<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="nav small-tablet" title="Menu">
    <ul>
      <li><RouterLink to="/">About me</RouterLink></li>
      <li>
        <RouterLink to="/scholarcurriculum">Scholar Curriculum</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  width: fit-content;
  float: right;
  background-color: var(--color-secondary);
}
.nav a {
  background-color: var(--color-secondary);
  color: #ddd;
}
.nav a:hover {
  background-color: var(--color-primary);
  color: black;
}
</style>

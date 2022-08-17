<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="nav small-tablet" title="Menu">
    <ul>
      <li><RouterLink to="/">About me</RouterLink></li>
      <li>
        <RouterLink to="/projects">Projects</RouterLink>
      </li>
      <li>
        <RouterLink to="/skills">Skills</RouterLink>
      </li>
      <li>
        <RouterLink to="/career">Career</RouterLink>
      </li>
      <li>
        <RouterLink to="/academic_studies">Studies</RouterLink>
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

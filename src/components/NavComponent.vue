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
      <li>
        <a class="noicon" href="/images/cv.pdf" target="_blank">Resume </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  width: fit-content;
  float: right;
  background-color: var(--color-secondary);
  position: relative;
  color: var(--color-primary);
  min-width: 12px;
  box-shadow: 2px 2px 2px var(--color-secondary);
}
.nav a {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}
.nav a:hover {
  background-color: var(--color-primary);
  color: black;
}
a img {
  height: 32px;
  transition: height 0.4s;
}
</style>

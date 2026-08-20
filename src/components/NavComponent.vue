<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="nav" title="Menu">
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
  background-color: var(--color-secondary);
  color: var(--color-primary);
  min-width: 12px;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  overflow: hidden;
}

.nav ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  display: inline-block;
  padding: 0.25em 1em;
  line-height: 1.5;
  text-decoration: none;
  font-weight: 700;
  border: 0;
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

.nav a:hover,
.nav a:focus {
  background-color: var(--color-primary);
  color: black;
  text-decoration: none;
}

.nav a.router-link-active {
  background-color: var(--button-blue);
  color: #fff;
  font-weight: 700;
}
</style>

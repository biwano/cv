<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInRight triple-padded">
        <h1>Page not found</h1>
        <p>
          That URL doesn't match any page on this site.
          <RouterLink to="/">Back to Home</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

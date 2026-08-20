<template>
  <div class="bounceInUp animated row fixed bottom daddy">
    <div class="align-center">
      Built with
      <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/"
        >Vue.js 3</a
      >
    </div>
  </div>
</template>
<style>
.daddy {
  background-color: var(--color-secondary);
  opacity: 75%;
  padding: 0.5rem 1rem;
  padding-bottom: calc(0.5rem + env(safe-area-inset-bottom, 0px));
}
</style>

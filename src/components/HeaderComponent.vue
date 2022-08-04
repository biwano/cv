<script setup></script>
<template>
  <div class="jumbotron wrapper">
    <img
      alt="Jumbotron"
      src="@/assets/jumbotron.jpg"
      class="jumbotron image row"
    />
    <div class="jumbotron overlay"></div>
    <div class="jumbotron overlay_2"></div>
  </div>
</template>

<style scoped>
.jumbotron.wrapper {
  width: 100%;
  max-height: 300px;
  max-width: 1024px;
  overflow: hidden;
}
.jumbotron.image {
  -webkit-filter: saturate(75%);
  filter: saturate(75%);
}
.jumbotron.overlay {
  position: absolute;
  top: 50%;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    0deg,
    rgb(
      var(--color-secondary-r),
      var(--color-secondary-g),
      var(--color-secondary-b),
      1
    ),
    rgb(
      var(--color-primary-r),
      var(--color-primary-g),
      var(--color-primary-b),
      0
    )
  );
}
.jumbotron.overlay_2 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  color: var(--color-primary);
  width: 50%;
  background: linear-gradient(
    270deg,
    rgb(
      var(--color-secondary-r),
      var(--color-secondary-g),
      var(--color-secondary-b),
      1
    ),
    rgb(
      var(--color-secondary-r),
      var(--color-secondary-g),
      var(--color-secondary-b),
      0
    )
  );
}
</style>

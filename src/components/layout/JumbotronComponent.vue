<template>
  <div class="jumbotron wrapper fade-right">
    <div class="fade-bottom">
      <img
        alt="Bruno Ilponse"
        src="/images/jumbotron.webp"
        class="jumbotron image"
      />
    </div>
  </div>
</template>

<style scoped>
.jumbotron.wrapper {
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
}

.fade-right {
  -webkit-mask-image: linear-gradient(
    to right,
    #000 0%,
    #000 55%,
    transparent 100%
  );
  mask-image: linear-gradient(to right, #000 0%, #000 55%, transparent 100%);
}

.fade-bottom {
  -webkit-mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 25%,
    transparent 60%
  );
  mask-image: linear-gradient(to bottom, #000 0%, #000 25%, transparent 60%);
}

.jumbotron.image {
  display: block;
  /* Intrinsic 640×280 → 4× area (2× each side) */
  width: min(1280px, 100vw);
  height: auto;
  -webkit-filter: saturate(75%);
  filter: saturate(75%);
}
</style>

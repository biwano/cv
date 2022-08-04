<script setup>
import { RouterView } from "vue-router";
import MainNav from "@/components/MainNav.vue";
</script>

<template>
  <header>
    <div class="jumbotron daddy">
       <img alt="Jumbotron" src="@/assets/jumbotron.jpg" class="jumbotron image" />
       <div class="jumbotron overlay">
        <div class="row">
          div class="
        </div>
       </div>
    </div>

    <div class="main daddy">
      <div class="main content">
        <main-nav></main-nav>
      </div>
    </div>
  </header>
  
    <RouterView  v-slot="{ Component }">
    <Transition>
    <component :is="Component" />
    </Transition>
    </RouterView>
  
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.jumbotron.daddy {
  width: 100%;
  position: relative;
}
.jumbotron.image {
  width: 100%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  -webkit-filter: contrast(200%);
}
.jumbotron.overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 1)
  );
}
.main.daddy {
  position: relative;
  width: 100%;
}
.main.content {
  position: absolute;
  top: -100px;
  width: 100%;
}



</style>

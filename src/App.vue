<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
</script>

<template>
  <div class="bigdaddy">
    <HeaderComponent class="bounceInDown animated absolute"></HeaderComponent>
    <div class="animated bounceInRight align-right triple-padded capitalize">
      <h1 class="capitalize">Bruno Ilponse</h1>
      <br />
      <h3>Senior Software Engineer</h3>
      <br />
      <NavComponent></NavComponent>
    </div>
    <div class="main content">
      <div class="clear">
        <RouterView v-slot="{ Component }">
          <Transition>
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
  width: 100%;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.bigdaddy {
  position: relative;
  height: fit-content;
}

.main.content {
  position: relative;
  clear: both;
  text-align: justify;
  min-height: 300px;
  width: 100%;
}
</style>

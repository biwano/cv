<script setup>
import { RouterView } from "vue-router";
import NavComponent from "@/components/NavComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div class="bigdaddy">
    <HeaderComponent class="bounceInDown animated"></HeaderComponent>

    <div class="main content">
      <NavComponent></NavComponent>
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
  top: -100px;
  min-height: 300px;
  width: 100%;
}
</style>

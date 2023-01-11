<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const navNormalElement = ref(null);
const navFixedElement = ref(null);

let scrollWatcher = () => {
  const navNormal = navNormalElement.value.$el;
  const navFixed = navFixedElement.value.$el;
  const rect = navNormal.getBoundingClientRect();
  console.log(rect.bottom);
  if (rect.top < 0) {
    navNormal.classList.add("invisible");
    navFixed.classList.remove("invisible");
  } else {
    navNormal.classList.remove("invisible");
    navFixed.classList.add("invisible");
  }
};

onMounted(() => {
  window.addEventListener("scroll", scrollWatcher);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrollWatcher);
});
</script>

<template>
  <div class="bigdaddy">
    <HeaderComponent class="bounceInDown animated absolute"></HeaderComponent>
    <NavComponent
      ref="navFixedElement"
      class="navFixed invisible"
    ></NavComponent>
    <div class="animated bounceInRight align-right triple-padded capitalize">
      <h1 class="capitalize">Bruno Ilponse</h1>
      <h3>Senior Fullstack Software Developer</h3>
      <div class="social">
        <a
          href="https://www.linkedin.com/in/bruno-ilponse-502414196"
          target="_blank"
          ><i class="fa-brands fa-linkedin-in"></i
        ></a>
      </div>

      <br />
      <NavComponent ref="navNormalElement"></NavComponent>
    </div>
    <div class="main content">
      <RouterView v-slot="{ Component }">
      <div style="position:relative" >
          <Transition>
            <component :is="Component" />
          </Transition>
      </div>
    </RouterView>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  max-width: 1200px; 
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.bigdaddy {
  position: relative;
  height: fit-content;
}

.navFixed {
  position: fixed;
  top: 0px;
  right: 0px;
  margin-right: 30px;
  z-index: 500;
}
.invisible {
  visibility: hidden;
}
.main.content {
  position: relative;
  clear: both;
  text-align: justify;
  min-height: 300px;
  width: 100%;
}
.social {
  position: relative;
  top: -15px;
}

</style>

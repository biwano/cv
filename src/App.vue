<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import JumbotronComponent from "@/components/layout/JumbotronComponent.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";
import NavComponent from "@/components/layout/NavComponent.vue";
import LinkedInIconComponent from "@/components/icons/LinkedInIconComponent.vue";
import FileIconComponent from "@/components/icons/FileIconComponent.vue";
import MailIconComponent from "@/components/icons/MailIconComponent.vue";
import ContactFormComponent from "@/components/ContactFormComponent.vue";

const contactOpen = ref(false);
</script>

<template>
  <div class="bigdaddy">
    <JumbotronComponent
      class="bounceInDown animated absolute"
    ></JumbotronComponent>
    <div class="animated bounceInRight align-right triple-padded capitalize">
      <h1 class="capitalize">Bruno Ilponse</h1>
      <h3>Senior Fullstack Software Developer</h3>
      <div class="title-row">
        <a
          class="social cv-download"
          href="https://www.linkedin.com/in/bruno-ilponse-502414196"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
          <LinkedInIconComponent />
        </a>
        |
        <a
          class="social cv-download"
          href="/images/cv.pdf"
          download="Bruno-Ilponse-CV.pdf"
        >
          CV
          <FileIconComponent />
        </a>
        |
        <a
          class="social cv-download"
          href="#contact"
          role="button"
          @click.prevent="contactOpen = true"
        >
          Contact
          <MailIconComponent />
        </a>
      </div>
    </div>
    <div class="nav-sticky">
      <NavComponent></NavComponent>
    </div>
    <div class="main content">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <FooterComponent></FooterComponent>
    <ContactFormComponent :open="contactOpen" @close="contactOpen = false" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bigdaddy {
  position: relative;
  height: fit-content;
}

.nav-sticky {
  position: sticky;
  top: 0;
  z-index: 500;
  display: flex;
  justify-content: flex-end;
  padding: 0 30px 30px;
  clear: both;
}

.main.content {
  position: relative;
  clear: both;
  text-align: justify;
  width: 100%;
}
.social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1;
  text-decoration: none;
}
h3 {
  margin-bottom: 0.25rem;
  line-height: 1.15;
}
.title-row {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 0.4rem;
}
.cv-download {
  gap: 0.35em;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
</style>

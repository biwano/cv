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
    <a class="skip-to-content" href="#main-content">Skip to content</a>
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
    <div id="main-content" class="main content" tabindex="-1">
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

.skip-to-content {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  z-index: 1000;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;
}

.skip-to-content:focus {
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  width: auto;
  height: auto;
  margin: 0;
  padding: 0.5em 1em;
  clip: auto;
  overflow: visible;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  color: var(--color-primary);
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
  padding: 0 30px;
  clear: both;
}

.main.content {
  position: relative;
  clear: both;
  text-align: justify;
  width: 100%;
}

.main.content:focus {
  outline: none;
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

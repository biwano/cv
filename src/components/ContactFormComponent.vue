<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  open: { type: Boolean, default: false },
});

const emit = defineEmits(["close"]);

const name = ref("");
const email = ref("");
const message = ref("");
const botcheck = ref(false);
const status = ref("idle"); // idle | sending | success | error
const errorMessage = ref("");

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function close() {
  emit("close");
}

function onKeydown(event) {
  if (event.key === "Escape" && props.open) {
    close();
  }
}

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      status.value = "idle";
      errorMessage.value = "";
    }
  },
);

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
});

async function onSubmit() {
  if (botcheck.value) {
    status.value = "success";
    return;
  }

  if (!accessKey) {
    status.value = "error";
    errorMessage.value =
      "Contact form is not configured yet. Please try again later.";
    return;
  }

  status.value = "sending";
  errorMessage.value = "";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "CV site contact",
        from_name: "Bruno Ilponse CV",
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim(),
        botcheck: botcheck.value,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Submission failed");
    }

    status.value = "success";
    name.value = "";
    email.value = "";
    message.value = "";
  } catch (err) {
    status.value = "error";
    errorMessage.value =
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again.";
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="contact-overlay"
      role="presentation"
      @click.self="close"
    >
      <div
        class="contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        <div class="contact-header">
          <h2 id="contact-title">Contact</h2>
          <button
            type="button"
            class="contact-close"
            aria-label="Close contact form"
            @click="close"
          >
            ×
          </button>
        </div>

        <p v-if="status === 'success'" class="contact-success" role="status">
          Thanks — your message was sent. I’ll get back to you soon.
        </p>

        <form v-else class="contact-form" @submit.prevent="onSubmit">
          <label>
            Name
            <input
              v-model="name"
              type="text"
              name="name"
              required
              autocomplete="name"
            />
          </label>
          <label>
            Email
            <input
              v-model="email"
              type="email"
              name="email"
              required
              autocomplete="email"
            />
          </label>
          <label>
            Message
            <textarea
              v-model="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </label>

          <!-- Honeypot: leave unchecked; hidden from users -->
          <input
            v-model="botcheck"
            type="checkbox"
            name="botcheck"
            class="botcheck"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />

          <p v-if="status === 'error'" class="contact-error" role="alert">
            {{ errorMessage }}
          </p>

          <div class="contact-actions">
            <button type="button" class="button" @click="close">Cancel</button>
            <button
              type="submit"
              class="button blue"
              :disabled="status === 'sending'"
            >
              {{ status === "sending" ? "Sending…" : "Send" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.contact-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: rgba(0, 0, 0, 0.55);
}

.contact-dialog {
  width: min(28rem, 100%);
  background: var(--color-secondary) url("/images/background.webp") repeat;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 1.25rem 1.35rem 1.35rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
}

.contact-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.contact-header h2 {
  margin: 0;
  font-size: 1.5em;
}

.contact-close {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--color-primary);
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  padding: 0 0.15rem;
}

.contact-close:hover,
.contact-close:focus {
  color: var(--link-hover);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-weight: 700;
}

.contact-form input,
.contact-form textarea {
  font: inherit;
  color: var(--color-secondary);
  background: #fff;
  border: 1px solid var(--button-border);
  border-radius: 4px;
  padding: 0.45em 0.6em;
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid var(--button-blue);
  outline-offset: 1px;
}

.botcheck {
  position: absolute;
  left: -9999px;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
}

.contact-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 0.25rem;
}

.contact-actions .button:disabled {
  opacity: 0.7;
  cursor: wait;
}

.contact-success {
  margin: 0.5rem 0 0;
}

.contact-error {
  margin: 0;
  color: #e74c3c;
  font-weight: 700;
}
</style>

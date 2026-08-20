<script setup>
defineProps(["elems"]);
</script>

<template>
  <ol class="timeline">
    <li
      v-for="(elem, key) of elems"
      :key="key"
      class="timeline-item animated bounceInRight"
    >
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-body">
        <div class="timeline-heading">
          <img
            v-if="elem.img"
            class="timeline-logo"
            :src="elem.img"
            :alt="elem.title"
          />
          <div class="timeline-meta">
            <h3>
              <a
                v-if="elem.link"
                :href="elem.link"
                target="_blank"
                rel="noopener noreferrer"
                >{{ elem.title }}</a
              >
              <span v-else>{{ elem.title }}</span>
            </h3>
            <b v-if="elem.date" class="timeline-date">{{ elem.date }}</b>
          </div>
        </div>
        <div class="timeline-content">
          <span v-html="elem.content"></span>
        </div>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0 30px 30px;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  left: calc(30px + 0.55rem);
  top: 0.4rem;
  bottom: 1.5rem;
  width: 2px;
  background: var(--color-primary);
  opacity: 0.35;
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 1.1rem 1fr;
  column-gap: 1.25rem;
  padding-bottom: 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  width: 0.85rem;
  height: 0.85rem;
  margin-top: 0.35rem;
  border-radius: 50%;
  background: var(--button-blue);
  border: 2px solid var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-secondary);
  z-index: 1;
}

.timeline-heading {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.timeline-logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
  flex-shrink: 0;
}

.timeline-meta h3 {
  margin: 0 0 0.15rem;
}

.timeline-date {
  display: block;
  font-size: 0.95rem;
}

.timeline-content {
  text-align: left;
}

@media (max-width: 767px) {
  .timeline {
    padding: 0 15px 30px;
  }

  .timeline::before {
    left: calc(15px + 0.55rem);
  }

  .timeline-heading {
    align-items: flex-start;
  }

  .timeline-logo {
    width: 44px;
    height: 44px;
  }
}
</style>

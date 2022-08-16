<script setup>
import CardComponent from "@/components/CardComponent.vue";
</script>
<template>
  <div>
    <div class="row">
      <div class="one animated bounceInLeft triple-padded">
        <h1>Academic studies</h1>
      </div>
    </div>
    <CardComponent
      img="/images/telecom_sudparis.jpg"
      img-position="left"
      title="TELECOM SudParis"
      date="2003-2006"
      link="https://www.telecom-sudparis.eu/"
    >
      Masters degree in Telecommunications with major in Information Systems
      Auditing
    </CardComponent>
    <CardComponent
      img="/images/baimbridge.jpg"
      img-position="right"
      title="Baimbridge High School"
      date="2000-2003"
      link="https://lgtbaimbridge.fr/"
    >
      Intensive fondation degree for French Engineering schools
    </CardComponent>
    <CardComponent
      img="/images/providence.jpg"
      img-position="left"
      title="Providence High School"
      date="1998-2000"
      link="https://www.education.gouv.fr/annuaire/97139/les-abymes/lycee/9710921z/lycee-general-et-technologique-felix-proto.html"
    >
      Bachelor level degree with Mathematics and Physics options.
    </CardComponent>
  </div>
</template>
/images/telecom_sudparis.jpg
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

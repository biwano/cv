<script setup>
import CardComponent from "@/components/CardComponent.vue";
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInLeft triple-padded">
        <h1>Studies</h1>
      </div>
    </div>
    <CardComponent
      img="/images/brain.jpg"
      img-position="right"
      title="Advanced training"
    >
      <!-- Kubernetes -->
      <p>
        <b>2021, 14h</b> :
        <a
          href="https://themanis.fr/formations/informatique/virtualisation/kubernetes-avance-2/"
          target="_blank"
          >Advanced Kubernetes training</a
        >
        by <a href="https://themanis.fr/" target="_blank">TheManis</a>
      </p>

      <!-- Anglais -->
      <p>
        <b>2021, 26h</b> : Advanced English courses by
        <a href="https://focalpoint-languages.com/" target="_blank"
          >Focalpoint</a
        >
        concluded with <b>C1 level</b> evaluation
      </p>

      <!-- Machine learning -->
      <p>
        <b>2020, 28h</b> : Machine learning for data science by
        <a
          href="https://www.insa-toulouse.fr/fr/index.html
"
          target="_blank"
          >INSA Toulouse</a
        >
      </p>

      <!-- Formeo management -->
      <p>
        <b>2020, 18.5h </b> : Management basics by
        <a
          href="https://formeo.fr
"
          target="_blank"
          >FORMEO</a
        >
      </p>

      <!-- Formeo oracle -->
      <p>
        <b>2016, 35h </b> : Oracle 11G database administration by
        <a
          href="https://www.iform.fr/
"
          target="_blank"
          >iForm</a
        >
      </p>
    </CardComponent>
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
      img-position="left"
      title="Baimbridge High School"
      date="2000-2003"
      link="https://lgtbaimbridge.fr/"
    >
      Intensive fondation degree in Mathematics and Physics for French
      Engineering schools
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

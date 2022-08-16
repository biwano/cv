<script setup>
import CardComponent from "@/components/CardComponent.vue";
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="one animated bounceInLeft triple-padded">
        <h1>Career</h1>
      </div>
    </div>
    <CardComponent
      img="/images/isae.png"
      img-position="left"
      title="ISAE-SUPAERO"
      link="https://www.isae-supaero.fr/en/"
    >
      <b>2019 - now</b> : EdTech architect and development team leader<br />
      <b>2015 - 2019</b> : Fullstack software developer<br />
    </CardComponent>
    <CardComponent
      img="/images/quadran.png"
      img-position="left"
      title="QUADRAN"
      link="https://www.quadran.eu/"
      date="2011 - 2015"
    >
      Application performance consultant for
      <a href="https://www.airbus.com/en" target="_blank">Airbus</a><br />
      Architect and fullstack software developer for the
      <a href="https://www.quadran.eu/appyuser/">appYuser</a> application<br />
    </CardComponent>

    <CardComponent
      img="/images/sopra.jpg"
      img-position="left"
      title="Sopra Steria"
      link="https://www.soprasteria.com/fr"
      date="2010 - 2011"
    >
      JAVA Software developer in the banking industry
    </CardComponent>

    <CardComponent
      img="/images/silicom.png"
      img-position="left"
      title="Silicom"
      link="https://www.silicom.fr"
      date="2010 - 2011"
    >
      Product Line Leader - Responsible for enforcing <a href="https://www.itlibrary.org/" target="_blank">ITIL</a> processes around networking equipments supervision tools and solving crisis events at <a href="https://sfr.fr" target="_blank">SFR</a>.
    </CardComponent>

    <CardComponent
      img="/images/ait.png"
      img-position="left"
      title="AIT Consulting"
      link="https://www.listcompany.org/Ait_Consulting_Ltd_Info.html"
      date="2006 - 2009"
    >
      IT and Telecom consultant for <a href="https://discoverflow.co/" target="_blank">UTS Caraïbes</a> (now Flow) and the <a href="https://www.sbcwi.com/" target="_blank">Sapphire Beach Club resort</a>
    </CardComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mode = ref("short");
</script>

<template>
  <div class="container about">
    <div class="row">
      <div class="one animated bounceInRight triple-padded">
        <div class="about-tabs" aria-label="About detail level">
          <button
            type="button"
            class="button"
            :class="{ blue: mode === 'short' }"
            :aria-pressed="mode === 'short'"
            @click="mode = 'short'"
          >
            In short
          </button>
          <button
            type="button"
            class="button"
            :class="{ blue: mode === 'full' }"
            :aria-pressed="mode === 'full'"
            @click="mode = 'full'"
          >
            Full story
          </button>
        </div>
      </div>
    </div>

    <div v-if="mode === 'short'" class="about-short">
      <div class="row">
        <div class="one half animated bounceInLeft triple-padded">
          <h1>About me</h1>
          <p>
            Senior fullstack developer with <b>15 years</b> in software, after
            an early start with computers at nine and a path through telecoms
            into programming.
          </p>
          <ul>
            <li>
              Born in <b>1982</b> in France; learned to code by copying magazine
              listings with my brother, then <b>C/C++</b> and OpenGL games.
            </li>
            <li>
              Engineering degree in Telecommunications, then four years as a
              telecoms consultant before moving fully into software.
            </li>
            <li>
              Built products in <b>consulting and software companies</b>,
              <b>educational institutions</b>, and
              <b>decentralized autonomous organizations</b>.
            </li>
            <li>
              Not tied to one language or framework — strongest skill is the
              <b>ability to adapt</b>.
            </li>
          </ul>
        </div>
        <div class="one half animated bounceInRight triple-padded">
          <h1>Development languages</h1>
          <p>
            Fullstack on every project — backend and frontend — across many
            languages and frameworks.
          </p>
          <ul>
            <li>
              Web UI:
              <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>Typescript</b>,
              <b>Vue.js</b>, <b>Angular</b>, <b>React</b>
            </li>
            <li>
              <b>Solidity</b> smart contracts (ERC20, NFTs, DeFi) with
              <b>Forge</b>/<b>Foundry</b>, plus <b>web3.js</b> and <b>viem</b>
            </li>
            <li>
              <b>JAVA</b> with Spring and VertX; deployed on Tomcat, JBoss,
              Jetty
            </li>
            <li>
              <b>PHP</b> via Drupal, Wordpress, and Laravel; Apache and Nginx
            </li>
            <li><b>Ruby</b> / Rails modules for Redmine</li>
            <li>
              <b>Python</b> with Django and django-rest-framework (often with
              Vue.js frontends)
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="one half animated bounceInLeft triple-padded">
          <h1>System administration</h1>
          <p>
            Small teams meant owning ops as well as code — installation,
            configuration, and CI.
          </p>
          <ul>
            <li>
              Comfortable with <b>Centos 7 &amp; 8</b>; occasional
              <b>Debian</b> work
            </li>
            <li>
              Configured <b>Apache</b>, <b>Nginx</b>, Tomcat, Jenkins, and
              Sonarqube
            </li>
            <li>CI on recent projects with <b>Jenkins</b> and <b>Github</b></li>
            <li>
              Ran a privately hosted <b>Kubernetes</b> cluster for a production
              microlearning app
            </li>
          </ul>
        </div>
        <div class="one half animated bounceInRight triple-padded">
          <h1>Other skills</h1>
          <p>
            Consulting background and small-company roles built soft skills
            alongside the stack.
          </p>
          <ul>
            <li>Requirement analysis, project management, change management</li>
            <li>
              As technical lead, shaped an <b>Agile</b> process inspired by
              <b>Scrum</b> for the team’s constraints
            </li>
          </ul>
          <h1>Hobbies</h1>
          <ul>
            <li>Roller hockey</li>
            <li>Board games</li>
            <li>Macro economy</li>
            <li>Video games</li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else class="about-full">
      <div class="row">
        <div class="one half animated bounceInLeft triple-padded">
          <h1>About me</h1>
          <p>
            <b>Born in 1982</b> in France, I started getting interested in
            computers when I was <b>nine</b> as my older brother got an Amstrad
            CPC 6128 for his birthday. Soon after, I embarked on the
            'programming' journey with him by shamelessly copying code found in
            computer magazines.
          </p>
          <p>
            Time passed and I started learning C then <b>C++</b> on an intel
            80386 mainly trying to reproduce games like Bomberman. As the 3D
            acceleration cards price started to fall in the 90s with the like of
            the Voodoo 3dfx I created some games using OpenGL and understood the
            importance of mathematics at a practical level with matrix calculus
            in particular. This led me to prepare entry for the French
            Engineering schools providing me a degree in ... Telecommunications.
            Indeed, it was all the rage at the time and I got dragged into the
            hype.
          </p>
          <p>
            Nevertheless, programming tracked me down, and after four years as a
            consultant in Telecommunications, I started developing
            professionally in various entities such as
            <b>consulting and software development companies</b>,
            <b>educational institutions</b> and
            <b>decentralized autonomous organizations</b>.
          </p>
          <p>
            Having worked now for <b>15 years</b> into
            <b>software development</b> activities and in many different
            situations, I feel like I have not even started scratching the
            surface of this field. Consequently, I do not consider myself an
            expert of any particular language nor framework. However I feel like
            I have tested my <b>ability to adapt</b> to the limit.
          </p>
        </div>
        <div class="one half animated bounceInRight triple-padded">
          <h1>Development languages</h1>
          <p>
            Working in various companies gave me the opportunity to use many
            languages and frameworks.
          </p>
          <p>
            In all my projects, I developed both the back-end and the front-end.
            This enabled me to also progress in the various Web technologies,
            ie.
            <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>Typescript</b>,
            <b>Vue.js</b>, <b>Angular</b>, and lately <b>React</b>.
          </p>
          <p>
            In recent years, I also worked with <b>Solidity</b> to develop smart
            contracts on Ethereum and compatible chains, covering ERC20 tokens,
            NFTs and DeFi. I used tools such as <b>Forge</b> and <b>Foundry</b>,
            and integrated contracts with web apps using <b>web3.js</b> and
            <b>viem</b>.
          </p>
          <p>
            I used the <b>JAVA</b> programming language in many contexts, first
            using JSP and servlets, then <b>Spring</b> and
            <b>VertX frameworks</b>. I also deployed applications on various
            application servers such as <b>Tomcat</b>, <b>JBoss</b> and
            <b>Jetty</b>
          </p>
          <p>
            Using CMSes and Frameworks like Drupal, Wordpress and Laravel, I am
            also familiar with <b>PHP</b> and web server configuration such as
            Apache and Nginx.
          </p>
          <p>
            I also developed modules for Redmine which allowed me to dip my toes
            into <b>Ruby and Rails</b>.
          </p>
          <p>
            I created many applications and web-services using <b>Django</b> and
            sometimes django-rest-framework for the backend and Vue.js for the
            frontend. Consequently, I acquired serious experience with
            <b>Python</b> in general.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="one half animated bounceInLeft triple-padded">
          <h1>System administration</h1>
          <p>
            I mostly worked in small teams. Thus, I had to acquire a set of
            system administration skills to get things done.
          </p>
          <p>
            In particular I feel confident with <b>Centos 7 &amp; 8</b> system
            administration, application installation and configuration in
            general. I also worked on some occasion on the <b>Debian</b>
            operating system.
          </p>
          <p>
            Particular applications I remember having configured include
            <b>Apache</b>, <b>Nginx</b>, as web-servers, reverse proxies or WSGI
            servers but also <b>Tomcat</b>, <b>Jenkins</b>, <b>Sonarqube</b>.
          </p>
          <p>
            Moreover I worked on configuring the continuous integration systems
            on my latest projects using <b>Jenkins</b> and <b>Github</b>.
          </p>
          <p>
            Having installed and configured a small privately hosted
            <b>Kubernetes</b>
            cluster in the context of a production grade microlearning
            application, I also feel confident working with that technology.
          </p>
        </div>
        <div class="one half animated bounceInRight triple-padded">
          <h1>Other skills</h1>
          <p>
            Since I worked in small companies and having a background in
            consulting, I could develop other skills, in particular: Requirement
            analysis, Project management and Change management.
          </p>
          <p>
            Most recently, as the technical lead of my latest project. I crafted
            a tailored <b>Agile</b> framework inspired from <b>Scrum</b> but
            adapted to the very specific environment the team is working in.
          </p>
        </div>
        <div class="one half animated bounceInRight triple-padded">
          <h1>Hobbies</h1>
          <p>
            In no specific order: Roller hockey, Board games, Macro economy,
            Video games.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.about-tabs .button {
  margin: 0;
  text-transform: uppercase;
  font-size: smaller;
  cursor: pointer;
}

.about-short {
  text-align: left;
}

.about-short ul {
  margin: 0.5rem 0 1.25rem;
  padding-left: 1.25rem;
}

.about-short li {
  margin-bottom: 0.45rem;
}
</style>

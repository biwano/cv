/**
 * ATS-shaped CV copy. Keep in sync with src/database/jobs.js + studies.js
 * (and existing FR translations). Dates: YYYY – YYYY | YYYY – Present/Présent.
 *
 * Job titles = role only. Tech stacks, clients, and products go in `details`
 * (and Skills), not in parentheses in the title.
 * Every experience entry: exactly one duty bullet in details.en / details.fr.
 */

/** @typedef {{ title: { en: string, fr: string }, company: string, dates: { en: string, fr: string }, details: { en: [string], fr: [string] } }} Role */

/** @type {Role[]} */
export const experience = [
  {
    title: { en: "Fullstack developer", fr: "Développeur fullstack" },
    company: "Carbonmark",
    dates: { en: "2023 – Present", fr: "2023 – Présent" },
    details: {
      en: [
        "Built the carbon credit marketplace frontend and backend and its blockchain layer (Next.js, Fastify, Solidity).",
      ],
      fr: [
        "Développement du frontend, du backend et de la couche blockchain d’une marketplace de crédits carbone (Next.js, Fastify, Solidity).",
      ],
    },
  },
  {
    title: { en: "Front end developer", fr: "Développeur front-end" },
    company: "KlimaDAO",
    dates: { en: "2021 – 2023", fr: "2021 – 2023" },
    details: {
      en: [
        "Built front-end features for a carbon-focused DeFi protocol (React, web3).",
      ],
      fr: [
        "Développement front-end pour un protocole DeFi orienté carbone (React, web3).",
      ],
    },
  },
  {
    title: { en: "Front end developer", fr: "Développeur front-end" },
    company: "OlympusDAO",
    dates: { en: "2021", fr: "2021" },
    details: {
      en: [
        "Built front-end features for a DeFi protocol UI (React, web3).",
      ],
      fr: [
        "Développement front-end pour l’interface d’un protocole DeFi (React, web3).",
      ],
    },
  },
  {
    title: { en: "Technical advisor", fr: "Conseiller technique" },
    company: "ISAE-SUPAERO",
    dates: { en: "2022 – Present", fr: "2022 – Présent" },
    details: {
      en: [
        "Advised on EdTech platforms and software architecture after leading the NaaS stack.",
      ],
      fr: [
        "Conseil sur les plateformes EdTech et l’architecture logicielle après avoir mené la stack NaaS.",
      ],
    },
  },
  {
    title: {
      en: "EdTech architect and development team leader",
      fr: "Architecte EdTech et responsable d’équipe de développement",
    },
    company: "ISAE-SUPAERO",
    dates: { en: "2019 – 2022", fr: "2019 – 2022" },
    details: {
      en: [
        "Designed the NaaS EdTech architecture, led five developers, and ran private Kubernetes hosting with Jenkins CI/CD.",
      ],
      fr: [
        "Conception de l’architecture EdTech NaaS, management de cinq développeurs, et hébergement Kubernetes privé avec CI/CD Jenkins.",
      ],
    },
  },
  {
    title: {
      en: "Fullstack software developer",
      fr: "Développeur logiciel fullstack",
    },
    company: "ISAE-SUPAERO",
    dates: { en: "2015 – 2019", fr: "2015 – 2019" },
    details: {
      en: [
        "Built Cosinus account management and Redmine-based IT services (Python, Vue.js, Rails).",
      ],
      fr: [
        "Développement de Cosinus (gestion de comptes) et de services IT basés sur Redmine (Python, Vue.js, Rails).",
      ],
    },
  },
  {
    title: {
      en: "Part-time teacher in web development (master’s level)",
      fr: "Enseignant à temps partiel en développement web (niveau master)",
    },
    company: "ISAE-SUPAERO",
    dates: { en: "2014 – 2025", fr: "2014 – 2025" },
    details: {
      en: [
        "Taught web development to master’s-level engineering students.",
      ],
      fr: [
        "Enseignement du développement web à des étudiants ingénieurs de niveau master.",
      ],
    },
  },
  {
    title: {
      en: "Application performance consultant",
      fr: "Consultant en performance applicative",
    },
    company: "QUADRAN",
    dates: { en: "2011 – 2015", fr: "2011 – 2015" },
    details: {
      en: ["Application performance consulting for Airbus."],
      fr: ["Conseil en performance applicative pour Airbus."],
    },
  },
  {
    title: {
      en: "Architect and fullstack software developer",
      fr: "Architecte et développeur logiciel fullstack",
    },
    company: "QUADRAN",
    dates: { en: "2011 – 2015", fr: "2011 – 2015" },
    details: {
      en: [
        "Architected and built the appYuser RUM product (Java, Elasticsearch, Angular).",
      ],
      fr: [
        "Architecture et développement du produit RUM appYuser (Java, Elasticsearch, Angular).",
      ],
    },
  },
  {
    title: {
      en: "Java / J2EE developer",
      fr: "Développeur Java / J2EE",
    },
    company: "SOPRA-STERIA",
    dates: { en: "2011", fr: "2011" },
    details: {
      en: ["Java / J2EE development with Spring and Hibernate."],
      fr: ["Développement Java / J2EE avec Spring et Hibernate."],
    },
  },
  {
    title: { en: "Product line leader", fr: "Responsable de ligne de produits" },
    company: "SILICOM",
    dates: { en: "2010 – 2011", fr: "2010 – 2011" },
    details: {
      en: [
        "Enforced ITIL processes around networking equipment supervision tools and crisis events at SFR (now Neverhack France).",
      ],
      fr: [
        "Application des processus ITIL autour des outils de supervision d’équipements réseau et résolution d’incidents de crise chez SFR (désormais Neverhack France).",
      ],
    },
  },
  {
    title: {
      en: "IT and telecom consultant",
      fr: "Consultant IT et télécoms",
    },
    company: "AIT Consulting",
    dates: { en: "2006 – 2009", fr: "2006 – 2009" },
    details: {
      en: [
        "Consulting for UTS Caraïbes (now Flow) and the Sapphire Beach Club resort.",
      ],
      fr: [
        "Conseil pour UTS Caraïbes (aujourd’hui Flow) et le resort Sapphire Beach Club.",
      ],
    },
  },
];

export const education = [
  {
    school: { en: "TELECOM SudParis", fr: "TELECOM SudParis" },
    dates: "2003 – 2006",
    description: {
      en: "Master’s degree in Telecommunications with major in Information Systems Auditing.",
      fr: "Master en télécommunications avec spécialisation en audit des systèmes d’information.",
    },
  },
  {
    school: { en: "Baimbridge High School", fr: "Lycée Baimbridge" },
    dates: "2000 – 2003",
    description: {
      en: "Intensive foundation degree in Mathematics and Physics for French engineering schools.",
      fr: "Classes préparatoires intensives en mathématiques et physique pour les écoles d’ingénieurs françaises.",
    },
  },
  {
    school: { en: "Providence High School", fr: "Lycée Providence" },
    dates: "1998 – 2000",
    description: {
      en: "Bachelor-level degree with Mathematics and Physics options.",
      fr: "Baccalauréat scientifique options mathématiques et physique.",
    },
  },
];

export const training = [
  {
    en: "Advanced Kubernetes training — 14h — TheManis",
    fr: "Formation Kubernetes avancé — 14h — TheManis",
  },
  {
    en: "Advanced English courses — 26h — Focalpoint (C1)",
    fr: "Cours d’anglais avancé — 26h — Focalpoint (C1)",
  },
  {
    en: "Machine learning for data science — 28h — INSA Toulouse",
    fr: "Machine learning pour la data science — 28h — INSA Toulouse",
  },
  {
    en: "Management basics — 18.5h — FORMEO",
    fr: "Bases du management — 18,5h — FORMEO",
  },
  {
    en: "Oracle 11G database administration — 35h — iForm",
    fr: "Administration de bases de données Oracle 11G — 35h — iForm",
  },
];

/** Earliest career start year (from roles / jobs.js). */
export const careerStartYear = 2006;

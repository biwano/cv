/** UI chrome + FR hobbies. Section titles are ATS-standard (do not rename casually). */
export const ui = {
  en: {
    lang: "en",
    htmlFile: "cv.html",
    pdfFile: "cv.pdf",
    otherHtml: "cv-fr.html",
    otherLabel: "FR",
    documentTitle: "Bruno Ilponse — CV",
    ariaLabel: "Curriculum Vitae",
    print: "Print",
    downloadPdf: "Download PDF",
    experienceYears: (n) => `Experience: ${n} Years`,
    sections: {
      experience: "Experience",
      education: "Education",
      expertise: "Expertise",
      skills: "Skills",
      training: "Recent Training",
      hobbies: "Hobbies",
    },
    skillGroups: {
      development: "Development",
      databases: "Databases",
      tools: "Tools",
      systems: "Systems",
    },
  },
  fr: {
    lang: "fr",
    htmlFile: "cv-fr.html",
    pdfFile: "cv-fr.pdf",
    otherHtml: "cv.html",
    otherLabel: "EN",
    documentTitle: "Bruno Ilponse — CV",
    ariaLabel: "Curriculum Vitae",
    print: "Imprimer",
    downloadPdf: "Télécharger le PDF",
    experienceYears: (n) => `Expérience : ${n} ans`,
    sections: {
      experience: "Expérience",
      education: "Formation",
      expertise: "Expertise",
      skills: "Compétences",
      training: "Formations récentes",
      hobbies: "Loisirs",
    },
    skillGroups: {
      development: "Développement",
      databases: "Bases de données",
      tools: "Outils",
      systems: "Systèmes",
    },
  },
};

export const hobbies = {
  en: ["Roller hockey", "Board games", "CrossFit"],
  fr: ["Roller hockey", "Jeux de société", "CrossFit"],
};

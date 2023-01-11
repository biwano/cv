export default {
  naas: {
    category: "project",
    title: "Nuggets as a Service",
    img: "/images/naas.png",
    position: "left",
    link: "https://online.isae.fr/resources/naas/index.html",
    date: "2019 - now",
    content: `The {naas} ecosystem is a set of applications designed to enable the creation and publication of reusable educational content.
    This ecosystem includes a webservice server written in JAVA with the {vertx} framework,
    A generic {microlearning} server written in Python for the backend and {vuejs} for the frontend that enable visualizing the content
    a PHP content editor based on {drupal}, a {moodle} activity plugin that facilitates importing the content,
    a statistics server leveraging {elasticsearch} for providing content usage statistics.<br/>
    For this project, I designed and developed the software architecture (based on the technologies above), the hosting infrastructure based on a private dedicated {kubernetes} cluster, the continuous integration and deployment tools with {jenkins} and {sonarqube} and as the project grew, I also led a team of 5 developers.
    `,
  },
  web3: {
    category: "project",
    title: "Web3",
    img: "/images/metamask.png",
    link: "https://fr.wikipedia.org/wiki/Web3",
    position: "right",
    date: "2021 - now",
    content: `I started studying blockchains during the rise of decentralized finance in 2020. I submitted bug fixes or small features for some of the web3 applications I was trying and naturaly got involved with the development teams.
    These pieces of code are usually produced with {react} and or {nextjs}. Some of the works I have done include devevloping web interfaces to smart contracts, implementing multilinguism with {lingui} and {translationio}, setting up the {sentry} error logging frameworks.
    `,
  },
  cosinus: {
    category: "project",
    title: "Cosinus",
    img: "/images/isae.png",
    position: "left",
    date: "2015 - 2019",
    content: `Cosinus is an application that enables {isae-supaero} students and employees to manage their account.<br/>
    In this instance I developped for the backend a generic abstraction in {python} to interact with the various infrastructure services ({oracle} databases, {ldap}, business applications). The frontend was based on {vuejs}.
    `,
  },
  redmine: {
    category: "project",
    title: "Redmine",
    position: "right",
    img: "/images/redmine.png",
    link: "https://www.redmine.org/",
    date: "2015 - 2019",
    content: `I developped a series of applications based on redmine for the {isae-supaero}. {redmine} is a project management application written in {rails}. Its strong side is that it can be easily extended through plugins and offers application programming interfaces.
    In particular, I setup a ticketing service for IT issues which encountered a great success and incited the deployment of this application throughout the organisation.
    `,
  },
  appyuser: {
    category: "project",
    title: "appYuser",
    img: "/images/appyuser.png",
    position: "left",
    date: "2011 - 2015",
    link: "https://www.quadran.eu/appyuser/",
    content: `As I was working as a performance consultant at {airbus}. {quadran} wanted to launch a tool to industrialize user satisfaction evaluation {apdex}.
    I designed a system based on a {javascript} client used to capture application performance from the browser, a {java} server to store the data in an {elasticsearch} database and a webclient written in {angular} for visualizing this data. It was my first time working with reactive javascript technology and what a mindblower it was!
    `,
  },
  litiges: {
    category: "project",
    title: "Litiges",
    position: "right",
    date: "2010 - 2011",
    content: `I took part on the development of Litiges, an application written in {spring} by a team of five. The main thing I learned from this experience is to carefully choose your development tools to have fast compilation cycles. Web developers should not be waiting for code to compile.`,
  },
  "mobile-number-portability": {
    category: "project",
    title: "Mobile number portability",
    position: "left",
    date: "2006 - 2008",
    content: `At the time the French Telecommunications Authority, {arcep} imposed that the various operators on the French territory aggreed on a mobile number portability protocol. {uts} required help from {ait-consulting} to handle this project.
    For this mission, I was {uts} representative at the inter-operator working groups to define the technical and business protocols. I was also coordinating {uts} teams and subcontractors to develop the necessary software applications and hardware configurations to support the protocol.`,
  },
  "mobile-number-licences": {
    category: "project",
    title: "Mobile number frequency licences",
    position: "right",
    date: "2007 - 2009",
    content: `During my years at {ait-consulting} we succesfully applied for Mobile Number Frequency Licences on the territories of Guadeloupe, Martinique and Guyana.
    My role in this project was to design and negotiate the hardware infrastructure with contractors, plan the signal coverage of the territories and help establish the business model.`,
  },
};

import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
// import expressicon from "../../assets/icons/expressicon.svg";
// import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
// import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
// import mongodbicon from "../../assets/icons/mongoicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import AntdIcon from "../../assets/icons/ant-design.1024x1023.png";
import AgGrid from "../../assets/icons/AgGrid.png";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
// import SkillsX from "../../assets/img/skillsx.jpeg";
import interfaceImg from "../../assets/img/Interface.png";
// import ShipSafeNetwork from "../../assets/img/shipsafenetwork.jpg";
import reduxIcon from "../../assets/icons/redux.1024x971.png";
import Canonizer from "../../assets/img/Canonizer.png";
import Parallax from "../../assets/img/Parallax.png";
import SteelAndPipes from "../../assets/img/Steel_and_Pipes.png";
import profilepicture from "../img/ShahbazRamzan.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Shahbaz Ramzan",
    en: "Hi, I'm Shahbaz Ramzan",
  },
  subtitle: "React Developer ",
  description: {
    de: "Ich bin Shahbaz Ramzan, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Shahbaz Ramzan, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Canonizer",
    description:
      "Das Lernziel dieses Projekts ist es, praktische Erfahrungen in der plattformübergreifenden und responsiven UI-Entwicklung mit React Js, Antd und Redux zu sammeln.",
    description_EN:
      "The learning outcome of this project is to have hands-on experience of cross-platform and responsive UI development in React Js,Next Js Antd,Tailwind and Redux.",

    technologies: [
      // { name: "Html", icon: htmlicon },
      // { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Next Js", icon: nextjsiconwhite },
      { name: "React", icon: reacticon },
      { name: "Redux", icon: reduxIcon },
      { name: "Antd", icon: AntdIcon },
      { name: "Tailwind", icon: tailwindcssicon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      // { name: "Axios", icon: axiosicon },
      // { name: "MongoDB", icon: mongodbicon },
      // { name: "Express", icon: expressiconwhite },
      // { name: "Node.js", icon: nodejsicon },
      // { name: "Figma", icon: figmaicon },
    ],
    image: Canonizer,
    deploymenturl: "https://canonizer.com",
    githuburl: "https://github.com/the-canonizer/canonizer-3.0-frontend",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Parallax APP",
    description:
      "Das Lernziel dieses Projekts ist es, praktische Erfahrungen in der plattformübergreifenden und responsiven UI-Entwicklung mit React Js, Antd und Redux zu sammeln.",
    description_EN:
      "The learning outcome of this project is to have hands-on experience of cross-platform and responsive UI development in React Js, Antd, and Redux.",

    technologies: [
      // { name: "Html", icon: htmlicon },
      // { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Redux", icon: reduxIcon },
      { name: "Antd", icon: AntdIcon },
      { name: "Ag Grid", icon: AgGrid },
      // { name: "JWT & Bcrypt", icon: jwticon },
      // { name: "Axios", icon: axiosicon },
      // { name: "MongoDB", icon: mongodbicon },
      // { name: "Express", icon: expressiconwhite },
      // { name: "Node.js", icon: nodejsicon },
      // { name: "Figma", icon: figmaicon },
      // { name: "Render", icon: rendericon },
    ],
    image: Parallax,
    deploymenturl: "https://www.corpguidance.net",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Steel And Pipes",
    description:
      "Das Lernziel dieses Projekts ist es, praktische Erfahrungen mit responsiven Benutzeroberflächen und wiederverwendbarem Code unter Verwendung von React JS, Antd, Redux und AgGrid zu sammeln.",
    description_EN:
      "The learning outcome of this project is to have hands-on experience of responsive UI and reusable code using React Js, Antd, Redux, AgGrid.",
    technologies: [
      // { name: "Html", icon: htmlicon },
      // { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      // { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Redux", icon: reduxIcon },
      { name: "Antd", icon: AntdIcon },
      // { name: "Redux", icon: reduxIcon },
      // { name: "Figma", icon: figmaicon },
      // { name: "Canva", icon: canvaicon },
      // { name: "Netlify", icon: netlifyicon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: SteelAndPipes,
    deploymenturl: "",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Incident Management System and Interface for Data Mapping",
    description:
      "Das Lernziel dieses Projekts ist es, praktische Erfahrungen in der plattformübergreifenden und responsiven UI-Entwicklung mit React Js, Antd und Redux zu sammeln.",
    description_EN:
      "The learning outcome of this project is to have hands-on experience of cross-platform and responsive UI development in React Js, Antd, and Redux.",
    technologies: [
      // { name: "Html", icon: htmlicon },
      // { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Antd", icon: AntdIcon },
      { name: "Redux", icon: reduxIcon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      // { name: "Axios", icon: axiosicon },
      // { name: "MongoDB", icon: mongodbicon },
      // { name: "Express", icon: expressiconwhite },
      // { name: "Node.js", icon: nodejsicon },
      // { name: "Figma", icon: figmaicon },
      // { name: "Render", icon: rendericon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: interfaceImg,
    deploymenturl: "",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      // {
      //   title: "React Native",
      //   hash: "#ReactNative",
      //   icon: reacticon,
      //   color: "#61DAFB",
      // },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Redux toolkit",
        hash: "#redux-toolkit",
        icon: reduxIcon,
        color: "#38B2AC",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "Antd",
        hash: "#AntdIcon",
        icon: AntdIcon,
        color: "#38B2AC",
      },
      {
        title: "Ag Grid",
        hash: "#AgGrid",
        icon: AgGrid,
        color: "#38B2AC",
      },
      // {
      //   title: "Express",
      //   hash: "#Express",
      //   icon: [expressicon, expressiconwhite],
      //   color: ["#000000", "#FFFFFF"],
      // },
      // {
      //   title: "Node.js",
      //   hash: "#Node.js",
      //   icon: nodejsicon,
      //   color: "#339933",
      // },
      // {
      //   title: "MongoDB",
      //   hash: "#MongoDB",
      //   icon: mongodbicon,
      //   color: "#449C45",
      // },
      // {
      //   title: "Vue.js",
      //   hash: "#Vue.js",
      //   icon: vuejsicon,
      //   color: "#4FC08D",
      // },
      // {
      //   title: "SASS/SCSS",
      //   hash: "#SASS/SCSS",
      //   icon: sassscssicon,
      //   color: "#CC6699",
      // },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      // { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Copyright", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:mshahbazramzan952@gmail.com",
  text: "email me",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/shahbaz-ramzan-4b3275252/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/shahbaz-ramzan",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:mailto:mshahbazramzan952@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that to use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for contacting us. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};

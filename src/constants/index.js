import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  d3,
  figma,
  docker,
  meta,
  starbucks,
  hcl,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hulu,
  linkedin,
  dashboard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Front-end  Developer",
    icon: creator,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
name:"D3",
icon:d3,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "HCL Technologies",
    icon: hcl,
    iconBg: "#383E56",
    date: "Feb 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Responsible for creating Unit tests with JEST and react testing library.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Responsible for syncing REST API with Web applications.",
    

    ],
  },
  {
    title: "Software Engineer",
    company_name: "Toyavi Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Feb 2021",
    points: [
     " Responsible for developing different features in the POS system in React js.",
"Maintained existing Product apps and web apps by fixing bugs and implementing new functionalities.",
"Responsible for converting business needs into technical specifications with a multidisciplinary team.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Linked-In Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and apply available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/bhanvitech/linkedin_clone",
  },
  {
    name: "Dashboard MERN",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/bhanvitech/dashboardFrontend",
  },
  {
    name: "Hulu Clone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hulu,
    source_code_link: "https://github.com/bhanvitech/huluapp",
  },
];

export { services, technologies, experiences, testimonials, projects };

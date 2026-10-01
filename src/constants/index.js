import {
  mobile,
  backend,
  
  web,
  javascript,
  
  html,
  css,
  reactjs,
  
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  

  GNE,
  dailychores,
 
  cinefine,
 
  threejs,
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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "B.Tech- Computer Science and Engineering",
    company_name: "Guru Nanak Dev Engineering College",
    icon: GNE,
    iconBg: "#383E56",
    date: "August 2026 - May 2030",
    points: [
      "Currently pursuing a Bachelor of Technology in Computer Science and Engineering.",
      "Developing strong foundations in Data Structures and Algorithms, Java, and problem solving.",
      "Learning and building projects using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
      "Exploring software development through personal projects and hands-on experimentation.",
    ]
  },
 
];

const achievements = [
  {
    title: "Academic Excellence",
    description: "Maintained a strong academic record in School achieving 97.4% in 10th and 94.6% in 12th",
    date:"2023-2025",
  },
  {
   title: "DSA & Problem Solving",
    description: "Actively developing problem-solving skills through Data Structures and Algorithms and competitive programming.",
    date:"2026-Present",
  },
  {
    title: "Frontend Development",
    description: "Built projects using HTML,CSS,JS, React and tailwindCSS",
    date:"2026",
  },
];

const projects = [
  {
    name: "Cine Fine",
    description:
      "Web-based platform that allows users to search through a list of available movies and choose the desired one.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "app-write",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cinefine,
    source_code_link: "https://github.com/vardanjawa-hub/CineFind",
  },
  {
    name: "DailyChores",
    description:
      "Web application that enables users to store,delete and mark their tasks as complete in the web app",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: dailychores,
    source_code_link: "https://github.com/vardanjawa-hub/DailyChores",
  },
  
];

export { services, technologies, experiences, achievements, projects };
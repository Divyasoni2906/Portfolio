import {
    backend,
    web,
    javascript,
    html,
    css,
    mobile,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    leadtracker,
    leetmetric,
    pasteapp,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Works",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
  
  const projects = [
    {
      name: "Lead Tracker",
      description:
        "This extension serves as a leads tracker for businesses or a bookmark manager for users. It allows saving the current tab or custom links for future reference. Users can delete all saved links by double-clicking the 'Delete All' button",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Chrome APIs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: leadtracker,
      source_code_link: "https://github.com/Divyasoni2906/Chrome-Extension-Web-App",
    },
    {
      name: "Paste React App",
      description:
        "A React-based clipboard manager for storing and managing copied text efficiently, enhancing user productivity. Users can copy, paste, and delete text snippets with ease.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux toolkit",
          color: "green-text-gradient",
        },
        {
          name: "React Router",
          color: "pink-text-gradient",
        },
      ],
      image: pasteapp,
      source_code_link: "https://github.com/Divyasoni2906/Paste-React-App",
    },
    {
      name: "LeetMetric",
      description:
        "Leetmetric is a tool designed to help users track their progress on coding challenges,platforms like LeetCode. It provides a visual representation of a user's problem-solving portfolio",
      tags: [
        {
          name: "Leetcode API",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: leetmetric,
      source_code_link: "https://github.com/Divyasoni2906/Leetmetric",
    },
  ];
  
  export { services, technologies, projects };
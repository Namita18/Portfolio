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
    figma,
    planful,
    deziniks,
    kakatiya,
    snapRestr,
    nftss,
    rottenss,
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
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
      title: "Web Developer",
      company_name: "Deziniks",
      icon: deziniks,
      iconBg: "#E6DEDD",
      date: "January 2020 - June 2020",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web designer & Developer",
      company_name: "Homeshakha",
      icon: kakatiya,
      iconBg: "#E6DEDD",
      date: "July 2021 - Dec 2021",
      points: [
        "Designed and developed the website from scratch.",
        "Also worked as graphic designer and created social media posts.",
        "Worked for their parent company Kaakatiya Groups as freelancer.",
      ],
    },
    {
      title: "Software Engineer Developer",
      company_name: "Planful",
      icon: planful,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining the application using Angular and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to produce high-quality work.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but nameeta proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Nameeta does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Resturant App",
      description:
        "Web-based platform that allows users to search and browse and choose food among various options, providing a convenient and efficient solution for menu reading and online presence.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: snapRestr,
      link:"https://17d94c68.resturantapp.pages.dev",
      source_code_link: "https://github.com/Namita18/resturantapp",
    },
    {
      name: "NFT Landing page",
      description:
        "Web application that enables users to explore NFTs, view their creators, and communicate with them via their details.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: nftss,
      link:"https://5b673cc1.nftlanding.pages.dev",
      source_code_link: "https://github.com/Namita18/nftlanding",
    },
    {
      name: "Rotten Potatoes",
      description:
        "A comprehensive movie recomendation app made in angular",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: rottenss,
      link:"https://github.com/Namita18/Angular-RottenPotatoes",
      source_code_link: "https://github.com/Namita18/Angular-RottenPotatoes",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
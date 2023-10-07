import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    carrent,
    jobit,
    tripguide,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Instructor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React/React Native JS",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: git,
    },
    {
      name: "c++",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Math/Pyton Tutor",
      company_name: "Freelance",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2020 - June 2023",
      points: [
        "Provided tailored, one-on-one tutoring sessions to students of varying skill levels, ensuring personalized guidance and support in mathematics and Python programming.",
        "Designed and developed customized learning plans and lesson materials to address specific student needs and learning objectives, promoting effective comprehension and skill improvement.",
        "Implemented regular assessments and progress tracking mechanisms to evaluate student performance and adapt teaching methods accordingly, resulting in measurable academic improvements.",
        "Fostered a collaborative and encouraging learning environment by explaining complex mathematical concepts and Python coding principles in a clear, approachable manner, promoting student engagement and confidence.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "ASN Computers",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2018 - Present",
      points: [
        "Updated old code bases to modern development standards, improving functionality",
        "Tested new applications for usability and adherence ot code plan",
        "Participated in entire software development cycle from start-up specifications to rollout of final product",
        "Troubleshot software and hardware issues for clients, solving approximately 35-45 issues a week",
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
      name: "Pocket Planner",
      description:
        "IOS application currently in Public Testing that helps users or groups keep track of their busy schedules.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "bilalsnasir.com",
      description:
        "Deployed 3D portfolio website with smooth animations and a clean UI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "8 Puzzle Solver",
      description:
        "Python program that solves the popular 8 puzzle game in the most efficient way possible.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "priority-queue",
          color: "green-text-gradient",
        },
        {
          name: "A*",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
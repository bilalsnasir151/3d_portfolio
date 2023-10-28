import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    git,
    meta,
    starbucks,
    carrent,
    jobit,
    tripguide,
    CLogo,
    pyLogo,
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
      name: "Python",
      icon: pyLogo,
    },
    {
      name: "C/C++",
      icon: CLogo,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Git/GitHub",
      icon: git,
    },    
    {
      name: "React/React Native JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },

  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "ASN Computers",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2018 - 2023",
      points: [
        "Utilized Python to design and program an efficient inventory management system, streamlining the tracking of inventory across multiple teams in the company",
        "Collaborated with development team to conduct in-depth code reviews, ensuring adherence to coding standards, identifying potential issues, and promoting code quality and consistency within the codebase.",
        "Modernized legacy code bases to align with current development standards, enhancing overall functionality and maintainability.",
        "Conducted comprehensive usability testing on new applications, ensuring alignment with project specifications and code plans.",
      ],
    },
    {
      title: "Firmware Engineer",
      company_name: "UCR FORMULA SAE",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2022 - Present",
      points: [
        "Utilized C/C++ on STM32 and TI chips to create and maintain firmware for the Battery Management Unit (BMU) and Vehicle Control Unit (VCU).",
        "Implemented battery discharge algorithms on the BMU, extending battery lifespan, reliability, and car performance.",
        "Implemented advanced features such as traction control and launch control on the VCU, which improved safety as well as car performance.",
        "Worked collaboratively within a team environment, utilizing Git/GitHub for version control to enable effective code collaboration and maintain project traceability.",
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
      name: "Pocket Planner | IOS App (Deployed)",
      description:
        "Full Stack scheduling application using React Native, AWS, and CSS that helps users and groups keep track of their tasks, meetings, and schedules.",
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
      source_code_link: "https://github.com/noshotbigjuicersbilal151/PocketPlanner",
    },
    {
      name: "Pacman Game AI",
      description:
        "Developed an AI for the classic Pacman game that enabled it to play and beat levels optimally, using advanced decision-making algorithms and pathfinding techniques.",
      tags: [
        {
          name: "AI",
          color: "blue-text-gradient",
        },
        {
          name: "MachineLearning",
          color: "green-text-gradient",
        },
        {
          name: "DataStructures",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/rchandran7/PacMan",
    },
    {
      name: "Medial Malpractice Claim Settlement Predictor",
      description:
        "Developed a comprehensive model for predicting the settlement amount of medical malpractice claims, incorporating multiple regression models and considering various claim-specific factors.",
      tags: [
        {
          name: "DataManagement",
          color: "blue-text-gradient",
        },
        {
          name: "MachineLearning",
          color: "green-text-gradient",
        },
        {
          name: "AI",
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
      source_code_link: "https://github.com/noshotbigjuicersbilal151/3d_portfolio",
    },
    {
      name: "AI 8 Puzzle Solver",
      description:
        "Developed an 8-puzzle solver with a command-line interface, leveraging advanced search algorithms to efficiently always find the most optimal solution to the puzzle. ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "DataStructures",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/noshotbigjuicersbilal151/8PuzzleSolver",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
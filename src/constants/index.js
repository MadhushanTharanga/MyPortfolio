export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];
export const myProjects = [
  {
    title: 'Clothing Store - Web Application',
    desc: "I'm collaborating on a team project to develop an e-commerce platform for a clothing store. We plan to implement a responsive user interface for the front end using React, ",
    subdesc: "while building robust back-end infrastructure with Spring Boot. We're working on key features including product catalog management, shopping cart functionality, and secure payment processing, aiming to demonstrate strong teamwork and full-stack development capabilities.",
    href: 'https://github.com/clothing-store-org',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/clothing.jpeg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'SpringBoot',
        path: '/assets/spring.png',
      },
    ],
  },
  {
    title: 'EasyCart - Mobile Application',
    desc: "This mobile e-commerce application provides seamless product catalog management, an intuitive shopping cart, and secure payment processing, ensuring a smooth shopping experience for users. Built with Node.js on the backend, the app ensures high performance and scalability.",
    subdesc: "With a responsive design, the application delivers an optimized cross-platform experience, making it accessible on both iOS and Android devices. The UI/UX is carefully crafted to enhance usability, offering easy navigation, product filtering, and a streamlined checkout process.",
    href: 'https://github.com/EasyCart-org',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/cart.jpeg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'ReactNative.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/node.png',
      },
    ],
  },
  {
    title: 'Pos-System',
    desc: "Designed and developed a POS system with an Angular front-end and Spring Boot back-end, enabling real-time inventory management, sales tracking, and secure payments. The responsive UI ensures smooth transactions across devices, enhancing user experience",
    subdesc:
      "With full-stack integration, the system offers role-based access control, real-time analytics, and multi-payment support. Leveraging Angular’s dynamic UI and Spring Boot’s robust backend, it delivers a scalable and efficient business solution.",
    href: 'https://github.com/pos-system-org',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Angular',
        path: '/assets/angular.png',
      },
      {
        id: 2,
        name: 'SpringBoot',
        path: 'assets/spring.png',
      },
      
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Seekers Cloud (PVT) LTD',
    pos: 'Associate Software Engineer',
    duration: 'July 2024 - Present',
    title: "Associate Software Engineer with experience at Seekers Cloud Pvt Ltd since July 2024. Proficient in modern technologies including Angular, React, React Native, Spring Boot, Node.js, and Firebase. Actively involved in developing projects using these technologies, demonstrating strong adaptability and technical versatility. Experienced in both front-end and back-end development with a focus on creating responsive and scalable applications. Committed to continuous learning and staying updated with emerging technologies in thesoftware development landscape",
    icon: '/assets/seekers.jpeg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'RH TECHNOLOGIES (PVT) LTD',
    pos: 'Softwere Developer Intern',
    duration: 'January 2024 - June 2024',
    title: "Completed a 6-month software engineering internship at RH Technologies (Pvt) Ltd, where I developed and enhanced web applications using Angular frameworks and PrimeNG library demonstrating enthusiasm and dedication while expanding my technical knowledge in modern front-end development",
    icon: '/assets/rh.png',
    animation: 'clapping',
  },
];

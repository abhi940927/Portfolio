import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
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
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "B.Tech in Computer Science",
    companyName: "Lovely Professional University",
    icon: backend,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Began my formal education in Computer Science and Engineering at LPU.",
      "Learning core computer science concepts, data structures, and algorithms.",
      "Building a strong foundation in programming and software development methodologies.",
    ],
  },
  {
    title: "General Secretary",
    companyName: "Dynamic Vertos Club",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Feb 2026",
    points: [
      "Led and managed club activities as General Secretary, ensuring smooth execution of events and initiatives.",
      "Successfully conducted <a href='https://www.linkedin.com/posts/abhinav-singh-124791322_tech-sastra-exploring-the-future-embracing-activity-7241899557326848001-T7Ps' target='_blank' class='text-[#915EFF] hover:underline font-bold'>Tech Sastra: Exploring the Future</a>.",
      "Organized the <a href='https://www.linkedin.com/posts/abhinav-singh-124791322_codemastery-codingcompetition-lpu-activity-7329740590592442369-qJsT' target='_blank' class='text-[#915EFF] hover:underline font-bold'>Code Mastery Coding Competition</a>.",
      "Played a key role in the <a href='https://www.linkedin.com/posts/abhinav-singh-124791322_cybersecurity-communitydevelopment-awareness-activity-7350581898651279363-NARH' target='_blank' class='text-[#915EFF] hover:underline font-bold'>Cybersecurity Community Development Awareness</a> initiative.",
      "Continuously coordinating with different teams and actively participating in <a href='https://www.linkedin.com/posts/abhinav-singh-124791322_im-excited-to-be-a-part-of-the-upcoming-activity-7260407864517709824-yTNQ' target='_blank' class='text-[#915EFF] hover:underline font-bold'>upcoming major events</a>.",
    ],
  },
  {
    title: "Tech Manager",
    companyName: "Inferno",
    icon: web,
    iconBg: "#383E56",
    date: "Aug 2025 - Present",
    points: [
      "Overseeing technical operations and managing digital infrastructure for the club.",
      "Providing technical support and organizing tech-related events.",
      "Collaborating with team members to deliver technical solutions effectively.",
    ],
  },
  {
    title: "Full Stack Development & Projects",
    companyName: "Self-Taught",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Started building full-stack web applications using modern technologies like React, Node.js, and MongoDB.",
      "Developed functional applications like a streaming platform (Duckshow) and an AI Comic Universe Builder.",
      "Applying academic knowledge to real-world projects and learning best practices in software engineering.",
      "Constantly exploring new tools and frameworks to expand my technical skill set.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Successfully completed the Generative AI for Beginners certification program on Udemy.",
    name: "Generative AI for Beginners",
    designation: "Certification",
    company: "Udemy",
    image: "https://ui-avatars.com/api/?name=Udemy&background=A435F0&color=fff",
    link: "https://drive.google.com/file/d/1R1i8yhEl3bFe0Mr_xxWF3hfCWIQJxPv8/view?usp=drivesdk",
  },
  {
    testimonial:
      "Completed comprehensive training in Full stack generative and Agentic AI with Python.",
    name: "Full Stack Generative & Agentic AI",
    designation: "Certification",
    company: "Udemy",
    image: "https://ui-avatars.com/api/?name=Udemy&background=A435F0&color=fff",
    link: "https://drive.google.com/file/d/15cGFqRrl-fwITF2VMAuz6yyyr5I56FAr/view?usp=sharing",
  },
  {
    testimonial:
      "Achieved the Oracle Certified Foundations Associate credential, demonstrating cloud & IT fundamentals.",
    name: "Certified Foundations Associate",
    designation: "Oracle Certified",
    company: "Oracle",
    image: "https://ui-avatars.com/api/?name=Oracle&background=F80000&color=fff",
    link: "https://drive.google.com/file/d/1vMMK1bkYL8aQQVgXEHd_EQq-WVgD9BeO/view?usp=sharing",
  },
  {
    testimonial:
      "Strengthened core programming fundamentals, data structures, algorithms, and problem-solving.",
    name: "Summer PEP Training",
    designation: "Certificate",
    company: "LPU PEP",
    image: "https://ui-avatars.com/api/?name=PEP&background=0D8ABC&color=fff",
    link: "https://drive.google.com/file/d/1ayMvqx4fij1oHmixkfxNJFWk0OXPN_iH/view?usp=sharing",
  },
  {
    testimonial:
      "Earned LeetCode 100 Days Badge with 103 active days and a 43-day maximum streak on Codolio.",
    name: "LeetCode 100 Days Badge",
    designation: "Achievement",
    company: "LeetCode / Codolio",
    image: "https://ui-avatars.com/api/?name=LeetCode&background=FFA116&color=fff",
    link: "https://codolio.com/profile/abhinav002",
  },
  {
    testimonial:
      "Secured 3rd position among 300+ teams in ALGO ARENA 2.0 Hackathon, demonstrating competitive coding skills.",
    name: "3rd Place - ALGO ARENA 2.0",
    designation: "Hackathon Winner",
    company: "ALGO ARENA",
    image: "https://ui-avatars.com/api/?name=Algo&background=27AE60&color=fff",
    link: "https://www.linkedin.com/in/abhinav-singh-124791322",
  },
  {
    testimonial:
      "Awarded the Badge of Recognition for outstanding performance and active participation in various club activities.",
    name: "LPU CPE",
    designation: "Centre for Professional Enhancement",
    company: "Lovely Professional University",
    image: "https://ui-avatars.com/api/?name=LPU+CPE&background=0D8ABC&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_badgeofrecognition-cpeclubs-lpucpe-activity-7448397592188690433-jEJK",
  },
  {
    testimonial: "Successfully completed the Artificial Intelligence & AI Tools certification program.",
    name: "AI & AI Tools",
    designation: "Certification",
    company: "Be10x",
    image: "https://ui-avatars.com/api/?name=Be10x&background=27AE60&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_artificialintelligence-aitools-be10x-activity-7266787620230238212-U05C",
  },
  {
    testimonial: "Proudly announced the successful completion of a professional certification.",
    name: "Professional Certification",
    designation: "Achievement",
    company: "LinkedIn",
    image: "https://ui-avatars.com/api/?name=Cert&background=2980B9&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_proud-to-announce-that-i-have-successfully-activity-7275993657135050752-Qxdx",
  },
  {
    testimonial: "Earned the Certificate of Completion for the Software Development Virtual Experience.",
    name: "Software Development",
    designation: "Virtual Experience",
    company: "Accenture",
    image: "https://ui-avatars.com/api/?name=Accenture&background=8E44AD&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_certificate-of-completion-accenture-software-activity-7287909054184591360-zQoU",
  },
  {
    testimonial: "Achieved the Python Certified credential, demonstrating proficiency in Python programming.",
    name: "Python Certification",
    designation: "Certified",
    company: "Skillera",
    image: "https://ui-avatars.com/api/?name=Skillera&background=F39C12&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_python-certified-skillera-activity-7292376324910792704-W_xQ",
  },
  {
    testimonial: "Successfully completed the comprehensive AI & Machine Learning Certification.",
    name: "AI & Machine Learning",
    designation: "Certification",
    company: "Tech Institute",
    image: "https://ui-avatars.com/api/?name=AI&background=C0392B&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_ai-machinelearning-certification-activity-7310919832462389248-bzPC",
  },
  {
    testimonial: "Completed upskilling in Python & Artificial Intelligence (AI For Techies).",
    name: "Python & AI",
    designation: "Upskilling",
    company: "AI For Techies",
    image: "https://ui-avatars.com/api/?name=AI&background=D35400&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_python-artificialintelligence-aifortechies-activity-7317143944889270272-n1L-",
  },
  {
    testimonial: "Participated and completed training in DevOps & Cloud Computing with AWS Cloud Clubs.",
    name: "DevOps & Cloud",
    designation: "AWS Cloud Clubs",
    company: "Amazon Web Services",
    image: "https://ui-avatars.com/api/?name=AWS&background=F1C40F&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_awscloudclubs-devops-cloudcomputing-activity-7319944108309958656-Mh3U",
  },
  {
    testimonial: "Successfully completed the certification program for professional development.",
    name: "Course Completion",
    designation: "Certificate",
    company: "Professional Training",
    image: "https://ui-avatars.com/api/?name=CC&background=16A085&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_abhinav-singh-has-successfully-completed-activity-7355462049201561601-Oq4F",
  },
  {
    testimonial: "Successfully completed the Artificial Intelligence Internship Training program.",
    name: "AI Internship Training",
    designation: "Completion",
    company: "Tech Internship",
    image: "https://ui-avatars.com/api/?name=AI&background=2C3E50&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_artificialintelligence-internship-trainingcompletion-activity-7360237401924849665-B0n0",
  },
  {
    testimonial: "Upskilled in C Programming through comprehensive MOOC learning.",
    name: "C Programming",
    designation: "Upskilling",
    company: "Programming MOOC",
    image: "https://ui-avatars.com/api/?name=C&background=2980B9&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_c-programming-upskilling-activity-7363860640475533313-Uzwp",
  },
  {
    testimonial: "Completed the CSS Basics & Web Design MOOC to enhance frontend development skills.",
    name: "CSS Basics & Web Design",
    designation: "MOOC",
    company: "Web Design",
    image: "https://ui-avatars.com/api/?name=CSS&background=8E44AD&color=fff",
    link: "https://www.linkedin.com/posts/abhinav-singh-124791322_cssbasics-webdesign-mooc-activity-7289524628895539200-xm5y",
  }
];

const projects: TProject[] = [
  {
    name: "Duckshow",
    description:
      "A premium, full-stack streaming platform built with React, Node.js, and MongoDB. Features cinematic UI, user authentication, automated email notifications, and a responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/abhi940927/Duckshow",
  },
  {
    name: "AI Comic Universe Builder",
    description:
      "A premium, web-based AI Comic Universe Builder using Node.js, Express, and vanilla frontend technologies. Users can generate comic characters and panels using free AI image tools and interact with an AI chatbot.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "pollinations.ai",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/abhi940927/ai-comic-builder",
  },
  {
    name: "Assignment Management System",
    description:
      "A full-stack Assignment Management System for a college presentation, featuring robust backend routes for authentication, assignment creation, file submissions, real-time notifications, and analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/abhi940927",
  },
];

export { services, technologies, experiences, testimonials, projects };

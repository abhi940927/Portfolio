type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Abhinav — 3D Portfolio",
    fullName: "Abhinav",
    email: "abhinav@mail.com",
  },
  hero: {
    name: "Abhinav",
    p: ["I develop full-stack applications", "with modern web technologies"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Passionate | Hustler | Dreamer

I am a knowledgeable Computer Science student at Lovely Professional University, talented at learning quickly and adding immediate value to any team. I have a strong history of delivering successful full-stack projects by combining technical skills with effective leadership, communication, and teamwork. 

My solid academic achievements are paired with a demonstrated commitment, integrity, and hands-on expertise in technologies like React, Node.js, Three.js, and MongoDB databases. I am driven by the desire to collaborate and create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "My learning path",
      h2: "My Journey.",
    },
    feedbacks: {
      p: "My achievements and awards",
      h2: "Certifications & Recognition.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

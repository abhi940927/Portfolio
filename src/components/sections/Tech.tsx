import { motion } from "framer-motion";
import { useState } from "react";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

interface Skill {
  name: string;
  icon: string; // devicon or simple-icons CDN
  color: string;
  level: number; // 1-5
}

interface SkillCategory {
  title: string;
  emoji: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    emoji: "💻",
    color: "#915EFF",
    skills: [
      { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C", color: "#00599C", level: 4 },
      { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC", color: "#A8B9CC", level: 4 },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB", level: 4 },
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00", color: "#ED8B00", level: 3 },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E", level: 5 },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6", level: 4 },
      { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1", level: 4 },
    ],
  },
  {
    title: "Frontend",
    emoji: "🎨",
    color: "#c084fc",
    skills: [
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26", level: 5 },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6", color: "#1572B6", level: 5 },
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB", level: 5 },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff", color: "#ffffff", level: 4 },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4", level: 4 },
      { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/ffffff", color: "#ffffff", level: 3 },
    ],
  },
  {
    title: "Backend & DB",
    emoji: "⚙️",
    color: "#38bdf8",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933", level: 4 },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi/009688", color: "#009688", level: 4 },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1", level: 4 },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "#47A248", level: 4 },
    ],
  },
  {
    title: "Tools & DevOps",
    emoji: "🛠️",
    color: "#fb923c",
    skills: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032", level: 5 },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff", color: "#ffffff", level: 5 },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37", color: "#FF6C37", level: 4 },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", color: "#F24E1E", level: 3 },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED", level: 3 },
    ],
  },
];

const SkillPill: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.05, 0.4)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-pointer overflow-hidden"
      style={{
        background: hovered
          ? `rgba(${hexToRgb(skill.color)}, 0.15)`
          : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? skill.color + "60" : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? `0 0 20px ${skill.color}30` : "none",
        transition: "all 0.25s ease",
      }}
    >
      {/* Glow bg */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(ellipse at center, ${skill.color}20, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <motion.img
        src={skill.icon}
        alt={skill.name}
        className="w-5 h-5 object-contain relative z-10 flex-shrink-0"
        animate={{ scale: hovered ? 1.2 : 1, rotate: hovered ? 8 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Name */}
      <span
        className="text-[13px] font-medium relative z-10 whitespace-nowrap"
        style={{ color: hovered ? skill.color : "rgba(200,200,220,0.9)" }}
      >
        {skill.name}
      </span>

      {/* Level dots */}
      <div className="flex gap-0.5 ml-1 relative z-10">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className="w-1 h-1 rounded-full transition-all duration-300"
            style={{
              background: dot <= skill.level ? skill.color : "rgba(255,255,255,0.15)",
              boxShadow: dot <= skill.level && hovered ? `0 0 4px ${skill.color}` : "none",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillCategoryCard: React.FC<{ category: SkillCategory; catIndex: number }> = ({
  category,
  catIndex,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", catIndex * 0.15, 0.6)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-5 overflow-hidden"
      style={{
        background: "rgba(10,8,28,0.6)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${hovered ? category.color + "50" : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? `0 0 30px ${category.color}20` : "0 4px 24px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Corner glow */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${category.color}25, transparent 70%)`,
          opacity: hovered ? 1 : 0.4,
        }}
      />

      {/* Category header */}
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <span className="text-xl">{category.emoji}</span>
        <h3
          className="text-[16px] font-bold tracking-wide"
          style={{ color: category.color }}
        >
          {category.title}
        </h3>
        <div className="flex-1 h-px ml-2" style={{ background: `linear-gradient(to right, ${category.color}40, transparent)` }} />
      </div>

      {/* Skills grid */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {category.skills.map((skill, idx) => (
          <SkillPill key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

// Helper: hex to rgb for rgba() usage
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "145,94,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}

const Tech = () => {
  return (
    <>
      {/* Section header */}
      <motion.div variants={fadeIn("", "", 0, 0.5)} className="mb-10">
        <p className="text-[#aaa6c3] text-[14px] uppercase tracking-widest mb-1">What I work with</p>
        <h2 className="text-white text-[32px] font-black">
          Tech <span className="text-[#915EFF]">Stack</span>
        </h2>
      </motion.div>

      {/* Category cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={category.title} category={category} catIndex={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

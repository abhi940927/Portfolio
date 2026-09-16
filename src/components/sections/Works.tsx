import { useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const GlassProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        glareColor="rgba(145,94,255,0.15)"
        glareMaxOpacity={0.3}
        glareBorderRadius="16px"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="relative w-full sm:w-[320px] rounded-2xl overflow-hidden group cursor-pointer"
          style={{
            background: "rgba(15, 10, 30, 0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(145,94,255,0.15)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {/* Dynamic neon border glow follows mouse */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(145,94,255,0.25), transparent 60%)`,
              zIndex: 0,
            }}
          />

          <div className="relative z-10 p-5">
            {/* Image */}
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* GitHub button */}
              <div className="absolute top-3 right-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  onClick={() => window.open(sourceCodeLink, "_blank")}
                  className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <img src={github} alt="github" className="h-5 w-5 object-contain" />
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="text-[22px] font-bold text-white group-hover:text-[#a476ff] transition-colors duration-300">
                {name}
              </h3>
              <p className="text-[13px] mt-2 leading-relaxed" style={{ color: "rgba(170,166,195,0.85)" }}>
                {description}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[12px] font-medium px-2 py-0.5 rounded-full ${tag.color}`}
                  style={{
                    background: "rgba(145,94,255,0.1)",
                    border: "1px solid rgba(145,94,255,0.2)",
                  }}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom neon line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <GlassProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

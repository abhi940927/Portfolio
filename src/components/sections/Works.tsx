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
  liveLink,
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

  const handleCardClick = () => {
    const target = liveLink || sourceCodeLink;
    if (target) {
      window.open(target, "_blank");
    }
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
          onClick={handleCardClick}
          className="relative w-full sm:w-[320px] rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between"
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

          <div className="relative z-10 p-5 flex flex-col flex-1 justify-between">
            <div>
              {/* Image */}
              <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Action badges (top right) */}
                <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                  {sourceCodeLink && (
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(sourceCodeLink, "_blank");
                      }}
                      title="View GitHub Repository"
                      className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full transition-shadow hover:shadow-[0_0_12px_rgba(145,94,255,0.6)]"
                      style={{
                        background: "rgba(10, 8, 24, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <img src={github} alt="github" className="h-5 w-5 object-contain" />
                    </motion.div>
                  )}
                  {liveLink && (
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(liveLink, "_blank");
                      }}
                      title="View Live Demo"
                      className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full transition-shadow hover:shadow-[0_0_12px_rgba(145,94,255,0.8)]"
                      style={{
                        background: "linear-gradient(135deg, rgba(145,94,255,0.9), rgba(104,58,183,0.9))",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </motion.div>
                  )}
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

            {/* Action Buttons: GitHub & Live Demo */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2.5">
              {sourceCodeLink && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(sourceCodeLink, "_blank");
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-[12px] font-semibold text-white/90 hover:text-white transition-all duration-300"
                  style={{
                    background: "rgba(145,94,255,0.12)",
                    border: "1px solid rgba(145,94,255,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(145,94,255,0.25)";
                    e.currentTarget.style.borderColor = "rgba(145,94,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(145,94,255,0.12)";
                    e.currentTarget.style.borderColor = "rgba(145,94,255,0.25)";
                  }}
                >
                  <img src={github} alt="github" className="h-4 w-4 object-contain opacity-90" />
                  <span>GitHub</span>
                </button>
              )}

              {liveLink && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(liveLink, "_blank");
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[12px] font-semibold text-white transition-all duration-300 shadow-md shadow-[#915EFF]/25"
                  style={{
                    background: "linear-gradient(135deg, #915EFF 0%, #683ab7 100%)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "brightness(1.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "none";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Live Demo</span>
                </button>
              )}
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

export default SectionWrapper(Works, "projects");

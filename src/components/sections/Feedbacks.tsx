import { motion } from "framer-motion";
import { useState, useRef } from "react";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.2, 0.75)}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative xs:w-[340px] w-full rounded-3xl overflow-hidden group cursor-pointer"
      style={{
        background: "rgba(10,8,28,0.7)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(145,94,255,0.15)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      whileHover={{
        boxShadow: "0 0 30px rgba(145,94,255,0.25), 0 8px 32px rgba(0,0,0,0.5)",
        borderColor: "rgba(145,94,255,0.4)",
      }}
    >
      {/* Dynamic glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(145,94,255,0.15), transparent 60%)`,
        }}
      />

      <div className="relative z-10 p-8 flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#915EFF] text-xs font-semibold uppercase tracking-wider bg-[#915EFF]/10 px-3 py-1 rounded-full border border-[#915EFF]/25">
              {designation}
            </span>
            <motion.img
              src={image}
              alt={`cert-${name}`}
              className="h-10 w-10 rounded-full object-cover"
              style={{ border: "1px solid rgba(145,94,255,0.3)" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
          </div>

          <h3 className="text-white font-bold text-[18px] mb-2 leading-snug group-hover:text-[#a476ff] transition-colors duration-300">
            {name}
          </h3>

          <p className="text-secondary text-[14px] leading-relaxed mb-4">
            {testimonial}
          </p>
        </div>

        <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="text-[12px] text-white-100 font-medium">{company}</span>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-[#915EFF] hover:text-white transition-colors font-medium flex items-center gap-1 group/link"
            >
              <span>Verify</span>
              <svg
                className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};


const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;

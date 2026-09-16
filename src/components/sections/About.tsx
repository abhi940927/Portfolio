import { useState } from "react";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      glareColor="rgba(145,94,255,0.2)"
      glareMaxOpacity={0.4}
      glareBorderRadius="20px"
    >
      <div
        className="max-w-[250px] w-full xs:w-[250px] cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full rounded-[20px] p-[1px] relative overflow-hidden"
          style={{
            background: hovered
              ? "linear-gradient(135deg, #915EFF, #683ab7, #c084fc)"
              : "linear-gradient(135deg, rgba(145,94,255,0.4), rgba(104,58,183,0.2))",
            transition: "background 0.4s ease",
            boxShadow: hovered
              ? "0 0 30px rgba(145,94,255,0.5), 0 0 60px rgba(145,94,255,0.2)"
              : "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          <div
            className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5"
            style={{
              background: "rgba(10,8,25,0.85)",
              backdropFilter: "blur(20px)",
            }}
          >
            <motion.img
              src={icon}
              alt={title}
              className="h-16 w-16 object-contain"
              animate={{ scale: hovered ? 1.2 : 1, rotate: hovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-center text-[20px] font-bold text-white">
              {title}
            </h3>
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <div className="flex flex-col md:flex-row items-start gap-10 mt-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary max-w-3xl text-[17px] leading-[30px] whitespace-pre-wrap"
        >
          {config.sections.about.content}
        </motion.p>

        <motion.img
          variants={fadeIn("left", "", 0.2, 1)}
          src="/profile.jpeg"
          alt="Abhinav"
          className="w-[250px] h-[300px] rounded-2xl object-cover border-2 border-[#915EFF]/30"
          style={{
            boxShadow: "0 0 30px rgba(145,94,255,0.3), 0 8px 32px rgba(0,0,0,0.4)",
          }}
        />
      </div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

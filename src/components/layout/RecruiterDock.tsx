import { motion } from "framer-motion";
import { useState } from "react";

interface DockItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

const DockIcon: React.FC<{ item: DockItem }> = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href}
      target={item.href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noreferrer"
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip - appears to the left */}
      <motion.span
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? -8 : 5 }}
        transition={{ duration: 0.2 }}
        className="absolute right-14 whitespace-nowrap text-xs text-white font-medium bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10"
      >
        {item.label}
      </motion.span>

      {/* Icon container */}
      <motion.div
        animate={{
          scale: hovered ? 1.5 : 1,
          y: hovered ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="w-12 h-12 rounded-2xl flex items-center justify-center relative"
        style={{ background: item.color }}
      >
        {/* Glow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 rounded-2xl blur-md"
          style={{ background: item.color, scale: 1.2 }}
        />
        <span className="relative z-10">{item.icon}</span>
      </motion.div>
    </a>
  );
};

const RecruiterDock = () => {
  const items: DockItem[] = [
    {
      label: "GitHub",
      href: "https://github.com/abhi940927",
      color: "linear-gradient(135deg, #24292e, #4a5568)",
      icon: (
        <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhinav-singh-124791322",
      color: "linear-gradient(135deg, #0077B5, #00a0dc)",
      icon: (
        <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "Email Me",
      href: "mailto:abhisingh940927@gmail.com",
      color: "linear-gradient(135deg, #EA4335, #c62d1f)",
      icon: (
        <svg fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/abhi_sanatani22",
      color: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
      icon: (
        <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 25 }}
      className="fixed bottom-6 right-4 z-50"
    >
      <div className="flex flex-col items-center gap-3 px-3 py-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
        {items.map((item) => (
          <DockIcon key={item.label} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default RecruiterDock;

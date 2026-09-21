# Abhinav Singh - 3D Developer Portfolio

![demo](.github/README_ASSETS/3d-portfolio.png)

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-portfolio--8p6q.vercel.app-915EFF?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-8p6q.vercel.app/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 🌐 Live Demo

Explore the live, interactive 3D portfolio:
👉 **[portfolio-8p6q.vercel.app](https://portfolio-8p6q.vercel.app/)**

---

## 📝 Overview

**Abhinav Singh's 3D Portfolio** is a cutting-edge personal portfolio website engineered with **React 18**, **Three.js**, **React Three Fiber (R3F)**, **TypeScript**, and **Tailwind CSS**. Designed with an immersive dark-neon aesthetic, smooth parallax tilt effects, and real-time interactive 3D models, it showcases full-stack web applications, leadership roles, technical milestones, and verified certifications.

---

## ✨ Key Features

- **🎮 Interactive 3D Environments**:
  - **Desktop PC Model**: High-fidelity 3D computer workspace rendered on the Hero canvas using `@react-three/fiber` and `@react-three/drei`.
  - **3D Floating Tech Spheres**: Physics-inspired interactive 3D icosahedron balls mapped with tech stack textures.
  - **3D Earth Model**: Interactive rotating Earth model in the Contact section with orbital camera controls.
  - **Dynamic Starfield Background**: Twinkling particle stars canvas wrapping sections for spatial depth.
- **💎 Glassmorphism & Cyberpunk Neon UI**:
  - High-performance glassmorphic cards with reactive radial neon spotlights tracking mouse movements.
  - 3D parallax tilt effects on project cards powered by `react-parallax-tilt`.
- **💻 Interactive Command-Line Terminal**:
  - Built-in terminal simulation allowing visitors to execute custom commands to inspect skills, projects, contact info, and bio.
- **🚀 Featured Projects Showcase**:
  - **Duckshow**: Full-stack streaming platform (React, Node.js, MongoDB) with video playback, authentication, and notifications.
  - **AI Comic Universe Builder**: Web-based AI application generating comic characters and storyline panels with an integrated AI chatbot.
  - **Assignment Management System**: Full-stack platform for college submissions, real-time alerts, and academic analytics.
  - Equal-height responsive grid layout with direct GitHub repository and live deployment links.
- **📜 Certifications & Achievements**:
  - Showcase for verified credentials, including **Intro to AI**, **AI for Everyone**, **Responsible AI**, **Oracle Certified Foundations Associate**, **LeetCode 100 Days Badge**, and Hackathon victories.
  - Instant one-click external verification links.
- **⏳ Interactive Experience & Education Timeline**:
  - Vertical chronological timeline charting computer science education at Lovely Professional University, General Secretary leadership at Dynamic Vertos Club, and tech club roles.
- **📬 Functional 3D Contact Form**:
  - Integrated with **EmailJS** for instant email forwarding with real-time feedback and input validation.

---

## 🛠️ Tech Stack & Libraries

| Category | Technologies / Libraries |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/) |
| **3D Graphics & Canvas** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei), [maath](https://github.com/pmndrs/maath) |
| **Styling & UI** | [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer) |
| **Animations & Interactions** | [Framer Motion](https://www.framer.com/motion/), [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt), [react-type-animation](https://github.com/MaxMonteil/react-type-animation) |
| **Timeline** | [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline) |
| **Services & Tooling** | [EmailJS](https://www.emailjs.com/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) |

---

## 📁 Project Structure

```bash
portfolio/
├── public/               # Public assets and 3D GLTF models (desktop_pc)
├── src/
│   ├── assets/           # Tech icons, project screenshots, and imagery
│   ├── components/
│   │   ├── atoms/        # Atomic UI primitives (Header, etc.)
│   │   ├── canvas/       # Three.js 3D canvas components (Computers, Earth, Ball, Stars)
│   │   ├── layout/       # Layout elements (Navbar, CustomCursor, Loader)
│   │   └── sections/     # Main page sections (Hero, About, Tech, Works, Experience, Feedbacks, Contact, Terminal)
│   ├── constants/        # Central configuration, project data, certifications, and styles
│   ├── hoc/              # Higher-Order Components (SectionWrapper for viewport motion)
│   ├── utils/            # Motion and helper utilities
│   ├── App.tsx           # Main application root
│   └── main.tsx          # React entrypoint
├── index.html            # HTML template
├── tailwind.config.cjs   # Tailwind CSS configuration
├── tsconfig.json         # TypeScript compiler configuration
└── vite.config.ts        # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 📋 Prerequisites

- **Node.js**: v18.0.0 or higher ([Download Node.js](https://nodejs.org/))
- **NPM** or **Yarn** / **PNPM**
- **Git** ([Download Git](https://git-scm.com/))

### ⚙️ Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abhi940927/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and provide your EmailJS keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAIL_JS_ACCESS_TOKEN=your_public_key
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

### 📦 Production Build

To build the static production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔒 Environment Variables Reference

| Variable | Description | Required |
| :--- | :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS Service ID from your EmailJS account dashboard | Yes (for contact form) |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS Template ID configured for portfolio messages | Yes (for contact form) |
| `VITE_EMAIL_JS_ACCESS_TOKEN` | EmailJS Public Key / Access Token | Yes (for contact form) |

---

## 📞 Connect & Contact

- **Portfolio**: [portfolio-8p6q.vercel.app](https://portfolio-8p6q.vercel.app/)
- **LinkedIn**: [Abhinav Singh](https://www.linkedin.com/in/abhinav-singh-124791322)
- **GitHub**: [@abhi940927](https://github.com/abhi940927)
- **Email**: [abhisingh940927@gmail.com](mailto:abhisingh940927@gmail.com)
- **Instagram**: [@abhi_sanatani22](https://instagram.com/abhi_sanatani22)

---

## 📄 License

This project is licensed under the terms described in the [LICENSE](LICENSE) file.

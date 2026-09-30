"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Smartbash",
    category: "AI / Web Application / Thesis Project",
    description:
      "An AI-powered disaster management system designed to help barangay residents report and monitor flood and fire incidents.",
    technologies: [
      "Python",
      "Django",
      "XLM-RoBERTa",
      "CLIP",
    ],
    github: "https://github.com/rjnvrs/Smartbash-App",

    contributions: [
      "Worked on the text classification component using XLM-RoBERTa.",
      "Prepared and processed the dataset for disaster report classification.",
      "Trained and evaluated the text classification model.",
      "Worked on CLIP-based image validation.",
      "Integrated AI predictions into the application's reporting workflow.",
    ],

    proof: [
      {
        image: "/projects/smartbash-ai-training.png",
        title: "AI Model Training",
        description:
          "Training and evaluation of the disaster report classification model.",
      },
      {
        image: "/projects/smartbash-xlm-prediction.png",
        title: "XLM-RoBERTa Prediction",
        description:
          "Text classification used to identify disaster report categories.",
      },
      {
        image: "/projects/smartbash-clip.png",
        title: "CLIP Image Validation",
        description:
          "CLIP-based image and text similarity used for image validation.",
      },
      {
        image: "/projects/smartbash-ui.png",
        title: "Smartbash Interface",
        description:
          "User-facing interface for submitting and managing disaster reports.",
      },
    ],
  },

  {
    title: "EchoMind",
    category: "AI / Web Application",
    description:
      "An AI-powered web application using a BERT-based NLP model to classify user input and provide the type and level of anxiety.",
    technologies: [
      "Python",
      "BERT",
      "NLP",
      "React",
      "Web Development",
    ],
    github: "https://github.com/daanyool/EchoMind",

    contributions: [
      "Trained the BERT-based NLP model.",
      "Prepared and processed the training data.",
      "Developed Python scripts for processing user input.",
      "Passed the predicted class from the NLP model to the frontend.",
      "Contributed to the web application's frontend development.",
    ],

    proof: [
      {
        image: "/projects/echomind-training.png",
        title: "BERT Model Training",
        description:
          "Training and evaluation of the BERT-based NLP model.",
      },
      {
        image: "/projects/echomind-python.png",
        title: "Python Model Processing",
        description:
          "Python scripts used to process input and generate model predictions.",
      },
      {
        image: "/projects/echomind-prediction.png",
        title: "Prediction Result",
        description:
          "Example of the model's predicted classification.",
      },
      {
        image: "/projects/echomind-ui.png",
        title: "EchoMind Interface",
        description:
          "Frontend interface of the EchoMind web application (Landing Page).",
      },
    ],
  },

  {
    title: "Resort Rental System",
    category: "Backend / Web Application",
    description:
      "A web-based resort booking system developed with ASP.NET MVC, C#, and SQL Server.",
    technologies: [
      "C#",
      "ASP.NET MVC",
      "SQL Server",
    ],
    github: "https://github.com/daanyool/Balay-Balay-Resort-Improved",

    contributions: [
      "Worked on backend functionality using ASP.NET MVC and C#.",
      "Worked with SQL Server for application data.",
      "Implemented and modified application functionality.",
      "Fixed issues identified during testing and QA.",
    ],

    proof: [
      {
        image: "/projects/resort-ui.png",
        title: "Resort Rental Interface",
        description:
          "User interface of the resort rental and booking system.",
      },
      {
        image: "/projects/resort-booking.png",
        title: "Booking Functionality",
        description:
          "Example of the resort booking functionality.",
      },
      {
        image: "/projects/resort-backend.png",
        title: "Backend Functionality",
        description:
          "Application functionality developed using ASP.NET MVC and C#.",
      },
    ],
  },

  {
    title: "Nutritional Information App",
    category: "Frontend / Web Application",
    description:
      "An application providing nutritional and food allergy information with user authentication and allergy management features.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/daanyool/HCI-Project-Final",

    contributions: [
      "Developed the landing page.",
      "Redesigned the sign-in and sign-up interfaces.",
      "Implemented allergy management features.",
      "Developed add, edit, and delete allergy functionality.",
      "Created health-information carousel sections.",
      "Focused on the user interface and frontend experience.",
    ],

    proof: [
      {
        image: "/projects/nutrition-landing.png",
        title: "Landing Page",
        description:
          "Frontend landing page designed and developed for the application.",
      },
      {
        image: "/projects/nutrition-auth.png",
        title: "Authentication Interface",
        description:
          "Redesigned sign-in and sign-up interfaces.",
      },
    ],
  },
];

const skills = [
  "Java",
  "C#",
  "Python",
  "JavaScript",
  "TypeScript",
  "C",
  "React",
  "Next.js",
  "ASP.NET Core",
  "HTML",
  "CSS",
  "GitHub",
  "NLP",
  "Machine Learning",
  "Figma"
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (projectTitle: string) => {
    setOpenProject(
      openProject === projectTitle ? null : projectTitle
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0c2a5c] to-[#020617] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-1/4 top-96 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            M<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {["home", "about", "skills", "projects", "experience", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className="capitalize text-gray-300 transition hover:text-cyan-400"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                Computer Science Graduate
              </p>

              <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
                Hi, I'm{" "}
                <span className="text-cyan-400">
                  Mark
                </span>
                .
              </h1>

              <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
                Aspiring Frontend Developer
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                I build web applications and software solutions while
                continuously learning new technologies. I am interested in
                frontend development, web development, and AI.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Reveal>
                  <a
                    href="#projects"
                    className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
                  >
                    View My Projects
                  </a>
                </Reveal>

                <Reveal>
                  <a
                    href="#contact"
                    className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Contact Me
                  </a>
                </Reveal>
              </div>

              <Reveal>
                <div className="mt-8 flex gap-5">
                  <a
                    href="https://github.com/daanyool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition hover:text-white"
                  >
                    GitHub ↗
                  </a>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* Hero visual */}
          <div className="hidden justify-center md:flex">
            <Reveal>
              <div className="relative h-80 w-80">
                <div className="absolute inset-0 rounded-3xl border border-cyan-400/30 rotate-6" />

                <Reveal>
                  <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
                    <Image
                      src="/profile.jpg"
                      alt="Mark Daniel Fernandez"
                      fill
                      priority
                      className="object-cover object-[center_10%]"
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <p className="text-sm font-medium tracking-widest text-cyan-400">
                        FRONTEND DEVELOPER
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle
              number="01"
              title="About Me"
            />
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-lg leading-8 text-gray-400">
                  I am a Computer Science graduate with hands-on experience
                  in frontend development through academic projects and a
                  software development internship.
                </p>

                <p className="mt-5 text-lg leading-8 text-gray-400">
                  My experience includes building web applications,
                  developing frontend features, 
                  and experimenting with AI and natural
                  language processing.
                </p>

                <p className="mt-5 text-lg leading-8 text-gray-400">
                  I enjoy solving problems through technology and am
                  continuously improving my programming and frontend
                  development skills.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold">
                  What I am looking for
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  I am currently looking for opportunities where I can
                  contribute to real-world frontend projects, learn from
                  experienced developers, and continue growing as a
                  frontend developer.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Tag text="Software Development" />
                  <Tag text="Web Development" />
                  <Tag text="AI / ML" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle
              number="02"
              title="Skills"
            />
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill) => (
              <Reveal key={skill}>
                <div
                  key={skill}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center text-gray-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  {skill}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-20 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle
              number="03"
              title="Projects"
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => {
              const isOpen = openProject === project.title;

              return (
                <Reveal
                  key={project.title}
                  delay={index * 0.1}
                >
                  <article
                    className={`overflow-hidden rounded-2xl border bg-white/[0.03] transition duration-300 ${
                      isOpen
                        ? "border-cyan-400/40"
                        : "border-white/10 hover:-translate-y-1 hover:border-cyan-400/40"
                    }`}
                  >
                    {/* PROJECT SUMMARY */}
                    <div className="p-7">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-cyan-400">
                          0{index + 1}
                        </span>

                        <span className="text-sm text-gray-500">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold">
                        {project.title}
                      </h3>

                      <p className="mt-4 leading-7 text-gray-400">
                        {project.description}
                      </p>

                      {/* TECHNOLOGIES */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {/* BUTTONS */}
                      <div className="mt-7 flex flex-wrap gap-5">
                        <button
                          onClick={() =>
                            toggleProject(project.title)
                          }
                          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                        >
                          {isOpen
                            ? "Hide Details ↑"
                            : "View Details →"}
                        </button>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-400 transition hover:text-white"
                        >
                          GitHub ↗
                        </a>
                      </div>
                    </div>

                    {/* PROJECT DETAILS */}
                    {isOpen && (
                      <div className="border-t border-white/10 bg-black/20 p-7">

                        {/* MY CONTRIBUTION */}
                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                            My Contribution
                          </p>

                          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
                            {project.contributions.map(
                              (contribution) => (
                                <li
                                  key={contribution}
                                  className="flex gap-3"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                                  <span>
                                    {contribution}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        {/* PROOF */}
                        <div className="mt-10">
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                            Proof of Contribution
                          </p>

                          <div className="mt-5 grid gap-5 sm:grid-cols-2">
                            {project.proof.map((item) => (
                              <div
                                key={item.image}
                                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
                              >
                                <div className="relative aspect-video bg-white/5">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-300 hover:scale-105"
                                  />
                                </div>

                                <div className="p-4">
                                  <h5 className="font-medium">
                                    {item.title}
                                  </h5>

                                  <p className="mt-2 text-sm leading-6 text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* GITHUB CODE PROOF */}
                        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                            Code Proof
                          </p>

                          <h4 className="mt-2 text-xl font-semibold">
                            GitHub Repository
                          </h4>

                          <p className="mt-3 text-sm leading-6 text-gray-500">
                            View the project's source code and
                            implementation.
                          </p>

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-block rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                          >
                            View GitHub Code ↗
                          </a>
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle
              number="04"
              title="Experience"
            />
          </Reveal>

          <Reveal>
            <div className="relative border-l border-white/10 pl-8">
              <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />

              <p className="text-sm text-cyan-400">
                September 2025 – November 2025
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Software Developer Intern
              </h3>

              <p className="mt-1 text-gray-500">
                Right Apps Incorporated
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>
                  • Contributed to frontend development for a POS
                  management system.
                </li>

                <li>
                  • Developed features using Next.js, TypeScript,
                  JavaScript, and CSS.
                </li>

                <li>
                  • Migrated and implemented components from JavaScript
                  to TypeScript.
                </li>

                <li>
                  • Implemented a Stores page based on a Figma design.
                </li>

                <li>
                  • Fixed bugs based on QA feedback and collaborated
                  with developers and project managers.
                </li>

                <li>
                  • Used Git and GitHub as part of the development
                  workflow.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle
              number="05"
              title="Education"
            />
          </Reveal>
          
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm text-cyan-400">
                Bachelor of Science in Computer Science
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                University of Cebu
              </h3>

              <p className="mt-2 text-gray-400">
                Computer Science graduate with experience in software
                development, web development, and artificial intelligence
                projects.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionTitle
              number="06"
              title="Let's Connect"
              centered
            />
          </Reveal>
          
          <Reveal>
            <p className="mx-auto max-w-xl text-lg leading-8 text-gray-400">
              I'm currently open to frontend development opportunities
              and would be happy to connect.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Reveal>
              <a
                href="mailto:markdanielfernandez11@gmail.com"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                Email Me
              </a>
            </Reveal>

            <Reveal>
              <a
                href="https://github.com/daanyool"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Mark Daniel Fernandez</p>

          <p>
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}

/* =========================
   COMPONENTS
========================= */

function SectionTitle({
  number,
  title,
  centered = false,
}: {
  number: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <p className="text-sm font-medium tracking-widest text-cyan-400">
        {number}
      </p>

      <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
      {text}
    </span>
  );
}
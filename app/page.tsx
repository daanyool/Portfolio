 "use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

type ProjectMediaProps = {
  title: string;
  loomUrl?: string;
  evidence?: { title: string; image: string }[];
};

function ProjectMedia({
  title,
  loomUrl = "",
  evidence = [],
}: ProjectMediaProps) {
  const loomId = loomUrl.trim().match(
    /^https:\/\/(?:www\.)?loom\.com\/(?:share|embed)\/([a-z0-9]+)\/?(?:[?#].*)?$/i
  )?.[1];

  if (!loomId && evidence.length === 0) return null;

  return (
    <div className="mt-9 space-y-8">
      {loomId && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Video walkthrough
          </h4>
          <iframe
            src={`https://www.loom.com/embed/${loomId}`}
            title={`${title} video walkthrough`}
            loading="lazy"
            allow="fullscreen"
            allowFullScreen
            className="mt-4 block aspect-video w-full rounded-xl border border-white/10 bg-black"
          />
        </div>
      )}

      {evidence.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Project screenshots
          </h4>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {evidence.map((item) => (
              <a
                key={item.image}
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] hover:border-cyan-400/40"
              >
                <div className="relative aspect-video bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <p className="p-4 text-sm font-medium">{item.title} ↗</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const ghlProjects = [
  {
    title: "FreshCut Barbershop",
    category: "Booking Funnel · CRM · Booking Setup · Email Confirmation",
    description:
      "A GoHighLevel practice project for a men's grooming business, designed to streamline the haircut booking process by allowing customers to explore the service and conveniently schedule their appointments online.",
    objective:
      "Create a streamlined booking funnel for a men's grooming business that allows customers to explore haircut services, choose their preferred appointment date and time, and conveniently submit their booking details online.",
    implementation: [
      "Designed a straightforward booking funnel for customers looking to schedule a haircut.",
      "Structured service options for Classic Haircut, Fade Haircut, Beard Trim, Premium Haircut, and Other / Custom Style.",
      "Configured the booking journey around service selection, appointment date, and available time slots.",
      "Organized the booking process to make submitting customer details simple and convenient.",
      "Developed booking confirmation and thank-you page messaging.",
    ],
    tools: ["GoHighLevel", "Funnels", "Calendars", "Forms", "CRM", "Email"],
    evidence: [
      { title: "Booking Funnel", image: "/projects/freshcut-funnel.png" },
      { title: "Calendar", image: "/projects/freshcut-calendar.png"},
      { title: "Services", image: "/projects/freshcut-services.png"}
    ],
    link: "https://sites.leadconnectorhq.com/preview/xzSbzhpkDHzJZzfd5DIZ?notrack=true"
  },
  {
    title: "SocialBoost Digital Agency",
    category: "Lead Generation Funnel · CRM · Pipelines · Email Confirmation · Basic Automation",
    description:
      "A GoHighLevel practice project for a digital marketing agency offering a free social media audit to small businesses such as cafés, restaurants, salons, and retail shops.",
    objective:
      "Build a lead-generation journey that captures business inquiries for a free social media audit and guides prospects toward a consultation.",
    implementation: [
      "Structured a landing page around the Free Social Media Audit offer and its three actionable recommendations.",
      "Mapped the lead journey from landing-page submission to CRM follow-up.",
      "Planned a 30-minute consultation calendar using Google Meet.",
      "Developed a pipeline concept to organize leads through the sales process.",
      "Prepared email messaging for lead engagement and appointment scheduling.",
      "Aligned the funnel and calendar experience with the agency's brand identity.",
    ],
    loomlink: "https://www.loom.com/share/8fdd088215ac45b686a0f2b7e8a669be",
    tools: ["GoHighLevel", "Funnels", "CRM Pipelines", "Calendars", "Forms", "Email", "Workflows"],
    evidence: [
      { title: "Lead Generation Funnel", image: "/projects/socialboost-funnel.png"},
      { title: "Workflow Automation", image: "/projects/socialboost-automation.png"},
      { title: "Calendar & Follow-up", image: "/projects/socialboost-calendar.png"},
    ],
    link: "https://socialboost-audit.vibepreview.app"
  },
  {
    "title": "ABC Solar Solutions",
    "category": "Lead Generation Funnel · CRM · Pipeline · Email Confirmation · Basic Automation",
    "description": "A residential solar installation practice project offering a FREE Solar Savings Assessment to homeowners looking to reduce their monthly electricity bills by switching to solar energy.",
    "objective": "Build a lead-generation journey that captures homeowner inquiries for a FREE Solar Savings Assessment and guides prospects toward scheduling their assessment via a Welcome Email link.",
    "implementation": [
      "Structured a single-page landing page around the FREE Solar Savings Assessment offer and its five homeowner benefit cards.",
      "Mapped the lead journey from landing-page submission to a Thank You page that directs leads to check their email for the scheduling link.",
      "Wired the lead capture form to the CRM via external form tracking (formId: solar-assessment-landing) without creating a booking, payment, or sales opportunity.",
      "Prepared email messaging guidance for lead engagement and assessment scheduling through the Welcome Email."
    ],
    "tools": ["Funnels", "CRM Pipelines", "Forms", "Email", "Workflows", "Form Tracking"],
    "evidence": [
      { "title": "Lead Generation Funnel", "image": "/projects/abc-solar-funnel.png" },
      { "title": "Thank You & Email Follow-up", "image": "/projects/abc-solar-thankyou.png" },
      { "title": "Lead Capture Form", "image": "/projects/abc-solar-form.png" }
    ],
    link: "https://solarsavings-direc-7.vibepreview.app"
  }
];

const academicProjects = [
  {
    title: "Smartbash",
    category: "AI / Web Application / Thesis Project",
    description:
      "An AI-powered disaster management system designed to help barangay residents report and monitor flood and fire incidents.",
    technologies: ["Python", "Django", "XLM-RoBERTa", "CLIP"],
    github: "https://github.com/daanyool/Smartbash",
    contributions: [
      "Worked on text classification using XLM-RoBERTa.",
      "Prepared and processed the dataset for disaster report classification.",
      "Trained and evaluated the text classification model.",
      "Worked on CLIP-based image validation.",
      "Integrated AI predictions into the reporting workflow.",
    ],
    "evidence": [
      { "title": "Model Training", "image": "/projects/smartbash-ai-training.png" },
      { "title": "CLIP Integration", "image": "/projects/smartbash-clip.png" },
      { "title": "Model Prediction", "image": "/projects/smartbash-xlm-prediction.png" }
    ],
  },
  {
    title: "EchoMind",
    category: "AI / Web Application",
    description:
      "An AI-powered web application using a BERT-based NLP model to classify user input and provide the type and level of anxiety.",
    technologies: ["Python", "BERT", "NLP", "React"],
    github: "https://github.com/daanyool/EchoMind",
    loomlink: "https://www.loom.com/share/faa7b3256c8c423f957946e160165cb9",
    contributions: [
      "Trained the BERT-based NLP model and prepared training data.",
      "Developed Python scripts for processing user input.",
      "Passed predicted classes from the NLP model to the frontend.",
      "Contributed to frontend development.",
    ],
    "evidence": [
      { "title": "Model Training", "image": "/projects/echomind-training.png" },
      { "title": "Landing Page", "image": "/projects/echomind-ui.png" },
      { "title": "Prediction Output", "image": "/projects/echomind-prediction.png" }
    ],
  },
  {
    title: "Resort Rental System",
    category: "Backend / Web Application",
    description:
      "A web-based resort booking system developed with ASP.NET MVC, C#, and SQL Server.",
    technologies: ["C#", "ASP.NET MVC", "SQL Server"],
    github: "https://github.com/daanyool/Balay-Balay-Resort-Improved",
    contributions: [
      "Worked on backend functionality using ASP.NET MVC and C#.",
      "Worked with SQL Server for application data.",
      "Implemented and modified application functionality.",
      "Fixed issues identified during testing and QA.",
    ],
    "evidence": [
      { "title": "Backend Code Snippet", "image": "/projects/resort-backend.png" },
      { "title": "Dashboard", "image": "/projects/resort-ui.png" },
    ],
  },
  {
    title: "Nutritional Information App",
    category: "Frontend / Web Application",
    description:
      "An application providing nutritional and food allergy information with user authentication and allergy management features.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/daanyool/HCI-Project-Final",
    contributions: [
      "Developed the landing page and redesigned sign-in and sign-up interfaces.",
      "Implemented allergy management features, including add, edit, and delete functionality.",
      "Created health-information carousel sections.",
    ],
    "evidence": [
      { "title": "Login Page", "image": "/projects/nutrition-auth.png" },
      { "title": "Landing Page", "image": "/projects/nutrition-landing.png" },
    ],
  },
];

const services = [
  {
    number: "01",
    title: "Web Development & Technical Support",
    description: "Contribute to frontend development, implement interface components, troubleshoot issues, and work with web technologies to improve digital applications.",
  },
  {
    number: "02",
    title: "Digital Systems & CRM",
    description: "Organize business information, work with CRM systems, build funnels, configure booking systems, and explore ways to improve digital processes.",
  },
  {
    number: "03",
    title: "Digital & Administrative Support",
    description: "Assist with organizing information, managing digital tools, handling structured tasks, documenting processes, and supporting day-to-day operations.",
  },
  {
    number: "04",
    title: "Testing & Problem-Solving",
    description: "Conduct testing, identify issues, and implement solutions to ensure application quality and performance.",
  },
];

const tools = [
  {
    name: "GoHighLevel",
    logo: "/tools/gohighlevel.png",
    mark: "GHL",
    className: "ghl-logo",
  },
  {
    name: "Canva",
    logo: "/tools/canva.png",
    mark: "C",
    className: "",
  },
  {
    name: "Figma",
    logo: "/tools/figma.png",
    mark: "F",
    className: "",
  },
  {
    name: "ChatGPT",
    logo: "/tools/chatgpt.png",
    mark: "C",
    className: "",
  },
  {
    name: "Claude AI",
    logo: "/tools/claude.png",
    mark: "CA",
    className: "",
  },
  {
    name: "Notion",
    logo: "/tools/notion.png",
    mark: "N",
    className: "",
  },
  {
    name: "Google Workspace",
    logo: "/tools/google-workspace.png",
    mark: "G",
    className: "",
  },
  {
    name: "Microsoft 365",
    logo: "/tools/microsoft-365.png",
    mark: "M",
    className: "",
  },
  {
    name: "HTML CSS JS",
    logo: "/tools/htmlcssjs.png",
    mark: "CSS",
    className: "",
  },
  {
    name: "Java",
    logo: "/tools/java.png",
    mark: "J",
    className: "",
  },
  {
    name: "C#",
    logo: "/tools/csharp.png",
    mark: "C#",
    className: "",
  },
  {
    name: "React",
    logo: "/tools/react.png",
    mark: "R",
    className: "",
  },
  {
    name: "NextJs",
    logo: "/tools/nextjs.png",
    mark: "N",
    className: "",
  },
  {
    name: "VSCode",
    logo: "/tools/vscode.png",
    mark: "VSC",
    className: "",
  },
  {
    name: "Visual Studio",
    logo: "/tools/vs.png",
    mark: "VS",
    className: "",
  },
  {
    name: "Github",
    logo: "/tools/github.png",
    mark: "GH",
    className: "",
  },
  {
    name: "Hugging Face",
    logo: "/tools/huggingface.png",
    mark: "HF",
    className: "",
  },
];

const email = "mark.daniel.fernandez.va@gmail.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGhl, setOpenGhl] = useState<string | null>(null);
  const [openAcademic, setOpenAcademic] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home">
            <Image
              src="/M-logo.png"
              alt="MRK Solutions"
              width={150}
              height={100}
              className="h-auto w-auto sm:h-10"
            />
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {[
              ["Services", "#services"], ["Tools", "#tools"],
              ["Projects", "#projects"], ["Academic", "#academic"], ["Experience", "#experience"],
            ].map(([label, href]) => <a key={href} href={href} className="text-sm text-gray-300 transition hover:text-cyan-400">{label}</a>)}
            <a href={`mailto:${email}`} className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Email Me</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl md:hidden" aria-label="Toggle menu">☰</button>
        </div>
        {menuOpen && <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {[["Services", "#services"], ["Tools", "#tools"], ["Projects", "#projects"], ["Academic", "#academic"], ["Experience", "#experience"], ["Contact", "#contact"]].map(([label, href]) =>
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">{label}</a>)}
            <a href={`mailto:${email}`} className="font-semibold text-cyan-400">Email Me ↗</a>
          </div>
        </div>}
      </nav>

      <section id="home" className="scroll-mt-24 flex min-h-screen items-center px-6 pb-20 pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_.8fr]">
          <Reveal>
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Computer Science Graduate | Technical & Digital Systems</p>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">Building practical <span className="text-cyan-400">digital solutions</span> through technology and problem-solving.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
                A Computer Science graduate with software development internship 
                experience, hands-on practice building business systems with GoHighLevel, 
                and an understanding of digital and administrative support. With exposure 
                to web development, AI-related projects, testing, and business tools, 
                I approach tasks with logical thinking, attention to detail, and a 
                willingness to learn and adapt.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">Explore My Projects</a>
                <a href={`mailto:${email}`} className="rounded-lg border border-cyan-400/60 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10">Email Me</a>
              </div>
              <p className="mt-6 text-sm text-gray-500">Philippines · Open to remote opportunities</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-full border border-cyan-500/50 bg-cyan-500/10">
                <div className="absolute inset-[10%] rounded-full border-2 border-cyan-500/50" />

                <img
                  src="/profile.png"
                  alt="Profile picture"
                  className="absolute inset-0 z-10 h-full w-full object-cover object-top"
                />
              </div>

              {/* Name and role */}
              <h2 className="relative z-20 mt-4 text-center text-2xl font-bold text-white">
                Mark Daniel Fernandez
              </h2>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-6 py-24 border-y border-white/10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle number="01" title="What I Can Contribute" />
          <p className="mb-10 max-w-2xl text-gray-400">Contributing to practical digital 
            solutions through software development, business systems, technical 
            problem-solving, and operational support to improve everyday processes.</p>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => <Reveal key={service.number}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">
                <p className="text-sm font-semibold text-cyan-400">{service.number}</p>
                <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-gray-400">{service.description}</p>
              </article>
            </Reveal>)}
          </div>
          <div className="mt-9"><EmailCTA text="Have a task or project in mind? Let’s talk." /></div>
        </div>
      </section>

      
      <section id="tools" className="scroll-mt-24 overflow-hidden border-y border-white/10 bg-[#091522] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300" />
            <p className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tools & Technologies
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-s leading-8 text-gray-400">
              Tools I've used, explored, or worked with across software development, 
              AI-related projects, digital systems, and productivity tasks. 
            </p>
          </div>

          <div className="tool-marquee relative">
            <div className="tool-marquee-track">
              {[...tools, ...tools].map((tool, index) => (
                <div
                  className="tool-logo-item"
                  key={`${tool.name}-${index}`}
                  aria-label={tool.name}
                >
                  <div className={`tool-logo ${tool.className}`}>
                    {tool.logo ? (
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        loading="lazy"
                      />
                    ) : (
                      <span className="ghl-mark">{tool.mark}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .tool-marquee {
            width: 100%;
            overflow: hidden;
            padding: 24px 0 16px;
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 8%,
              black 92%,
              transparent
            );
            mask-image: linear-gradient(
              to right,
              transparent,
              black 8%,
              black 92%,
              transparent
            );
          }

          .tool-marquee-track {
            display: flex;
            width: max-content;
            align-items: center;
            gap: 88px;
            animation: tools-scroll-right 28s linear infinite;
          }

          .tool-marquee:hover .tool-marquee-track {
            animation-play-state: paused;
          }

          .tool-logo-item {
            display: flex;
            min-width: 170px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
          }

          .tool-logo {
            display: flex;
            width: 140px;
            height: 120px;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            box-shadow: none;
          }

          .tool-logo img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: transform 0.3s ease;
          }

          .tool-logo-item:hover .tool-logo img {
            transform: scale(1.12);
          }

          .tool-logo.ghl-logo {
            background: transparent;
            border: none;
          }

          .ghl-mark {
            color: #22d3ee;
            font-size: 36px;
            font-weight: 800;
            letter-spacing: -2px;
          }

          .tool-logo-name {
            color: #f8fafc;
            font-size: 17px;
            font-weight: 600;
            text-align: center;
            white-space: nowrap;
          }

          @keyframes tools-scroll-right {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .tool-marquee-track {
              animation: none;
            }
          }

          @media (max-width: 640px) {
            .tool-marquee-track {
              gap: 48px;
              animation-duration: 22s;
            }

            .tool-logo-item {
              min-width: 120px;
              gap: 14px;
            }

            .tool-logo {
              width: 100px;
              height: 90px;
            }

            .ghl-mark {
              font-size: 30px;
            }

            .tool-logo-name {
              font-size: 14px;
            }
          }
        `}</style>
      </section>

      <section id="projects" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle number="02" title="Software & Technical Projects" />
          <p className="mb-10 max-w-2xl text-gray-400">A collection of software and AI-related projects 
            where I contributed to development, model training, frontend implementation, 
            system integration, and testing.</p>
          <div className="grid gap-5 md:grid-cols-2">
            {academicProjects.map((project, index) => {
              const isOpen = openAcademic === project.title;
              return <Reveal key={project.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-white/10 bg-[#0b1a2b] p-7">
                  <p className="text-xs text-cyan-400">ACADEMIC PROJECT · 0{index + 1}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-xs text-gray-500">{project.category}</p>
                  <p className="mt-4 leading-7 text-gray-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-500">{tech}</span>)}</div>
                  <button onClick={() => setOpenAcademic(isOpen ? null : project.title)} className="mt-6 text-sm mr-6 font-semibold text-cyan-300">{isOpen ? "Hide contribution ↑" : "View my contribution →"}</button>
                  {isOpen && <ul className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm leading-6 text-gray-400">{project.contributions.map((item) => <li key={item}>• {item}</li>)}</ul>}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm text-gray-400 hover:text-white"
                  >
                    GitHub repository ↗
                  </a>

                  <ProjectMedia
                    title={project.title}
                    loomUrl={project.loomlink}
                    evidence={project.evidence}
                  />
                </article>
              </Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle number="03" title="Business Systems Projects" />
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <p className="max-w-2xl leading-7 text-gray-400">A closer look at business-focused practice builds, from the customer-facing funnel to the systems behind the experience.</p>
            <span className="w-fit rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-medium text-cyan-300">Hands-on practice projects</span>
          </div>
          <div className="grid gap-7">
            {ghlProjects.map((project, index) => {
              const isOpen = openGhl === project.title;
              return <Reveal key={project.title} delay={index * 0.08}>
                <article className={`overflow-hidden rounded-2xl border bg-white/[0.03] transition ${isOpen ? "border-cyan-400/40" : "border-white/10 hover:border-cyan-400/30"}`}>
                  <div className="grid md:grid-cols-[.85fr_1.15fr]">
                    <div className="flex min-h-64 flex-col justify-between bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent p-7 md:p-9">
                      <div><p className="text-sm text-cyan-300">0{index + 1} / GOHIGHLEVEL</p><h3 className="mt-5 text-3xl font-bold">{project.title}</h3><p className="mt-3 text-sm leading-6 text-gray-400">{project.category}</p></div>
                      <button onClick={() => setOpenGhl(isOpen ? null : project.title)} className="mt-8 w-fit font-semibold text-cyan-300 hover:text-cyan-200">{isOpen ? "Hide project details ↑" : "Explore project details →"}</button>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-gray-400 hover:text-white">Go To Funnel ↗</a>
                    </div>
                    <div className="p-7 md:p-9">
                      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Project overview</p>
                      <p className="mt-3 leading-7 text-gray-300">{project.description}</p>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-cyan-400">Objective</p>
                      <p className="mt-3 leading-7 text-gray-400">{project.objective}</p>
                      <div className="mt-6 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">{tool}</span>)}</div>
                    </div>
                  </div>
                  {isOpen && <div className="border-t border-white/10 bg-black/20 p-7 md:p-9">
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">What I worked on</p>
                    <ul className="mt-5 grid gap-3 md:grid-cols-2">{project.implementation.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-gray-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />{item}</li>)}</ul>
                    <ProjectMedia
                      title={project.title}
                      loomUrl={project.loomlink}
                      evidence={project.evidence}
                    />
                  </div>}
                </article>
              </Reveal>;
            })}
          </div>
          <div className="mt-8"><EmailCTA text="Looking for help with a GoHighLevel setup?" /></div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-6">
          <div>
            <SectionTitle number="04" title="Experience" />
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <p className="text-sm text-cyan-300">
                  September 2025 – November 2025
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  Software Developer Intern
                </h3>
                <p className="mt-1 text-gray-500">Right Apps Incorporated</p>
                <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-6 text-gray-400">
                  <li>Contributed to frontend development for a POS management system.</li>
                  <li>Developed features using Next.js, TypeScript, JavaScript, and CSS.</li>
                  <li>Implemented a Stores page based on a Figma design.</li>
                  <li>Fixed QA issues and collaborated with developers and project managers.</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div id="academic" className="scroll-mt-24">
            <SectionTitle number="05" title="Education" />
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <p className="text-sm text-cyan-300">2022 – 2026</p>
                <h3 className="mt-3 text-2xl font-semibold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="mt-1 text-gray-500">University of Cebu</p>
                <p className="mt-6 leading-7 text-gray-400">
                  A technical academic foundation in software development, web
                  applications, and artificial intelligence, supporting a structured
                  and analytical approach to digital systems.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-gradient-to-b from-cyan-400/[0.06] to-transparent px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Let's Connect</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Let's work on something meaningful.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-md leading-8 text-gray-400">I'm open to opportunities 
            where I can contribute, learn new technologies, work on practical solutions, 
            and support projects that combine technical skills, digital systems, and organized processes.</p>
          <a href={`mailto:${email}`} className="mt-9 inline-flex rounded-lg bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300">Email Me ↗</a>
          <p className="mt-5 text-sm text-gray-500">{email}</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Mark Daniel Fernandez</p>
          <p>Computer Science Graduate | Technical & Digital Systems Portfolio</p>
          <a href={`mailto:${email}`} className="text-cyan-300 hover:text-cyan-200">Email Me ↗</a>
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return <div className="mb-10"><p className="text-sm font-semibold tracking-widest text-cyan-400">{number}</p><h2 className="mt-2 text-4xl font-bold sm:text-5xl">{title}</h2></div>;
}

function EmailCTA({ text }: { text: string }) {
  return <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-6 sm:flex-row sm:items-center">
    <p className="font-medium text-gray-200">{text}</p>
    <a href={`mailto:${email}`} className="shrink-0 rounded-lg border border-cyan-400/50 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10">Email Me ↗</a>
  </div>;
}

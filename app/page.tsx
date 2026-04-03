"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaExternalLinkAlt, FaGithub, FaEnvelope } from "react-icons/fa";
import { BackgroundPaths } from "./components/BackgroundPaths";
import { useSearchParams } from "next/navigation";

interface Project {
  id: string;
  title: string;
  description?: string;
  category?: string;
  language?: string;
  link?: string;
  gif?: string;
  featured?: boolean;
  new_feature?: boolean;
}

const Typewriter = dynamic<any>(() => import("react-typewriter-effect"), {
  ssr: false,
});

const TITLE_SPEED = 100;
const SUBTITLE_SPEED = 16;
// About typewriter delay in ms per character (1.2x faster than before)
const ABOUT_BODY_SPEED = 20;

const SUBTITLE_TEXT =
  "A Software Developer from Nanaimo BC Specializing" +
  "\n" +
  "in IT Infrastructure and Personalized Websites.";

const ABOUT_TOKENS = [
  {
    type: "text" as const,
    text:
      "I am a First Year Student Pursuing my BCs in Computer Science. I utilize the MERN, MEAN, and T3 Stacks to deliver Beautiful Full Stack Websites. Check out my ",
  },
  {
    type: "link" as const,
    text: "Open Source Projects",
    href: "/projects",
  },
  {
    type: "text" as const,
    text: ", ",
  },
  {
    type: "link" as const,
    text: "Complete Skillset",
    href: "/skills",
  },
  {
    type: "text" as const,
    text: ", and ",
  },
  {
    type: "link" as const,
    text: "Contact Me",
    href: "/#contact",
  },
  {
    type: "text" as const,
    text: " for all Freelance Inquiries.",
  },
];

const ABOUT_TOTAL_LENGTH = ABOUT_TOKENS.reduce(
  (sum, token) => sum + token.text.length,
  0,
);

function renderAboutTyped(visibleChars: number) {
  let remaining = visibleChars;
  const parts: React.ReactNode[] = [];

  for (let i = 0; i < ABOUT_TOKENS.length && remaining > 0; i++) {
    const token = ABOUT_TOKENS[i];
    const take = Math.min(remaining, token.text.length);
    const shown = token.text.slice(0, take);
    remaining -= take;
    if (!shown) continue;

    if (token.type === "text") {
      parts.push(shown);
    } else {
      parts.push(
        <Link
          key={`${token.href}-${i}`}
          href={token.href}
          className="text-blue-400"
        >
          {shown}
        </Link>,
      );
    }
  }

  return <>{parts}</>;
}

function HomeContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [titleDone, setTitleDone] = useState(false);
  const [subtitleDone, setSubtitleDone] = useState(false);
  const [aboutChars, setAboutChars] = useState(0);
  const searchParams = useSearchParams();
  const fromNav = searchParams.get("from") === "nav";

  // Approximate when the title typewriter has finished so we can trigger the subtitle
  useEffect(() => {
    if (fromNav) {
      setTitleDone(true);
      return;
    }

    const titleText = "Hi, I'm Morris";
    const typeSpeedMs = TITLE_SPEED;
    const totalDuration = titleText.length * typeSpeedMs;
    const timeout = setTimeout(() => setTitleDone(true), totalDuration + 200);
    return () => clearTimeout(timeout);
  }, [fromNav]);

  useEffect(() => {
    if (!titleDone && !fromNav) return;

    if (fromNav) {
      setSubtitleDone(true);
      return;
    }

    const totalDuration = SUBTITLE_TEXT.length * SUBTITLE_SPEED;
    const timeout = setTimeout(() => setSubtitleDone(true), totalDuration + 200);
    return () => clearTimeout(timeout);
  }, [titleDone, fromNav]);

  useEffect(() => {
    if (!subtitleDone && !fromNav) return;

    if (fromNav) {
      setAboutChars(ABOUT_TOTAL_LENGTH);
      return;
    }

    setAboutChars(0);
    const interval = setInterval(() => {
      setAboutChars(prev => {
        if (prev >= ABOUT_TOTAL_LENGTH) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, ABOUT_BODY_SPEED);

    return () => clearInterval(interval);
  }, [subtitleDone, fromNav]);

  const aboutDone = fromNav || aboutChars >= ABOUT_TOTAL_LENGTH;

  // Lock scrolling on the home page until the About text has fully typed
  useEffect(() => {
    if (typeof document === "undefined") return;

    const htmlEl = document.documentElement;
    const previousBody = document.body.style.overflow;
    const previousHtml = htmlEl.style.overflow;

    if (!aboutDone) {
      document.body.style.overflow = "hidden";
      htmlEl.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      htmlEl.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = previousBody;
      htmlEl.style.overflow = previousHtml;
    };
  }, [aboutDone]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data = await response.json();
          setProjects(data.filter((p: Project) => p.featured));
        }
      } catch (err) {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <BackgroundPaths />
      <div className="relative z-10 bg-transparent w-full">
        <Navbar />
        <section className="px-6 py-16 min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <div className="w-full max-w-5xl rounded-xl px-6 py-5 shadow-md shadow-black/40 bg-gradient-to-r from-black/10 via-black/90 to-black/10">
                  <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 flex items-baseline gap-2 whitespace-nowrap">
                    {fromNav ? (
                      <>
                        <span>Hi, I'm Morris</span>
                        <span className={titleDone ? "cursor-blink-slow" : "cursor-blink-fast"}>_</span>
                      </>
                    ) : (
                      <>
                        <Typewriter text="Hi, I'm Morris" typeSpeed={TITLE_SPEED} cursor={false} />
                        <span className={titleDone ? "cursor-blink-slow" : "cursor-blink-fast"}>_</span>
                      </>
                    )}
                  </h1>
                  <div className="text-xl md:text-2xl text-slate-200 max-w-none whitespace-pre-line min-h-[4.5rem]">
                    {fromNav
                      ? SUBTITLE_TEXT
                      : titleDone && (
                          <Typewriter
                            text={SUBTITLE_TEXT}
                            typeSpeed={SUBTITLE_SPEED}
                            cursor={false}
                          />
                        )}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <Image
                    src="/morrisharrison.jpg"
                    alt="Morris Harrison"
                    fill
                    className="rounded-full object-cover shadow-2xl shadow-blue-500/20"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-full border-[3px] border-white border-t-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pt-4 pb-16 -mt-10 md:-mt-16">
          <div className="max-w-3xl mx-auto w-full">
            <div className="inline-block w-full space-y-4 rounded-xl px-6 py-5 shadow-md shadow-black/40 bg-gradient-to-r from-black/40 via-black/95 to-black/40 h-[130px] overflow-hidden">
              <div className="text-lg md:text-xl text-slate-100 text-left">
                {(subtitleDone || fromNav) && (
                  <p>{renderAboutTyped(fromNav ? ABOUT_TOTAL_LENGTH : aboutChars)}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pt-8 pb-0 -mt-16">
          <div className="max-w-4xl mx-auto w-full text-center">
            <div className="inline-block rounded-xl px-4 py-3 mt-4 mb-6 shadow-md shadow-black/40 bg-gradient-to-r from-black/10 via-black/90 to-black/10">
              <h2 className="text-5xl font-bold text-white text-center">Featured Projects</h2>
            </div>
            {!loading && projects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-9">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 transition hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                  >
                    {project.gif && (
                      <div className="relative w-full h-48 bg-slate-700 overflow-hidden">
                        <img
                          src={project.gif}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-200 mb-4">
                        {project.description}
                      </p>
                      <div className="flex gap-2 mb-4">
                        {project.category && (
                          <span className="px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/30 rounded-full">
                            {project.category}
                          </span>
                        )}
                        {project.language && (
                          <span className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-900/30 rounded-full">
                            {project.language}
                          </span>
                        )}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                        >
                          <FaExternalLinkAlt size={16} />
                          Visit Project
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!loading && projects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-300 text-xl">No projects available.</p>
                <p className="text-slate-400">Check the API or database seeding.</p>
              </div>
            )}

            {/* Contact icons below featured projects */}
            <div className="mt-6 mb-[20px] inline-block rounded-xl px-6 py-4 shadow-md shadow-black/40 bg-gradient-to-r from-black/40 via-black/90 to-black/40">
              <div className="text-slate-100 italic text-4xl text-center mb-3 cursor-default">
                Keep in Touch
              </div>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="mailto:morriskharrison@outlook.com"
                  className="text-white hover:text-blue-400 transition text-2xl"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://github.com/morris-harrison"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}

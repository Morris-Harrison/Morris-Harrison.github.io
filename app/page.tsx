"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BackgroundPaths } from "./components/BackgroundPaths";

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

const Typewriter = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [titleDone, setTitleDone] = useState(false);

  // Approximate when the title typewriter has finished so we can trigger the subtitle
  useEffect(() => {
    const titleText = "Hi, I'm Morris";
    const typeSpeedMs = 100;
    const totalDuration = titleText.length * typeSpeedMs;
    const timeout = setTimeout(() => setTitleDone(true), totalDuration + 200);
    return () => clearTimeout(timeout);
  }, []);

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
                    <Typewriter text="Hi, I'm Morris" typeSpeed={100} cursor={false} />
                    <span className={titleDone ? "cursor-blink-slow" : "cursor-blink-fast"}>_</span>
                  </h1>
                  <div className="text-xl md:text-2xl text-slate-200 max-w-none whitespace-pre-line min-h-[4.5rem]">
                    {titleDone && (
                      <Typewriter
                        text={
                          "A Software Developer from Nanaimo BC Specializing" +
                          "\n" +
                          "in IT Infrastructure and Personalized Websites."
                        }
                        typeSpeed={16}
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
                    className="rounded-full object-cover border-4 border-black shadow-2xl shadow-blue-500/20"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pt-4 pb-16 -mt-10 md:-mt-16">
          <div className="max-w-3xl mx-auto w-full">
            <div className="inline-block w-full text-center space-y-4 rounded-xl px-6 py-5 shadow-md shadow-black/40 bg-gradient-to-r from-black/10 via-black/90 to-black/10">
              <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
              <p className="text-lg md:text-xl text-slate-200">
                I use the MERN, MEAN, and -- stacks to deliver beautiful full stack websites. I am currently a first year student at VIU  BCs in Computer Science check out my Projects here and my Skills here, open to freelance work, contact here.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <div className="inline-block rounded-xl px-4 py-3 mb-12 shadow-md shadow-black/40 bg-gradient-to-r from-black/10 via-black/90 to-black/10">
              <h2 className="text-5xl font-bold text-white">Featured Projects</h2>
            </div>
            {!loading && projects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

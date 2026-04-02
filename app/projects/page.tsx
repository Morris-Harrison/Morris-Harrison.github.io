"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { LightWavesBackground } from "../components/LightWavesBackground";

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

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (err) {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categories = Array.from(new Set(projects.map((p) => p.category).filter(Boolean))) as string[];
  const languages = Array.from(new Set(projects.map((p) => p.language).filter(Boolean))) as string[];
  const hasNewFeatures = projects.some((p) => p.new_feature);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    const matchesLanguage = !selectedLanguage || project.language === selectedLanguage;
    const matchesFeature = !selectedFeature || 
      (selectedFeature === "new" && project.new_feature) ||
      (selectedFeature === "featured" && project.featured);
    return matchesCategory && matchesLanguage && matchesFeature;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const aFeatured = a.featured ? 1 : 0;
    const bFeatured = b.featured ? 1 : 0;
    return bFeatured - aFeatured;
  });

  const featureLabel =
    selectedFeature === "featured"
      ? "Featured"
      : selectedFeature === "new"
      ? "New Feature"
      : "";

  let headingTitle = "All Projects";
  if (selectedCategory || selectedLanguage || selectedFeature) {
    const parts: string[] = [];
    if (featureLabel) parts.push(featureLabel);
    if (selectedCategory) parts.push(selectedCategory);
    if (selectedLanguage) parts.push(selectedLanguage);
    headingTitle = `${parts.join(" ")} Projects`;
  }

  return (
    <LightWavesBackground>
      <div className="relative z-10 bg-transparent w-full min-h-screen flex flex-col">
        <Navbar />
        <section className="px-6 pt-20 pb-0 flex-1">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white mb-2">{headingTitle}</h2>
            <p className="text-slate-400 text-lg mb-10">
              All of my Projects are Open-Source Live Websites or Applications Available for Download.
            </p>
            
            {/* Filter Buttons */}
            {!loading && projects.length > 0 && (
              <div className="mb-8 space-y-4">
                {/* Category + Feature Filter */}
                {(categories.length > 0 || hasNewFeatures) && (
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Category:</p>
                    <div className="flex flex-wrap gap-2">
                      {categories.length > 0 && (
                        <>
                          <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ring-offset-background hover:ring-primary/90 hover:ring-2 hover:ring-offset-2 ${
                              selectedCategory === null
                                ? "bg-blue-600 text-white"
                                : "bg-black text-white"
                            }`}
                          >
                            All Categories
                          </button>
                          {categories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() =>
                                setSelectedCategory((current) =>
                                  current === cat ? null : cat
                                )
                              }
                              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ring-offset-background hover:ring-primary/90 hover:ring-2 hover:ring-offset-2 ${
                                selectedCategory === cat
                                  ? "bg-blue-600 text-white"
                                  : "bg-black text-white"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </>
                      )}

                      {hasNewFeatures && (
                        <>
                          <button
                            onClick={() => setSelectedFeature("new")}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ring-offset-background hover:ring-primary/90 hover:ring-2 hover:ring-offset-2 ${
                              selectedFeature === "new"
                                ? "bg-blue-600 text-white"
                                : "bg-black text-white"
                            }`}
                          >
                            New Features
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Language Filter */}
                {languages.length > 0 && (
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Language:</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedLanguage(null)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ring-offset-background hover:ring-primary/90 hover:ring-2 hover:ring-offset-2 ${
                          selectedLanguage === null
                            ? "bg-blue-600 text-white"
                            : "bg-black text-white"
                        }`}
                      >
                        All
                      </button>
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() =>
                            setSelectedLanguage((current) =>
                              current === lang ? null : lang
                            )
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ring-offset-background hover:ring-primary/90 hover:ring-2 hover:ring-offset-2 ${
                            selectedLanguage === lang
                              ? "bg-blue-600 text-white"
                              : "bg-black text-white"
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-slate-400 text-xl">Loading projects...</p>
              </div>
            ) : sortedProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-9">
                {sortedProjects.map((project) => (
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
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="bg-blue-500/30 text-blue-300 px-2 py-1 rounded text-xs font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 mb-4">
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
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-300 text-xl">
                  {projects.length === 0 ? "No projects available." : "No projects match your filters."}
                </p>
                {projects.length === 0 && (
                  <p className="text-slate-400">Check the API or database seeding.</p>
                )}
              </div>
            )}

            {/* Contact icons below projects, matching home page */}
            <div className="text-center pt-[30px] pb-[30px]">
              <div className="inline-block rounded-xl px-6 py-4 shadow-md shadow-black/40 bg-gradient-to-r from-black/40 via-black/90 to-black/40">
                <div className="text-slate-100 italic text-4xl text-center mb-3">
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
          </div>
        </section>
        <Footer />
      </div>
    </LightWavesBackground>
  );
}

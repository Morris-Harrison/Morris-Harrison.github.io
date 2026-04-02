import Image from "next/image";
import { FaNode, FaEnvelope, FaGithub } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiMongodb } from "react-icons/si";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { LightWavesBackground } from "../components/LightWavesBackground";

export default function Skills() {
  const languages = [
    { 
      name: "Python", 
      icon: "/python-svgrepo-com.svg",
      description: "Data processing, scripting, and backend development",
      proficiency: "Advanced",
      frameworks: [
        { name: "Django", icon: SiDjango },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "CustomTkinter", icon: SiPostgresql },
        { name: "Numpy", icon: SiPostgresql },
        { name: "PyGame", icon: SiPostgresql },
      ]
    },
    { 
      name: "JavaScript", 
      icon: "/js-svgrepo-com.svg",
      description: "Interactive frontend experiences and web applications",
      proficiency: "Advanced",
      frameworks: [
        { name: "React", icon: "/react.svg" },
        { name: "Next.js", icon: "/next.svg" },
        { name: "Tailwind", icon: "/tailwind-css.svg" },
        { name: "Three JS", icon: "/tailwind-css.svg" },
        { name: "express", icon: "/tailwind-css.svg" },
        { name: "electron", icon: "/tailwind-css.svg" },
        { name: "shadcn", icon: "/tailwind-css.svg" },
      ]
    },
    { 
      name: "TypeScript", 
      icon: "/typescript-logo-svgrepo-com.svg",
      description: "Type-safe development for scalable applications",
      proficiency: "Advanced",
      frameworks: [
        { name: "Node.js", icon: FaNode },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Prisma", icon: "/prisma-svgrepo-com.svg" },
        { name: "Socket.io", icon: "/socketio_logo_icon_169741.svg" },
        { name: "MySQL", icon: "/mysql-2.svg" },
      ]
    },
  ];

  const databases = [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: "/mysql-2.svg" },
  ];

  const tools = [
    { name: "VS Code", icon: "/vscode-svgrepo-com.svg" },
    { name: "JetBrains", icon: "/jetbrains-svgrepo-com.svg" },
    { name: "Postman", icon: "/postman-icon-svgrepo-com.svg" },
    { name: "Git", icon: "/git-svgrepo-com.svg" },
    { name: "BrowserStack", icon: "/browserstack-svgrepo-com.svg" },
  ];

  const deploymentServices = [
    
    { name: "Digital Ocean", icon: "/digital-ocean-svgrepo-com.svg" },
    { name: "AWS EC2", icon: "/aws-svgrepo-com.svg" },
    { name: "Vercel", icon: "/vercel.svg" },
    { name: "Render", icon: "/Render Symbol SVG.svg" },
    { name: "Pages", icon: "/github-142-svgrepo-com.svg" },
  ];

  const servicesIntegrations = [
    { name: "Stripe", icon: "/stripe-svgrepo-com.svg" },
    { name: "Namecheap", icon: "/namecheap-svgrepo-com.svg" },
    { name: "GitHub", icon: "/github-142-svgrepo-com.svg" },
    { name: "Cloudflare", icon: "/cloudflare-svgrepo-com.svg" },
    { name: "Google APIs", icon: "/google-developers-svgrepo-com.svg" },
  ];

  const aiAgents = [
    { name: "Claude Sonnet/Haiku 5", icon: "/claude-color.svg" },
    { name: "Perplexity", icon: "/perplexity-color.svg" },
    { name: "Copilot Student", icon: "/github-copilot.svg" },
    { name: "Ollama", icon: "/ollama-icon.svg" },
    { name: "GPT 5", icon: "/gpt.svg" },
  ];

  return (
    <LightWavesBackground>
      <div className="relative z-10 bg-transparent w-full">
        <Navbar />

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-7xl font-bold text-white mb-6">Skillset & Tech Stack</h1>
            <p className="text-2xl text-slate-300 leading-relaxed">
              I work with Industry Standard Dev Tools to Build and Deploy Modern Full-Stack Applications.
            </p>
    
          </div>
        </section>

        {/* Skills Grid Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white mt-[-50px] mb-12">Languages & Frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="group relative bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition hover:shadow-lg hover:shadow-slate-500/20 hover:-translate-y-1"
                >
                  <div
                    className={`mb-4 group-hover:scale-110 transition transform ${
                      lang.name === "TypeScript" ? "w-[56px] h-[56px]" : "w-16 h-16"
                    }`}
                  >
                    <Image
                      src={lang.icon}
                      alt={lang.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {lang.name}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-slate-300 font-semibold">
                      Proficiency
                    </span>
                    <span className="text-sm text-slate-300">
                      {lang.proficiency}
                    </span>
                  </div>
                  <p className="text-slate-400 mb-4">
                    {lang.description}
                  </p>
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-xs text-slate-500 font-semibold mb-3">FRAMEWORKS & LIBRARIES</p>
                    <div className="space-y-2">
                      {lang.frameworks.map((fw) => {
                        const Icon = typeof fw.icon === 'function' ? fw.icon : null;
                        return (
                          <div key={fw.name} className="flex items-center gap-2">
                            {Icon ? (
                              <Icon className="w-4 h-4 text-white flex-shrink-0" />
                            ) : (
                              <div className="w-4 h-4 flex-shrink-0">
                                <Image 
                                  src={fw.icon as string} 
                                  alt={fw.name}
                                  width={16}
                                  height={16}
                                  className="w-full h-full object-contain invert"
                                />
                              </div>
                            )}
                            <span className="text-sm text-slate-300">{fw.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Databases Section */}
        <section className="px-6 pt-0 pb-0 mt-[-20px]">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white mb-8">Databases</h2>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <div className="grid grid-cols-3 gap-8 mb-6">
                {databases.map((db) => {
                  const Icon = typeof db.icon === "function" ? db.icon : null;
                  return (
                    <div key={db.name} className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-slate-700 rounded-lg p-3 flex items-center justify-center">
                        {Icon ? (
                          <Icon className="w-10 h-10 text-white flex-shrink-0" />
                        ) : (
                          <Image
                            src={db.icon as string}
                            alt={db.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain invert"
                          />
                        )}
                      </div>
                      <span className="text-sm text-slate-300 text-center">{db.name}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                Production-ready experience with relational and document databases, including schema design, indexing, and query optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Tools & Soft Skills Section */}
        <section className="px-6 pt-20 pb-0 mt-[-20px]">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white mb-12">Developer Tools</h2>
            <div className="space-y-8">
              {/* Combined tools container */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Code Editors & Dev Tools</h3>
                <div className="grid grid-cols-5 gap-6 mb-6">
                  {tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-slate-700 rounded-lg p-2 flex items-center justify-center hover:bg-slate-600 transition">
                        <Image 
                          src={tool.icon} 
                          alt={tool.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-slate-300 text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  3 Years of Programming Experience using Visual Studio Code, Git, and Postman, with a new passion for JetBrains IDE's and BrowserStack.
                </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Deployment Platforms</h3>
                <div className="grid grid-cols-5 gap-6 mb-6">
                  {deploymentServices.map((service) => (
                    <div key={service.name} className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-slate-700 rounded-lg p-2 flex items-center justify-center hover:bg-slate-600 transition">
                        <Image 
                          src={service.icon} 
                          alt={service.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-slate-300 text-center">{service.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Dozens of Projects Deployed with Modern Platforms such as Digital Ocean and AWS EC2 + nginx, as well as Express Deployment through Vercel, Render, and GitHub Pages.
                </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Web Services & Integrations</h3>
                <div className="grid grid-cols-5 gap-6 mb-6">
                  {servicesIntegrations.map((service) => (
                    <div key={service.name} className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-slate-700 rounded-lg p-2 flex items-center justify-center hover:bg-slate-600 transition">
                        <Image 
                          src={service.icon}
                          alt={service.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-slate-300 text-center">{service.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  7 Domains Managed through Namecheap with Security provided by Cloudflare, in addition to the incorperation of API's such as Stripe Payment and Google Maps Adress Autocomplete for my Online Store.
                </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">AI Agents</h3>
                <div className="grid grid-cols-5 gap-6 mb-6">
                  {aiAgents.map((agent) => (
                    <div key={agent.name} className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-slate-700 rounded-lg p-2 flex items-center justify-center hover:bg-slate-600 transition">
                        <Image 
                          src={agent.icon} 
                          alt={agent.name}
                          width={32}
                          height={32}
                          className={`w-full h-full object-contain ${
                            agent.name === "Copilot Student" || agent.name === "Ollama"
                              ? "brightness-0"
                              : agent.name === "GPT 5"
                              ? "invert"
                              : ""
                          }`}
                        />
                      </div>
                      <span className="text-sm text-slate-300 text-center">{agent.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Advanced AI Manipulation with Premium Agents provided by GitHub Education including Claude 5, Perplexity 5, and GPT 5, as well as offline AI through Ollama.
                </p>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
                <ul className="list-disc list-inside text-slate-300 text-lg mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  <li>Problem-solving and analytical thinking</li>
                  <li>Clear communication with technical and non-technical stakeholders</li>
                  <li>Collaborative teamwork and pair programming</li>
                  <li>Project ownership and time management</li>
                  <li>Thoughtful code review and mentorship</li>
                  <li>Continuous learning and self-improvement</li>
                </ul>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Together, these skills help me ship reliable software, work well with diverse teams, and keep improving as a developer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact icons below skills, matching projects/home Keep in Touch */}
        <section className="px-6 pb-0">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center">
              <div className="inline-block mt-[60px] mb-[30px] rounded-xl px-6 py-4 shadow-md shadow-black/40 bg-gradient-to-r from-black/40 via-black/90 to-black/40">
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

        {/* Footer */}
        <Footer />
      </div>
    </LightWavesBackground>
  );
}

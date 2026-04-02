import Link from "next/link";
import Image from "next/image";
import { FaPython, FaJs, FaNode } from "react-icons/fa";
import { SiTypescript, SiDjango, SiPostgresql, SiMongodb } from "react-icons/si";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { LightWavesBackground } from "../components/LightWavesBackground";

export default function Skills() {
  const languages = [
    { 
      name: "Python", 
      icon: FaPython,
      description: "Data processing, scripting, and backend development",
      proficiency: "Advanced",
      frameworks: [
        { name: "Django", icon: SiDjango },
        { name: "PostgreSQL", icon: SiPostgresql },
      ]
    },
    { 
      name: "JavaScript", 
      icon: FaJs,
      description: "Interactive frontend experiences and web applications",
      proficiency: "Advanced",
      frameworks: [
        { name: "React", icon: "/react.svg" },
        { name: "Next.js", icon: "/next.svg" },
        { name: "Tailwind", icon: "/tailwind-css.svg" },
      ]
    },
    { 
      name: "TypeScript", 
      icon: SiTypescript,
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

  const tools = [
    { name: "VS Code", icon: "/vs-code.svg" },
    { name: "JetBrains", icon: "/jetbrains.svg" },
    { name: "Postman", icon: "/postman_logo_icon_248799.svg" },
    { name: "VirtualBox", icon: "/virtualbox_logo_icon_249263.svg" },
    { name: "Raspberry Pi", icon: "/raspberry_pi_logo_icon_144943.svg" },
  ];

  const deploymentServices = [
    
    { name: "Digital Ocean", icon: "/digitalocean.svg" },
    { name: "AWS EC2", icon: "/aws.svg" },
    { name: "Vercel", icon: "/vercel.svg" },
    { name: "Render", icon: "/Render Symbol SVG.svg" },
    { name: "Pages", icon: "/GitHub_Invertocat_White.svg" },
  ];

  const servicesIntegrations = [
    { name: "Stripe", icon: "/stripe.svg" },
    { name: "Namecheap", icon: "/namecheap.svg" },
    { name: "GitHub", icon: "/GitHub_Invertocat_White.svg" },
    { name: "Cloudflare", icon: "/cloudflare.svg" },
    { name: "Google APIs", icon: "/googledev.png" },
  ];

  const aiAgents = [
    { name: "Claude Sonnet/Haiku 5", icon: "/claude.svg" },
    { name: "Perplexity", icon: "/perplexity.svg" },
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
              I work with modern technologies to build scalable, performant web applications. 
              Here's a breakdown of my technical expertise and the tools I'm proficient with.
            </p>
          </div>
        </section>

        {/* Skills Grid Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white mb-12">Languages & Frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="group relative bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition hover:shadow-lg hover:shadow-slate-500/20 hover:-translate-y-1"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition transform">
                    <lang.icon className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {lang.name}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-black font-semibold">
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

        {/* Tools & Soft Skills Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white mb-12">Tools & Skills</h2>
            <div className="space-y-8">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Code Editors & Dev Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                  {tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-slate-700 rounded-lg p-2 flex items-center justify-center hover:bg-slate-600 transition">
                        <Image 
                          src={tool.icon} 
                          alt={tool.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain invert"
                        />
                      </div>
                      <span className="text-sm text-slate-300 text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Git, GitHub, Docker, Firebase, AWS, Vercel, Netlify, Prisma ORM, 
                  GraphQL, Webpack, npm, yarn, and various development workflows.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
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
                          className="w-full h-full object-contain invert"
                        />
                      </div>
                      <span className="text-sm text-slate-300 text-center">{service.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Experienced with modern deployment platforms for fast, reliable application hosting and continuous deployment workflows.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Web Services & Integrations</h3>
                <div className="grid grid-cols-5 gap-6 mb-6">
                  {servicesIntegrations.map((service) => {
                    const Icon = typeof service.icon === 'function' ? service.icon : null;
                    return (
                      <div key={service.name} className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-slate-700 rounded-lg p-2 flex items-center justify-center hover:bg-slate-600 transition">
                          {Icon ? (
                            <Icon className="w-8 h-8 text-white flex-shrink-0" />
                          ) : (
                            <Image 
                              src={service.icon as string} 
                              alt={service.name}
                              width={32}
                              height={32}
                              className={`w-full h-full object-contain ${service.name === "Google APIs" ? "grayscale brightness-0 invert" : "invert"}`}
                            />
                          )}
                        </div>
                        <span className="text-sm text-slate-300 text-center">{service.name}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Integration with payment systems, e-commerce platforms, and domain management services for complete application solutions.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
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
                          className="w-full h-full object-contain invert"
                        />
                      </div>
                      <span className="text-sm text-slate-300 text-center">{agent.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Proficient with AI-powered development tools and coding assistants to enhance productivity, write cleaner code, and accelerate development workflows.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Problem-solving, communication, teamwork, project management, code review, 
                  mentoring, and a strong commitment to continuous learning and improvement.
                </p>
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

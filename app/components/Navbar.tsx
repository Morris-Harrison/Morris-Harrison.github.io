"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-black border-b border-white/30 z-50 transition-opacity duration-300 ${
      isAtTop ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Morris Harrison
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-slate-300 hover:text-white transition font-medium">
            Home
          </Link>
          <Link href="/skills" className="text-slate-300 hover:text-white transition font-medium">
            Skills
          </Link>
          <Link href="/projects" className="text-slate-300 hover:text-white transition font-medium">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

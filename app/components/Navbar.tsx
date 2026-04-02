"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

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
    <nav className={`fixed top-0 left-0 right-0 bg-black border-b border-white z-50 transition-opacity duration-300 ${
      isAtTop ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl italic text-white hover:text-blue-400 transition"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }
            }
          }}
        >
          Morris Harrison
        </Link>
        <div className="flex gap-8">
          <Link
            href="/"
            className="text-white hover:text-blue-400 transition font-medium"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }
              }
            }}
          >
            Home
          </Link>
          <Link href="/skills" className="text-white hover:text-blue-400 transition font-medium">
            Skillset
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-400 transition font-medium">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

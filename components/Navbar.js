 "use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Insomnia", id: "insomnia" },
    { name: "Migraine", id: "migraine" },
    { name: "Epilepsy", id: "epilepsy" },
    { name: "Depression", id: "depression" },
    { name: "Anxiety", id: "anxiety" },
    { name: "Bipolar", id: "bipolar" },
    { name: "Schizophrenia", id: "schizophrenia" },
    { name: "OCD", id: "ocd" },
    { name: "ADHD", id: "adhd" },
    { name: "PTSD", id: "ptsd" },
    { name: "Addiction", id: "addiction" },
    { name: "Sexual Health", id: "sexual-dysfunction" },
    { name: "Contact", href: "/contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter((item) => item.id)
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .menu-scroll::-webkit-scrollbar { height: 8px; }
        .menu-scroll::-webkit-scrollbar-track { background: #0f766e; }
        .menu-scroll::-webkit-scrollbar-thumb { background: #14b8a6; border-radius: 6px; }
        .menu-scroll::-webkit-scrollbar-thumb:hover { background: #5eead4; }
      `}} />
      
      <nav className="bg-teal-700 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center pt-6 pb-4">
            <h1 className="text-2xl font-bold text-white mb-2">
              Dr. DINESH R.S.
            </h1>
            <p className="text-teal-100 text-sm">
              BHMS, MBBS, MD (Hom), MD (Psy)
            </p>
            <p className="text-teal-100 text-xs mt-1">
              Consultant Homoeopath & Psychiatrist
            </p>
          </div>

          {/* Hamburger button - mobile only */}
          <div className="flex justify-end py-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-teal-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Menu */}
          <div className={`pb-4 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
            <div className="menu-scroll flex flex-col lg:flex-row lg:flex-nowrap lg:overflow-x-auto lg:pb-2 gap-2">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-center font-medium rounded-md px-3 py-2 text-sm lg:whitespace-nowrap hover:bg-teal-600"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      text-white text-center font-medium rounded-md px-3 py-2 text-sm lg:whitespace-nowrap hover:bg-teal-600
                      ${activeSection === item.id ? "bg-teal-600 ring-1 ring-yellow-400" : ""}
                    `}
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
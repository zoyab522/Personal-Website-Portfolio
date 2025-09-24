import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import { AboutSection, ProjectsSection, DotsSection, ContactSection, Footer, SocialSidebar } from "../components/Sections";
import { SmoothScrollLink } from "../components/ScrollAnimations";
import { ThemeToggle } from "../components/ThemeToggle";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zoya - Frontend Developer" },
    { name: "description", content: "Frontend developer passionate about creating beautiful, accessible digital experiences." },
  ];
}

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const texts = [
    "Creative Technologist",
    "UX Designer", 
    "Artist",
    "NLP Researcher"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-bg border-b border-gray-200">
        <div className="max-w-6xl mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity pl-12 xl:pl-0">
              <img 
                src="/assets/IMG-0237.jpg" 
                alt="Zoya" 
                className="w-10 h-10 rounded-full object-cover object-center border-2 border-[#5D2E0A] -mt-1 ml-4 xl:ml-0"
              />
              <span className="text-xl text-sepia-alt font-mono hidden sm:block">Zoya</span>
            </a>
            <div className="nav-desktop space-x-8">
              <SmoothScrollLink href="#about" className="text-gray-600 hover-text-sepia transition-colors font-mono">About</SmoothScrollLink>
              <SmoothScrollLink href="#projects" className="text-gray-600 hover-text-sepia transition-colors font-mono">Projects</SmoothScrollLink>
              <a href="/artwork" className="text-gray-600 hover-text-sepia transition-colors font-mono">Artwork</a>
              <SmoothScrollLink href="#contact" className="text-gray-600 hover-text-sepia transition-colors font-mono">Contact</SmoothScrollLink>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="nav-mobile items-center space-x-4 pr-12 md:pr-0">
                <button 
                  className="md:hidden text-dark-brown"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="nav-mobile md:hidden bg-off-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex flex-col space-y-4 text-center">
              <a 
                href="/#about" 
                className="text-sepia dark:text-gray-300 hover:text-sepia-dark transition-colors font-mono block w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/#projects" 
                className="text-sepia dark:text-gray-300 hover:text-sepia-dark transition-colors font-mono block w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="/artwork" 
                className="text-sepia dark:text-gray-300 hover:text-sepia-dark transition-colors font-mono block w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Artwork
              </a>
              <a 
                href="/#contact" 
                className="text-sepia dark:text-gray-300 hover:text-sepia-dark transition-colors font-mono block w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 xl:px-6 px-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-dark-brown mb-6">
              Hi, I'm <span className="text-sepia">Zoya</span>
            </h1>
            <div className="text-2xl md:text-3xl text-dark-brown mb-8 min-h-[3rem]">
              <span className="typing-animation font-mono">{currentText}</span>
            </div>
            <p className="text-lg md:text-xl text-dark-brown mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm a software engineer fluidly moving through the tech stack, specializing in building beautiful user experiences. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmoothScrollLink 
                href="#projects" 
                className="px-8 py-3 bg-sepia-alt text-white rounded-lg hover-bg-sepia-dark transition-colors font-medium font-mono w-full sm:w-auto"
              >
                View My Work
              </SmoothScrollLink>
              <SmoothScrollLink 
                href="#contact" 
                className="px-8 py-3 border border-sepia-alt text-dark-brown-alt rounded-lg hover-bg-typing-highlight dark:hover:bg-sepia-alt/20 transition-colors font-medium font-mono w-full sm:w-auto"
              >
                Get In Touch
              </SmoothScrollLink>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <DotsSection />
      <ContactSection />
      <Footer />
      <SocialSidebar />
    </div>
  );
}

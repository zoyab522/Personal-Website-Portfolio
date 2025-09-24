import { useState } from 'react';

export function SocialSidebar() {
  return (
    <>
      {/* Left sidebar */}
      <div className="fixed left-0 bottom-0 z-50 hidden lg:block">
        <div className="flex flex-col items-center space-y-6 px-6">
          <a href="https://github.com/zoyab522" target="_blank" rel="noopener noreferrer" 
             className="text-sepia-alt hover:text-sepia-dark transition-colors hover:transform hover:translate-y-[-2px]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/zoyaba52/" target="_blank" rel="noopener noreferrer" 
             className="text-sepia-alt hover:text-sepia-dark transition-colors hover:transform hover:translate-y-[-2px]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/zoyasketches/" target="_blank" rel="noopener noreferrer" 
             className="text-sepia-alt hover:text-sepia-dark transition-colors hover:transform hover:translate-y-[-2px]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <div className="w-px h-48 bg-sepia-alt"></div>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="fixed right-0 bottom-0 z-50 hidden lg:block">
        <div className="flex flex-col items-center space-y-6 px-6">
          <div className="writing-vertical pb-4">
            <a href="mailto:zbawang@ncsu.edu" 
               className="text-sepia-alt hover:text-sepia-dark transition-colors hover:transform hover:translate-y-[-2px]">
              <span className="text-sm font-mono tracking-wider">zbawang@ncsu.edu</span>
            </a>
          </div>
          <div className="w-px h-48 bg-sepia-alt"></div>
        </div>
      </div>
    </>
  );
}

export function AboutSection() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <section id="about" className="py-20 px-6 xl:px-6 px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline mb-8">
          <span className="text-lg font-mono text-sepia-alt mr-4">#00.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-brown-alt about-heading">
          About Me
        </h2>
          <div className="flex-1 h-px bg-sepia-alt ml-8 section-divider"></div>
        </div>
        
        {/* About Me Content - Flex Layout for Desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          {/* Text Content in White Box */}
          <div className="bg-off-white backdrop-blur-sm rounded-lg p-4 xl:p-6 shadow-lg mb-8 lg:mb-0 lg:flex-1">
          {/* First Paragraph - Always Visible */}
          <div className="space-y-6 text-dark-brown-alt leading-relaxed text-left text-sm md:text-base">
            <div className="flex items-start space-x-4">
              <span className="text-2xl flex-shrink-0 mt-1">🎓</span>
              <p>
                Hello! My name is Zoya, and I'm currently a student at 🔗<strong><a href="https://engr.ncsu.edu/" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">North Carolina State University 🐾</a></strong> studying Computer Science and Cognitive Science.
              </p>
            </div>
            
            {/* See More Button - Mobile only, after first paragraph */}
            <div className={`text-center lg:hidden ${isAboutExpanded ? '!hidden' : ''}`}>
              <button 
                onClick={() => setIsAboutExpanded(true)}
                className="text-sepia-alt hover:text-sepia-dark transition-colors font-mono text-sm"
              >
                See more...
              </button>
            </div>
          </div>
          
          {/* Second Paragraph and Beyond - Hidden on mobile unless expanded, visible on desktop */}
          <div className={`space-y-6 text-dark-brown-alt leading-relaxed text-left text-sm md:text-base transition-all duration-300 ${isAboutExpanded ? 'block' : 'hidden lg:block'} mt-6`}>
            <div className="flex items-start space-x-4">
              <span className="text-2xl flex-shrink-0 mt-1">🎨</span>
              <p>
                My interest in software development begins at the <strong className="text-sepia-alt">intersection of art and technology</strong>. I've grown up
                practicing fine art 🖌️ all my life, and I'm a strong believer in the power of good design to 
                communicate ideas effectively through any medium 💡.
              </p>
            </div>
            
            {/* See More Button - Visible on screens 800px-949px, after second paragraph */}
            <div className={`text-center hidden md:block lg:hidden ${isAboutExpanded ? '!hidden' : ''}`}>
              <button 
                onClick={() => setIsAboutExpanded(true)}
                className="text-sepia-alt hover:text-sepia-dark transition-colors font-mono text-sm"
              >
                See more...
              </button>
            </div>
          </div>
          
          {/* Expanded Content - Hidden unless expanded or on screens 950px+ */}
          <div className={`space-y-6 text-dark-brown-alt leading-relaxed text-left text-sm md:text-base transition-all duration-300 ${isAboutExpanded ? 'block' : 'hidden lg:block'}`}>
            <div className="flex items-start space-x-4">
              <span className="text-2xl flex-shrink-0 mt-1">🌱</span>
              <p>
                I love working the pipeline between design and engineering to create products that not only look great,
                but also perform well while prioritizing good user experiences.
                Products and systems should be <strong className="text-sepia-alt">optimized for the people that interact with them</strong> - not the other way around 🤝. 
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl flex-shrink-0 mt-1">💬</span>
              <p>
                Ask me about: human factors, animating SVGs, <strong className="text-sepia-alt">how usability affect *everything* (not just tech)</strong>, the concept art of the Spider-Verse movies, or
                the best kinds of cultural experiences while visiting any new place :)
              </p>
            </div>
            
            {/* See Less Button - Appears at bottom when expanded, hidden on screens 950px+ */}
            <div className="text-center lg:hidden">
              <button 
                onClick={() => setIsAboutExpanded(false)}
                className="text-sepia-alt hover:text-sepia-dark transition-colors font-mono text-sm"
              >
                See less
              </button>
            </div>
          </div>
          </div>
          
          {/* Profile Image - Below Text on Mobile, Right Side on Desktop */}
          <div className="flex justify-center lg:justify-start lg:flex-shrink-0 hidden sm:flex">
            <div className="profile-image-container scale-75 lg:scale-100">
              <div className="profile-image-main">
                <img 
                  src="/assets/IMG-0237.jpg" 
                  alt="Profile picture" 
                  className="profile-image"
                />
              </div>
              <div className="profile-image-border-shadow"></div>
              <div className="profile-image-background"></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}


export function ProjectsSection() {
  const [showArchive, setShowArchive] = useState(false);
  const [activeTab, setActiveTab] = useState('coding');
  const [hoveredGif, setHoveredGif] = useState<string | null>(null);

  const handleGifHover = (gifSrc: string) => {
    setHoveredGif(gifSrc);
  };

  const handleGifLeave = () => {
    setHoveredGif(null);
  };

  return (
    <section id="projects" className="py-20 px-6 xl:px-6 px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline mb-8">
          <span className="text-lg font-mono text-sepia-alt mr-4">#01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-brown-alt about-heading">
          Notable Work
        </h2>
          <div className="flex-1 h-px bg-sepia-alt ml-8 section-divider"></div>
        </div>
        <div className="bg-off-white backdrop-blur-sm rounded-lg p-6 mb-12 shadow-lg">
          <p className="text-dark-brown-alt leading-relaxed text-center xl:text-left text-sm md:text-base">
            In my spare time, I'm usually drawing something from the depths of my camera roll 📸, recipe experimenting 👩‍🍳, or
            trying to mess around with a Notion template 📄. <br /> <br /> Some of my favorite types of projects are concept projects where I redesign 
            existing products and putting a spin on the user experience, and ultimately just building things that look cool 🎨🪄
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button 
            onClick={() => setActiveTab('coding')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors font-mono cursor-pointer text-sm md:text-base ${
              activeTab === 'coding' 
                ? 'bg-sepia-alt text-white shadow-md' 
                : 'border border-sepia-alt text-dark-brown-alt hover-bg-typing-highlight dark:hover:bg-sepia-alt/10'
            }`}
          >
            Coding Projects
          </button>
          <button 
            onClick={() => setActiveTab('artwork')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors font-mono cursor-pointer text-sm md:text-base ${
              activeTab === 'artwork' 
                ? 'bg-sepia-alt text-white shadow-md' 
                : 'border border-sepia-alt text-dark-brown-alt hover-bg-typing-highlight dark:hover:bg-sepia-alt/10'
            }`}
          >
            Artwork
          </button>
        </div>

        {/* Coding Projects Tab */}
        {activeTab === 'coding' && (
        <div className="space-y-32">
          {/* Featured Project 1 - Pearson Education */}
          <div className="fade-in">
            <div className="grid xl:grid-cols-12 gap-8 items-center">
              <div className="xl:col-span-5 xl:order-1 order-1 text-left">
                <div className="flex items-center justify-center xl:justify-start space-x-2 mb-4">
                  <span className="text-sm font-mono text-sepia-alt">Featured Project</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-brown-alt mb-4 text-center xl:text-left">
                  <a href="https://storybook.pearson.com/" target="_blank" rel="noopener noreferrer" className="text-dark-brown-alt hover:text-sepia-alt transition-colors md:pointer-events-none">
                    Pearson UI Library 📦
                  </a>
                </h3>
                <div className="flex space-x-4 justify-center xl:justify-start mb-4 md:hidden">
                  <a href="https://storybook.pearson.com/" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-off-white backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg">
                  <p className="text-dark-brown-alt leading-relaxed mb-4 text-sm md:text-base">
                    At 🔗<strong><a href="https://www.pearson.com/" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">Pearson</a></strong>, 
                    I worked on the development of a <strong>global, reusable UI component library</strong> 🔖 supporting a company-wide rebrand 🤝. 
                  </p>
                    <ul className="text-dark-brown-alt text-sm space-y-1">
                      <li>• <strong>Figma to code</strong> translation for components</li>
                      <li>• <strong>Deployment</strong> at 🔗<strong><a href="https://storybook.pearson.com/" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">storybook.pearson.com</a></strong></li>
                      <li>• <strong>Reusable across all products</strong> with visibility up to CTO</li>
                      <li>• <strong>Saves 300+ hours</strong> across development teams</li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6 justify-center xl:justify-start">
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    React
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    TypeScript
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    Storybook
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    Figma
                  </span>
                </div>
                <div className="hidden md:flex space-x-6 justify-center xl:justify-start">
                  <a href="https://storybook.pearson.com/" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="xl:col-span-7 xl:order-2 order-2 hidden md:block">
                <a href="https://storybook.pearson.com/" target="_blank" rel="noopener noreferrer" className="block project-box-link">
                  <div className="project-container">
                  <div className="project-image-main w-full h-[345px]">
                    <img 
                      src={hoveredGif === "/assets/storybook_demo.gif" ? "/assets/storybook_demo.gif" : "/assets/storybook-static.png"}
                      alt="Pearson Education UI Library Demo" 
                      className="w-full h-full object-cover object-center rounded-md project-image-center"
                      onMouseEnter={() => handleGifHover("/assets/storybook_demo.gif")}
                      onMouseLeave={handleGifLeave}
                    />
                  </div>
                  <div className="project-image-background w-full h-[345px]"></div>
                </div>
                </a>
              </div>
            </div>
          </div>

          {/* Featured Project 2 - Travel Tracker */}
          <div className="fade-in">
            <div className="grid xl:grid-cols-12 gap-8 items-center">
              <div className="xl:col-span-7 xl:order-1 order-2 hidden md:block">
                <a href="https://been-app-exchange-7szm.vercel.app/" target="_blank" rel="noopener noreferrer" className="block project-box-link">
                  <div className="project-container">
                  <div className="project-image-main w-full h-[345px]">
                    <img 
                      src={hoveredGif === "/assets/live_demo_been_gif.gif" ? "/assets/live_demo_been_gif.gif" : "/assets/been_static_pic.png"}
                      alt="Travel Tracker App Demo" 
                      className="w-full h-full object-cover object-center rounded-md project-image-center"
                      onMouseEnter={() => handleGifHover("/assets/live_demo_been_gif.gif")}
                      onMouseLeave={handleGifLeave}
                    />
                  </div>
                  <div className="project-image-background w-full h-[345px]"></div>
                </div>
                </a>
              </div>
              <div className="xl:col-span-5 xl:order-2 order-1 text-left xl:text-right">
                <div className="flex items-center justify-center xl:justify-end space-x-2 mb-4">
                  <span className="text-sm font-mono text-sepia-alt">Featured Project</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-brown-alt mb-4 text-center xl:text-right">
                  <a href="https://been-app-exchange-7szm.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-dark-brown-alt hover:text-sepia-alt transition-colors md:pointer-events-none">
                    "Been" ✈️ Travel Tracker
                  </a>
                </h3>
                <div className="flex space-x-4 justify-center xl:justify-start mb-4 md:hidden">
                  <a href="https://github.com/zoyab522/been_app_exchange" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://been-app-exchange-7szm.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-off-white backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg">
                  <p className="text-dark-brown-alt leading-relaxed mb-4 text-sm md:text-base">
                   A <strong>comprehensive travel tracker</strong> resembling the mobile app "Been".
                   Highlight countries on a map 🗺️, track % of the world explored 📈, and view a timeline 📅 of your travels.
                  </p>
                  <ul className="text-dark-brown-alt text-sm space-y-1">
                    <li>• <strong>Mapbox boundary data</strong> for all countries worldwide</li>
                    <li>• <strong>10,000+ cities</strong> and regions with detailed coordinates</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6 justify-center xl:justify-end">
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    React
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    Mapbox GL
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    GeoJSON Data
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    Zustand
                  </span>
                </div>
                <div className="hidden md:flex space-x-6 justify-center xl:justify-end">
                  <a href="https://github.com/zoyab522/been_app_exchange" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://been-app-exchange-7szm.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Project 3 - AI Agent */}
          <div className="fade-in">
            <div className="grid xl:grid-cols-12 gap-8 items-center">
              <div className="xl:col-span-7 xl:order-2 order-2 hidden md:block">
                <a href="https://github.com/zoyab522/411-PS6/blob/main/CSC411_ProblemSet06/src/edu/ncsu/csc411/ps06/agent/Robot.java" target="_blank" rel="noopener noreferrer" className="block project-box-link">
                  <div className="project-container">
                  <div className="project-image-main w-full h-[345px]">
                    <img 
                      src={hoveredGif === "/assets/chips_challenge_live_demo.gif" ? "/assets/chips_challenge_live_demo.gif" : "/assets/chips_challenge_static.png"}
                      alt="AI-Driven Agent Chip's Challenge Demo" 
                      className="w-full h-full object-cover object-center rounded-md project-image-chips"
                      onMouseEnter={() => handleGifHover("/assets/chips_challenge_live_demo.gif")}
                      onMouseLeave={handleGifLeave}
                    />
                  </div>
                  <div className="project-image-background w-full h-[345px]"></div>
                </div>
                </a>
              </div>
              <div className="xl:col-span-5 xl:order-1 order-1 text-left">
                <div className="flex items-center justify-center xl:justify-start space-x-2 mb-4">
                  <span className="text-sm font-mono text-sepia-alt">Featured Project</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-brown-alt mb-4 text-center xl:text-left">
                  <a href="https://github.com/zoyab522/411-PS6/blob/main/CSC411_ProblemSet06/src/edu/ncsu/csc411/ps06/agent/Robot.java" target="_blank" rel="noopener noreferrer" className="text-dark-brown-alt hover:text-sepia-alt transition-colors md:pointer-events-none">
                    AI Agent - Chip's Challenge 🤖
                  </a>
                </h3>
                <div className="flex space-x-4 justify-center xl:justify-start mb-4 md:hidden">
                  <a href="https://github.com/zoyab522/411-PS6/blob/main/CSC411_ProblemSet06/src/edu/ncsu/csc411/ps06/agent/Robot.java" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-off-white backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg">
                  <p className="text-dark-brown-alt leading-relaxed mb-4 text-sm md:text-base">
                    Built AI agent to complete levels of increasing difficulty 📈🕹️ of the popular game 🔗<strong><a href="https://store.steampowered.com/app/346850/Chips_Challenge_1/" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">Chip's Challenge</a></strong> using a priority queue-based AI planning algorithm. 
                  </p>
                  <ul className="text-dark-brown-alt text-sm space-y-1">
                    <li>• <strong>95% success rate</strong> across 50+ test levels</li>
                    <li>• <strong>Dynamic inventory </strong> for key collection and usage</li>
                    <li>• <strong>Real-time obstacle adaptation</strong> with backtracking</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6 justify-center xl:justify-start">
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    Java
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    Pathfinding
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono border border-sepia flex items-center tech-tag">
                    <div className="w-3 h-3 rounded-full bg-sepia mr-2"></div>
                    Dynamic Goal Priority
                  </span>
                </div>
                <div className="hidden md:flex space-x-6 justify-center xl:justify-start">
                  <a href="https://github.com/zoyab522/411-PS6/blob/main/CSC411_ProblemSet06/src/edu/ncsu/csc411/ps06/agent/Robot.java" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
        
        {/* Artwork Tab */}
        {activeTab === 'artwork' && (
        <div className="space-y-8 fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Digital Artwork Preview */}
            <img src="/assets/final_images/digital/met_hall.png" alt="Met Hall" className="w-full aspect-square object-cover rounded-lg"/>
            
            <img src="/assets/final_images/digital/central_park.png" alt="Central Park" className="w-full aspect-square object-cover rounded-lg" />
            
            <img src="/assets/final_images/digital/kihei_thumbnail.png" alt="Kihei, Hawaii Sunset" className="w-full aspect-square object-cover rounded-lg" />

            <img src="/assets/final_images/digital/hawaii_cat.png" alt="Hawaii Cat" className="w-full aspect-square object-cover rounded-lg" />
          </div>
          
          <div className="text-center">
            <a 
              href="/artwork" 
              className="inline-block px-6 py-3 border border-sepia-alt text-dark-brown-alt hover-bg-typing-highlight dark:hover:bg-sepia-alt/10 rounded-lg transition-colors font-medium font-mono"
            >
              View Full Collection
            </a>
          </div>
        </div>
        )}
        
        {/* Load More Button - Only for Coding Projects Tab */}
        {activeTab === 'coding' && (
        <div>
        {/* Load More Button */}
        <div className="mt-20 text-center">
          <button 
            onClick={() => setShowArchive(!showArchive)}
            className="px-8 py-3 bg-sepia-alt text-white rounded-lg hover-bg-sepia-dark transition-colors font-medium font-mono cursor-pointer"
          >
            {showArchive ? 'Show Less' : 'Load More'}
          </button>
        </div>

        {/* Archive Section */}
        {showArchive && (
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Pokedex Project */}
            <a href="https://pokedex-black-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-folder">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-8 h-8">
                    <svg className="w-full h-full text-sepia-alt" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                    </svg>
                  </div>
                  <div className="flex space-x-2">
                    <a href="https://github.com/zoyab522/Pokedex" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://pokedex-black-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-dark-brown-alt mb-3">
                  Pokédex ⚡
                </h4>
                <p className="text-dark-brown-alt mb-4 leading-relaxed text-sm md:text-base">
                  A modern React implementation of a Pokédex to search and explore Pokémon 🔍. 
                </p>
                <ul className="text-dark-brown-alt text-sm space-y-1 mb-4">
                  <li>• <strong>1000+ Pokémon</strong> with data from PokeAPI</li>
                  <li>• <strong>Evolution chains</strong> and relationships mapped</li>
                  <li>• <strong>Base stats</strong> including HP, Attack, Speed</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4 archive-project-tags">
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    React
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    PokeAPI
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    Styled Components
                  </span>
                </div>
              </div>
            </a>
            
            {/* Machine Learning Project */}
            <a href="https://zoyab522.github.io/MachineLearning/MLPage.html" target="_blank" rel="noopener noreferrer" className="project-folder">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-8 h-8">
                    <svg className="w-full h-full text-sepia-alt" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                    </svg>
                  </div>
                  <div className="flex space-x-2">
                    <a href="https://zoyab522.github.io/MachineLearning/MLPage.html" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-dark-brown-alt mb-3">
                  ML - Predicting Robotics Match Winners 🎮
                </h4>
                <p className="text-dark-brown-alt mb-4 leading-relaxed text-sm md:text-base">
                  Pair-programmed and trained a neural network to predict the outcome of robotics matches 🤖, optimizing accuracy in prediction 📊.
                </p>
                <ul className="text-dark-brown-alt text-sm space-y-1 mb-4">
                  <li>• <strong>5-layer</strong> neural network architecture</li>
                  <li>• <strong>95% accuracy</strong> in prediction</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4 archive-project-tags">
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    Python
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    K-Fold Validation
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    API
                  </span>
                </div>
              </div>
            </a>
            
            {/* Blender Donut Project */}
            <div className="project-folder blender-project">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-8 h-8">
                    <svg className="w-full h-full text-sepia-alt" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                    </svg>
                  </div>
                  <div className="flex space-x-2">
                    {/* No GitHub icon for Blender project */}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-dark-brown-alt mb-3">
                  Blender - Photorealistic Donut Model 🍩
                </h4>
                <p className="text-dark-brown-alt mb-4 leading-relaxed text-sm md:text-base">
                  A photorealistic 3D donut model created in Blender following the famous donut tutorial 📹. 
                </p>
                <ul className="text-dark-brown-alt text-sm space-y-1 mb-4">
                  <li>• <strong>3D Modeling</strong> and sculpting</li>
                  <li>• <strong>Material creation</strong> and texturing</li>
                  <li>• <strong>Lighting</strong> and rendering</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4 archive-project-tags">
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    Blender
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    3D Modeling
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    Rendering
                  </span>
                </div>
              </div>
            </div>
            
            {/* Portfolio Website Project */}
            <a href="https://github.com/zoyab522/Personal-Website-Portfolio" target="_blank" rel="noopener noreferrer" className="project-folder">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-8 h-8">
                    <svg className="w-full h-full text-sepia-alt" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                    </svg>
                  </div>
                  <div className="flex space-x-2">
                    <a href="https://github.com/zoyab522/Personal-Website-Portfolio" target="_blank" rel="noopener noreferrer" className="text-sepia-alt hover:text-sepia-dark transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-dark-brown-alt mb-3">
                  Personal Website 🪄
                </h4>
                <p className="text-dark-brown-alt mb-4 leading-relaxed text-sm md:text-base">
                  You're looking at it :) 💼. <br /> <br /> Loosely designed on my iPad and in Adobe XD, and built by yours truly✨.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 archive-project-tags">
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    React
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 text-dark-brown-alt rounded-full text-sm font-mono">
                    Adobe XD
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        )}
        
        </div>
        )}
      </div>
    </section>
  );
}

export function DotsSection() {
  return (
    <section className="pt-32 pb-32 px-6 xl:px-6 px-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center space-y-3 flex-col">
          <div className="w-2 h-2 border-2 border-sepia-alt rounded-full"></div>
          <div className="w-2 h-2 border-2 border-sepia-alt rounded-full"></div>
          <div className="w-2 h-2 border-2 border-sepia-alt rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 xl:px-6 px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-brown-alt  mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-dark-brown-alt  mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently looking for new opportunities, and my inbox is always open! 
        </p>
        <a 
          href="mailto:zoyaba52@gmail.com" 
          className="inline-flex items-center px-8 py-3 border border-sepia-alt text-dark-brown-alt hover-bg-typing-highlight dark:hover:bg-sepia-alt/10 rounded-lg transition-colors font-medium font-mono space-x-2 mb-8 text-sm md:text-base"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span>Reach Out</span>
        </a>
        
        {/* Social Icons - Mobile Only */}
        <div className="lg:hidden flex justify-center space-x-6 mb-12">
          <a href="https://github.com/zoyab522" target="_blank" rel="noopener noreferrer" 
             className="text-sepia-alt hover:text-sepia-dark transition-colors hover:transform hover:translate-y-[-2px]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/zoyaba52/" target="_blank" rel="noopener noreferrer" 
             className="text-sepia-alt hover:text-sepia-dark transition-colors hover:transform hover:translate-y-[-2px]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/zoyasketches/" target="_blank" rel="noopener noreferrer" 
             className="text-sepia-alt hover:text-sepia-dark transition-colors hover:transform hover:translate-y-[-2px]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="pb-20 px-6 xl:px-6 px-20">
      <div className="max-w-6xl mx-auto text-center">
          <p className="text-dark-brown-alt font-mono">
            Drawn loosely on my iPad and designed in Adobe XD, and built by yours truly✨.
        </p>
      </div>
    </footer>
  );
}

import { SocialSidebar, Footer } from "../components/Sections";
import { SmoothScrollLink } from "../components/ScrollAnimations";
import { ThemeToggle } from "../components/ThemeToggle";
import { useState } from "react";

export function meta() {
  return [
    { title: "Artwork - Zoya" },
    { name: "description", content: "A collection of creative work spanning traditional and digital mediums." },
  ];
}

export default function Artwork() {
  const [activeTab, setActiveTab] = useState("digital");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Image arrays for each category
  const pencilImages = [
    { src: "/assets/final_images/pencil_assets/ArianaGrandeDrawing.JPG", alt: "Ariana Grande Drawing" },
    { src: "/assets/final_images/pencil_assets/TaylorSwiftDrawing.JPG", alt: "Taylor Swift Drawing" },
    { src: "/assets/final_images/pencil_assets/ButterflyPencils.jpg", alt: "Butterfly Pencils" },
    { src: "/assets/final_images/pencil_assets/LotusDrawing.jpg", alt: "Lotus Drawing" },
    { src: "/assets/final_images/pencil_assets/CupcakeDrawing.JPG", alt: "Cupcake Drawing" },
    { src: "/assets/final_images/pencil_assets/SelenaGomezDrawing.jpg", alt: "Selena Gomez Drawing" },
    { src: "/assets/final_images/pencil_assets/DoubleExposure.jpg", alt: "Double Exposure" },
    { src: "/assets/final_images/pencil_assets/Zendaya.png", alt: "Zendaya" },
    { src: "/assets/final_images/pencil_assets/StrawberriesDrawing.jpg", alt: "Strawberries Drawing" },
    { src: "/assets/final_images/pencil_assets/HairStudyOne.png", alt: "Hair Study One" },
    { src: "/assets/final_images/pencil_assets/EyeStudyOne.jpg", alt: "Eye Study One" },
    { src: "/assets/final_images/pencil_assets/EyeStudyTwo.jpg", alt: "Eye Study Two" },
    { src: "/assets/final_images/pencil_assets/FrozenDrawing.jpg", alt: "Frozen Drawing" },
    { src: "/assets/final_images/pencil_assets/HairStudyTwo.png", alt: "Hair Study Two" },
    { src: "/assets/final_images/pencil_assets/HairStudyThree.png", alt: "Hair Study Three" },
    { src: "/assets/final_images/pencil_assets/Panda.png", alt: "Panda" },
    { src: "/assets/final_images/pencil_assets/Monkey.png", alt: "Monkey" }
  ];

  const acrylicImages = [
    { src: "/assets/final_images/acrylics/AlleyPainting.png", alt: "Alley Painting" },
    { src: "/assets/final_images/acrylics/TheNightTram.jpg", alt: "The Night Tram" },
    { src: "/assets/final_images/acrylics/ANightOut.jpg", alt: "A Night Out" },
    { src: "/assets/final_images/acrylics/winter sunrise.JPG", alt: "Winter Sunrise" },
    { src: "/assets/final_images/acrylics/LampsAlley.png", alt: "Lamps Alley" },
    { src: "/assets/final_images/acrylics/TreesLamps.png", alt: "Rainy Park" },
    { src: "/assets/final_images/acrylics/MorningFog.png", alt: "Morning Fog" },
    { src: "/assets/final_images/acrylics/RainyNight.jpg", alt: "Rainy Night" },
    { src: "/assets/final_images/acrylics/Waterfall.png", alt: "Waterfall" },
    { src: "/assets/final_images/acrylics/Jellyfish.png", alt: "Jellyfish" }
  ];

  const digitalImages = [
    { src: "/assets/final_images/digital/kihei_thumbnail.png", alt: "Kihei Thumbnail" },
    { src: "/assets/final_images/digital/ducks_water.png", alt: "Ducks Water" },
    { src: "/assets/final_images/digital/kihei_detail.jpg", alt: "Kihei Detail" },
    { src: "/assets/final_images/digital/SpidermanWallpaper.jpg", alt: "Spider-Man Wallpaper" },
    { src: "/assets/final_images/digital/flower_study.png", alt: "Flower Study" },
    { src: "/assets/final_images/digital/thumbnail_color_study.jpg", alt: "Thumbnail Color Study" },
    { src: "/assets/final_images/digital/met_hall.png", alt: "Met Hall" },
    { src: "/assets/final_images/digital/cat_dash.png", alt: "Cat Dash" },
    { src: "/assets/final_images/digital/hawaii_cat.png", alt: "Hawaii Cat" },
    { src: "/assets/final_images/digital/beachy_head.png", alt: "Beachy Head" },
    { src: "/assets/final_images/digital/spiderman_two.png", alt: "Spider-Man Two" },
    { src: "/assets/final_images/digital/hagia_sop.png", alt: "Hagia Sophia" },
    { src: "/assets/final_images/digital/central_park.png", alt: "Central Park" },
    { src: "/assets/final_images/digital/iceland_cliffs.jpg", alt: "Iceland Cliffs" },
    { src: "/assets/final_images/digital/lighting_study_pink.png", alt: "Lighting Study Pink" },
    { src: "/assets/final_images/digital/cat_rain.png", alt: "Cat Rain" },
    { src: "/assets/final_images/digital/dolomites.png", alt: "Dolomites" },
    { src: "/assets/final_images/digital/hawaii_black_sand.png", alt: "Hawaii Black Sand" },
    { src: "/assets/final_images/digital/Rearview_mirror.jpg", alt: "Rearview Mirror Sunset" },
    { src: "/assets/final_images/digital/arcane.jpg", alt: "Arcane" },
    { src: "/assets/final_images/digital/portugal_tree.jpg", alt: "Portugal Tree" },
    { src: "/assets/final_images/digital/portugal_white.jpg", alt: "Portugal White" },
    { src: "/assets/final_images/digital/vienna.png", alt: "Vienna" }
  ];
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-bg border-b border-gray-200">
        <div className="max-w-6xl mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity pl-12 xl:pl-0">
              <img 
                src="/assets/IMG-4148.JPG" 
                alt="Zoya" 
                className="w-10 h-10 rounded-full object-cover object-center border-2 border-[#5D2E0A] -mt-1 ml-4 xl:ml-0"
              />
              <span className="text-xl text-sepia-alt font-mono hidden sm:block">Zoya</span>
            </a>
            <div className="nav-desktop space-x-8">
              <a href="/#about" className="text-gray-600 hover-text-sepia transition-colors font-mono">About</a>
              <a href="/#projects" className="text-gray-600 hover-text-sepia transition-colors font-mono">Projects</a>
              <a href="/artwork" className="text-sepia font-medium font-mono">Artwork</a>
              <a href="/#contact" className="text-gray-600 hover-text-sepia transition-colors font-mono">Contact</a>
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
          <div className="md:hidden bg-off-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
            <div className="text-center">
              <a href="/#about" className="block py-3 text-sepia dark:text-gray-300 hover:text-sepia-dark transition-colors font-mono" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="/#projects" className="block py-3 text-sepia dark:text-gray-300 hover:text-sepia-dark transition-colors font-mono" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="/artwork" className="block py-3 text-sepia dark:text-gray-300 hover:text-sepia-dark transition-colors font-mono" onClick={() => setIsMobileMenuOpen(false)}>Artwork</a>
              <a href="/#contact" className="block py-3 text-sepia dark:text-gray-300 hover:text-sepia-dark transition-colors font-mono" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Artwork Section */}
      <section className="px-4 xl:px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline mb-8">
            <span className="text-lg font-mono text-sepia-alt mr-4">#02.</span>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-brown-alt about-heading">
              Artwork
            </h1>
            <div className="flex-1 h-px bg-sepia-alt ml-8 section-divider"></div>
          </div>
          
          <div className="bg-[#f8f6f0] backdrop-blur-sm rounded-lg p-6 mb-12 shadow-lg">
            <p className="text-[#2D1810] leading-relaxed">
              I've been practicing fine arts since I was three years old. I love studying light and color, and I especially love practicing while I'm traveling or outdoors 🛤️👟 to capture my memories on paper. 
              Painting has always been my lifeline, and the basis of my passion for working in tech and design 🌱.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <button
              onClick={() => setActiveTab("digital")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors font-mono cursor-pointer ${
              activeTab === "digital"
                ? "bg-sepia-alt text-white shadow-md"
                : "border border-sepia-alt text-dark-brown-alt hover-bg-typing-highlight dark:hover:bg-sepia-alt/10"
            }`}
            >
              Digital
            </button>
            <button
              onClick={() => setActiveTab("pencil")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors font-mono cursor-pointer ${
              activeTab === "pencil"
                ? "bg-sepia-alt text-white shadow-md"
                : "border border-sepia-alt text-dark-brown-alt hover-bg-typing-highlight dark:hover:bg-sepia-alt/10"
            }`}
            >
              Pencil
            </button>
            <button
              onClick={() => setActiveTab("acrylic")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors font-mono cursor-pointer ${
              activeTab === "acrylic"
                ? "bg-sepia-alt text-white shadow-md"
                : "border border-sepia-alt text-dark-brown-alt hover-bg-typing-highlight dark:hover:bg-sepia-alt/10"
            }`}
            >
              Acrylic
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "digital" && (
            <div className="artwork-masonry fade-in">
              {digitalImages.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          )}

          {activeTab === "pencil" && (
            <div className="artwork-masonry fade-in">
              {pencilImages.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          )}

          {activeTab === "acrylic" && (
            <div className="artwork-masonry fade-in">
              {acrylicImages.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <SocialSidebar />
    </div>
  );
}

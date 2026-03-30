import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiShield, FiTruck, FiRefreshCw, FiAward } from "react-icons/fi";

const categoryData = [
  {
    id: 1,
    title: "Summer Essentials",
    subtitle: "New Collection 2024",
    description: "Discover the latest trends in summer fashion with our exclusive new arrivals.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
    link: "/shop/men",
  },
  {
    id: 2,
    title: "Urban Style",
    subtitle: "Modern Classics",
    description: "Premium quality apparel designed for the modern lifestyle. Effortless and elegant.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    link: "/shop/women",
  },
  {
    id: 3,
    title: "Step Into Comfort",
    subtitle: "Luxury Footwear",
    description: "Experience unparalleled comfort with our hand-crafted Italian leather sneakers.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    link: "/shop/shoes",
  },
];

const featureCards = [
  { 
    icon: <FiTruck className="text-brand" />, 
    title: "Global Delivery", 
    description: "Fast & secure shipping worldwide" 
  },
  { 
    icon: <FiShield className="text-brand" />, 
    title: "Secure Payment", 
    description: "100% payment protection guaranteed" 
  },
  { 
    icon: <FiRefreshCw className="text-brand" />, 
    title: "Easy Returns", 
    description: "30-day effortless return policy" 
  },
  { 
    icon: <FiAward className="text-brand" />, 
    title: "Premium Quality", 
    description: "Handpicked top-tier products only" 
  },
];

export default function HeroSections() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const total = categoryData.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goTo = (index) => setCurrent(index);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleNav = (fn) => {
    fn();
    resetTimer();
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Carousel */}
      <section className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden bg-surface-950 group">
        
        {/* Slides */}
        {categoryData.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${
                  i === current ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-950/80 via-surface-950/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
              <div className={`max-w-2xl transition-all duration-700 delay-300 ${
                i === current ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}>
                <span className="inline-block text-brand font-bold text-xs uppercase tracking-[0.3em] mb-4">
                  {slide.subtitle}
                </span>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-sora font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                  {slide.title.split(" ").map((word, idx) => (
                    <span key={idx} className={idx === 1 ? "text-brand" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>
                
                <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to={slide.link} className="btn-primary px-10 py-4 text-base group/btn">
                    Explore Collection
                    <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/about" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all">
                    Our Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 sm:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => handleNav(prev)}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-brand hover:border-brand transition-all shadow-2xl"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={() => handleNav(next)}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-brand hover:border-brand transition-all shadow-2xl"
          >
            <FiArrowRight size={24} />
          </button>
        </div>

        {/* Progress Pagination */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-40">
          {categoryData.map((_, i) => (
            <button
              key={i}
              onClick={() => handleNav(() => goTo(i))}
              className="group relative flex items-center"
            >
              <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden transition-all duration-300 group-hover:h-2">
                {i === current && (
                  <div className="h-full bg-brand animate-progress-bar rounded-full" />
                )}
              </div>
              <span className={`ml-2 text-[10px] font-bold text-white transition-opacity duration-300 ${i === current ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                0{i + 1}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Modern Feature Cards */}
      <section className="bg-surface-850 relative py-12 border-b border-themed overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-6 rounded-2xl border border-themed-2 hover:border-brand/30 hover:bg-surface-800/50 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-sora font-bold text-heading text-sm mb-1 uppercase tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes progress-bar {
            from { width: 0%; }
            to { width: 100%; }
          }
          .animate-progress-bar {
            animation: progress-bar 6s linear forwards;
          }
        `}
      </style>
    </div>
  );
}


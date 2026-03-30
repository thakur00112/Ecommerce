import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiArrowRight, FiGrid } from "react-icons/fi";

const categories = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80" },
  { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80" },
  { name: "Health & Beauty", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80" },
  { name: "Groceries", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80" },
  { name: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
  { name: "Phone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
  { name: "Sports", image: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcdf7?w=400&q=80" },
  { name: "School & Office", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80" },
  { name: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
  { name: "Bags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
  { name: "Home & Living", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
];

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Categories = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-surface-950 isolate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
               <FiGrid className="text-brand text-xs" />
               <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">
                 Categories Catalog
               </span>
             </div>
             <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-heading tracking-tight mb-4">
                Explore <span className="text-brand">What's Popular</span>
             </h2>
             <p className="text-muted text-lg font-light leading-relaxed">
                Hand-picked collections tailored to your lifestyle. Find exactly what you're looking for.
             </p>
          </div>

          <Link to="/categories" className="group flex items-center gap-3 text-sm font-bold text-heading hover:text-brand transition-colors">
            <span>See Full Directory</span>
            <div className="w-10 h-10 rounded-full border border-themed flex items-center justify-center group-hover:border-brand group-hover:bg-brand group-hover:text-white transition-all">
               <FiArrowRight />
            </div>
          </Link>
        </div>

        {/* Scroll Container */}
        <div className="relative">
          
          {/* Custom Arrows */}
          <div className="absolute -top-12 right-0 hidden md:flex items-center gap-3">
             <button 
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-full border border-themed flex items-center justify-center transition-all ${canScrollLeft ? 'opacity-100 hover:border-brand hover:text-brand bg-surface-850 cursor-pointer' : 'opacity-20 cursor-not-allowed'}`}
             >
                <IoChevronBack size={20} />
             </button>
             <button 
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-full border border-themed flex items-center justify-center transition-all ${canScrollRight ? 'opacity-100 hover:border-brand hover:text-brand bg-surface-850 cursor-pointer' : 'opacity-20 cursor-not-allowed'}`}
             >
                <IoChevronForward size={20} />
             </button>
          </div>

          {/* Categories Grid/Row */}
          <div
            ref={scrollRef}
            className="flex gap-8 sm:gap-12 overflow-x-auto scrollbar-hide scroll-smooth py-12 px-2 -mx-2 items-start"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/category/${toSlug(cat.name)}`}
                className="group flex flex-col items-center gap-6 shrink-0"
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-brand/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90" />
                  
                  {/* Image Holder */}
                  <div className="relative w-full h-full rounded-full bg-surface-850 p-1 border border-themed group-hover:border-brand-500 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-brand/20">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-full transition-transform duration-1000 group-hover:scale-125"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                   <span className="text-sm sm:text-base font-sora font-extrabold text-heading group-hover:text-brand transition-colors text-center whitespace-nowrap">
                    {cat.name}
                   </span>
                   <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      Explore ↗
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Categories;
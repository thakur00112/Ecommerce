import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { FiFilter, FiChevronDown, FiHeart, FiGrid, FiList, FiCheck, FiArrowRight } from "react-icons/fi";
import { formatINR } from "../lib/currency";
import { coreProducts } from "../lib/productCatalog";

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const CategoryPage = () => {
  const { name } = useParams();
  const [activeSort, setActiveSort] = useState("Recommended");
  const [viewType, setViewType] = useState("grid");
  
  const formattedName = name.replace(/-/g, " ");

  // Filter products based on category name
  const filteredProducts = useMemo(() => {
    const lowerName = name.toLowerCase().replace(/-/g, " ");
    
    // Find products where category matches (case insensitive) or special keywords match
    return coreProducts.filter(p => {
        const pCat = p.category.toLowerCase();
        if (pCat === lowerName) return true;
        
        // Handle sub-mappings
        if (lowerName === "men" && pCat === "fashion") return true;
        if (lowerName === "women" && pCat === "fashion") return true;
        if (lowerName === "kids" && pCat === "fashion") return true;
        if (lowerName === "sneakers" && pCat === "footwear") return true;
        if (lowerName === "phone" && pCat === "electronics") return true;
        
        return false;
    });
  }, [name]);

  return (
    <div className="min-h-screen bg-surface-950 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-[130px]">
        {/* Breadcrumbs & Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 border-b border-themed">
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-6">
              <Link to="/" className="hover:text-brand transition-colors">Home</Link>
              <span>/</span>
              <span className="text-heading capitalize">{formattedName}</span>
           </div>
           
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-sora font-extrabold text-heading tracking-tight mb-4 capitalize">
                   {formattedName} <span className="text-brand">Collection</span>
                </h1>
                <p className="text-muted text-lg font-light max-w-2xl leading-relaxed">
                   Discover our curated selection of premium {formattedName} products.
                   Hand-picked for quality, style, and everyday performance.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-muted uppercase tracking-widest whitespace-nowrap">
                 <span>Showing {filteredProducts.length} Results</span>
              </div>
           </div>
        </div>

        {/* Filters & Sorting Sticky Bar */}
        <div className="sticky top-[100px] z-[40] bg-surface-950/80 backdrop-blur-xl border-b border-themed py-4">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-850 border border-themed-2 text-xs font-bold uppercase tracking-widest text-heading hover:border-brand transition-all">
                    <FiFilter size={14} className="text-brand" />
                    <span>Filters</span>
                 </button>
                 
                 <div className="hidden md:flex items-center gap-2 bg-surface-850 p-1 rounded-xl border border-themed-2">
                    <button 
                       onClick={() => setViewType("grid")}
                       className={`p-2 rounded-lg transition-all ${viewType === "grid" ? "bg-brand text-white shadow-lg shadow-brand/20" : "text-muted hover:text-heading"}`}
                    >
                       <FiGrid size={16} />
                    </button>
                    <button 
                       onClick={() => setViewType("list")}
                       className={`p-2 rounded-lg transition-all ${viewType === "list" ? "bg-brand text-white shadow-lg shadow-brand/20" : "text-muted hover:text-heading"}`}
                    >
                       <FiList size={16} />
                    </button>
                 </div>
              </div>

              <div className="flex items-center gap-8">
                 <div className="relative group">
                    <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-heading group-hover:text-brand transition-colors">
                       <span>Sort By: <span className="text-brand ml-1">{activeSort}</span></span>
                       <FiChevronDown size={14} />
                    </button>
                    {/* Simple Dropdown Overlay */}
                    <div className="absolute right-0 top-full pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                       <ul className="bg-surface-850 border border-themed-2 rounded-2xl p-2 shadow-2xl flex flex-col gap-1">
                          {["Recommended", "New Arrivals", "Price: Low to High", "Price: High to Low", "Ratings"].map(opt => (
                             <li key={opt}>
                                <button 
                                   onClick={() => setActiveSort(opt)}
                                   className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeSort === opt ? "bg-brand/10 text-brand" : "text-muted hover:bg-surface-800 hover:text-heading"}`}
                                >
                                   {opt}
                                </button>
                             </li>
                          ))}
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex gap-12">
           
           {/* Sidebar Filter (Desktop) */}
           <aside className="hidden lg:flex flex-col w-64 shrink-0 gap-10">
              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted ml-1">Price Range</h4>
                 <div className="flex flex-col gap-4 px-1">
                    <div className="h-1.5 bg-surface-800 rounded-full relative overflow-hidden">
                       <div className="absolute left-0 right-1/2 h-full bg-brand" />
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-muted uppercase tracking-widest">
                       <span>₹0</span>
                       <span>₹10,000+</span>
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted ml-1">Category Detail</h4>
                 <ul className="flex flex-col gap-3">
                    {["T-Shirts", "Shirts", "Jeans", "Shorts", "Outerwear"].map(cat => (
                       <li key={cat} className="flex items-center justify-between group cursor-pointer">
                          <span className="text-xs font-bold text-muted group-hover:text-heading transition-colors">{cat}</span>
                          <span className="text-[10px] font-mono text-muted/50">24</span>
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted ml-1">Color Palette</h4>
                 <div className="grid grid-cols-4 gap-3">
                    {["bg-heading", "bg-brand", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-rose-500", "bg-amber-500", "bg-slate-500"].map((c, i) => (
                       <div key={i} className={`w-8 h-8 rounded-full border-2 border-surface-950 ring-1 ring-themed hover:ring-brand cursor-pointer transition-all ${c}`} />
                    ))}
                 </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-brand/10 border border-brand/20 relative overflow-hidden mt-8">
                 <div className="relative z-10 text-center">
                    <p className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-4">Limited Offer</p>
                    <h5 className="text-heading font-sora font-extrabold text-xl mb-6">Extra 15% Off on {formattedName}</h5>
                    <button className="w-full py-3 rounded-2xl bg-brand text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-brand/20">Apply Code</button>
                 </div>
              </div>
           </aside>

           {/* Products Grid */}
           <div className={`flex-grow grid gap-8 ${viewType === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {filteredProducts.length > 0 ? (
                 filteredProducts.map((p) => (
                    <div key={p.id} className={`group relative flex bg-surface-850 rounded-[2.5rem] border border-themed-2 overflow-hidden hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-2 transition-all duration-500 ${viewType === "list" ? "flex-row h-72" : "flex-col"}`}>
                       {/* Badge */}
                       <div className="absolute top-6 left-6 z-10">
                          <span className="px-3 py-1 rounded-full bg-surface-950/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                             Elite Choice
                          </span>
                       </div>

                       {/* Image */}
                       <Link 
                          to={`/product/${toSlug(p.name)}`} 
                          className={`relative overflow-hidden ${viewType === "list" ? "w-72" : "aspect-[4/5]"}`}
                        >
                          <img 
                             src={p.img} 
                             alt={p.name} 
                             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       </Link>

                       {/* Content */}
                       <div className={`p-8 flex flex-col justify-between flex-1`}>
                          <div className="space-y-3">
                             <div className="flex items-center justify-between">
                                <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">{p.brand}</span>
                                <div className="flex items-center gap-1">
                                   <FiHeart className="text-muted hover:text-brand cursor-pointer transition-colors" />
                                </div>
                             </div>
                             <Link 
                                to={`/product/${toSlug(p.name)}`}
                                className="text-heading font-sora font-extrabold text-xl hover:text-brand transition-colors line-clamp-2 leading-tight block"
                             >
                                {p.name}
                             </Link>
                             <div className="flex items-center gap-2">
                                <div className="flex items-center gap-0.5 text-brand">
                                   {[...Array(5)].map((_, i) => (
                                      <FiCheck key={i} size={8} strokeWidth={4} />
                                   ))}
                                </div>
                                <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{p.reviews} Reviews</span>
                             </div>
                          </div>

                          <div className="mt-8 pt-6 border-t border-themed flex items-center justify-between">
                             <div className="flex flex-col">
                                <span className="text-muted text-[10px] uppercase font-bold tracking-widest mb-1">Entry Price</span>
                                <span className="text-heading font-sora font-extrabold text-2xl">{formatINR(p.price)}</span>
                             </div>
                             
                             <Link 
                                to={`/product/${toSlug(p.name)}`}
                                className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-all shadow-sm"
                             >
                                <FiArrowRight size={20} />
                             </Link>
                          </div>
                       </div>
                    </div>
                 ))
              ) : (
                 <div className="col-span-full py-48 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-surface-850 border border-themed-2 flex items-center justify-center mb-8">
                       <FiFilter className="text-muted text-2xl" />
                    </div>
                    <h2 className="text-2xl font-sora font-extrabold text-heading mb-4">No Inventory Matches</h2>
                    <p className="text-muted max-w-sm">We're currently updating our {formattedName} inventory. Please explore our other primary categories.</p>
                    <Link to="/categories" className="btn-primary mt-10">All Categories</Link>
                 </div>
              )}
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;

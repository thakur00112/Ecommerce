import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Link } from "react-router-dom";
import { FiArrowRight, FiZap, FiShoppingBag, FiStar, FiTrendingUp } from "react-icons/fi";

const categoryGroups = [
  {
    title: "Trending Now",
    icon: <FiZap className="text-brand" />,
    items: ["Sneakers", "Smart Watches", "Wireless Earbuds", "Gaming Laptops"],
  },
  {
    title: "Fashion & Lifestyle",
    icon: <FiShoppingBag className="text-purple-500" />,
    items: ["Men", "Women", "Kids", "Accessories", "Footwear", "Watches"],
  },
  {
    title: "Electronics & Tech",
    icon: <FiStar className="text-amber-500" />,
    items: ["Mobiles", "Laptops", "Tablets", "Audio", "Cameras", "Gaming"],
  },
  {
    title: "Featured Collections",
    icon: <FiTrendingUp className="text-green-500" />,
    items: ["Summer Sale", "Deal of the Day", "Best Sellers", "New Arrivals"],
  },
];

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-surface-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-32 lg:py-48">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-brand text-xs font-black uppercase tracking-[0.4em] mb-6 block">Our Catalog</span>
          <h1 className="text-4xl md:text-6xl font-sora font-extrabold text-heading tracking-tighter mb-8">
            Explore <span className="text-brand">Categories</span>
          </h1>
          <p className="text-muted text-lg font-light leading-relaxed">
            Browse through our curated collections and find the best products tailored for your lifestyle.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {categoryGroups.map((group, idx) => (
              <div key={idx} className="flex flex-col">
                 <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-surface-850 border border-themed-2 flex items-center justify-center shadow-lg">
                       {group.icon}
                    </div>
                    <h3 className="text-lg font-sora font-extrabold text-heading">{group.title}</h3>
                 </div>

                 <ul className="flex flex-col gap-4">
                    {group.items.map((item) => (
                       <li key={item}>
                          <Link 
                             to={`/category/${toSlug(item)}`}
                             className="group flex items-center justify-between p-5 rounded-2xl bg-surface-850 border border-themed-2 hover:border-brand/40 hover:bg-brand/[0.02] hover:-translate-y-1 transition-all duration-300"
                          >
                             <span className="text-sm font-bold text-muted group-hover:text-heading transition-colors">{item}</span>
                             <FiArrowRight className="text-muted group-hover:text-brand transition-all group-hover:translate-x-1" />
                          </Link>
                       </li>
                    ))}
                 </ul>
              </div>
           ))}
        </div>

        {/* Big Offer Banner At Bottom */}
        <div className="mt-32 relative rounded-[3rem] overflow-hidden bg-surface-900 border border-themed-2 p-12 lg:p-20 text-center">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full -mr-32 -mt-32" />
           <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl font-sora font-black text-heading mb-6 tracking-tight">Need help finding something?</h2>
              <p className="text-muted mb-10 text-lg">Our expert concierges are available 24/7 to assist you in selecting the perfect item.</p>
              <Link to="/contactus" className="btn-primary !px-12 !py-5 shadow-2xl shadow-brand/20">
                 Contact Concierge
              </Link>
           </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;

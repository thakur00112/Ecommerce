import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiHeart, FiShoppingCart, FiTrash2, FiStar, FiGrid } from "react-icons/fi";
import { formatINR } from "../lib/currency";

const wishlist = [
  {
    id: 1,
    name: "Classic White Sneakers",
    brand: "UrbanStep",
    price: 119.99,
    rating: 4.9,
    reviews: 3420,
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Earbuds",
    brand: "SoundCore",
    price: 49.99,
    rating: 4.7,
    reviews: 8910,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  },
  {
    id: 3,
    name: "Minimalist Analog Watch",
    brand: "TimeCraft",
    price: 189.99,
    rating: 4.8,
    reviews: 2140,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
];

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const WishlistPage = () => {
  return (
    <div className="min-h-screen bg-surface-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-32 lg:py-48">
        
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 mb-10 text-brand font-bold uppercase tracking-widest text-[10px] hover:gap-3 transition-all">
           <FiArrowLeft />
           <span>Back to Shop</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
               <FiHeart className="text-brand text-xs" />
               <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">Private Wishlist</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-sora font-extrabold text-heading tracking-tight mb-4">Your <span className="text-brand">Favorites</span></h1>
             <p className="text-muted text-lg font-light leading-relaxed">Save the items you love for later. We'll notify you if any of your favorites go on sale.</p>
          </div>
          
          <div className="btn-ghost flex items-center gap-3 px-8 py-4">
             <FiGrid />
             <span>3 Items Saved</span>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {wishlist.length > 0 ? (
              wishlist.map((item) => (
                 <div key={item.id} className="group flex flex-col bg-surface-850 rounded-[3rem] border border-themed-2 overflow-hidden hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-2 transition-all duration-500">
                    {/* Image */}
                    <Link to={`/product/${toSlug(item.name)}`} className="relative aspect-[4/5] overflow-hidden">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                       <div className="absolute top-6 right-6">
                          <button className="w-12 h-12 rounded-full bg-white text-rose-500 flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-all active:scale-90">
                             <FiTrash2 size={20} />
                          </button>
                       </div>
                    </Link>

                    {/* Info */}
                    <div className="p-10 flex flex-col flex-1">
                       <div className="flex items-center justify-between mb-4">
                          <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">{item.brand}</span>
                          <div className="flex items-center gap-1.5 text-brand">
                             <FiStar size={12} fill="currentColor" />
                             <span className="text-heading text-xs font-black">{item.rating}</span>
                          </div>
                       </div>

                       <Link to={`/product/${toSlug(item.name)}`} className="text-heading font-sora font-extrabold text-xl mb-6 hover:text-brand transition-colors block line-clamp-2 leading-tight h-14">
                          {item.name}
                       </Link>

                       <div className="mt-auto flex items-center justify-between p-4 rounded-3xl bg-surface-800 border border-themed">
                          <div className="flex flex-col">
                             <span className="text-muted text-[10px] uppercase tracking-widest font-bold mb-1">Price</span>
                             <span className="text-heading font-sora font-extrabold text-xl">{formatINR(item.price)}</span>
                          </div>
                          <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-heading hover:text-brand transition-colors">
                             <FiShoppingCart size={18} />
                             <span>Add</span>
                          </button>
                       </div>
                    </div>
                 </div>
              ))
           ) : (
              <div className="col-span-full py-32 flex flex-col items-center text-center">
                 <div className="w-24 h-24 rounded-full bg-surface-850 border border-themed flex items-center justify-center mb-8">
                    <FiHeart className="text-brand text-3xl" />
                 </div>
                 <h2 className="text-2xl font-sora font-extrabold text-heading mb-4">Wishlist is Empty</h2>
                 <p className="text-muted mb-10">You haven't saved any items yet. Explore our collections to find your favorites.</p>
                 <Link to="/" className="btn-primary !px-12">Explore Now</Link>
              </div>
           )}
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;

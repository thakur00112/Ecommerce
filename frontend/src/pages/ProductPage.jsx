import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { FiArrowLeft, FiHeart, FiShare2, FiShoppingCart, FiStar, FiPackage, FiShield, FiRotateCcw } from "react-icons/fi";
import { getProductBySlug } from "../lib/productCatalog";
import { formatINR } from "../lib/currency";

const ProductPage = () => {
  const { id } = useParams();
  
  const product = useMemo(() => getProductBySlug(id), [id]);

  if (!product) {
      return (
          <div className="min-h-screen bg-surface-950 flex flex-col items-center justify-center p-10">
              <h1 className="text-4xl text-heading font-sora font-black mb-8">Product Not Found</h1>
              <Link to="/categories" className="btn-primary">Browse All Categories</Link>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-surface-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-32 lg:py-48">
         <Link to="/categories" className="inline-flex items-center gap-3 mb-12 text-brand font-black uppercase tracking-[0.2em] text-[10px] hover:gap-5 transition-all">
            <FiArrowLeft size={16} />
            <span>Back to directory</span>
         </Link>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Product Gallery */}
            <div className="space-y-6">
                <div className="aspect-[4/5] bg-surface-850 rounded-[3rem] border border-themed-2 overflow-hidden relative shadow-2xl shadow-black/5 group">
                   <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                   />
                   <div className="absolute top-10 right-10 flex flex-col gap-4">
                      <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
                         <FiHeart size={20} />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
                         <FiShare2 size={20} />
                      </button>
                   </div>
                </div>
                
                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-6">
                   {product.images.map((img, i) => (
                      <div key={i} className="aspect-square rounded-3xl overflow-hidden border border-themed opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                         <img src={img} className="w-full h-full object-cover" />
                      </div>
                   ))}
                </div>
            </div>

            {/* Product Details Holder */}
            <div className="flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                  <span className="text-brand text-[10px] font-black uppercase tracking-[0.4em]">{product.brand}</span>
                  <div className="h-px bg-themed w-12" />
                  <div className="flex items-center gap-1 text-brand">
                     <FiStar size={12} fill="currentColor" />
                     <span className="text-heading text-xs font-black">{product.rating}</span>
                  </div>
               </div>

               <h1 className="text-4xl md:text-6xl font-sora font-extrabold text-heading tracking-tight mb-8 capitalize leading-[1.1]">
                  {product.name}
               </h1>

               <div className="flex items-baseline gap-4 mb-10">
                  <span className="text-brand font-sora font-black text-4xl">{formatINR(product.price)}</span>
                  {product.originalPrice && (
                     <span className="text-muted text-xl line-through decoration-brand/30">{formatINR(product.originalPrice)}</span>
                  )}
               </div>

               <p className="text-muted text-lg leading-relaxed mb-12 font-light">
                  {product.description}
               </p>

               {/* Choices */}
               <div className="space-y-10 mb-12">
                  {product.colors.length > 0 && (
                     <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted">Select Aesthetic</span>
                        <div className="flex gap-4">
                           {product.colors.map((c, i) => (
                              <button key={i} title={c.name} style={c.style} className="w-10 h-10 rounded-full border-2 border-surface-950 ring-1 ring-themed hover:ring-brand hover:scale-110 transition-all shadow-xl" />
                           ))}
                        </div>
                     </div>
                  )}

                  {product.sizes.length > 0 && (
                     <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted">Personalized Fit</span>
                        <div className="flex flex-wrap gap-3">
                           {product.sizes.map((s) => (
                              <button key={s} className="px-6 py-3 rounded-2xl border border-themed text-[10px] font-black uppercase tracking-widest hover:border-brand hover:text-brand transition-all">
                                 {s}
                              </button>
                           ))}
                        </div>
                     </div>
                  )}
               </div>

               {/* Actions */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12 border-b border-themed">
                  <button className="flex items-center justify-center gap-3 bg-brand text-white font-sora font-black uppercase tracking-widest text-[11px] py-6 rounded-[1.5rem] shadow-2xl shadow-brand/20 hover:scale-[1.02] active:scale-95 transition-all">
                     <FiShoppingCart size={18} />
                     <span>Secure Purchase</span>
                  </button>
                  <button className="flex items-center justify-center bg-surface-850 text-heading border border-themed-2 font-sora font-black uppercase tracking-widest text-[11px] py-6 rounded-[1.5rem] hover:bg-surface-800 transition-all">
                     Save to Wishlist
                  </button>
               </div>

               {/* Trust Flags */}
               <div className="grid grid-cols-3 gap-8 py-10 mt-2">
                  <div className="flex flex-col gap-3">
                     <FiShield size={20} className="text-brand" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-heading leading-tight">Certified Quality</span>
                  </div>
                  <div className="flex flex-col gap-3">
                     <FiRotateCcw size={20} className="text-brand" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-heading leading-tight">Free Logistics</span>
                  </div>
                  <div className="flex flex-col gap-3">
                     <FiPackage size={20} className="text-brand" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-heading leading-tight">Luxury Unboxing</span>
                  </div>
               </div>
            </div>
         </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;

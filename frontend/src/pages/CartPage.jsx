import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiShoppingCart, FiMinus, FiPlus, FiTrash2, FiShield, FiTruck } from "react-icons/fi";
import { formatINR } from "../lib/currency";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-surface-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-32 lg:py-48">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
               <FiShoppingCart className="text-brand text-xs" />
               <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">Shopping Bag</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-sora font-extrabold text-heading tracking-tight mb-4">Your <span className="text-brand">Bag</span></h1>
             <p className="text-muted text-lg font-light leading-relaxed">Review your selected items and proceed to checkout to finalize your premium purchase.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
           
           {/* Cart Items */}
           <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="py-32 flex flex-col items-center text-center bg-surface-850 rounded-[3rem] border border-themed-2">
                 <div className="w-16 h-16 rounded-full bg-surface-800 border border-themed flex items-center justify-center mb-6">
                    <FiShoppingCart className="text-muted text-2xl" />
                 </div>
                 <h2 className="text-2xl font-sora font-extrabold text-heading mb-4">Bag is currently empty</h2>
                 <p className="text-muted mb-10 text-sm">You haven't added any items yet. Start exploring our collections.</p>
                 <Link to="/" className="btn-primary">Browse Shop</Link>
              </div>
           </div>

           {/* Summary Section */}
           <div className="p-10 bg-surface-850 rounded-[3rem] border border-themed-2 relative overflow-hidden shadow-2xl shadow-black/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px] rounded-full -mr-32 -mt-32" />
              
              <div className="relative z-10">
                 <h3 className="text-xl font-sora font-extrabold text-heading mb-8">Summary Details</h3>
                 
                 <div className="space-y-6 mb-10">
                    <div className="flex justify-between items-center text-sm font-bold text-muted">
                       <span>Bag Subtotal</span>
                       <span className="text-heading">{formatINR(0)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold text-muted">
                       <span>Shipping Entry</span>
                       <span className="text-green-500 uppercase tracking-widest text-[10px]">Free Delivery</span>
                    </div>
                    <div className="h-px bg-themed border-none" />
                    <div className="flex justify-between items-center text-lg font-sora font-black text-heading">
                       <span>Bag Total</span>
                       <span className="text-brand">{formatINR(0)}</span>
                    </div>
                 </div>

                 <button className="btn-primary w-full !py-5 shadow-2xl shadow-brand/20">Finalize Purchase</button>
                 
                 <div className="mt-10 pt-10 border-t border-themed flex flex-col gap-6">
                    <div className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-2xl bg-surface-800 flex items-center justify-center border border-themed-2 shrink-0 group-hover:scale-110 transition-transform">
                          <FiShield className="text-brand" />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-xs font-bold text-heading">Secure Checkout</span>
                          <span className="text-[10px] text-muted">128-bit SSL encrypted connection</span>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-2xl bg-surface-800 flex items-center justify-center border border-themed-2 shrink-0 group-hover:scale-110 transition-transform">
                          <FiTruck className="text-brand" />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-xs font-bold text-heading">Global Shipping</span>
                          <span className="text-[10px] text-muted">Ships to over 200 countries worldwide</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

        </div>

      </main>
      <Footer />
    </div>
  );
};

export default CartPage;

import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Link } from "react-router-dom";
import { FiGift, FiTag, FiCreditCard, FiMapPin, FiArrowLeft } from "react-icons/fi";

const ProfileLayout = ({ children, title, icon }) => (
  <div className="min-h-screen bg-surface-950">
    <Navbar />
    <main className="max-w-7xl mx-auto px-4 py-32 lg:py-48">
      <Link to="/" className="inline-flex items-center gap-2 mb-10 text-brand font-bold uppercase tracking-widest text-[10px] hover:gap-3 transition-all">
         <FiArrowLeft />
         <span>Back to Home</span>
      </Link>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-xl">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
             {icon}
             <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">User Profile</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-sora font-extrabold text-heading tracking-tight mb-4">{title}</h1>
        </div>
      </div>
      <div className="bg-surface-850 rounded-[3rem] border border-themed-2 p-10 md:p-16 min-h-[400px] shadow-2xl shadow-black/5">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export const GiftCards = () => (
  <ProfileLayout title="Gift Cards" icon={<FiGift className="text-brand text-xs" />}>
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="w-20 h-20 rounded-full bg-surface-800 border border-themed flex items-center justify-center mb-6">
        <FiGift className="text-brand text-2xl" />
      </div>
      <p className="text-muted text-lg mb-8">You have no active gift cards. Buy one to share the love.</p>
      <button className="btn-primary">Purchase Gift Card</button>
    </div>
  </ProfileLayout>
);

export const Coupons = () => (
  <ProfileLayout title="My Coupons" icon={<FiTag className="text-brand text-xs" />}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-8 rounded-3xl bg-brand/5 border border-brand/20 flex flex-col justify-between items-start">
         <div>
            <span className="badge bg-brand text-white mb-4">WELCOME70</span>
            <h3 className="text-xl font-bold text-heading mb-2">Flat 70% Off</h3>
            <p className="text-muted text-sm">Valid on your first order above ₹4999</p>
         </div>
         <button className="mt-8 text-brand font-black text-xs uppercase tracking-widest">Tap to Apply</button>
      </div>
    </div>
  </ProfileLayout>
);

export const SavedCards = () => (
  <ProfileLayout title="Saved Cards" icon={<FiCreditCard className="text-brand text-xs" />}>
    <div className="flex flex-col items-center justify-center h-full text-center">
       <FiCreditCard className="text-muted text-4xl mb-6 opacity-20" />
       <p className="text-muted">No cards saved yet for faster checkout.</p>
       <button className="mt-8 btn-ghost">Add New Card</button>
    </div>
  </ProfileLayout>
);

export const SavedAddresses = () => (
  <ProfileLayout title="Saved Addresses" icon={<FiMapPin className="text-brand text-xs" />}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       <div className="p-8 rounded-3xl bg-surface-800 border border-themed-2 relative group">
          <span className="badge bg-green-500/10 text-green-500 mb-4">Home Default</span>
          <h3 className="text-heading font-extrabold mb-1">Mohit Kumar</h3>
          <p className="text-muted text-sm leading-relaxed mb-6">124 Elite Heights, Sector 62<br />Noida, Uttar Pradesh - 201301</p>
          <div className="flex gap-4">
             <button className="text-[10px] font-black uppercase text-brand">Edit</button>
             <button className="text-[10px] font-black uppercase text-rose-500">Remove</button>
          </div>
       </div>
    </div>
  </ProfileLayout>
);

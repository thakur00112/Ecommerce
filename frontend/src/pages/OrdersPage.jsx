import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiPackage, FiShoppingBag, FiTruck, FiCheckCircle } from "react-icons/fi";
import { formatINR } from "../lib/currency";

const orders = [
  {
    id: "ORD-9283-4712",
    date: "March 15, 2026",
    status: "Delivered",
    icon: <FiCheckCircle className="text-green-500" />,
    total: 4599,
    items: [
      { name: "Premium Leather Messenger Bag", qty: 1, price: 3499, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
      { name: "Urban Edge Key Ring", qty: 1, price: 1100, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
    ],
  },
  {
    id: "ORD-8172-5590",
    date: "March 10, 2026",
    status: "In Transit",
    icon: <FiTruck className="text-brand animate-pulse" />,
    total: 12900,
    items: [
      { name: "Noise-Cancelling Studio Pro", qty: 1, price: 12900, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" },
    ],
  },
];

const OrdersPage = () => {
  return (
    <div className="min-h-screen bg-surface-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-32 lg:py-48">
        
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 mb-10 text-brand font-bold uppercase tracking-widest text-[10px] hover:gap-3 transition-all">
           <FiArrowLeft />
           <span>Go Back</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
               <FiPackage className="text-brand text-xs" />
               <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">Order History</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-sora font-extrabold text-heading tracking-tight mb-4">Track <span className="text-brand">Orders</span></h1>
             <p className="text-muted text-lg font-light leading-relaxed">Review your past purchases and track current shipments with real-time updates.</p>
          </div>
        </div>

        {/* Orders List */}
        <div className="flex flex-col gap-10">
           {orders.length > 0 ? (
              orders.map((order) => (
                 <div key={order.id} className="group overflow-hidden rounded-[2.5rem] bg-surface-850 border border-themed-2 hover:border-brand/30 transition-all duration-500">
                    {/* Order Meta Header */}
                    <div className="p-8 md:p-10 border-b border-themed flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-900/50">
                       <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">Order Identifier</span>
                          <span className="text-heading font-sora font-extrabold text-lg">{order.id}</span>
                       </div>
                       <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">Placed On</span>
                          <span className="text-heading font-bold">{order.date}</span>
                       </div>
                       <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">Current Status</span>
                          <div className="flex items-center gap-2 font-black uppercase text-xs tracking-widest">
                             {order.icon}
                             <span className="text-heading">{order.status}</span>
                          </div>
                       </div>
                       <div className="flex flex-col gap-1 items-start md:items-end">
                          <span className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">Grand Total</span>
                          <span className="text-brand font-sora font-extrabold text-2xl">{formatINR(order.total)}</span>
                       </div>
                    </div>

                    {/* Order Items */}
                    <div className="p-10 flex flex-col gap-8">
                       {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-8">
                             <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden bg-surface-900 border border-themed p-2">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" />
                             </div>
                             <div className="flex-1 flex flex-col justify-center h-24 sm:h-32">
                                <h3 className="text-heading font-sora font-extrabold text-lg mb-2 capitalize leading-tight">{item.name}</h3>
                                <div className="flex items-center gap-4 text-xs font-bold text-muted uppercase tracking-widest">
                                   <span>Qty: {item.qty}</span>
                                   <span>·</span>
                                   <span>{formatINR(item.price)} each</span>
                                </div>
                                <div className="mt-4 flex gap-4">
                                   <button className="text-[10px] font-black border border-themed px-4 py-2 rounded-full uppercase tracking-widest hover:bg-brand hover:border-brand hover:text-white transition-all">Buy Again</button>
                                   <button className="text-[10px] font-black border border-themed px-4 py-2 rounded-full uppercase tracking-widest hover:border-heading hover:text-heading transition-all">Review</button>
                                </div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              ))
           ) : (
              <div className="py-32 flex flex-col items-center text-center">
                 <div className="w-24 h-24 rounded-full bg-surface-850 border border-themed flex items-center justify-center mb-8">
                    <FiShoppingBag className="text-brand text-3xl" />
                 </div>
                 <h2 className="text-2xl font-sora font-extrabold text-heading mb-4">No Orders Found</h2>
                 <p className="text-muted mb-10">You haven't placed any orders yet. Start shopping to find premium items.</p>
                 <Link to="/" className="btn-primary !px-12">Start Shopping</Link>
              </div>
           )}
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default OrdersPage;

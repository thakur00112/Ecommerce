import React from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline, IoArrowForward } from "react-icons/io5";
import { FiArrowRight, FiZap } from "react-icons/fi";

const offers = [
  {
    id: 1,
    title: "Summer Fashion Sale",
    subtitle: "Up to 60% off on trending styles",
    cta: "Explore Summer",
    link: "/sale/summer",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    badge: "Limited Time",
    gradient: "from-orange-600/90 to-amber-500/70",
  },
  {
    id: 2,
    title: "New Sneaker Drops",
    subtitle: "Exclusive launches — first 100 orders get free shipping",
    cta: "See Collection",
    link: "/sale/sneakers",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    badge: "Just Launched",
    gradient: "from-rose-600/90 to-pink-500/70",
  },
  {
    id: 3,
    title: "Tech Accessories",
    subtitle: "Premium gadgets & accessories starting at $19",
    cta: "Grab Deals",
    link: "/sale/tech",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    badge: "Best Value",
    gradient: "from-violet-600/90 to-indigo-500/70",
  },
];

const OfferSections = () => {
  return (
    <section className="py-24 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
              <FiZap className="text-brand" />
              <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">
                Flash Events
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-heading tracking-tight mb-4">
              Seasonal <span className="text-brand">Sale Events</span>
            </h2>
            
            <p className="text-muted text-lg font-light leading-relaxed">
              Don't miss our periodic shopping events with deep discounts on top categories.
            </p>
          </div>

          <Link to="/offers" className="group flex items-center gap-3 text-sm font-bold text-heading hover:text-brand transition-colors">
            <span>Discover All Current Offers</span>
            <div className="w-10 h-10 rounded-full border border-themed flex items-center justify-center group-hover:border-brand group-hover:bg-brand group-hover:text-white transition-all">
               <FiArrowRight />
            </div>
          </Link>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              to={offer.link}
              className="group relative block overflow-hidden rounded-[3rem] border border-themed-2 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500"
            >
              {/* Background Image Container */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlays for readability */}
              <div className={`absolute inset-0 bg-gradient-to-t ${offer.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity" />

              {/* Badge */}
              <div className="absolute top-8 left-8">
                <span className="bg-white/10 backdrop-blur-xl text-white text-[10px] font-bold px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-widest">
                  {offer.badge}
                </span>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-sora font-black text-2xl sm:text-3xl mb-3 leading-tight">
                  {offer.title}
                </h3>
                <p className="text-white/70 text-sm mb-8 leading-relaxed line-clamp-2 max-w-[90%] font-light">
                  {offer.subtitle}
                </p>
                
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white text-black font-sora font-black text-xs uppercase tracking-widest group-hover:bg-brand group-hover:text-white transition-all shadow-xl">
                  <span>{offer.cta}</span>
                  <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSections;


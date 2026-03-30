import React from "react";
import { Link } from "react-router-dom";
import { IoFlame, IoStar, IoTimeOutline } from "react-icons/io5";
import { FiArrowRight, FiPercent } from "react-icons/fi";
import { formatINR } from "../../lib/currency";

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const deals = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    brand: "SoundMax",
    price: 79.99,
    originalPrice: 149.99,
    discount: 47,
    rating: 4.8,
    reviews: 1240,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  },
  {
    id: 2,
    name: "Premium Leather Crossbody Bag",
    brand: "UrbanEdge",
    price: 49.99,
    originalPrice: 89.99,
    discount: 44,
    rating: 4.6,
    reviews: 856,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
  },
  {
    id: 3,
    name: "Smart Fitness Watch Pro",
    brand: "FitTech",
    price: 129.99,
    originalPrice: 249.99,
    discount: 48,
    rating: 4.9,
    reviews: 2103,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    id: 4,
    name: "Running Sneakers Ultra Boost",
    brand: "SprintX",
    price: 89.99,
    originalPrice: 159.99,
    discount: 44,
    rating: 4.7,
    reviews: 967,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    id: 5,
    name: "Polarized Aviator Sunglasses",
    brand: "VistaClear",
    price: 34.99,
    originalPrice: 69.99,
    discount: 50,
    rating: 4.5,
    reviews: 534,
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
  },
  {
    id: 6,
    name: "Minimalist Ceramic Vase Set",
    brand: "HomeCraft",
    price: 24.99,
    originalPrice: 44.99,
    discount: 44,
    rating: 4.4,
    reviews: 312,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
];

const TopDeals = () => {
  return (
    <section className="py-24 bg-surface-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
              <IoFlame className="text-brand animate-pulse" />
              <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">
                Hot This Week
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-heading tracking-tight mb-4">
              Don't Miss <span className="text-brand">Top Deals</span>
            </h2>

            <p className="text-muted text-lg font-light leading-relaxed">
              Incredible savings on premium products. Act fast, these offers won't last forever.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted text-sm font-medium">
              <IoTimeOutline className="text-brand" />
              <span>Ends in: <span className="text-heading font-bold">12h : 45m : 30s</span></span>
            </div>
            <Link to="/deals" className="btn-ghost px-6 py-3">
              View All Deals
            </Link>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="group relative bg-surface-850 rounded-[2.5rem] border border-themed-2 overflow-hidden hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500"
            >
              {/* Image Container */}
              <Link to={`/product/${toSlug(deal.name)}`} className="relative block aspect-[3/2] overflow-hidden">
                <img
                  src={deal.img}
                  alt={deal.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Discount Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-1.5 px-3 py-1.5 bg-brand text-white rounded-full shadow-lg shadow-brand/30">
                  <FiPercent size={12} className="font-bold" />
                  <span className="text-xs font-black tracking-tighter">{deal.discount}% OFF</span>
                </div>
              </Link>

              {/* Deal Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">
                    {deal.brand}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <IoStar className="text-brand" size={12} />
                    <span className="text-heading text-xs font-bold">{deal.rating}</span>
                    <span className="text-muted text-[10px]">({deal.reviews})</span>
                  </div>
                </div>

                <Link
                  to={`/product/${toSlug(deal.name)}`}
                  className="text-heading font-sora font-extrabold text-xl mb-6 hover:text-brand transition-colors block line-clamp-2 leading-tight h-14"
                >
                  {deal.name}
                </Link>

                <div className="flex items-center justify-between p-4 rounded-3xl bg-surface-800 border border-themed">
                  <div className="flex flex-col">
                    <span className="text-brand font-sora font-extrabold text-2xl">
                      {formatINR(deal.price)}
                    </span>
                    <span className="text-muted text-xs line-through opacity-60">
                      {formatINR(deal.originalPrice)}
                    </span>
                  </div>

                  <Link
                    to={`/product/${toSlug(deal.name)}`}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-heading group-hover:text-brand transition-colors group-hover:gap-3"
                  >
                    <span>Get Deal</span>
                    <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Progress bar decoration */}
              <div className="absolute bottom-0 left-0 h-1 bg-brand/10 w-full overflow-hidden">
                <div className="h-full bg-brand w-3/4 opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeals;


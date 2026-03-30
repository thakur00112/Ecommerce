import React from "react";
import { Link } from "react-router-dom";
import { IoStar, IoStarHalf, IoBagHandleOutline } from "react-icons/io5";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";
import { formatINR } from "../../lib/currency";

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    brand: "UrbanStep",
    price: 119.99,
    rating: 4.9,
    reviews: 3420,
    sold: "12K+",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Earbuds",
    brand: "SoundCore",
    price: 49.99,
    rating: 4.7,
    reviews: 8910,
    sold: "25K+",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  },
  {
    id: 3,
    name: "Minimalist Analog Watch",
    brand: "TimeCraft",
    price: 189.99,
    rating: 4.8,
    reviews: 2140,
    sold: "8K+",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    id: 4,
    name: "Premium Cotton T-Shirt",
    brand: "ThreadLine",
    price: 34.99,
    rating: 4.6,
    reviews: 5670,
    sold: "30K+",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  },
  {
    id: 5,
    name: "Leather Tote Bag",
    brand: "BagHouse",
    price: 79.99,
    rating: 4.5,
    reviews: 1890,
    sold: "6K+",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
  },
  {
    id: 6,
    name: "UV Protection Sunglasses",
    brand: "ClearView",
    price: 59.99,
    rating: 4.4,
    reviews: 3210,
    sold: "15K+",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
  },
  {
    id: 7,
    name: "Ergonomic Backpack",
    brand: "PackPro",
    price: 69.99,
    rating: 4.7,
    reviews: 4320,
    sold: "18K+",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    id: 8,
    name: "Running Shorts Pro",
    brand: "SprintX",
    price: 29.99,
    rating: 4.5,
    reviews: 2750,
    sold: "10K+",
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80",
  },
];

const Stars = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="flex items-center gap-0.5 text-brand">
      {Array.from({ length: full }, (_, i) => (
        <IoStar key={i} size={10} />
      ))}
      {half && <IoStarHalf size={10} />}
    </span>
  );
};

const BestSeller = () => {
  return (
    <section className="py-24 bg-surface-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -mr-64 -mt-64" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
              <FiTrendingUp className="text-brand text-xs" />
              <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">
                Customer Favorites
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-heading tracking-tight mb-4">
              Best <span className="text-brand">Sellers</span>
            </h2>

            <p className="text-muted text-lg font-light leading-relaxed">
              Discover the products our community loves the most.
              Proven quality and exceptional design.
            </p>
          </div>

          <Link to="/bestsellers" className="group flex items-center gap-3 text-sm font-bold text-heading hover:text-brand transition-colors">
            <span>View All Popular Items</span>
            <div className="w-10 h-10 rounded-full border border-themed flex items-center justify-center group-hover:border-brand group-hover:bg-brand group-hover:text-white transition-all">
              <FiArrowRight />
            </div>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-surface-850 rounded-[2rem] border border-themed-2 overflow-hidden hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Product Image */}
              <Link to={`/product/${toSlug(item.name)}`} className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-surface-950/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                    🔥 {item.sold} Sold
                  </span>
                </div>

                {/* Quick Action */}
                <div className="absolute inset-0 bg-brand/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-heading flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <IoBagHandleOutline size={24} />
                  </div>
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">
                    {item.brand}
                  </span>
                  <div className="flex items-center gap-1">
                    <Stars rating={item.rating} />
                    <span className="text-muted text-[10px] font-mono">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/product/${toSlug(item.name)}`}
                  className="text-heading font-sora font-extrabold text-lg mb-4 hover:text-brand transition-colors line-clamp-2 leading-tight"
                >
                  {item.name}
                </Link>

                <div className="mt-auto pt-6 border-t border-themed flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-muted text-[10px] uppercase tracking-widest font-bold mb-1">Price</span>
                    <span className="text-heading font-sora font-extrabold text-xl">
                      {formatINR(item.price)}
                    </span>
                  </div>

                  <Link
                    to={`/product/${toSlug(item.name)}`}
                    className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-all shadow-sm"
                  >
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSeller;



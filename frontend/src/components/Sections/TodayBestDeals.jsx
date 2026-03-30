import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FiArrowRight, FiArrowLeft, FiTag, FiShoppingBag } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    name: "Women's Fashion",
    tag: "Clothing",
    count: "1,240 products",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    color: "#F97316"
  },
  {
    id: 2,
    name: "Men's Style",
    tag: "Clothing",
    count: "980 products",
    img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&q=80",
    color: "#0EA5E9"
  },
  {
    id: 3,
    name: "Sneakers",
    tag: "Footwear",
    count: "430 products",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    color: "#EF4444"
  },
  {
    id: 4,
    name: "Accessories",
    tag: "Lifestyle",
    count: "670 products",
    img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    color: "#8B5CF6"
  },
  {
    id: 5,
    name: "Home & Living",
    tag: "Interior",
    count: "820 products",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    color: "#10B981"
  },
  {
    id: 6,
    name: "Beauty",
    tag: "Skincare",
    count: "560 products",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    color: "#EC4899"
  },
  {
    id: 7,
    name: "Watches",
    tag: "Luxury",
    count: "290 products",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    color: "#F59E0B"
  },
  {
    id: 8,
    name: "Bags & Luggage",
    tag: "Accessories",
    count: "380 products",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    color: "#6366F1"
  },
];

const TodayBestDeals = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-24 overflow-hidden bg-surface-950 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-themed to-transparent opacity-50" />
      <div className="absolute -top-[10%] -left-[5%] w-[30%] h-[30%] bg-brand/5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-brand/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase">
                Limited Time Offers
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold text-heading leading-[1.1] tracking-tight mb-6">
              Today's <span className="text-brand relative inline-block">
                Best Deals
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-brand/30" />
                </svg>
              </span>
            </h2>

            <p className="text-muted text-lg font-light leading-relaxed">
              Curated selection of premium products at exceptional prices. 
              Elevate your lifestyle with our daily handpicked collection.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2 mr-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-full border border-themed hover:border-brand hover:text-brand flex items-center justify-center transition-all bg-surface-850 shadow-sm"
                aria-label="Previous slide"
              >
                <FiArrowLeft className="text-lg" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-full border border-themed hover:border-brand hover:text-brand flex items-center justify-center transition-all bg-surface-850 shadow-sm"
                aria-label="Next slide"
              >
                <FiArrowRight className="text-lg" />
              </button>
            </div>
            <Link to="/shop" className="group btn-primary px-8 py-4 gap-3">
              <span>View All Deals</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Swiper Content */}
        <div className="relative group/swiper">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="!pb-16"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Link
                  to="/categories"
                  className="group block relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-800 border border-themed transition-all duration-500 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="absolute inset-0">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/40 to-transparent opacity-80" />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <FiTag className="text-white text-xs" />
                      <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                        {cat.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="text-white font-sora font-extrabold text-2xl mb-2 group-hover:text-brand transition-colors">
                        {cat.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-xs font-mono tracking-wider">
                          {cat.count}
                        </span>
                        
                        <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                          <span>Explore</span>
                          <FiArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button (Hidden until hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand/5 backdrop-blur-[2px]">
                     <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <FiShoppingBag className="text-2xl" />
                     </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-themed rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand transition-all duration-500 rounded-full"
              style={{ width: `${((swiperRef.current?.realIndex || 0) + 1) / categories.length * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayBestDeals;
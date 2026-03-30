import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { LuScanLine } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import ThemeToggle from "../../Ui/ThemeToggle";
import { formatINR } from "../../lib/currency";
import { navData } from "../../lib/navData";

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled
        ? "bg-surface-850 shadow-xl shadow-black/5 py-1"
        : "bg-surface-850/80 backdrop-blur-xl border-b border-themed-2 py-3"
      }`}>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Top Row: Logo, Search, Actions */}
        <div className="flex items-center justify-between gap-6 lg:gap-12">

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-heading"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/20 group-hover:rotate-12 transition-transform duration-300">
              <HiOutlineShoppingBag size={24} />
            </div>
            <span className="text-2xl font-sora font-extrabold tracking-tighter text-heading">
              Deva<span>.</span>kart
            </span>
          </Link>

          {/* Search Bar - Center */}
          <div className="hidden md:flex flex-1 max-w-2xl relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-muted group-focus-within:text-brand transition-colors" />
            </div>

            <input
              type="text"
              placeholder="Search for premium products..."
              className="w-full h-12 pl-11 pr-12 rounded-2xl bg-surface-800/50 border border-themed-2 focus:border-brand focus:bg-surface-850 focus:ring-4 focus:ring-brand/5 shadow-sm transition-all duration-300 outline-none font-dm text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded border border-themed-2 bg-surface-900 text-[10px] font-mono text-muted mr-2">
                ⌘K
              </kbd>
              <LuScanLine className="text-muted hover:text-brand cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1 sm:gap-4">

            <ThemeToggle />

            <div className="w-px h-6 bg-themed-2 mx-1 hidden sm:block" />

            {/* Account */}
            <div className="relative group">
              <Link to="/profile" className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-surface-800 transition-colors group">
                <FiUser size={22} className="text-muted group-hover:text-brand transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted group-hover:text-heading">Account</span>
              </Link>

              {/* Dropdown */}
              <div className="absolute right-0 top-full pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="bg-surface-850 p-6 rounded-2xl border border-themed-2 shadow-2xl">
                  <h4 className="font-sora font-bold text-sm mb-1 text-heading">Welcome Back</h4>
                  <p className="text-xs text-muted mb-4">Discover your personalized store</p>

                  <Link to="/login" className="flex items-center justify-center w-full py-3 rounded-xl bg-brand text-white font-bold text-sm shadow-lg shadow-brand/20 hover:scale-[1.02] transition-transform">
                    Sign In
                  </Link>

                  <div className="my-6 border-t border-themed" />

                  <nav className="flex flex-col gap-3 text-sm font-medium">
                    <Link to="/orders" className="flex items-center gap-3 text-muted hover:text-brand transition-colors">
                      Orders & Returns
                    </Link>
                    <Link to="/wishlist" className="flex items-center gap-3 text-muted hover:text-brand transition-colors">
                      Wishlist
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 text-muted hover:text-brand transition-colors">
                      Settings
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative p-2 rounded-xl hover:bg-surface-800 transition-colors group flex flex-col items-center gap-1">
              <FiHeart size={22} className="text-muted group-hover:text-brand transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted group-hover:text-heading">Saved</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-brand text-white text-[10px] flex items-center justify-center rounded-full font-bold">0</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 rounded-xl hover:bg-surface-800 transition-colors group flex flex-col items-center gap-1">
              <FiShoppingCart size={22} className="text-muted group-hover:text-brand transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted group-hover:text-heading">Bag</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-heading text-white text-[10px] flex items-center justify-center rounded-full font-bold">0</span>
            </Link>

          </div>
        </div>

        {/* Bottom Row: Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 mt-4">
          {navData.map((cat) => (
            <div key={cat.name} className="group relative py-2">
              <Link
                to={`/category/${toSlug(cat.name)}`}
                className="text-[13px] font-bold uppercase tracking-[0.15em] text-muted hover:text-brand transition-colors relative"
              >
                {cat.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Mega Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-50">
                <div className="bg-surface-850 p-10 rounded-3xl border border-themed-2 shadow-2xl min-w-[800px] flex gap-12 overflow-hidden relative">
                  {/* Decorative Background for menu */}
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand/5 rounded-full blur-[80px]" />

                  {cat.panels.map((panel, pIdx) => (
                    <div key={pIdx} className="flex-1 flex flex-col gap-10 relative z-10">
                      {panel.map((section, sIdx) => (
                        <div key={sIdx}>
                          <h5 className="font-sora font-extrabold text-sm mb-4 tracking-tight" style={{ color: cat.accent || "var(--color-brand)" }}>
                            {section.title}
                          </h5>
                          <ul className="flex flex-col gap-2.5">
                            {section.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <Link
                                  to={`/category/${toSlug(link)}`}
                                  className="text-xs text-muted hover:text-heading transition-colors"
                                >
                                  {link}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Featured Card in Menu */}
                  <div className="w-[280px] rounded-2xl bg-surface-800 p-6 flex flex-col justify-between relative overflow-hidden group/menu-card">
                    <div className="relative z-10">
                      <span className="text-[10px] font-bold text-brand uppercase tracking-widest mb-2 block">New Arrival</span>
                      <h4 className="text-xl font-sora font-bold text-heading mb-2">Summer Essentials 2024</h4>
                      <p className="text-xs text-muted leading-relaxed">Upgrade your wardrobe with our latest seasonal collection.</p>
                    </div>
                    <Link to="/categories" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand group-hover/menu-card:gap-3 transition-all relative z-10">
                      Shop Now <FiSearch />
                    </Link>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand/10 rounded-full blur-2xl group-hover/menu-card:scale-150 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>

      </div>

      {/* Mobile Search - Visible only on mobile */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative group">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full h-11 pl-11 pr-4 rounded-xl bg-surface-800 border-none focus:ring-2 focus:ring-brand/20 transition-all outline-none text-sm"
          />
        </div>
      </div>

    </header>
  );
};

export default Navbar;
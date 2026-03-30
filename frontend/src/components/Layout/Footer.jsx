import { useState } from "react";

/* ── Inline SVG Icons ───────────────────── */

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" fill="white" />
    <circle cx="17.5" cy="6.5" r="1" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-brand"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ReturnIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-brand"
  >
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-3.57" />
  </svg>
);

const ShippingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-brand"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-brand"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

/* ── Reusable Nav Link ─────────────────── */

const NavLink = ({ children, href = "#" }) => (
  <li>
    <a
      href={href}
      className="flex items-center gap-1 hover:text-brand transition"
    >
      <span className="text-brand">›</span>
      {children}
    </a>
  </li>
);

/* ── Footer Component ──────────────────── */

const Footer = () => {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-950 text-heading mt-16 px-6 md:px-12 py-12 space-y-12">
      {/* ========== TOP STORIES / BRAND DIRECTORY (FULL TEXT) ========== */}
      <div className="bg-surface-850 p-6 rounded-lg shadow-lg border border-themed space-y-6 text-sm">
        {/* Most Searched on Flipkart */}
        <div>
          <h3 className="text-base font-bold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-brand rounded-full"></span>
            MOST SEARCHED FOR ON FLIPKART
          </h3>
          <p className="text-body leading-relaxed">
            Ugadi Sale | iPhone 17e | Nothing 4a | POCO C85x | Nothing 4a Pro |
            Samsung S26 Series | Samsung Galaxy S26 5G | Samsung Galaxy S26 Plus
            5G | Samsung Galaxy S26 Ultra 5G | Motorola Edge 70 Fusion | Lumio
            Projectors | Big Saving Days Sale | Eid Sale | Bags for Men | Laptop
            Store | Mixer Juicer Grinder | Men's Shoes | Adidas Men's Shoes |
            Boat Earbuds | Body Lotion | Campus Shoes | Earphones | Red Tape
            Shoes | Men's Slippers | Helmets | Nike Shoes | Puma Shoes |
            Trimmers | Vivo Phones | Iqoo Phones | Smartwatches | Biscuits |
            Women's Footwear | Trolley Bags | Water Bottles | Men's Jackets |
            Anarkali Suits | Hoodies for Men | Men's Watches | Men's Winter
            Jackets | Women's Watches | Teddy Bears | Premium Laptops | Ray Ban
            Meta Smart Glasses | Rings | Earrings | Airpods | Urban Power Banks
            | GoBout Wireless Earphones | Bose Soundbars | Jewellery
          </p>
        </div>

        {/* Mobiles & Cameras (combined for layout efficiency) */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base font-bold mb-1">MOBILES</h3>
            <p className="text-body leading-relaxed">
              4G Mobiles | Nokia Phones | Samsung Mobiles | Oppo Mobiles | Apple
              Phones | Realme Mobiles | Nothing Phones | OnePlus Mobiles |
              Blackberry Phones | POCO Mobiles | Feature Mobile Phones | Redmi
              Phones | Motorola Mobiles | Mobile Phones Under 10000 | Mobile
              Phones Under 15000 | Mobile Phones Under 20000 | Mobile Phones
              Under 25000 | 256 GB Mobiles | 512 GB Mobiles | 5.5 Inch Mobiles
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-1">CAMERA</h3>
            <p className="text-body leading-relaxed">
              Akaso Action Camera | Nikon Cameras | Canon Cameras | Sony Cameras
              | Instant Cameras | DSLR Mirrorless Cameras | GoPro Cameras |
              Insta360 Cameras | Drones | Sports Action Cameras
            </p>
          </div>
        </div>

        {/* Laptops & TVs */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base font-bold mb-1">LAPTOPS</h3>
            <p className="text-body leading-relaxed">
              Apple Laptops | Acer Laptops | Lenovo Laptops | Gaming Laptops |
              Dell Laptops | Asus Laptops | HP Laptops | Samsung Laptops |
              Laptops Under 50000 | Laptops Under 40000 | Laptops Under 30000 |
              i5 Laptops | i7 Laptops
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-1">TVS</h3>
            <p className="text-body leading-relaxed">
              LG TVs | Sony TVs | Samsung TVs | Mi TVs | LED TVs | OLED TVs |
              Smart TVs | Android TVs | 4K TVs | 8K TVs | LED TVs Under 15000 |
              Best TV Brands
            </p>
          </div>
        </div>

        {/* Large Appliances & Clothing */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base font-bold mb-1">LARGE APPLIANCES</h3>
            <p className="text-body leading-relaxed">
              Air Conditioners | Air Coolers | Microwave Ovens | Air Fryers |
              Refrigerators | Washing Machines | Water Purifiers | Induction
              Stove | Water Geyser | Room Heaters | 1.5 Ton ACs | Dish Washers |
              Electric Cookers
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-1">CLOTHING</h3>
            <p className="text-body leading-relaxed">
              Sarees | Lehengas | Kurtas/Kurtis | Ethnic Sets | Women's Tops |
              Women's Night Suits | Women's Shirts | Women's Jeans | Gowns |
              Women's Trousers | Women's Sweaters | Women's Hoodies | Women's
              Jackets | Casual Shirts | Formal Shirts | Men's T-shirts | Men's
              Jeans | Men's Trousers | Men's Track pants | Blazers | Men's
              Sweatshirts | Men's Sweaters
            </p>
          </div>
        </div>

        {/* Footwear & Groceries */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base font-bold mb-1">FOOTWEAR</h3>
            <p className="text-body leading-relaxed">
              Footwear | Kids Footwear | Men's Formal Shoes | Men's Casual Shoes
              | Men's Sneakers | Sports Shoes | Women's Sandals | Women's
              Slippers & Flip Flops | Heels | Women's Sneakers | Women's Sports
              Shoes | Boys Shoes | Girls Shoes | Skechers Shoes | Crocs
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-1">GROCERIES</h3>
            <p className="text-body leading-relaxed">
              Staples | Snacks & Beverages | Packaged Foods | Household Care |
              Personal & Baby Care | Masalas & Spices | Dals & Pulses | Ghee &
              Oils | Dry Fruits, Nuts & Seeds | Chips & Nankeen | Cookies |
              Noodles & Pasta | Soft Drinks | Chocolates & Sweets | Renewables &
              Freshmen | Laundry Detergents
            </p>
          </div>
        </div>

        {/* Footnote: original directory includes "Top Stories" label, we keep it subtle */}
        <div className="text-xs text-muted/70 border-t pt-2 italic">
          Top Stories : Brand Directory — complete list as featured
        </div>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-surface-850 p-6 rounded-lg shadow-lg border border-themed gap-6">
        <div>
          <h2 className="text-2xl font-semibold leading-snug">
            Curated for <br />
            <em className="text-brand">those who know.</em>
          </h2>
          <p className="text-muted mt-2">
            New arrivals · Exclusive offers · Style guides
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            className="bg-brand text-white px-4 py-2 rounded-r-lg hover:bg-brand-hover transition"
            onClick={() => {
              alert(`Subscribed with ${email}`);
              setEmail("");
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <span className="text-3xl font-bold">
            E<span className="text-brand">.</span>kart
          </span>
          <div className="text-muted text-sm">Since 2026 · Bihar, Bharat</div>
          <p className="text-body">
            We believe that style is not purchased — it is cultivated. Each
            piece in our collection is sourced from ateliers that share our
            obsession with craft.
          </p>
          <div className="flex gap-3 mt-2">
            <button title="Instagram" className="hover:text-brand transition">
              <InstagramIcon />
            </button>
            <button title="X / Twitter" className="hover:text-brand transition">
              <XIcon />
            </button>
            <button title="TikTok" className="hover:text-brand transition">
              <TikTokIcon />
            </button>
          </div>
        </div>

        {/* Shop */}
        <div>
          <span className="font-semibold text-lg">Shop</span>
          <ul className="mt-4 space-y-2 text-body">
            <li>
              <a href="#" className="flex items-center gap-1">
                New Arrivals{" "}
                <span className="text-brand font-semibold">Hot</span>
              </a>
            </li>
            <NavLink>Women</NavLink>
            <NavLink>Men</NavLink>
            <NavLink>Accessories</NavLink>
            <NavLink>Home & Living</NavLink>
            <li>
              <a href="#" className="flex items-center gap-1">
                Sale <span className="text-brand font-semibold">−30%</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <span className="font-semibold text-lg">Help</span>
          <ul className="mt-4 space-y-2 text-body">
            <NavLink>My Account</NavLink>
            <NavLink>Track Order</NavLink>
            <NavLink>Returns & Exchanges</NavLink>
            <NavLink>Size Guide</NavLink>
            <NavLink>Contact Us</NavLink>
            <NavLink>FAQs</NavLink>
          </ul>
        </div>

        {/* Company */}
        <div>
          <span className="font-semibold text-lg">Company</span>
          <ul className="mt-4 space-y-2 text-body">
            <NavLink>Our Story</NavLink>
            <NavLink>Sustainability</NavLink>
            <NavLink>Careers</NavLink>
            <NavLink>Press & Media</NavLink>
            <NavLink>Affiliates</NavLink>
            <NavLink>Gift Cards</NavLink>
          </ul>
        </div>
      </div>

      {/* ── Payment Methods ── */}
      <div className="flex gap-4 justify-center border-t border-gray-800 pt-6 flex-wrap">
        {[
          "Cash on Delivery",
          "Visa",
          "Mastercard",
          "PayPal",
          "Apple Pay",
          "PhonePe",
          "Google Pay",
          "Amazon Pay",
          "UPI",
          "Razorpay",
          "Net Banking",
        ].map((p) => (
          <div
            key={p}
            className="px-4 py-2 border border-gray-700 rounded text-gray-400 text-sm 
                 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            {p}
          </div>
        ))}
      </div>

      {/* Trust Band */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-surface-850 p-6 rounded-lg shadow-lg border border-themed gap-6">
        <div className="flex items-center gap-3">
          <ShippingIcon />
          <div>
            <strong>Free Worldwide Shipping</strong>
            <div className="text-muted text-sm">On all orders over ₹1000</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ReturnIcon />
          <div>
            <strong>Easy 7-Day Returns</strong>
            <div className="text-muted text-sm">No questions asked</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ShieldIcon />
          <div>
            <strong>Secure Checkout</strong>
            <div className="text-muted text-sm">
              SSL encrypted & PCI compliant
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <HeartIcon />
          <div>
            <strong>Authenticity Guaranteed</strong>
            <div className="text-muted text-sm">
              Verified luxury pieces only
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-center items-center text-muted text-sm gap-7">
        <div>
          © {year} E.kart. All rights reserved. &nbsp;·&nbsp;
          <a href="#" className="hover:text-brand">
            Privacy Policy
          </a>{" "}
          &nbsp;·&nbsp;
          <a href="#" className="hover:text-brand">
            Terms of Use
          </a>{" "}
          &nbsp;·&nbsp;
          <a href="#" className="hover:text-brand">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

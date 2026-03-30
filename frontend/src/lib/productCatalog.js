export const toSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const coreProducts = [
  { name: "Classic White Sneakers", brand: "UrbanStep", category: "Footwear", price: 119.99, originalPrice: 149.99, rating: 4.9, reviews: 3420, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80" },
  { name: "Wireless Bluetooth Earbuds", brand: "SoundCore", category: "Electronics", price: 49.99, originalPrice: 79.99, rating: 4.7, reviews: 8910, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80" },
  { name: "Minimalist Analog Watch", brand: "TimeCraft", category: "Accessories", price: 189.99, originalPrice: 249.99, rating: 4.8, reviews: 2140, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80" },
  { name: "Premium Cotton T-Shirt", brand: "ThreadLine", category: "Fashion", price: 34.99, originalPrice: 44.99, rating: 4.6, reviews: 5670, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80" },
  { name: "Leather Tote Bag", brand: "BagHouse", category: "Accessories", price: 79.99, originalPrice: 99.99, rating: 4.5, reviews: 1890, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80" },
  { name: "UV Protection Sunglasses", brand: "ClearView", category: "Accessories", price: 59.99, originalPrice: 79.99, rating: 4.4, reviews: 3210, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80" },
  { name: "Ergonomic Backpack", brand: "PackPro", category: "Accessories", price: 69.99, originalPrice: 89.99, rating: 4.7, reviews: 4320, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=80" },
  { name: "Running Shorts Pro", brand: "SprintX", category: "Fashion", price: 29.99, originalPrice: 39.99, rating: 4.5, reviews: 2750, img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&q=80" },
  { name: "Smart LED Desk Lamp", brand: "LumiTech", category: "Home", price: 44.99, originalPrice: 59.99, rating: 4.6, reviews: 1820, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" },
  { name: "Yoga Mat Premium", brand: "FlexFit", category: "Sports", price: 39.99, originalPrice: 54.99, rating: 4.8, reviews: 3150, img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=900&q=80" },
  { name: "Stainless Steel Water Bottle", brand: "HydroFlow", category: "Sports", price: 24.99, originalPrice: 34.99, rating: 4.7, reviews: 6420, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&q=80" },
  { name: "Wireless Charging Pad", brand: "ChargePlus", category: "Electronics", price: 29.99, originalPrice: 39.99, rating: 4.5, reviews: 4100, img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&q=80" },
  { name: "Wireless Noise-Cancelling Headphones", brand: "SoundMax", category: "Electronics", price: 79.99, originalPrice: 149.99, rating: 4.8, reviews: 1240, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80" },
  { name: "Smart Fitness Watch Pro", brand: "FitTech", category: "Electronics", price: 129.99, originalPrice: 249.99, rating: 4.9, reviews: 2103, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80" },
  { name: "Running Sneakers Ultra Boost", brand: "SprintX", category: "Footwear", price: 89.99, originalPrice: 159.99, rating: 4.7, reviews: 967, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80" },
  { name: "Polarized Aviator Sunglasses", brand: "VistaClear", category: "Accessories", price: 34.99, originalPrice: 69.99, rating: 4.5, reviews: 534, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80" },
  { name: "Premium Leather Crossbody Bag", brand: "UrbanEdge", category: "Accessories", price: 49.99, originalPrice: 89.99, rating: 4.6, reviews: 856, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80" },
  { name: "Minimalist Ceramic Vase Set", brand: "HomeCraft", category: "Home", price: 24.99, originalPrice: 44.99, rating: 4.4, reviews: 312, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80" },
  { name: "Bluetooth Portable Speaker", brand: "BassBox", category: "Electronics", price: 39.99, originalPrice: 79.99, rating: 4.6, reviews: 2180, img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=80" },
  { name: "Leather Wallet Set", brand: "CraftLine", category: "Accessories", price: 29.99, originalPrice: 59.99, rating: 4.5, reviews: 1450, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=80" },
  { name: "Denim Jacket Classic", brand: "UrbanWear", category: "Fashion", price: 89.99, originalPrice: 129.99, rating: 4.7, reviews: 1890, img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=900&q=80" },
  { name: "Linen Summer Shirt", brand: "BreezeLine", category: "Fashion", price: 45.99, originalPrice: 69.99, rating: 4.4, reviews: 1340, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80" },
  { name: "Natural Face Serum", brand: "GlowUp", category: "Beauty", price: 34.99, originalPrice: 44.99, rating: 4.8, reviews: 2340, img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80" },
  { name: "Vitamin C Moisturizer", brand: "SkinPure", category: "Beauty", price: 28.99, originalPrice: 39.99, rating: 4.6, reviews: 1870, img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80" },
  { name: "Essential Oil Diffuser", brand: "AromaZen", category: "Beauty", price: 42.99, originalPrice: 52.99, rating: 4.7, reviews: 1560, img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80" },
  { name: "High-Top Canvas Sneakers", brand: "StreetKick", category: "Footwear", price: 64.99, originalPrice: 84.99, rating: 4.5, reviews: 2100, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80" },
  { name: "Retro Runner", brand: "VintageStep", category: "Footwear", price: 74.99, originalPrice: 94.99, rating: 4.6, reviews: 1890, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80" },
  { name: "Premium Phone Case", brand: "ShieldTech", category: "Electronics", price: 24.99, originalPrice: 34.99, rating: 4.5, reviews: 3210, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80" },
  { name: "Wireless Charger Stand", brand: "ChargePlus", category: "Electronics", price: 34.99, originalPrice: 44.99, rating: 4.6, reviews: 1780, img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&q=80" },
  { name: "Tempered Glass Screen Protector", brand: "ClearGuard", category: "Electronics", price: 12.99, originalPrice: 19.99, rating: 4.4, reviews: 5420, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80" },
  { name: "Resistance Band Set", brand: "PowerFlex", category: "Sports", price: 19.99, originalPrice: 29.99, rating: 4.6, reviews: 2890, img: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcdf7?w=900&q=80" },
  { name: "Leather Oxford Shoes", brand: "ClassicFoot", category: "Footwear", price: 129.99, originalPrice: 159.99, rating: 4.8, reviews: 1120, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80" },
  { name: "Classic Leather Watch", brand: "TimeCraft", category: "Accessories", price: 159.99, originalPrice: 199.99, rating: 4.7, reviews: 1560, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80" },
  { name: "Cotton Throw Blanket", brand: "CozyNest", category: "Home", price: 34.99, originalPrice: 49.99, rating: 4.7, reviews: 2340, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80" },
  { name: "Organic Green Tea Pack", brand: "PureLeaf", category: "Groceries", price: 14.99, originalPrice: 19.99, rating: 4.6, reviews: 3210, img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80" },
  { name: "Mixed Nuts Premium Box", brand: "NutHouse", category: "Groceries", price: 19.99, originalPrice: 24.99, rating: 4.7, reviews: 2540, img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80" },
  { name: "Cold-Pressed Olive Oil", brand: "OliveGold", category: "Groceries", price: 12.99, originalPrice: 16.99, rating: 4.8, reviews: 1870, img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80" },
  { name: "Ergonomic Office Chair", brand: "SitRight", category: "School & Office", price: 249.99, originalPrice: 319.99, rating: 4.8, reviews: 1560, img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=900&q=80" },
  { name: "Notebook Set Premium", brand: "WriteWell", category: "School & Office", price: 18.99, originalPrice: 24.99, rating: 4.5, reviews: 3420, img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=900&q=80" },
  { name: "Desk Organizer Set", brand: "TidyDesk", category: "School & Office", price: 29.99, originalPrice: 39.99, rating: 4.6, reviews: 2180, img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=900&q=80" },
  { name: "Elegant Summer Dress", brand: "LaBelle", category: "Fashion", price: 69.99, originalPrice: 99.99, rating: 4.8, reviews: 2340, img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80" },
  { name: "Designer Handbag", brand: "LuxStyle", category: "Accessories", price: 149.99, originalPrice: 199.99, rating: 4.9, reviews: 1670, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80" },
  { name: "Gold Pendant Necklace", brand: "Sparkle", category: "Accessories", price: 59.99, originalPrice: 79.99, rating: 4.7, reviews: 1890, img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&q=80" },
  { name: "Silk Scarf Collection", brand: "EleGrace", category: "Fashion", price: 39.99, originalPrice: 59.99, rating: 4.6, reviews: 980, img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80" },
  { name: "Slim Fit Chinos", brand: "UrbanWear", category: "Fashion", price: 54.99, originalPrice: 74.99, rating: 4.7, reviews: 2340, img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=900&q=80" },
  { name: "Leather Belt Premium", brand: "CraftLine", category: "Accessories", price: 34.99, originalPrice: 44.99, rating: 4.6, reviews: 1780, img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=900&q=80" },
  { name: "Casual Oxford Shirt", brand: "ThreadLine", category: "Fashion", price: 44.99, originalPrice: 59.99, rating: 4.5, reviews: 2100, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80" },
  { name: "Kids Cotton T-Shirt Set", brand: "TinyTrend", category: "Fashion", price: 24.99, originalPrice: 34.99, rating: 4.6, reviews: 1890, img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=900&q=80" },
  { name: "Kids Sneakers Colorful", brand: "LittleStep", category: "Footwear", price: 39.99, originalPrice: 49.99, rating: 4.7, reviews: 2340, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80" },
  { name: "Kids Backpack Adventure", brand: "TinyPack", category: "Accessories", price: 29.99, originalPrice: 39.99, rating: 4.5, reviews: 1560, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=80" },
  { name: "Linen Summer Dress", brand: "BreezeLine", category: "Fashion", price: 39.99, originalPrice: 89.99, rating: 4.7, reviews: 2340, img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80" },
  { name: "Cotton Beach Shorts", brand: "SunWear", category: "Fashion", price: 19.99, originalPrice: 44.99, rating: 4.5, reviews: 1890, img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&q=80" },
  { name: "Straw Beach Hat", brand: "SunStyle", category: "Accessories", price: 14.99, originalPrice: 34.99, rating: 4.3, reviews: 1230, img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80" },
  { name: "Tropical Print Shirt", brand: "IslandVibe", category: "Fashion", price: 24.99, originalPrice: 54.99, rating: 4.6, reviews: 1670, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80" },
  { name: "Lightweight Canvas Tote", brand: "BagHouse", category: "Accessories", price: 19.99, originalPrice: 39.99, rating: 4.5, reviews: 2100, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80" },
  { name: "Noise Cancelling Headphones", brand: "SoundMax", category: "Electronics", price: 59.99, originalPrice: 149.99, rating: 4.8, reviews: 1240, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80" },
  { name: "Wool Blend Overcoat", brand: "WinterCraft", category: "Fashion", price: 89.99, originalPrice: 249.99, rating: 4.8, reviews: 1560, img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=900&q=80" },
  { name: "Cashmere Scarf", brand: "CozyWrap", category: "Fashion", price: 29.99, originalPrice: 79.99, rating: 4.6, reviews: 2340, img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=900&q=80" },
  { name: "Insulated Winter Boots", brand: "FrostStep", category: "Footwear", price: 59.99, originalPrice: 149.99, rating: 4.7, reviews: 1890, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80" },
];

const categoryImagePools = {
  Electronics: [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
  ],
  Footwear: [
    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=900&q=80",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&q=80",
  ],
  Fashion: [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80",
  ],
  Accessories: [
    "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&q=80",
    "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900&q=80",
  ],
  Home: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80",
  ],
  Sports: [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80",
  ],
  Beauty: [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
  ],
  Groceries: [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80",
  ],
  "School & Office": [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=900&q=80",
  ],
};

const gradient = (...colors) => ({ background: `linear-gradient(135deg, ${colors.join(",")})` });

const getColorOptions = (product) => {
  const slug = product.id;

  if (/sunglasses/.test(slug)) {
    return [
      { name: "Gold Green", style: gradient("#c6a664", "#375544") },
      { name: "Tortoise", style: gradient("#7b4b2a", "#d7b289") },
      { name: "Matte Black", style: gradient("#2d2d2d", "#111111") },
    ];
  }

  if (/watch/.test(slug)) {
    return [
      { name: "Silver Steel", style: gradient("#d8dde3", "#8d96a4") },
      { name: "Gunmetal", style: gradient("#555d6a", "#222831") },
      { name: "Rose Gold", style: gradient("#d6a38f", "#a66d57") },
    ];
  }

  if (/bag|wallet|belt|tote|backpack/.test(slug)) {
    return [
      { name: "Classic Black", style: gradient("#1f1f1f", "#4a4a4a") },
      { name: "Tan Leather", style: gradient("#b66a38", "#7d4220") },
      { name: "Burgundy", style: gradient("#6e2337", "#b24d68") },
    ];
  }

  if (/shoe|sneaker|boot|runner/.test(slug)) {
    return [
      { name: "Snow White", style: gradient("#ffffff", "#d9dde2") },
      { name: "Carbon Black", style: gradient("#111827", "#51545c") },
      { name: "Volt Orange", style: gradient("#ff7a18", "#ffb347") },
      { name: "Navy Rush", style: gradient("#1e3a8a", "#60a5fa") },
    ];
  }

  if (/dress|shirt|t-shirt|scarf|shorts|chinos|overcoat/.test(slug)) {
    return [
      { name: "Ivory", style: gradient("#f8f5ef", "#d8d4cd") },
      { name: "Sage", style: gradient("#87986a", "#c0d0a7") },
      { name: "Midnight Navy", style: gradient("#1f2a44", "#526486") },
      { name: "Blush Coral", style: gradient("#ef7e75", "#f7b3a8") },
    ];
  }

  if (/serum|moisturizer|diffuser/.test(slug) || product.category === "Beauty") {
    return [
      { name: "Rose Nude", style: gradient("#f2c6c2", "#d38d8f") },
      { name: "Pearl White", style: gradient("#f7f2ee", "#ddd7d3") },
      { name: "Botanical Green", style: gradient("#617a55", "#a7c597") },
    ];
  }

  if (product.category === "Home") {
    return [
      { name: "Soft Sand", style: gradient("#e0d0bb", "#baa489") },
      { name: "Clay Stone", style: gradient("#a56a52", "#d2a489") },
      { name: "Slate", style: gradient("#606c7f", "#a2b0c3") },
    ];
  }

  if (product.category === "Sports") {
    return [
      { name: "Graphite", style: gradient("#384151", "#111827") },
      { name: "Lime Burst", style: gradient("#74d12c", "#d9ff77") },
      { name: "Ocean Blue", style: gradient("#0ea5e9", "#7dd3fc") },
    ];
  }

  if (product.category === "Electronics") {
    return [
      { name: "Onyx Black", style: gradient("#111111", "#4b5563") },
      { name: "Silver Mist", style: gradient("#e5e7eb", "#a1a1aa") },
      { name: "Midnight Blue", style: gradient("#172554", "#2563eb") },
    ];
  }

  return [
    { name: "Classic Black", style: gradient("#1f2937", "#6b7280") },
    { name: "Soft White", style: gradient("#ffffff", "#d6d3d1") },
    { name: "Signature Orange", style: gradient("#f97316", "#fdba74") },
  ];
};

const getSizeOptions = (product) => {
  const slug = product.id;

  if (/shoe|sneaker|boot|runner/.test(slug)) {
    return ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"];
  }

  if (/watch/.test(slug)) {
    return ["40 mm", "42 mm", "44 mm"];
  }

  if (/phone case|screen protector|charger|earbuds|headphones|speaker|wallet/.test(slug)) {
    return [];
  }

  if (/laptop/.test(slug)) {
    return ["16GB / 512GB", "16GB / 1TB", "32GB / 1TB"];
  }

  if (/chair/.test(slug)) {
    return ["Standard", "Executive"];
  }

  if (/tea|nuts|oil/.test(slug)) {
    return ["250 g", "500 g", "1 kg"];
  }

  if (/vase|blanket|organizer/.test(slug)) {
    return ["Single", "Set of 2", "Set of 4"];
  }

  return ["XS", "S", "M", "L", "XL"];
};

const getDescription = (product) => {
  const slug = product.id;

  if (/shoe|sneaker|boot|runner/.test(slug)) {
    return `${product.name} is built for all-day comfort with responsive cushioning, a clean street-ready profile, and durable traction. It blends performance details with a fashion-first silhouette that works for daily wear.`;
  }

  if (/watch/.test(slug)) {
    return `${product.name} pairs a refined dial with everyday practicality. Designed for effortless styling, it brings premium materials, a polished finish, and reliable wear from work hours to evenings out.`;
  }

  if (/earbuds|headphones|speaker|charger|phone/.test(slug) || product.category === "Electronics") {
    return `${product.name} delivers a premium connected experience with modern performance, sleek design, and reliable daily usability. It is made for users who want sharp styling without compromising on practical features.`;
  }

  if (/serum|moisturizer|diffuser/.test(slug) || product.category === "Beauty") {
    return `${product.name} is designed to bring a spa-like finish to your routine with elevated ingredients, clean presentation, and an easy everyday ritual. It feels premium on the shelf and dependable in use.`;
  }

  if (/bag|wallet|belt|tote|backpack/.test(slug)) {
    return `${product.name} combines functional storage with elevated styling. Built with premium materials and a polished silhouette, it is easy to pair with both work and casual wardrobes.`;
  }

  if (product.category === "Home") {
    return `${product.name} adds warmth, texture, and a curated designer touch to your space. It balances minimal styling with everyday utility, making it easy to refresh modern interiors.`;
  }

  if (product.category === "Groceries") {
    return `${product.name} is selected for quality, freshness, and easy everyday use. It fits neatly into a premium pantry setup with dependable taste and clean packaging appeal.`;
  }

  return `${product.name} is made for a polished everyday wardrobe with premium materials, sharp finishing, and a fit that feels modern. It is an easy pick for a refined, Myntra-inspired ecommerce experience.`;
};

const getHighlights = (product) => {
  const slug = product.id;

  if (/shoe|sneaker|boot|runner/.test(slug)) {
    return ["Breathable upper", "Responsive cushioning", "High-grip outsole", "Lightweight comfort", "Daily wear ready"];
  }
  if (/watch/.test(slug)) {
    return ["Premium metal finish", "Scratch-resistant face", "Versatile styling", "Comfort strap fit", "Gift-ready packaging"];
  }
  if (/earbuds|headphones|speaker/.test(slug)) {
    return ["Rich audio tuning", "Low-latency connection", "Portable daily use", "Long battery support", "Clean modern finish"];
  }
  if (/charger|phone case|screen protector/.test(slug)) {
    return ["Slim profile", "Reliable protection", "Travel-friendly", "Easy setup", "Built for daily use"];
  }
  if (/bag|wallet|belt|tote|backpack/.test(slug)) {
    return ["Premium texture", "Spacious organization", "Lightweight carry", "Everyday styling", "Durable hardware"];
  }
  if (/serum|moisturizer|diffuser/.test(slug) || product.category === "Beauty") {
    return ["Skin-friendly feel", "Easy routine use", "Premium finish", "Everyday compatible", "Clean visual appeal"];
  }
  if (product.category === "Home") {
    return ["Minimal design language", "Modern interior fit", "Easy to style", "Durable build", "Premium surface finish"];
  }
  if (product.category === "Sports") {
    return ["Active lifestyle ready", "Comfort-focused build", "Easy maintenance", "Performance oriented", "Lightweight handling"];
  }
  if (product.category === "Groceries") {
    return ["Fresh quality", "Daily use friendly", "Reliable taste", "Neat packaging", "Value-focused pick"];
  }
  return ["Premium quality", "Comfort-focused", "Easy styling", "Modern finish", "Daily use ready"];
};

const catalogMap = new Map(
  coreProducts.map((product) => [toSlug(product.name), product]),
);

export const getProductBySlug = (slug) => {
  const base = catalogMap.get(slug);

  if (!base) {
    const fallback = {
      name: slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" "),
      brand: "Ekart Select",
      category: "Fashion",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.5,
      reviews: 1280,
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80",
    };
    return buildProduct({ ...fallback, id: slug });
  }

  return buildProduct({ ...base, id: slug });
};

const buildProduct = (product) => {
  const gallery = [
    product.img,
    ...(categoryImagePools[product.category] || []).filter((image) => image !== product.img),
  ].slice(0, 3);

  return {
    ...product,
    images: gallery,
    description: getDescription(product),
    colors: getColorOptions(product),
    sizes: getSizeOptions(product),
    highlights: getHighlights(product),
  };
};

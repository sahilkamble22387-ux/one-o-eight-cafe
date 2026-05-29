"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Coffee,
  Heart,
  MapPin,
  Phone,
  Clock,
  Instagram,
  ChevronDown,
  Menu,
  X,
  Star,
  BookOpen,
  Leaf,
  Utensils,
  Sparkles,
  Flame,
  Sun,
  Palette,
  ShoppingBag,
  Vegan,
  Wheat,
  Pizza,
} from "lucide-react";

/* ─── Floating Eucalyptus Leaves ─── */
function FloatingLeaves() {
  const leaves = [
    { left: "8%", bottom: "18%", size: 16, cls: "leaf-1", color: "bg-eucalyptus/10" },
    { left: "24%", bottom: "22%", size: 12, cls: "leaf-2", color: "bg-clay/8" },
    { left: "42%", bottom: "14%", size: 18, cls: "leaf-3", color: "bg-eucalyptus/8" },
    { left: "60%", bottom: "20%", size: 14, cls: "leaf-4", color: "bg-rose/6" },
    { left: "78%", bottom: "16%", size: 13, cls: "leaf-5", color: "bg-eucalyptus/10" },
    { left: "90%", bottom: "24%", size: 10, cls: "leaf-1", color: "bg-clay/6" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((l, i) => (
        <div
          key={i}
          className={`absolute ${l.cls} ${l.color} rounded-full blur-[0.5px]`}
          style={{
            left: l.left,
            bottom: l.bottom,
            width: l.size,
            height: l.size * 1.6,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Section Reveal ─── */
function RevealSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

/* ─── Organic Divider ─── */
function OrganicDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`organic-divider ${className}`}>
      <span className="divider-symbol">✦</span>
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Lifestyle", href: "#lifestyle" },
    { label: "Visit Us", href: "#visit" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-linen/95 backdrop-blur-md shadow-lg shadow-espresso/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2.5 group">
            <motion.div whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5 }}>
              <Leaf size={24} className="text-eucalyptus" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl text-espresso leading-tight">
                One O Eight
              </span>
              <span className="text-[9px] tracking-[0.25em] font-body font-semibold text-clay uppercase">
                Lifestyle Cafe • KP
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body font-semibold text-walnut/60 hover:text-clay transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-clay after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7071081080"
              className="bg-clay hover:bg-clay-dark text-linen px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-clay/20 font-body"
            >
              Book a Table
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-espresso"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-linen/98 backdrop-blur-lg border-t border-sand"
        >
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-espresso/80 hover:text-clay font-semibold transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7071081080"
              className="block text-center bg-clay text-linen py-3 rounded-full font-bold mt-2 font-body"
            >
              Book a Table
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/108/hero.png')" }}
        />
        <div className="hero-gradient-108 absolute inset-0" />
      </motion.div>

      <FloatingLeaves />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 mb-6"
        >
          <Coffee size={14} className="text-amber-300" />
          <span className="text-white text-sm font-body font-bold tracking-wide">
            Australian-Style Cafe in Pune
          </span>
          <Leaf size={14} className="text-green-300" />
        </motion.div>

        {/* Number 108 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-7xl sm:text-8xl md:text-9xl text-white/15 number-glow leading-none mb-2"
        >
          108
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-shadow-organic leading-[1.1] mb-3 -mt-8"
        >
          One O Eight
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-amber-300 text-lg sm:text-xl tracking-[0.15em] uppercase mb-6"
        >
          Lifestyle Cafe
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          All-day breakfast, artisan coffee & wood-fired pizza in an
          Australian-style haven in Koregaon Park. Vegan, organic & gluten-free —
          healthy never tasted this good.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#menu"
            className="bg-clay hover:bg-clay-dark text-linen px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-clay/30 warm-glow flex items-center gap-2 font-body"
          >
            <Utensils size={20} />
            Explore Menu
          </a>
          <a
            href="#lifestyle"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/35 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 font-body"
          >
            <Leaf size={20} className="text-green-300" />
            Our Lifestyle
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "4.3★", label: "Google" },
            { value: "5.8K+", label: "Instagram" },
            { value: "₹1,200", label: "For Two" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-amber-300">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-white/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <ChevronDown size={28} className="text-white/50" />
      </motion.div>
    </section>
  );
}

/* ─── Our Story Section ─── */
function OurStory() {
  return (
    <RevealSection id="story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-sand relative">
      <div className="leaf-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-xl row-span-2">
                <img src="/images/108/exterior.png" alt="One O Eight Cafe exterior" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/108/art-space.png" alt="Art wall at One O Eight" className="w-full h-48 object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/108/coffee.png" alt="Artisan coffee at One O Eight" className="w-full h-48 object-cover" />
              </motion.div>
            </div>
            {/* Decorative corners */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-eucalyptus/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-clay/15 rounded-xl -z-10" />
          </div>

          {/* Right: Story */}
          <div>
            <OrganicDivider className="mb-4 justify-start sm:justify-start" />
            <span className="font-body text-sm font-bold text-eucalyptus tracking-[0.15em] uppercase">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2 mb-6 leading-tight">
              More Than a Cafe,
              <br />
              <span className="text-clay">a Way of Life</span>
            </h2>
            <p className="font-body text-warm-gray text-lg leading-relaxed mb-6">
              <strong className="text-espresso">One O Eight</strong> is Pune&apos;s
              original Australian-style lifestyle cafe — where brunch culture meets
              mindful eating. Founded with a simple belief: food should nourish
              your body <em>and</em> your soul.
            </p>
            <p className="font-body text-warm-gray text-lg leading-relaxed mb-8">
              From our signature <strong className="text-clay">Big Breaky</strong> to
              vibrant <strong className="text-eucalyptus">smoothie bowls</strong>,
              every dish is crafted with organic, locally-sourced ingredients.
              Vegan, raw, gluten-free & sugar-free — we&apos;ve got something for
              every body.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Vegan, label: "Vegan & Organic", desc: "Plant-forward menu" },
                { icon: Wheat, label: "Gluten-Free Options", desc: "Celiac-safe dishes" },
                { icon: Sun, label: "All Day Breakfast", desc: "Brunch until 10 PM" },
                { icon: Palette, label: "Art & Open Space", desc: "Creative atmosphere" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/70">
                  <div className="p-2 rounded-lg bg-eucalyptus/10 shrink-0">
                    <item.icon size={18} className="text-eucalyptus" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-espresso text-sm">{item.label}</div>
                    <div className="font-body text-xs text-warm-gray/60">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Menu Section ─── */
function MenuSection() {
  const [activeTab, setActiveTab] = useState<"breakfast" | "mains" | "pizza" | "drinks">("breakfast");

  const menuData = {
    breakfast: {
      title: "Breakfast",
      icon: Sun,
      items: [
        { name: "Big Breaky", desc: "Eggs your way, avocado, mushrooms, tomato, sourdough", price: "₹450", img: "/images/108/big-breaky.png", tag: "Signature" },
        { name: "Avocado Toast", desc: "Smashed avo on sourdough with poached eggs & chili flakes", price: "₹350", img: "/images/108/avocado-toast.png", tag: "Must Try" },
        { name: "Smoothie Bowl", desc: "Dragon fruit or cacao berry — granola, coconut & seeds", price: "₹320", img: "/images/108/smoothie-bowl.png", tag: "Insta-worthy" },
        { name: "Fluffy Pancakes", desc: "Buttermilk stack with berries, maple syrup & cream", price: "₹300", img: "/images/108/pancakes.png", tag: "Popular" },
      ],
    },
    mains: {
      title: "Mains & Bowls",
      icon: Utensils,
      items: [
        { name: "La Cha Cha Bowl", desc: "Quinoa, roasted veggies, leafy greens & tahini dressing", price: "₹380", img: "/images/108/lachacha.png", tag: "Bestseller" },
        { name: "Chickpea Salad", desc: "Fresh greens, cherry tomato, feta & lemon tahini", price: "₹320", img: "/images/108/salad.png", tag: "Healthy" },
        { name: "Tofu Bhurji", desc: "Spiced scrambled tofu with whole wheat toast", price: "₹280", img: "/images/108/big-breaky.png", tag: "Vegan" },
        { name: "Pav Bhaji Twist", desc: "Our Aussie take on the classic — sourdough pav & organic bhaji", price: "₹300", img: "/images/108/big-breaky.png", tag: "Fusion" },
      ],
    },
    pizza: {
      title: "Wood-Fired Pizza",
      icon: Pizza,
      items: [
        { name: "Margherita", desc: "Fresh mozzarella, San Marzano tomatoes & basil on thin crust", price: "₹450", img: "/images/108/pizza.png", tag: "Classic" },
        { name: "Garden Veggie", desc: "Roasted peppers, zucchini, olives & goat cheese", price: "₹480", img: "/images/108/pizza.png", tag: "Popular" },
        { name: "Truffle Mushroom", desc: "Wild mushrooms, truffle oil, mozzarella & thyme", price: "₹520", img: "/images/108/pizza.png", tag: "Premium" },
        { name: "Arrabiata Pasta", desc: "Spicy tomato sauce, fresh basil & parmesan", price: "₹380", img: "/images/108/pasta.png", tag: "" },
      ],
    },
    drinks: {
      title: "Coffee & Drinks",
      icon: Coffee,
      items: [
        { name: "Flat White", desc: "Velvety micro-foam over double ristretto — the Aussie classic", price: "₹200", img: "/images/108/coffee.png", tag: "Signature" },
        { name: "Almond Milk Latte", desc: "Rich espresso with house-made almond milk", price: "₹240", img: "/images/108/coffee.png", tag: "Dairy-Free" },
        { name: "Affogato", desc: "Vanilla ice cream drowned in a shot of hot espresso", price: "₹220", img: "/images/108/affogato.png", tag: "Indulgent" },
        { name: "Cold Brew", desc: "Slow-steeped 18 hours — smooth, bold & refreshing", price: "₹200", img: "/images/108/coffee.png", tag: "" },
      ],
    },
  };

  const currentMenu = menuData[activeTab];

  return (
    <RevealSection id="menu" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="linen-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <OrganicDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-eucalyptus tracking-[0.15em] uppercase">
            Our Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2 mb-4">
            Nourish <span className="text-clay">& Delight</span>
          </h2>
          <p className="font-body text-warm-gray/70 text-lg max-w-2xl mx-auto">
            Organic, locally-sourced & made with love. Vegan, raw, gluten-free &
            sugar-free options across every category.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-sand/80 rounded-full p-1.5 flex gap-1 flex-wrap justify-center">
            {(Object.entries(menuData) as [keyof typeof menuData, (typeof menuData)["breakfast"]][]).map(
              ([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-body font-bold text-xs sm:text-sm transition-all duration-300 ${
                    activeTab === key
                      ? "bg-clay text-linen shadow-lg shadow-clay/20"
                      : "text-warm-gray/60 hover:text-espresso"
                  }`}
                >
                  <data.icon size={15} />
                  {data.title}
                </button>
              )
            )}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentMenu.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-linen rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-lift group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.tag && (
                  <div className="absolute top-3 right-3 bg-eucalyptus text-linen px-3 py-1 rounded-full text-xs font-bold font-body">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-body font-bold text-espresso text-base">{item.name}</h3>
                  <span className="font-body font-bold text-clay text-lg">{item.price}</span>
                </div>
                <p className="font-body text-warm-gray/50 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pizza timing note */}
        <div className="text-center mt-8">
          <p className="font-body text-sm text-warm-gray/50">
            Wood-fired pizza available from <span className="font-semibold text-clay">6 PM – 10 PM</span> daily
          </p>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Lifestyle Section ─── */
function Lifestyle() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Take Home",
      desc: "Fresh sourdough bread, artisan nut butter & roasted coffee beans — the One O Eight experience goes home with you.",
      img: "/images/108/retail.png",
      color: "clay",
    },
    {
      icon: Palette,
      title: "Art & Space",
      desc: "Curated art walls, open layouts & natural light. Our space is designed to inspire creativity and calm.",
      img: "/images/108/art-space.png",
      color: "eucalyptus",
    },
    {
      icon: Vegan,
      title: "Vegan & Allergy-Safe",
      desc: "Every dish has a vegan twin. Gluten-free, sugar-free, raw — we cater to every dietary need without compromise.",
      img: "/images/108/smoothie-bowl.png",
      color: "rose",
    },
    {
      icon: Coffee,
      title: "Australian Coffee Culture",
      desc: "Flat whites, long blacks & cold brew — coffee the way it's done in Melbourne, right here in KP.",
      img: "/images/108/coffee.png",
      color: "gold",
    },
  ];

  return (
    <RevealSection id="lifestyle" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-eucalyptus relative">
      <div className="leaf-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <OrganicDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-eucalyptus tracking-[0.15em] uppercase">
            The 108 Lifestyle
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2 mb-4">
            Not Just a Meal, <span className="text-clay">a Movement</span>
          </h2>
          <p className="font-body text-warm-gray/70 text-lg max-w-2xl mx-auto">
            One O Eight is where healthy meets delicious, where art meets brunch,
            and where community meets calm.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={feat.img}
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 to-transparent" />
                <div
                  className={`absolute bottom-3 left-3 p-2 rounded-xl ${
                    feat.color === "clay"
                      ? "bg-clay"
                      : feat.color === "eucalyptus"
                      ? "bg-eucalyptus"
                      : feat.color === "rose"
                      ? "bg-rose"
                      : "bg-gold"
                  }`}
                >
                  <feat.icon size={20} className="text-linen" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-body font-bold text-espresso text-lg mb-2">{feat.title}</h3>
                <p className="font-body text-warm-gray/55 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Gallery Section ─── */
function Gallery() {
  const images = [
    { src: "/images/108/hero.png", alt: "One O Eight Interior", span: "col-span-2 row-span-2" },
    { src: "/images/108/smoothie-bowl.png", alt: "Smoothie bowls", span: "" },
    { src: "/images/108/coffee.png", alt: "Artisan coffee", span: "" },
    { src: "/images/108/pizza.png", alt: "Wood-fired pizza", span: "col-span-2" },
    { src: "/images/108/big-breaky.png", alt: "Big Breaky", span: "" },
    { src: "/images/108/exterior.png", alt: "Cafe exterior", span: "" },
  ];

  return (
    <RevealSection className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-rose relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <OrganicDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-clay tracking-[0.15em] uppercase">
            Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2">
            The <span className="text-eucalyptus">108</span> Vibe
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`rounded-2xl overflow-hidden shadow-md cursor-pointer group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Testimonial Banner ─── */
function TestimonialBanner() {
  const testimonials = [
    { text: "The best coffee I've found in Pune! The La Cha Cha bowl is my favourite, though I also loved their take on Pav Bhaji.", source: "Google Review" },
    { text: "I've been eating at this cafe for 3 years and never had a bad meal. The food is delicious and so is the view and the vibe.", source: "Reddit" },
    { text: "Avocado Toast, Smoothie Bowl, Cold Brew, and the Chickpea Sandwich — each dish was fresh, flavorful, and thoughtfully prepared.", source: "Wanderlog" },
  ];

  return (
    <RevealSection className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-espresso relative overflow-hidden">
      <div className="leaf-pattern absolute inset-0 pointer-events-none opacity-5" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-10">
          <span className="font-body text-sm font-bold text-gold tracking-[0.2em] uppercase">
            What People Say
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-linen mt-2">
            Stories From Our Community
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-linen/10 backdrop-blur-sm rounded-2xl p-6 border border-linen/10"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-body text-linen/80 text-sm leading-relaxed mb-3 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-body text-gold/60 text-xs font-semibold">
                — {t.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Visit Us Section ─── */
function VisitUs() {
  return (
    <RevealSection id="visit" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-linen relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <OrganicDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-eucalyptus tracking-[0.15em] uppercase">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2 mb-4">
            Come Say <span className="text-clay">G&apos;day</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] sm:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.9002!3d18.5308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10645c9bec5%3A0x4a7cc25ae4505d87!2sOne%20O%20Eight%20Lifestyle%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="One O Eight Lifestyle Cafe Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="bg-sand rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-eucalyptus/10 shrink-0">
                <MapPin size={20} className="text-eucalyptus" />
              </div>
              <div>
                <h3 className="font-body font-bold text-espresso text-lg mb-1">Address</h3>
                <p className="font-body text-warm-gray/60 text-sm">
                  Lane 6, Koregaon Park,
                  <br />
                  South Main Road, Pune 411001
                </p>
              </div>
            </div>

            <div className="bg-sand rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-clay/15 shrink-0">
                <Clock size={20} className="text-clay-dark" />
              </div>
              <div>
                <h3 className="font-body font-bold text-espresso text-lg mb-1">Timings</h3>
                <div className="font-body text-warm-gray/60 text-sm space-y-1">
                  <p>
                    <span className="font-semibold text-espresso/70">Open Everyday:</span> 8:00 AM – 10:00 PM
                  </p>
                  <p>
                    <span className="font-semibold text-eucalyptus">Breakfast & Coffee:</span> 8:00 AM – 10:00 PM
                  </p>
                  <p>
                    <span className="font-semibold text-clay">Wood-Fired Pizza:</span> 6:00 PM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sand rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-rose/15 shrink-0">
                <Phone size={20} className="text-rose-dark" />
              </div>
              <div>
                <h3 className="font-body font-bold text-espresso text-lg mb-1">Contact</h3>
                <a
                  href="tel:7071081080"
                  className="font-body text-clay font-semibold text-sm hover:text-clay-dark transition-colors"
                >
                  +91 70710 81080
                </a>
                <p className="font-body text-warm-gray/40 text-xs mt-1">
                  Call or WhatsApp for reservations
                </p>
              </div>
            </div>

            <div className="bg-sand rounded-2xl p-5">
              <h3 className="font-body font-bold text-espresso text-lg mb-4">Follow & Order</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/oneoeightcafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-body font-bold text-xs hover:shadow-lg transition-shadow"
                >
                  <Instagram size={14} />
                  @oneoeightcafe
                </a>
                <a
                  href="https://www.zomato.com/pune/one-o-eight-cafe-koregaon-park"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-body font-bold text-xs hover:shadow-lg transition-shadow"
                >
                  <Utensils size={14} />
                  Zomato
                </a>
                <span className="flex items-center gap-2 bg-eucalyptus/10 text-eucalyptus px-4 py-2 rounded-full font-body font-bold text-xs">
                  <Leaf size={14} />
                  Vegan Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-espresso text-linen/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Leaf size={22} className="text-eucalyptus" />
              <span className="font-display text-xl text-linen">One O Eight</span>
            </div>
            <p className="font-body text-sm text-linen/35 leading-relaxed mb-4">
              Pune&apos;s original Australian-style lifestyle cafe. Coffee, all-day
              breakfast, smoothie bowls & wood-fired pizza — healthy never
              tasted this good.
            </p>
            <div className="inline-flex items-center gap-2 bg-eucalyptus/15 rounded-full px-4 py-1.5">
              <Vegan size={12} className="text-eucalyptus" />
              <span className="font-body text-xs font-bold text-eucalyptus">Vegan & Gluten-Free Options</span>
            </div>
          </div>

          <div>
            <h4 className="font-body font-bold text-linen text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Menu", href: "#menu" },
                { label: "Lifestyle", href: "#lifestyle" },
                { label: "Visit Us", href: "#visit" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-linen/35 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-linen text-sm mb-4 uppercase tracking-wider">
              Menu Highlights
            </h4>
            <ul className="space-y-2">
              {["Big Breaky", "Smoothie Bowls", "Flat White Coffee", "Wood-Fired Pizza", "Avocado Toast", "La Cha Cha Bowl"].map(
                (f) => (
                  <li key={f} className="font-body text-sm text-linen/35">
                    {f}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-linen text-sm mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a href="tel:7071081080" className="flex items-center gap-2 font-body text-sm text-linen/35 hover:text-gold transition-colors">
                <Phone size={14} />
                +91 70710 81080
              </a>
              <a href="https://www.instagram.com/oneoeightcafe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-linen/35 hover:text-gold transition-colors">
                <Instagram size={14} />
                @oneoeightcafe
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-linen/35">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                Lane 6, Koregaon Park, Pune
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-linen/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-linen/20">
            © {new Date().getFullYear()} One O Eight Lifestyle Cafe. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Leaf size={12} className="text-eucalyptus/25" />
            <span className="font-body text-xs text-linen/20">
              One O Eight — Australian Brunch & Coffee ✦ Koregaon Park, Pune
            </span>
            <Coffee size={12} className="text-gold/25" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function OneOEightPage() {
  return (
    <div className="min-h-screen flex flex-col bg-linen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OurStory />
        <MenuSection />
        <Lifestyle />
        <Gallery />
        <TestimonialBanner />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}

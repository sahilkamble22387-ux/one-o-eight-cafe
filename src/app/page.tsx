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
  Music,
  Palette,
  Utensils,
  Laptop,
  Users,
  Sparkles,
  Feather,
  Mail,
  Award,
  ArrowRight,
  Leaf,
  Flame,
} from "lucide-react";

/* ─── Floating Page Particles (Literary Vibe) ─── */
function FloatingPages() {
  const pages = [
    { left: "10%", bottom: "18%", size: 14, cls: "page-float-1", color: "bg-plum/10" },
    { left: "25%", bottom: "22%", size: 10, cls: "page-float-2", color: "bg-honey/10" },
    { left: "42%", bottom: "15%", size: 16, cls: "page-float-3", color: "bg-blush/8" },
    { left: "60%", bottom: "20%", size: 12, cls: "page-float-4", color: "bg-sage/8" },
    { left: "78%", bottom: "25%", size: 11, cls: "page-float-5", color: "bg-plum/8" },
    { left: "90%", bottom: "19%", size: 9, cls: "page-float-1", color: "bg-honey/6" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pages.map((p, i) => (
        <div
          key={i}
          className={`absolute ${p.cls} ${p.color} rounded-sm blur-[0.5px]`}
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size * 1.3,
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

/* ─── Ink Divider ─── */
function InkDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`ink-divider ${className}`}>
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
    { label: "Spaces", href: "#spaces" },
    { label: "Visit Us", href: "#visit" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-lg shadow-plum/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2.5 group">
            <motion.div whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5 }}>
              <BookOpen size={24} className="text-honey" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl text-plum leading-tight">
                Kathaa
              </span>
              <span className="text-[9px] tracking-[0.25em] font-body font-semibold text-honey uppercase">
                Book Cafe • FC Road
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body font-semibold text-walnut/60 hover:text-plum transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-honey after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9119496767"
              className="bg-plum hover:bg-plum-dark text-cream px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-plum/20 font-body"
            >
              Reserve a Table
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-plum"
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
          className="md:hidden bg-cream/98 backdrop-blur-lg border-t border-linen"
        >
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-plum/80 hover:text-honey font-semibold transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9119496767"
              className="block text-center bg-plum text-cream py-3 rounded-full font-bold mt-2 font-body"
            >
              Reserve a Table
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
          style={{ backgroundImage: "url('/images/kathaa/hero.png')" }}
        />
        <div className="hero-gradient-kathaa absolute inset-0" />
      </motion.div>

      <FloatingPages />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Literary Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center gap-2 bg-cream/15 backdrop-blur-sm border border-honey/30 rounded-full px-5 py-2 mb-6"
        >
          <Feather size={14} className="text-honey-light" />
          <span className="text-cream/90 text-sm font-body font-bold tracking-wide">
            Where Books Meet Gourmet Delights
          </span>
          <BookOpen size={14} className="text-blush-light" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream text-shadow-literary leading-[1.1] mb-3"
        >
          Cafe Kathaa
        </motion.h1>

        {/* Hindi Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-honey-light text-lg sm:text-xl tracking-[0.15em] uppercase mb-6"
        >
          कथा — Where Every Meal Tells a Story
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          A bungalow-style book cafe on FC Road. Curl up with a book, craft your
          next idea, or savour handcrafted coffee & gourmet food in our cozy corner
          of Pune.
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
            className="bg-honey hover:bg-honey-dark text-espresso px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-honey/30 warm-glow-pulse flex items-center gap-2 font-body"
          >
            <Utensils size={20} />
            Explore Menu
          </a>
          <a
            href="#spaces"
            className="bg-cream/15 hover:bg-cream/25 backdrop-blur-sm border border-cream/30 text-cream px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 font-body"
          >
            <BookOpen size={20} className="text-honey-light" />
            Discover Spaces
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
            { value: "4.3★", label: "Rating" },
            { value: "1.2K+", label: "Reviews" },
            { value: "₹700", label: "For Two" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-honey">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-cream/40 mt-1">
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
        <ChevronDown size={28} className="text-cream/40" />
      </motion.div>
    </section>
  );
}

/* ─── Our Story Section ─── */
function OurStory() {
  return (
    <RevealSection id="story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-cream relative">
      <div className="bookshelf-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-xl row-span-2">
                <img src="/images/kathaa/books.png" alt="Book corner at Cafe Kathaa" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/kathaa/exterior.png" alt="Cafe Kathaa bungalow exterior" className="w-full h-48 object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/kathaa/coworking.png" alt="Co-working space at Cafe Kathaa" className="w-full h-48 object-cover" />
              </motion.div>
            </div>
            {/* Decorative corners */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-honey/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-plum/15 rounded-xl -z-10" />
          </div>

          {/* Right: Story */}
          <div>
            <InkDivider className="mb-4 justify-start sm:justify-start" />
            <span className="font-body text-sm font-bold text-plum tracking-[0.15em] uppercase">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2 mb-6 leading-tight">
              Every Cup Holds
              <br />
              <span className="text-honey">a Story</span>
            </h2>
            <p className="font-body text-warm-gray text-lg leading-relaxed mb-6">
              <strong className="text-espresso">&ldquo;Kathaa&rdquo;</strong> means <em>story</em> — and that&apos;s exactly what
              we serve. A bungalow-style cafe wrapped in greenery on FC Road,
              where books line the walls, handcrafted coffees warm your hands,
              and every dish has a tale to tell.
            </p>
            <p className="font-body text-warm-gray text-lg leading-relaxed mb-8">
              Featured on <strong className="text-plum">Shark Tank India</strong>,
              we&apos;re more than a cafe — we&apos;re a creative community.
              A space where writers find their next paragraph, friends share
              stories over blueberry cheesecake, and every visit becomes a
              chapter worth remembering.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, label: "Library of Books", desc: "Read for free" },
                { icon: Laptop, label: "Co-working Space", desc: "Work & create" },
                { icon: Leaf, label: "Bungalow Garden", desc: "Green & serene" },
                { icon: Award, label: "Shark Tank Featured", desc: "Recognized" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/70">
                  <div className="p-2 rounded-lg bg-plum/10 shrink-0">
                    <item.icon size={18} className="text-plum" />
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
  const [activeTab, setActiveTab] = useState<"breakfast" | "mains" | "drinks" | "desserts">("mains");

  const menuData = {
    breakfast: {
      title: "Breakfast",
      icon: Flame,
      items: [
        { name: "Stuffed Parathas", desc: "Flaky, buttery & stuffed — served with curd & pickle", price: "₹150", img: "/images/kathaa/breakfast.png", tag: "Morning Star" },
        { name: "Masala Omelette", desc: "Spiced egg omelette with fresh herbs & green chilies", price: "₹120", img: "/images/kathaa/breakfast.png", tag: "" },
        { name: "Adrakwali Chai", desc: "Ginger-kissed slow-brewed tea in a kulhad — pure comfort", price: "₹60", img: "/images/kathaa/chai.png", tag: "Must Try" },
        { name: "Fresh Juice & Toast", desc: "Seasonal fresh juice with sourdough toast & butter", price: "₹180", img: "/images/kathaa/cooler.png", tag: "Healthy" },
      ],
    },
    mains: {
      title: "Mains",
      icon: Utensils,
      items: [
        { name: "Chicken Steak", desc: "Grilled to perfection with sautéed veggies & herbed rice", price: "₹320", img: "/images/kathaa/steak.png", tag: "Bestseller" },
        { name: "Hawaii Fruit Pizza", desc: "Coconut & pineapple on thin crust — a tropical twist", price: "₹280", img: "/images/kathaa/pizza.png", tag: "Signature" },
        { name: "Mac & Cheese", desc: "Creamy comfort with golden breadcrumb topping", price: "₹250", img: "/images/kathaa/pasta.png", tag: "Comfort" },
        { name: "Loaded Nachos", desc: "Crispy tortillas with melted cheese, salsa & sour cream", price: "₹220", img: "/images/kathaa/nachos.png", tag: "Popular" },
      ],
    },
    drinks: {
      title: "Drinks",
      icon: Coffee,
      items: [
        { name: "Handcrafted Latte", desc: "Rich espresso with velvety steamed milk & latte art", price: "₹180", img: "/images/kathaa/coffee.png", tag: "Artisan" },
        { name: "Watermelon Cooler", desc: "Refreshing watermelon with mint & lime on ice", price: "₹160", img: "/images/kathaa/cooler.png", tag: "Refreshing" },
        { name: "Lemon Mint Mojito", desc: "Zesty lemon, fresh mint & crushed ice — summer in a glass", price: "₹150", img: "/images/kathaa/cooler.png", tag: "" },
        { name: "Adrakwali Chai", desc: "Ginger-kissed slow-brewed tea — the Kathaa classic", price: "₹60", img: "/images/kathaa/chai.png", tag: "Classic" },
      ],
    },
    desserts: {
      title: "Desserts",
      icon: Sparkles,
      items: [
        { name: "Blueberry Cheesecake", desc: "Creamy New York style with blueberry compote & graham crust", price: "₹280", img: "/images/kathaa/cheesecake.png", tag: "Must Try" },
        { name: "Honey Chilli Lotus Stem", desc: "Crispy lotus stem glazed with honey & chili — addictive!", price: "₹240", img: "/images/kathaa/lotus-stem.png", tag: "Addictive" },
        { name: "Apple Crumble Pizza", desc: "Sweet apple crumble on a dessert pizza base — unique!", price: "₹260", img: "/images/kathaa/pizza.png", tag: "Unique" },
        { name: "Korean Buns", desc: "Fluffy steamed bao with savoury filling & dipping sauce", price: "₹200", img: "/images/kathaa/buns.png", tag: "Fusion" },
      ],
    },
  };

  const currentMenu = menuData[activeTab];

  return (
    <RevealSection id="menu" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="parchment-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <InkDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-plum tracking-[0.15em] uppercase">
            Our Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2 mb-4">
            Stories on a <span className="text-honey">Plate</span>
          </h2>
          <p className="font-body text-warm-gray/70 text-lg max-w-2xl mx-auto">
            Comfort food with a creative twist — every dish at Kathaa is crafted
            to be a chapter worth savouring.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-linen/80 rounded-full p-1.5 flex gap-1 flex-wrap justify-center">
            {(Object.entries(menuData) as [keyof typeof menuData, (typeof menuData)["mains"]][]).map(
              ([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-body font-bold text-xs sm:text-sm transition-all duration-300 ${
                    activeTab === key
                      ? "bg-plum text-cream shadow-lg shadow-plum/20"
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
              className="bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-lift group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.tag && (
                  <div className="absolute top-3 right-3 bg-plum text-cream px-3 py-1 rounded-full text-xs font-bold font-body">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-body font-bold text-espresso text-base">{item.name}</h3>
                  <span className="font-body font-bold text-honey text-lg">{item.price}</span>
                </div>
                <p className="font-body text-warm-gray/50 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Order Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <a
            href="https://www.instagram.com/cafekathaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-bold text-plum hover:text-plum-dark transition-colors group"
          >
            Full Menu on Instagram
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="hidden sm:block text-warm-gray/20">|</span>
          <span className="font-body text-sm text-warm-gray/50">Also available on Swiggy & Zomato</span>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Spaces Section ─── */
function Spaces() {
  const spaces = [
    {
      icon: BookOpen,
      title: "Book Cafe",
      desc: "Shelves lined with stories for every mood. Grab a corner, pick a book, and lose yourself. Reading is always free at Kathaa.",
      img: "/images/kathaa/books.png",
      color: "plum",
    },
    {
      icon: Laptop,
      title: "Co-working Space",
      desc: "Free Wi-Fi, power outlets at every table, and the best coffee in town. Your portable office, but way prettier.",
      img: "/images/kathaa/coworking.png",
      color: "honey",
    },
    {
      icon: Heart,
      title: "Community Events",
      desc: "Book readings, open mics, art workshops & poetry slams. Our space becomes your stage. Follow @cafekathaa for events.",
      img: "/images/kathaa/exterior.png",
      color: "blush",
    },
    {
      icon: Leaf,
      title: "Bungalow Garden",
      desc: "Lush green courtyard with fairy lights and gentle breeze. Perfect for long conversations, quiet afternoons & golden hour selfies.",
      img: "/images/kathaa/exterior.png",
      color: "sage",
    },
  ];

  return (
    <RevealSection id="spaces" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-mauve relative">
      <div className="bookshelf-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <InkDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-sage tracking-[0.15em] uppercase">
            More Than a Cafe
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2 mb-4">
            Spaces That <span className="text-honey">Inspire</span>
          </h2>
          <p className="font-body text-warm-gray/70 text-lg max-w-2xl mx-auto">
            Kathaa is where stories are read, written, and lived. Every corner
            is designed to spark something within you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, i) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={space.img}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 to-transparent" />
                <div
                  className={`absolute bottom-3 left-3 p-2 rounded-xl ${
                    space.color === "plum"
                      ? "bg-plum"
                      : space.color === "honey"
                      ? "bg-honey"
                      : space.color === "blush"
                      ? "bg-blush"
                      : "bg-sage"
                  }`}
                >
                  <space.icon size={20} className="text-cream" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-body font-bold text-espresso text-lg mb-2">{space.title}</h3>
                <p className="font-body text-warm-gray/55 text-sm leading-relaxed">{space.desc}</p>
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
    { src: "/images/kathaa/hero.png", alt: "Cafe Kathaa Interior", span: "col-span-2 row-span-2" },
    { src: "/images/kathaa/books.png", alt: "Book corner", span: "" },
    { src: "/images/kathaa/coffee.png", alt: "Handcrafted coffee", span: "" },
    { src: "/images/kathaa/steak.png", alt: "Chicken steak", span: "col-span-2" },
    { src: "/images/kathaa/cheesecake.png", alt: "Blueberry cheesecake", span: "" },
    { src: "/images/kathaa/exterior.png", alt: "Bungalow exterior", span: "" },
  ];

  return (
    <RevealSection className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-linen relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <InkDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-plum tracking-[0.15em] uppercase">
            Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2">
            The <span className="text-honey">Kathaa</span> Vibe
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
    { text: "One of the best chicken steaks in Pune. The sauteed vegetables and herbed rice were flavourful and delicious!", source: "Google Review" },
    { text: "Very nice bungalow style setup with greenery and even they have books. Perfect for a relaxed hangout.", source: "Reddit" },
    { text: "The blueberry cheesecake is good. Mac and cheese pasta 4.5/5, Watermelon Cooler 5/5!", source: "Instagram" },
  ];

  return (
    <RevealSection className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-plum relative overflow-hidden">
      <div className="parchment-pattern absolute inset-0 pointer-events-none opacity-5" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-10">
          <span className="font-body text-sm font-bold text-honey tracking-[0.2em] uppercase">
            What People Say
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mt-2">
            Stories From Our Guests
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
              className="bg-cream/10 backdrop-blur-sm rounded-2xl p-6 border border-cream/10"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="text-honey fill-honey" />
                ))}
              </div>
              <p className="font-body text-cream/80 text-sm leading-relaxed mb-3 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-body text-honey/60 text-xs font-semibold">
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
    <RevealSection id="visit" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <InkDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-plum tracking-[0.15em] uppercase">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-espresso mt-2 mb-4">
            Come Write Your <span className="text-honey">Story</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] sm:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8405!3d18.5208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8e9410e745%3A0x574bbc1234760774!2sCafe%20Kathaa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Kathaa Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="bg-mauve rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-plum/10 shrink-0">
                <MapPin size={20} className="text-plum" />
              </div>
              <div>
                <h3 className="font-body font-bold text-espresso text-lg mb-1">Address</h3>
                <p className="font-body text-warm-gray/60 text-sm">
                  Opposite Hotel Vaishali, Fergusson College Road,
                  <br />
                  Shivajinagar, Pune 411004
                </p>
              </div>
            </div>

            <div className="bg-mauve rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-honey/15 shrink-0">
                <Clock size={20} className="text-honey-dark" />
              </div>
              <div>
                <h3 className="font-body font-bold text-espresso text-lg mb-1">Timings</h3>
                <div className="font-body text-warm-gray/60 text-sm space-y-1">
                  <p>
                    <span className="font-semibold text-espresso/70">Mon – Sun:</span> 8:00 AM – 11:00 PM
                  </p>
                  <p>
                    <span className="font-semibold text-honey">Breakfast:</span> 8:00 AM – 12:00 PM
                  </p>
                  <p>
                    <span className="font-semibold text-plum">All Day Menu:</span> 12:00 PM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mauve rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-blush/15 shrink-0">
                <Phone size={20} className="text-blush-dark" />
              </div>
              <div>
                <h3 className="font-body font-bold text-espresso text-lg mb-1">Contact</h3>
                <a
                  href="tel:9119496767"
                  className="font-body text-plum font-semibold text-sm hover:text-plum-dark transition-colors"
                >
                  +91 91194 96767
                </a>
                <a
                  href="mailto:cafe.kathaa@gmail.com"
                  className="flex items-center gap-1 font-body text-warm-gray/50 text-xs mt-1 hover:text-plum transition-colors"
                >
                  <Mail size={12} />
                  cafe.kathaa@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-mauve rounded-2xl p-5">
              <h3 className="font-body font-bold text-espresso text-lg mb-4">Follow & Order</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/cafekathaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-body font-bold text-xs hover:shadow-lg transition-shadow"
                >
                  <Instagram size={14} />
                  @cafekathaa
                </a>
                <a
                  href="https://www.zomato.com/pune/cafe-kathaa-fc-road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-body font-bold text-xs hover:shadow-lg transition-shadow"
                >
                  <Utensils size={14} />
                  Zomato
                </a>
                <span className="flex items-center gap-2 bg-warm-gray/10 text-warm-gray px-4 py-2 rounded-full font-body font-bold text-xs">
                  <Flame size={14} />
                  Shark Tank India
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
    <footer className="bg-espresso text-cream/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <BookOpen size={22} className="text-honey" />
              <span className="font-display text-xl text-cream">Kathaa</span>
            </div>
            <p className="font-body text-sm text-cream/35 leading-relaxed mb-4">
              A bungalow-style book cafe on FC Road, Pune. Where books meet
              gourmet delights — &ldquo;Kathaa&rdquo; means story, and every
              visit writes a new one.
            </p>
            <div className="inline-flex items-center gap-2 bg-honey/15 rounded-full px-4 py-1.5">
              <Award size={12} className="text-honey" />
              <span className="font-body text-xs font-bold text-honey">Shark Tank India Featured</span>
            </div>
          </div>

          <div>
            <h4 className="font-body font-bold text-cream text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Menu", href: "#menu" },
                { label: "Spaces", href: "#spaces" },
                { label: "Visit Us", href: "#visit" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-cream/35 hover:text-honey transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-cream text-sm mb-4 uppercase tracking-wider">
              Our Spaces
            </h4>
            <ul className="space-y-2">
              {["Book Library", "Co-working Space", "Community Events", "Bungalow Garden", "Laptop Friendly", "Breakfast Menu"].map(
                (f) => (
                  <li key={f} className="font-body text-sm text-cream/35">
                    {f}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-cream text-sm mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a href="tel:9119496767" className="flex items-center gap-2 font-body text-sm text-cream/35 hover:text-honey transition-colors">
                <Phone size={14} />
                +91 91194 96767
              </a>
              <a href="mailto:cafe.kathaa@gmail.com" className="flex items-center gap-2 font-body text-sm text-cream/35 hover:text-honey transition-colors">
                <Mail size={14} />
                cafe.kathaa@gmail.com
              </a>
              <a href="https://www.instagram.com/cafekathaa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-cream/35 hover:text-honey transition-colors">
                <Instagram size={14} />
                @cafekathaa
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-cream/35">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                Opp. Hotel Vaishali, FC Road, Pune
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/20">
            © {new Date().getFullYear()} Cafe Kathaa. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Feather size={12} className="text-honey/25" />
            <span className="font-body text-xs text-cream/20">
              Kathaa — Where Every Meal Tells a Story ✦ FC Road, Pune
            </span>
            <BookOpen size={12} className="text-plum-light/25" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function CafeKathaaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OurStory />
        <MenuSection />
        <Spaces />
        <Gallery />
        <TestimonialBanner />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}

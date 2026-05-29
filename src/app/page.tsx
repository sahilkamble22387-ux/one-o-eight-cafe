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
  Waves,
  Sun,
  Utensils,
  Bike,
  Users,
  TreePalm,
  Sparkles,
  Guitar,
  Armchair,
  Baby,
  ArrowRight,
} from "lucide-react";

/* ─── Floating Bubbles (Beach Vibe) ─── */
function FloatingBubbles() {
  const bubbles = [
    { left: "8%", bottom: "15%", size: 10, class: "bubble-1", color: "bg-ocean/20" },
    { left: "22%", bottom: "20%", size: 8, class: "bubble-2", color: "bg-sunflower/20" },
    { left: "40%", bottom: "12%", size: 12, class: "bubble-3", color: "bg-ocean/15" },
    { left: "58%", bottom: "25%", size: 7, class: "bubble-4", color: "bg-coral/15" },
    { left: "75%", bottom: "18%", size: 9, class: "bubble-5", color: "bg-ocean/20" },
    { left: "88%", bottom: "22%", size: 6, class: "bubble-1", color: "bg-sunflower/15" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`absolute ${b.class} ${b.color} rounded-full blur-[1px]`}
          style={{
            left: b.left,
            bottom: b.bottom,
            width: b.size,
            height: b.size,
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

/* ─── Boho Divider ─── */
function BohoDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`boho-divider ${className}`}>
      <span className="text-ocean text-sm">~</span>
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
    { label: "Our Vibe", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Experiences", href: "#experiences" },
    { label: "Visit Us", href: "#visit" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand/95 backdrop-blur-md shadow-lg shadow-deep-sea/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2.5 group">
            <motion.div whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5 }}>
              <TreePalm size={26} className="text-ocean" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl text-deep-sea leading-tight">
                Mhuzo Goa
              </span>
              <span className="text-[9px] tracking-[0.25em] font-body font-semibold text-coral uppercase">
                Book Cafe • FC Road
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body font-semibold text-driftwood/70 hover:text-ocean transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-ocean after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9511898593"
              className="bg-ocean hover:bg-ocean-dark text-seashell px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-ocean/20 font-body"
            >
              Reserve a Spot
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-deep-sea"
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
          className="md:hidden bg-sand/98 backdrop-blur-lg border-t border-hammock"
        >
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-deep-sea/80 hover:text-ocean font-semibold transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9511898593"
              className="block text-center bg-ocean text-seashell py-3 rounded-full font-bold mt-2 font-body"
            >
              Reserve a Spot
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
          style={{ backgroundImage: "url('/images/mhuzo/hero.png')" }}
        />
        <div className="hero-gradient-mhuzo absolute inset-0" />
      </motion.div>

      <FloatingBubbles />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Beach Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center gap-2 bg-seashell/15 backdrop-blur-sm border border-sunflower/30 rounded-full px-5 py-2 mb-6"
        >
          <TreePalm size={14} className="text-sunflower-light" />
          <span className="text-seashell/90 text-sm font-body font-bold tracking-wide">
            Pune&apos;s Favourite Goan Book Cafe
          </span>
          <Waves size={14} className="text-ocean-light" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-seashell text-shadow-warm leading-[1.1] mb-3"
        >
          Cafe Mhuzo Goa
        </motion.h1>

        {/* Konkani Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-sunflower-light text-lg sm:text-xl tracking-[0.15em] uppercase mb-6"
        >
          &ldquo;Mhuzo Goa&rdquo; — My Goa in Konkani
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg sm:text-xl text-seashell/70 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Beach vibes, bunk beds & books on FC Road. Swings, bean bags, and
          the best grilled sandwiches in town. Your Goan escape, right here in Pune.
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
            className="bg-ocean hover:bg-ocean-dark text-seashell px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-ocean/30 pulse-glow-ocean flex items-center gap-2 font-body"
          >
            <Utensils size={20} />
            Explore Menu
          </a>
          <a
            href="#experiences"
            className="bg-seashell/15 hover:bg-seashell/25 backdrop-blur-sm border border-seashell/30 text-seashell px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 font-body"
          >
            <BookOpen size={20} className="text-sunflower-light" />
            Discover Experiences
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
            { value: "4.7★", label: "JustDial" },
            { value: "774+", label: "Reviews" },
            { value: "₹800", label: "For Two" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-sunflower">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-seashell/45 mt-1">
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
        <ChevronDown size={28} className="text-seashell/40" />
      </motion.div>
    </section>
  );
}

/* ─── Our Vibe / Story Section ─── */
function OurVibe() {
  return (
    <RevealSection id="story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-sand relative">
      <div className="wave-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-xl row-span-2">
                <img src="/images/mhuzo/swings.png" alt="Swings at Cafe Mhuzo Goa" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/mhuzo/books.png" alt="Book corner at Cafe Mhuzo Goa" className="w-full h-48 object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/mhuzo/bunkbeds.png" alt="Bunk beds at Cafe Mhuzo Goa" className="w-full h-48 object-cover" />
              </motion.div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-sunflower/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-ocean/15 rounded-xl -z-10" />
          </div>

          {/* Right: Story */}
          <div>
            <BohoDivider className="mb-4 justify-start sm:justify-start" />
            <span className="font-body text-sm font-bold text-ocean tracking-[0.15em] uppercase">
              Our Vibe
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-deep-sea mt-2 mb-6 leading-tight">
              A Little Piece of Goa
              <br />
              <span className="text-coral">on FC Road</span>
            </h2>
            <p className="font-body text-driftwood text-lg leading-relaxed mb-6">
              &ldquo;Mhuzo Goa&rdquo; means <strong className="text-deep-sea">&ldquo;My Goa&rdquo;</strong> in
              Konkani — and that&apos;s exactly what we&apos;ve created. A hidden
              beach shack tucked away from Pune&apos;s hustle, where you can sink
              into a swing, curl up on a bunk bed with a book, or dip your
              toes in our mini foot pool.
            </p>
            <p className="font-body text-driftwood text-lg leading-relaxed mb-8">
              Our decor is <strong className="text-palm">&ldquo;best out of waste&rdquo;</strong> — vibrant,
              sustainable, and full of character. Every corner tells a story,
              every cushion invites you to stay a little longer.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Armchair, label: "Swings & Bean Bags", desc: "Sit how you like" },
                { icon: BookOpen, label: "Books for All Ages", desc: "Get lost in stories" },
                { icon: Guitar, label: "Free Guitars", desc: "Pick up & play" },
                { icon: Heart, label: "Pet Friendly", desc: "Furry friends welcome" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-seashell/60">
                  <div className="p-2 rounded-lg bg-ocean/10 shrink-0">
                    <item.icon size={18} className="text-ocean" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-deep-sea text-sm">{item.label}</div>
                    <div className="font-body text-xs text-driftwood/60">{item.desc}</div>
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
  const [activeTab, setActiveTab] = useState<"bites" | "mains" | "drinks">("bites");

  const menuData = {
    bites: {
      title: "Quick Bites",
      icon: Sparkles,
      items: [
        { name: "Cheesy Peri Peri Fries", desc: "Loaded fries with peri peri & melted cheese", price: "₹160", img: "/images/mhuzo/fries.png", tag: "Bestseller" },
        { name: "French Fries (Salted)", desc: "Crispy golden fries with salt & pepper seasoning", price: "₹120", img: "/images/mhuzo/fries.png", tag: "" },
        { name: "Grilled Sandwich", desc: "Hot & cheesy grilled sandwich with fresh veggies", price: "₹140", img: "/images/mhuzo/sandwich.png", tag: "Must Try" },
        { name: "Cheese Thalipeeth", desc: "Traditional multigrain flatbread with cheese", price: "₹140", img: "/images/mhuzo/sandwich.png", tag: "Healthy" },
      ],
    },
    mains: {
      title: "Mains & More",
      icon: Utensils,
      items: [
        { name: "Artisan Pizza", desc: "Hand-tossed pizza with fresh toppings & mozzarella", price: "₹250", img: "/images/mhuzo/pizza.png", tag: "Popular" },
        { name: "Cheese Omelette Wrap", desc: "Fluffy omelette with cheese wrapped in a tortilla", price: "₹160", img: "/images/mhuzo/sandwich.png", tag: "" },
        { name: "Pasta Alfredo", desc: "Creamy white sauce pasta with herbs & parmesan", price: "₹220", img: "/images/mhuzo/pizza.png", tag: "" },
        { name: "Masala Omelette", desc: "Spiced egg omelette with green chilies & onions", price: "₹100", img: "/images/mhuzo/sandwich.png", tag: "Classic" },
      ],
    },
    drinks: {
      title: "Drinks & Shakes",
      icon: Coffee,
      items: [
        { name: "Tropical Smoothie Bowl", desc: "Acai bowl with mango, granola & coconut flakes", price: "₹220", img: "/images/mhuzo/smoothie-bowl.png", tag: "Insta-worthy" },
        { name: "Chocolate Shake", desc: "Thick creamy milkshake with whipped cream", price: "₹180", img: "/images/mhuzo/shake.png", tag: "Popular" },
        { name: "Artisan Cappuccino", desc: "Rich espresso with velvety steamed milk foam", price: "₹160", img: "/images/mhuzo/coffee.png", tag: "" },
        { name: "Irani Chai", desc: "Slow-brewed creamy tea — the classic comfort cup", price: "₹50", img: "/images/mhuzo/coffee.png", tag: "Comfort" },
      ],
    },
  };

  const currentMenu = menuData[activeTab];

  return (
    <RevealSection id="menu" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-seashell relative">
      <div className="sand-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <BohoDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-ocean tracking-[0.15em] uppercase">
            Our Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-deep-sea mt-2 mb-4">
            Beachside <span className="text-coral">Bites</span>
          </h2>
          <p className="font-body text-driftwood/70 text-lg max-w-2xl mx-auto">
            Simple, fresh, and made with love — just like a Goan beach shack should be.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-hammock/60 rounded-full p-1.5 flex gap-1">
            {(Object.entries(menuData) as [keyof typeof menuData, (typeof menuData)["bites"]][]).map(
              ([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full font-body font-bold text-xs sm:text-sm transition-all duration-300 ${
                    activeTab === key
                      ? "bg-ocean text-seashell shadow-lg shadow-ocean/20"
                      : "text-driftwood/60 hover:text-deep-sea"
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
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-lift group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.tag && (
                  <div className="absolute top-3 right-3 bg-ocean text-seashell px-3 py-1 rounded-full text-xs font-bold font-body">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-body font-bold text-deep-sea text-base">{item.name}</h3>
                  <span className="font-body font-bold text-coral text-lg">{item.price}</span>
                </div>
                <p className="font-body text-driftwood/50 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Order Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <a
            href="https://www.instagram.com/cafemhuzogoa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-bold text-ocean hover:text-ocean-dark transition-colors group"
          >
            Full Menu on Instagram
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="hidden sm:block text-driftwood/20">|</span>
          <span className="font-body text-sm text-driftwood/50">Also available on Swiggy & Zomato</span>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Experiences Section ─── */
function Experiences() {
  const experiences = [
    {
      icon: BookOpen,
      title: "Book Cafe",
      desc: "Shelves stacked with books for all ages. Grab a corner, pick a book, and lose yourself. Reading is always free here.",
      img: "/images/mhuzo/books.png",
      color: "ocean",
    },
    {
      icon: Music,
      title: "Open Mic Nights",
      desc: "Poetry, stand-up, acoustic jams — our stage is open for everyone. Check our Instagram for the next event!",
      img: "/images/mhuzo/openmic.png",
      color: "coral",
    },
    {
      icon: Palette,
      title: "Art Workshops",
      desc: "Boho painting, Warli art, crochet, rock balancing — creative workshops every weekend. All materials provided.",
      img: "/images/mhuzo/swings.png",
      color: "sunflower",
    },
    {
      icon: Armchair,
      title: "Unique Seating",
      desc: "Swings, bunk beds, bean bags, floor cushions — there's no ordinary chair here. Sit your way, stay your way.",
      img: "/images/mhuzo/bunkbeds.png",
      color: "palm",
    },
  ];

  return (
    <RevealSection id="experiences" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-tide relative">
      <div className="wave-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <BohoDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-palm tracking-[0.15em] uppercase">
            More Than Coffee
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-deep-sea mt-2 mb-4">
            Experiences <span className="text-coral">That Stay</span>
          </h2>
          <p className="font-body text-driftwood/70 text-lg max-w-2xl mx-auto">
            We&apos;re not just a cafe — we&apos;re a creative space, a community,
            and your weekend escape plan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/35 to-transparent" />
                <div
                  className={`absolute bottom-3 left-3 p-2 rounded-xl ${
                    exp.color === "ocean"
                      ? "bg-ocean"
                      : exp.color === "coral"
                      ? "bg-coral"
                      : exp.color === "sunflower"
                      ? "bg-sunflower"
                      : "bg-palm"
                  }`}
                >
                  <exp.icon size={20} className="text-seashell" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-body font-bold text-deep-sea text-lg mb-2">{exp.title}</h3>
                <p className="font-body text-driftwood/55 text-sm leading-relaxed">{exp.desc}</p>
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
    { src: "/images/mhuzo/hero.png", alt: "Cafe Mhuzo Goa Interior", span: "col-span-2 row-span-2" },
    { src: "/images/mhuzo/swings.png", alt: "Swings seating", span: "" },
    { src: "/images/mhuzo/bunkbeds.png", alt: "Bunk bed area", span: "" },
    { src: "/images/mhuzo/openmic.png", alt: "Open mic night", span: "col-span-2" },
    { src: "/images/mhuzo/coffee.png", alt: "Artisan coffee", span: "" },
    { src: "/images/mhuzo/exterior.png", alt: "Cafe exterior", span: "" },
  ];

  return (
    <RevealSection className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-hammock relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <BohoDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-ocean tracking-[0.15em] uppercase">
            Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-deep-sea mt-2">
            The <span className="text-coral">Mhuzo</span> Vibe
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

/* ─── Visit Us Section ─── */
function VisitUs() {
  return (
    <RevealSection id="visit" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-seashell relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <BohoDivider className="mb-3" />
          <span className="font-body text-sm font-bold text-ocean tracking-[0.15em] uppercase">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-deep-sea mt-2 mb-4">
            Come Hang <span className="text-coral">With Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] sm:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.8422!3d18.5181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1962a2a4a4b%3A0x3f0c1ea8881b6526!2sCAFE%20MHUZO%20GOA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Mhuzo Goa Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="bg-tide rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-ocean/10 shrink-0">
                <MapPin size={20} className="text-ocean" />
              </div>
              <div>
                <h3 className="font-body font-bold text-deep-sea text-lg mb-1">Address</h3>
                <p className="font-body text-driftwood/60 text-sm">
                  1229, Fergusson College Road,
                  <br />
                  Shivajinagar, Pune 411004
                </p>
              </div>
            </div>

            <div className="bg-tide rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-sunflower/15 shrink-0">
                <Clock size={20} className="text-sunflower-dark" />
              </div>
              <div>
                <h3 className="font-body font-bold text-deep-sea text-lg mb-1">Timings</h3>
                <div className="font-body text-driftwood/60 text-sm space-y-1">
                  <p>
                    <span className="font-semibold text-deep-sea/70">Mon – Wed, Fri – Sun:</span> 10:00 AM – 10:00 PM
                  </p>
                  <p>
                    <span className="font-semibold text-coral">Thursday:</span> Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-tide rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-coral/10 shrink-0">
                <Phone size={20} className="text-coral" />
              </div>
              <div>
                <h3 className="font-body font-bold text-deep-sea text-lg mb-1">Contact</h3>
                <a
                  href="tel:9511898593"
                  className="font-body text-ocean font-semibold text-sm hover:text-ocean-dark transition-colors"
                >
                  +91 95118 98593
                </a>
                <p className="font-body text-driftwood/40 text-xs mt-1">
                  Call or WhatsApp for reservations & events
                </p>
              </div>
            </div>

            <div className="bg-tide rounded-2xl p-5">
              <h3 className="font-body font-bold text-deep-sea text-lg mb-4">Follow & Order</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/cafemhuzogoa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-body font-bold text-xs hover:shadow-lg transition-shadow"
                >
                  <Instagram size={14} />
                  @cafemhuzogoa
                </a>
                <a
                  href="https://www.facebook.com/100077467790516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-body font-bold text-xs hover:shadow-lg transition-shadow"
                >
                  <Users size={14} />
                  Facebook
                </a>
                <span className="flex items-center gap-2 bg-driftwood/10 text-driftwood px-4 py-2 rounded-full font-body font-bold text-xs">
                  <Bike size={14} />
                  Swiggy & Zomato
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
    <footer className="bg-deep-sea text-seashell/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <TreePalm size={22} className="text-sunflower" />
              <span className="font-display text-xl text-seashell">Mhuzo Goa</span>
            </div>
            <p className="font-body text-sm text-seashell/35 leading-relaxed mb-4">
              A Goan-styled book cafe on FC Road, Pune. Swings, bunk beds,
              bean bags, books & beach vibes — &ldquo;Mhuzo Goa&rdquo; means My Goa.
            </p>
            <div className="inline-flex items-center gap-2 bg-sunflower/15 rounded-full px-4 py-1.5">
              <Baby size={12} className="text-sunflower" />
              <span className="font-body text-xs font-bold text-sunflower">Pet & Kid Friendly</span>
            </div>
          </div>

          <div>
            <h4 className="font-body font-bold text-seashell text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Vibe", href: "#story" },
                { label: "Menu", href: "#menu" },
                { label: "Experiences", href: "#experiences" },
                { label: "Visit Us", href: "#visit" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-seashell/35 hover:text-sunflower transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-seashell text-sm mb-4 uppercase tracking-wider">
              Unique Features
            </h4>
            <ul className="space-y-2">
              {["Swings & Bunk Beds", "Book Library", "Open Mic Events", "Art Workshops", "Mini Foot Pool", "Free Guitars"].map(
                (f) => (
                  <li key={f} className="font-body text-sm text-seashell/35">
                    {f}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-seashell text-sm mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a href="tel:9511898593" className="flex items-center gap-2 font-body text-sm text-seashell/35 hover:text-sunflower transition-colors">
                <Phone size={14} />
                +91 95118 98593
              </a>
              <a href="https://www.instagram.com/cafemhuzogoa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-seashell/35 hover:text-sunflower transition-colors">
                <Instagram size={14} />
                @cafemhuzogoa
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-seashell/35">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                1229, FC Road, Shivajinagar, Pune
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-seashell/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-seashell/20">
            © {new Date().getFullYear()} Cafe Mhuzo Goa. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Waves size={12} className="text-ocean-light/25" />
            <span className="font-body text-xs text-seashell/20">
              Mhuzo Goa — My Goa ♡ FC Road, Pune
            </span>
            <TreePalm size={12} className="text-sunflower/25" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function CafeMhuzoGoaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-sand">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OurVibe />
        <MenuSection />
        <Experiences />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}

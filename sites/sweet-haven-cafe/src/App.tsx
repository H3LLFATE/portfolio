/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Coffee,
  Cake,
  Cookie,
  Croissant
} from 'lucide-react';

// --- Types ---
interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

// --- Data ---
const MENU_DATA: MenuCategory[] = [
  {
    title: "Pastries",
    icon: <Croissant className="w-5 h-5" />,
    items: [
      { name: "Butter Croissant", price: "RM 8", description: "Flaky, buttery classic French pastry." },
      { name: "Almond Croissant", price: "RM 12", description: "Filled with rich almond cream and topped with toasted flakes." },
      { name: "Chocolate Croissant", price: "RM 10", description: "Pain au chocolat with premium dark chocolate." },
      { name: "Blueberry Danish", price: "RM 11", description: "Fresh blueberries on a bed of vanilla custard." },
      { name: "Raspberry Danish", price: "RM 11", description: "Tangy raspberry compote with a sweet glaze." },
      { name: "Apple Danish", price: "RM 11", description: "Caramelized apples with a hint of cinnamon." },
      { name: "Chocolate Éclair", price: "RM 14", description: "Choux pastry filled with chocolate ganache." },
      { name: "Coffee Éclair", price: "RM 14", description: "Espresso-infused cream filling." },
    ]
  },
  {
    title: "Cakes",
    icon: <Cake className="w-5 h-5" />,
    items: [
      { name: "Chocolate Lava Cake", price: "RM 18", description: "Warm chocolate cake with a molten center." },
      { name: "Red Velvet Cake", price: "RM 16", description: "Classic cocoa-flavored cake with cream cheese frosting." },
      { name: "Matcha Mille Crepe", price: "RM 20", description: "Twenty layers of delicate matcha crepes." },
      { name: "Lemon Tart", price: "RM 15", description: "Zesty lemon curd in a buttery shortcrust shell." },
      { name: "Classic Cheesecake", price: "RM 17", description: "New York style creamy cheesecake." },
      { name: "Strawberry Cheesecake", price: "RM 18", description: "Topped with fresh strawberries and glaze." },
    ]
  },
  {
    title: "Desserts & Sweets",
    icon: <Cookie className="w-5 h-5" />,
    items: [
      { name: "Macaron Set (3pcs)", price: "RM 15", description: "Pistachio, Raspberry, and Vanilla." },
      { name: "Tiramisu Cup", price: "RM 16", description: "Ladyfingers soaked in espresso with mascarpone." },
      { name: "Profiteroles", price: "RM 14", description: "Cream puffs drizzled with warm chocolate sauce." },
      { name: "Fruit Tartlets", price: "RM 13", description: "Seasonal fresh fruits on vanilla pastry cream." },
    ]
  },
  {
    title: "Beverages",
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { name: "Caffè Latte", price: "RM 12" },
      { name: "Cappuccino", price: "RM 12" },
      { name: "Espresso", price: "RM 8" },
      { name: "Earl Grey Tea", price: "RM 10" },
      { name: "Jasmine Green Tea", price: "RM 10" },
      { name: "Hot Chocolate", price: "RM 13" },
      { name: "Fresh Orange Juice", price: "RM 14" },
      { name: "Fresh Mango Juice", price: "RM 14" },
    ]
  }
];

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", alt: "Cozy boutique café interior" },
  { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80", alt: "Artisanal cake slice" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80", alt: "Pastry chef at work" },
  { src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80", alt: "Latte art in a ceramic cup" },
  { src: "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=800&q=80", alt: "Assorted French macarons" },
  { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", alt: "Freshly baked golden croissants" },
  { src: "https://images.unsplash.com/photo-1511018556341-d16986a1c194?auto=format&fit=crop&w=800&q=80", alt: "Café window with pastries" },
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", alt: "Artisanal bread and pastries" },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold tracking-tight text-chocolate-dark">
          Sweet Haven <span className="text-chocolate-light italic font-normal">Café</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-chocolate-light transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-chocolate-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-chocolate-light/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80" 
        alt="Café Interior" 
        className="w-full h-full object-cover brightness-[0.75]"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-cream/20" />
    </div>
    
    <div className="relative z-10 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-8xl text-white mb-6 drop-shadow-lg">
          Indulge in <br />
          <span className="italic font-normal">Sweet Moments</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide">
          Experience artisanal pastries and boutique coffee in the heart of Kuala Lumpur.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#menu" className="btn-primary">View Menu</a>
          <a href="#contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-chocolate-dark">Book a Table</a>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
    >
      <div className="w-px h-12 bg-white/30 mx-auto" />
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-chocolate-light uppercase tracking-widest text-sm font-semibold mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
            Crafting Artisanal <br />
            <span className="italic">Delights with Love</span>
          </h2>
          <p className="text-lg text-chocolate-dark/80 mb-6 leading-relaxed">
            At Sweet Haven Café, we believe that every dessert tells a story. Our journey began with a simple passion for high-quality ingredients and the art of handmade pastries.
          </p>
          <p className="text-lg text-chocolate-dark/80 mb-10 leading-relaxed">
            From our flaky croissants to our signature Matcha Mille Crepe, every creation is a testament to our commitment to excellence. We source only the finest cocoa, seasonal fruits, and premium beans to ensure every bite is a moment of pure bliss.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-chocolate-light" />
            <span className="font-serif italic text-xl">Chef de Pâtisserie</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" 
              alt="Chef preparing desserts" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-blush p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
            <p className="font-serif italic text-lg mb-2">"Quality is the heart of our kitchen. We never compromise on the ingredients that make our desserts special."</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].title);

  return (
    <section id="menu" className="py-24 bg-blush/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-chocolate-light uppercase tracking-widest text-sm font-semibold mb-4 block">The Selection</span>
          <h2 className="text-4xl md:text-5xl mb-4">Our Sweet Menu</h2>
          <p className="text-chocolate-dark/60 max-w-xl mx-auto">Explore our curated collection of artisanal treats and beverages.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {MENU_DATA.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === cat.title 
                  ? 'bg-chocolate-dark text-cream shadow-lg' 
                  : 'bg-white text-chocolate-dark hover:bg-chocolate-light/10'
              }`}
            >
              {cat.icon}
              <span className="font-medium">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {MENU_DATA.find(c => c.title === activeCategory)?.items.map((item, idx) => (
            <div key={idx} className="menu-card flex justify-between items-start group">
              <div>
                <h3 className="text-xl font-serif mb-1 group-hover:text-chocolate-light transition-colors">{item.name}</h3>
                {item.description && <p className="text-sm text-chocolate-dark/60 font-light">{item.description}</p>}
              </div>
              <span className="font-serif text-lg font-medium text-chocolate-dark ml-4 whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => (
  <section id="gallery" className="py-24 bg-cream overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4 italic">Captured Moments</h2>
        <p className="text-chocolate-dark/60">A glimpse into our cozy sanctuary and artisanal creations.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className={`relative rounded-2xl overflow-hidden shadow-sm ${idx % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover aspect-square md:aspect-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-blush/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">Visit Our Haven</h2>
            <p className="text-lg text-chocolate-dark/70 mb-12">
              We'd love to welcome you to our café. Whether you're looking for a quiet spot to work or a cozy corner for a date, Sweet Haven is the perfect choice.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <MapPin className="text-chocolate-light" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-chocolate-dark/70">145 Cocoa Street, Kuala Lumpur, Malaysia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Phone className="text-chocolate-light" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-chocolate-dark/70">+60 12-345-6789</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Mail className="text-chocolate-light" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-chocolate-dark/70">info@sweethaven.my</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 rounded-3xl overflow-hidden h-64 shadow-inner border border-chocolate-light/20 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.834645224343!2d101.686855!3d3.139003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff60233ad5!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-chocolate-light/10"
          >
            <h3 className="text-2xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-chocolate-light/20 focus:border-chocolate-light focus:ring-1 focus:ring-chocolate-light outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-chocolate-light/20 focus:border-chocolate-light focus:ring-1 focus:ring-chocolate-light outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-chocolate-light/20 focus:border-chocolate-light focus:ring-1 focus:ring-chocolate-light outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button 
                disabled={formStatus !== 'idle'}
                className="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2"
              >
                {formStatus === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
                {formStatus === 'sending' && <span>Sending...</span>}
                {formStatus === 'sent' && <span>Message Sent!</span>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-chocolate-dark text-cream py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-serif mb-6">Sweet Haven Café</h3>
          <p className="text-cream/60 leading-relaxed mb-6">
            Your daily escape into a world of artisanal sweetness. Handcrafted with love in Kuala Lumpur.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-chocolate-light transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-chocolate-light transition-colors"><Facebook /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Opening Hours</h4>
          <ul className="space-y-2 text-cream/70">
            <li className="flex justify-between"><span>Mon - Fri</span> <span>8:00 AM - 9:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 10:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>9:00 AM - 8:00 PM</span></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
          <p className="text-cream/60 mb-4">Join our sweet list for exclusive offers and new arrivals.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-lg outline-none focus:bg-white/20 w-full"
            />
            <button className="bg-cream text-chocolate-dark px-4 py-2 rounded-r-lg font-bold hover:bg-blush transition-colors">Join</button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 text-center text-sm text-cream/40">
        <p>© {new Date().getFullYear()} Sweet Haven Café. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

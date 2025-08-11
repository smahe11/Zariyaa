"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Leaf, Scissors, Truck, Instagram, Mail, Phone, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// COLORS (Regal Heritage)
// Maroon #6B1D1D  | Gold #C9A646 | Ivory #FAF5E6 | Emerald #0C3B2E

const products = [
  {
    id: "s1",
    name: "Kanjivaram Silk — Emerald with Antique Gold Zari",
    price: "₹22,500",
    tags: ["Pure Silk", "Bridal"],
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "s2",
    name: "Banarasi Brocade — Maroon & Gold Border",
    price: "₹17,900",
    tags: ["Handloom", "Festive"],
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "s3",
    name: "Chanderi Silk Cotton — Ivory with Zari Pallu",
    price: "₹8,950",
    tags: ["Lightweight", "Everyday Luxury"],
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "s4",
    name: "Linen Saree — Emerald with Contrast Border",
    price: "₹6,500",
    tags: ["Breathable", "Summer"],
    image: "https://images.unsplash.com/photo-1584917865442-fd1df1f0ecf9?q=80&w=1600&auto=format&fit=crop"
  },
];

const testimonials = [
  { name: "Ananya R.", text: "Zariyaa’s silk feels luxurious and the zari work gleams beautifully.", rating: 5 },
  { name: "Meera S.", text: "Lightweight cottons are perfect for daily wear. Great service!", rating: 5 },
  { name: "Priya K.", text: "Photos matched the fabric perfectly—love the texture close-ups.", rating: 4 },
];

export default function Zariyaa() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thanks! We'll email a welcome code to ${email}.`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#FAF5E6] text-slate-900">
      {/* Floating WhatsApp (UK for now; add India number when ready) */}
      <a
        href="https://wa.me/447384056764?text=Hi%20Zariyaa%2C%20I%20have%20a%20question%20about%20your%20sarees"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-white shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-[#FAF5E6]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-2 font-heading text-2xl tracking-wide text-[#6B1D1D]">
            <Sparkles className="h-5 w-5 text-[#C9A646]" aria-hidden />
            <span>Zariyaa</span>
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#shop" className="hover:text-[#6B1D1D]">Shop</a>
            <a href="#story" className="hover:text-[#6B1D1D]">Our Story</a>
            <a href="#craft" className="hover:text-[#6B1D1D]">Craft</a>
            <a href="#faq" className="hover:text-[#6B1D1D]">FAQ</a>
            <a href="#contact" className="hover:text-[#6B1D1D]">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl bg-[#C9A646] hover:bg-[#b8942e]">
              <a href="#shop" className="inline-flex items-center"><ShoppingBag className="mr-2 h-4 w-4" /> Shop now</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-tight text-[#6B1D1D]">
              Grace in Every Thread
            </h1>
            <p className="mt-5 max-w-prose text-lg text-[#0C3B2E]">
              Handloom sarees & timeless accessories. From pure silks to feather-light cottons—crafted with authentic zari and ethical sourcing.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button className="rounded-2xl bg-[#C9A646] hover:bg-[#b8942e]">
                <a href="#shop" className="inline-flex items-center"><ShoppingBag className="mr-2 h-5 w-5" /> Shop collection</a>
              </Button>
              <Button variant="outline" className="rounded-2xl border-[#C9A646] text-[#6B1D1D]">
                <a href="https://wa.me/447384056764" target="_blank" rel="noreferrer" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" /> WhatsApp us
                </a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-[#6B1D1D]">
              <div className="flex items-center gap-1"><Sparkles className="h-4 w-4 text-[#C9A646]" /> Pure fabric promise</div>
              <div className="flex items-center gap-1"><Truck className="h-4 w-4 text-[#C9A646]" /> Fast, insured shipping</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop"
                alt="Silk saree with antique gold zari"
                className="h-[480px] w-full rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/90 p-3 shadow-lg">
                <div className="flex items-center gap-2 text-[#6B1D1D]"><Star className="h-4 w-4 text-[#C9A646]" /> 4.9/5 by 500+ customers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Craft highlights */}
      <section id="craft" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { icon: Scissors, title: "Handloom Finish", text: "Meticulous falls, pico & tassels." },
            { icon: Leaf, title: "Natural Fibres", text: "Pure silk, cotton & linen." },
            { icon: Sparkles, title: "Authentic Zari", text: "Detailed texture shots for trust." },
            { icon: Truck, title: "Insured Shipping", text: "Tracked, global delivery." },
          ].map((f) => (
            <Card key={f.title} className="rounded-2xl border-[#E9DDC2] bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-[#6B1D1D]">
                  <f.icon className="h-5 w-5 text-[#C9A646]" /> {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#6B1D1D]">Featured sarees</h2>
            <p className="mt-2 text-slate-700">Curated weaves with detailed photos and transparent care info.</p>
          </div>
          <a href="#contact" className="hidden text-sm underline md:inline text-[#6B1D1D]">Looking for something specific?</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.06 }}>
              <Card className="overflow-hidden rounded-3xl border-[#E9DDC2] bg-white">
                <img src={p.image} alt={p.name} className="h-64 w-full object-cover" />
                <CardHeader>
                  <CardTitle className="text-lg text-[#6B1D1D]">{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-[#E9DDC2] px-2 py-0.5 text-xs text-[#0C3B2E]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#6B1D1D]">{p.price}</span>
                    <Button className="rounded-xl bg-[#C9A646] hover:bg-[#b8942e]">
                      <a href="https://wa.me/447384056764" target="_blank" rel="noreferrer">Enquire</a>
                    </Button>
                  </div>
                  <p className="mt-3 text-xs text-slate-600">
                    Includes blouse piece. Care: Dry clean recommended. Ships in 2–4 days.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1503342452485-86FF0a505491?q=80&w=1600&auto=format&fit=crop"
            alt="Artisan weaving on a traditional handloom"
            className="h-[420px] w-full rounded-3xl object-cover shadow-lg"
          />
          <div>
            <h3 className="font-heading text-3xl text-[#6B1D1D]">Our story</h3>
            <p className="mt-3 text-slate-700">
              Born in a home studio and nurtured by artisan clusters across India, Zariyaa celebrates the poetry of warp and weft. We partner directly with weavers to bring ethical, transparent pricing and heirloom-worthy craft.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Direct artisan sourcing</li>
              <li>• Limited, quality-first drops</li>
              <li>• Honest, daylight product photography</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <h3 className="font-heading text-2xl text-[#6B1D1D]">What customers say</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl border-[#E9DDC2] bg-white">
              <CardContent className="pt-6">
                <div className="mb-2 flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#C9A646]" />
                  ))}
                </div>
                <p className="text-slate-700">“{t.text}”</p>
                <p className="mt-3 text-sm font-medium text-[#6B1D1D]">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h3 className="font-heading text-2xl text-[#6B1D1D]">FAQ</h3>
        <div className="mt-6 space-y-3">
          <details className="rounded-xl border border-[#E9DDC2] bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer font-medium text-[#6B1D1D]">Is the blouse piece included?</summary>
            <p className="mt-2 text-slate-700">Yes, unless marked otherwise. Product pages mention blouse length and any embroidery.</p>
          </details>
          <details className="rounded-xl border border-[#E9DDC2] bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer font-medium text-[#6B1D1D]">How do I care for my saree?</summary>
            <p className="mt-2 text-slate-700">Silk/zari: dry clean. Cotton/linen: gentle hand wash cold, mild detergent, shade dry.</p>
          </details>
          <details className="rounded-xl border border-[#E9DDC2] bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer font-medium text-[#6B1D1D]">Shipping & returns</summary>
            <p className="mt-2 text-slate-700">Orders ship in 2–4 business days with tracking. Returns within 7 days if unused and with tags.</p>
          </details>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="grid grid-cols-1 gap-6 rounded-3xl bg-gradient-to-r from-[#E9DDC2] to-[#F2EAD1] p-8 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-2xl text-[#6B1D1D]">Join the Zariyaa circle</h3>
            <p className="mt-2 text-slate-700">Get launch updates, limited drops and a welcome code.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex items-center gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="you@example.com"
              className="h-11 w-full rounded-xl border border-[#E9DDC2] bg-white px-4 outline-none focus:ring-2 focus:ring-[#C9A646]"
            />
            <Button className="h-11 rounded-xl bg-[#C9A646] hover:bg-[#b8942e]">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-[#E9DDC2] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-heading text-lg text-[#6B1D1D]">
                <Sparkles className="h-5 w-5 text-[#C9A646]" /> Zariyaa
              </div>
              <p className="mt-3 text-sm text-slate-700">Golden threads, timeless drapes.</p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-[#6B1D1D]">Shop</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li><a href="#shop" className="hover:underline">Silk Sarees</a></li>
                <li><a href="#shop" className="hover:underline">Cotton & Linen</a></li>
                <li><a href="#shop" className="hover:underline">Festive & Bridal</a></li>
                <li><a href="#shop" className="hover:underline">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-[#6B1D1D]">Help</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li><a href="#faq" className="hover:underline">Shipping & returns</a></li>
                <li><a href="#faq" className="hover:underline">Care guide</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-[#6B1D1D]">Say hello</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@zariyaa.com</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +44 7384 056764</li>
                <li>
                  <a className="inline-flex items-center gap-2 hover:underline" href="https://instagram.com/" target="_blank" rel="noreferrer">
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Zariyaa. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

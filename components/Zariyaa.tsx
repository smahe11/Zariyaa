"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Leaf, Scissors, Truck, Instagram, Mail, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: "p1",
    name: "Kanjivaram Silk — Emerald & Magenta",
    price: "£289",
    tags: ["Pure Silk", "Zari Work"],
    image: "https://images.unsplash.com/photo-1584917865442-fd1df1f0ecf9?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "p2",
    name: "Banarasi Brocade — Rose Gold",
    price: "£219",
    tags: ["Handloom", "Festive"],
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "p3",
    name: "Chanderi Cotton Silk — Sand & Saffron",
    price: "£149",
    tags: ["Lightweight", "Everyday"],
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "p4",
    name: "Organza — Ivory Petals",
    price: "£129",
    tags: ["Sheer", "Contemporary"],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
  },
];

const testimonials = [
  {
    name: "Ananya R.",
    text: "The fabric feels luxurious and the drape is unreal. Zariyaa has my heart!",
    rating: 5,
  },
  {
    name: "Meera S.",
    text: "Customer service was warm, and the blouse piece quality is superb.",
    rating: 5,
  },
  {
    name: "Priya K.",
    text: "Loved the texture shots—what I received matched perfectly.",
    rating: 4,
  },
];

export default function Zariyaa() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thanks! We'll email a 10% welcome code to ${email}.`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-amber-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-2 font-semibold text-xl tracking-wide">
            <Sparkles className="h-5 w-5" aria-hidden />
            <span>Zariyaa</span>
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#shop" className="hover:text-amber-700">Shop</a>
            <a href="#story" className="hover:text-amber-700">Our Story</a>
            <a href="#craft" className="hover:text-amber-700">Craft</a>
            <a href="#faq" className="hover:text-amber-700">FAQ</a>
            <a href="#contact" className="hover:text-amber-700">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl">
              <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="inline-flex items-center">
                <ShoppingBag className="mr-2 h-4 w-4" /> Shop WhatsApp
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-20 sm:px-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
              Golden threads,
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">timeless drapes.</span>
            </h1>
            <p className="mt-5 max-w-prose text-lg text-slate-700">
              Handcrafted sarees woven with heritage techniques and a modern eye. Each Zariyaa piece is photographed in natural light with detailed texture shots—so you know exactly what you’re getting.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button className="rounded-2xl">
                <a href="#shop" className="inline-flex items-center"><ShoppingBag className="mr-2 h-5 w-5" /> Shop collection</a>
              </Button>
              <Button variant="outline" className="rounded-2xl">
                <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer" className="inline-flex items-center"><Phone className="mr-2 h-5 w-5" /> Talk on WhatsApp</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1"><Sparkles className="h-4 w-4" /> Pure fabric promise</div>
              <div className="flex items-center gap-1"><Truck className="h-4 w-4" /> Fast, insured shipping</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop"
                alt="Close-up of zari work on silk fabric"
                className="h-[480px] w-full rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/90 p-3 shadow-lg">
                <div className="flex items-center gap-2 text-amber-700"><Star className="h-4 w-4" /> 4.9/5 by 500+ customers</div>
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
            { icon: Leaf, title: "Natural Fibres", text: "Pure silk, linen & cotton." },
            { icon: Sparkles, title: "Authentic Zari", text: "Detailed texture shots for trust." },
            { icon: Truck, title: "Easy Shipping", text: "Tracked, insured, global." },
          ].map((f, i) => (
            <Card key={f.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <f.icon className="h-5 w-5" /> {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">Featured sarees</h2>
            <p className="mt-2 text-slate-600">Curated weaves with detailed photos and transparent care info.</p>
          </div>
          <a href="#contact" className="hidden text-sm underline md:inline">Looking for something specific?</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.06 }}>
              <Card className="overflow-hidden rounded-3xl">
                <img src={p.image} alt={p.name} className="h-64 w-full object-cover" />
                <CardHeader>
                  <CardTitle className="text-lg">{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-amber-200 px-2 py-0.5 text-xs text-amber-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{p.price}</span>
                    <Button className="rounded-xl">
                      <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer">Enquire</a>
                    </Button>
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
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
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop"
            alt="Artisan weaving on a traditional handloom"
            className="h-[420px] w-full rounded-3xl object-cover shadow-lg"
          />
          <div>
            <h3 className="font-serif text-3xl">Our story</h3>
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
        <h3 className="font-serif text-2xl">What customers say</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl">
              <CardContent className="pt-6">
                <div className="mb-2 flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-slate-700">“{t.text}”</p>
                <p className="mt-3 text-sm font-medium">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h3 className="font-serif text-2xl">FAQ</h3>
        <div className="mt-6 space-y-3">
          <details className="rounded-xl border border-amber-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer font-medium">Is the blouse piece included?</summary>
            <p className="mt-2 text-slate-700">Yes, unless marked otherwise. Product pages will clearly mention blouse length and any embroidery.</p>
          </details>
          <details className="rounded-xl border border-amber-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer font-medium">How do I care for my saree?</summary>
            <p className="mt-2 text-slate-700">For silk and zari work, dry clean is recommended. For cotton/linen, gentle hand wash in cold water with mild detergent. Avoid direct sun drying.</p>
          </details>
          <details className="rounded-xl border border-amber-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer font-medium">Shipping & returns</summary>
            <p className="mt-2 text-slate-700">Orders ship in 2–4 business days with tracking. Returns within 7 days if unused and with tags intact. Tailored blouses are final sale.</p>
          </details>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="grid grid-cols-1 gap-6 rounded-3xl bg-gradient-to-r from-amber-100 to-rose-100 p-8 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl">Join the Zariyaa circle</h3>
            <p className="mt-2 text-slate-700">Get launch updates, limited drops and a 10% welcome code.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex items-center gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="you@example.com"
              className="h-11 w-full rounded-xl border border-amber-300 bg-white px-4 outline-none focus:ring-2 focus:ring-amber-400"
            />
            <Button className="h-11 rounded-xl">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-amber-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-semibold text-lg">
                <Sparkles className="h-5 w-5" /> Zariyaa
              </div>
              <p className="mt-3 text-sm text-slate-600">Golden threads, timeless drapes.</p>
            </div>

            <div>
              <h4 className="mb-2 font-medium">Shop</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li><a href="#shop" className="hover:underline">All sarees</a></li>
                <li><a href="#shop" className="hover:underline">Silk</a></li>
                <li><a href="#shop" className="hover:underline">Cotton & Linen</a></li>
                <li><a href="#shop" className="hover:underline">Occasion wear</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-medium">Help</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li><a href="#faq" className="hover:underline">Shipping & returns</a></li>
                <li><a href="#faq" className="hover:underline">Care guide</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-medium">Say hello</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@zariyaa.com</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +44 0000 000000</li>
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

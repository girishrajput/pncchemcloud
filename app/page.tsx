"use client";
import React, { useState } from 'react';

// --- SUB-COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <div className="text-2xl font-black tracking-tighter text-blue-900 italic">
        P&C <span className="text-blue-600">CHEMCLOUD</span>
      </div>
      <div className="hidden space-x-8 lg:flex items-center text-sm font-bold text-slate-700 uppercase tracking-wide">
        <a href="#" className="hover:text-blue-600 transition">Home</a>
        <a href="#" className="hover:text-blue-600 transition">About</a>
        <a href="#" className="hover:text-blue-600 transition">Capabilities</a>
        <a href="#" className="hover:text-blue-600 transition">Products</a>
        <a href="#" className="rounded bg-blue-900 px-6 py-2 text-white hover:bg-blue-700 transition">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative flex min-h-screen items-center justify-center bg-slate-900 text-white pt-20">
    {/* High Quality Industrial Image */}
    <div className="absolute inset-0 z-0 opacity-50">
      <img 
        src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="Chemical Plant" 
        className="h-full w-full object-cover"
      />
    </div>
    <div className="container relative z-10 mx-auto px-6 text-center">
      <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] md:text-8xl">
        Innovating Chemistry <br /> 
        <span className="text-blue-400">For A Better Tomorrow</span>
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-200 md:text-xl">
        A global leader in R&D and manufacturing excellence. Delivering high-performance 
        chemical solutions to over 50 countries.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <button className="rounded bg-blue-600 px-10 py-4 font-bold uppercase tracking-widest hover:bg-blue-700 transition">Explore Products</button>
        <button className="rounded border-2 border-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Our Vision</button>
      </div>
    </div>
  </section>
);

const Capabilities = () => {
  const caps = [
    { title: "R&D Tech", icon: "🔬", desc: "Advanced laboratory testing and molecular engineering." },
    { title: "Manufacturing", icon: "🏭", desc: "Mass-scale production with zero-waste protocols." },
    { title: "Quality Control", icon: "🛡️", desc: "World-class compliance and safety certifications." }
  ];
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {caps.map((item, i) => (
            <div key={i} className="group bg-white p-12 text-center shadow-sm transition hover:shadow-2xl">
              <div className="mb-6 text-6xl">{item.icon}</div>
              <h3 className="mb-4 text-2xl font-bold text-blue-900">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductSection = () => {
  const products = [
    { name: "Specialty Chemicals", img: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Agro Solutions", img: "https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Pharma Intermediates", img: "https://images.pexels.com/photos/3951862/pexels-photo-3951862.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-bold text-slate-900">Featured Products</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-lg border border-slate-100">
              <div className="h-64 overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl font-bold text-blue-900">{p.name}</h4>
                <p className="mt-2 text-sm text-slate-500 uppercase tracking-widest font-bold">In-Stock</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  

  <footer className="bg-slate-900 pt-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 pb-8 grid gap-12 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <h3 className="mb-6 text-3xl font-black text-white text-uppercase">P&C CHEMCLOUD</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            A global leader in specialty chemicals, driving innovation through R&D and 
            sustainable manufacturing practices.
          </p>
        </div>
        <div>
          <h4 className="mb-6 font-bold uppercase tracking-widest text-blue-400">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer  text-slate-400">Sitemap</li>
            <li className="hover:text-blue-400 text-slate-400 cursor-pointer">Careers</li>
            <li className="hover:text-blue-400 cursor-pointer  text-slate-400">Sustainability</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-bold uppercase tracking-widest text-blue-400">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 text-slate-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-400 text-slate-400 cursor-pointer">Terms of Service</li>
            <li className="hover:text-blue-400 text-slate-400 cursor-pointer">Payment Terms</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-bold uppercase tracking-widest text-blue-400">Contact Info</h4>
          <p className="text-sm text-slate-400"><strong className='text-slate-300'>Address:</strong> SF No. 66/8, MBT Road, Eranthangal Village,Vellore - 632519, Tamil Nadu, India</p>
          <p className="text-sm text-slate-400"><strong className='text-slate-300'>Email:</strong> contact@pncchemcloud.com</p>
          <p className="text-sm text-slate-400"><strong className='text-slate-300'>Phone:</strong> 07971670468</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} P&C ChemCloud. All Rights Reserved.
      </div>
    </footer>
);

// --- ASSEMBLY ---

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Capabilities />
      <ProductSection />
      <Footer />
    </main>
  );
}
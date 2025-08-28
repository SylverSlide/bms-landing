"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Users, Store, ShoppingCart, Menu, X } from "lucide-react";

const NAV = [
  { href: "/accueil", label: "Accueil", icon: <div className="w-2 h-2 bg-current rounded-full" /> },
  { href: "/roster", label: "Roster", icon: <Users size={18} /> },
  { href: "/shop", label: "Shop", icon: <Store size={18} /> },
  { href: "/partners", label: "Partenaires", icon: <ShoppingCart size={18} /> },
];

export default function NavbarNew() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/accueil") return pathname === "/" || pathname === "/accueil";
    return pathname === href;
  };

  return (
    <>
      {/* Header - Style BMS IMPOSANT */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 py-4 bg-black border-b-4 border-brand-red">
          
          {/* Logo BMS avec effet layering */}
          <Link href="/accueil" className="group relative">
            {/* Background layer */}
            <div className="absolute top-0 left-0 w-16 h-16 z-10 bg-gray-800 rounded border-2 border-gray-600 group-hover:border-brand-red transition-all duration-300" />
            
            {/* Logo layer qui DÉBORDE */}
            <div className="relative z-20 w-16 h-16 bg-brand-red rounded border-2 border-black transform translate-x-1 -translate-y-1 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center">
                <Image 
                  src="/LOGO.webp" 
                  alt="BMS Logo" 
                  width={40} 
                  height={40} 
                  priority 
                  className="w-8 h-8"
                />
              </div>
            </div>
          </Link>

          {/* Desktop nav - Style BMS LAYERING */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative"
                >
                  {/* Background layer */}
                  <div className={`absolute top-0 left-0 w-full h-full z-10 rounded transition-all duration-300 ${
                    active 
                      ? "bg-gray-800 border-2 border-brand-red" 
                      : "bg-gray-900/50 border-2 border-gray-700 group-hover:border-brand-red/50"
                  }`} />
                  
                  {/* Content layer qui DÉBORDE légèrement */}
                  <div className={`relative z-20 px-6 py-3 rounded border-2 transition-all duration-300 ${
                    active 
                      ? "bg-brand-red border-black text-white transform translate-x-1 -translate-y-1" 
                      : "bg-black border-white text-white group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  }`}>
                    <span className="text-sm font-black uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile burger avec animation */}
          <button
            aria-label="Ouvrir le menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded border border-gray-700 text-gray-200 hover:border-brand-red/50 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} className="transition-transform duration-200" />
          </button>
        </div>
      </header>

      {/* Mobile menu WOW - Quiet Luxury avec animation contrôlée */}
      <div 
        className={`fixed inset-0 z-50 md:hidden overflow-hidden transition-all duration-700 ease-out ${
          open 
            ? "opacity-100 visible" 
            : "opacity-0 invisible"
        }`}
      >
        {/* Background avec effet de profondeur - Animation staggered */}
        <div className={`absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black transition-all duration-1000 ease-out ${
          open ? "scale-100" : "scale-110"
        }`} />
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(234,46,46,0.08)_0%,transparent_50%)] transition-all duration-1200 ease-out delay-200 ${
          open ? "opacity-100" : "opacity-0"
        }`} />
        
        {/* Grille de profondeur subtile */}
        <div className={`absolute inset-0 opacity-[0.02] transition-all duration-1000 ease-out delay-300 ${
          open ? "scale-100" : "scale-95"
        }`}>
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        {/* Header épuré avec logo centré - Animation orchestrée */}
        <div className={`relative flex flex-col items-center pt-16 pb-8 transition-all duration-800 ease-out delay-400 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}>
          <div className="relative mb-6">
            <div className={`absolute inset-0 bg-white/5 rounded-full blur-2xl transition-all duration-1000 ease-out delay-500 ${
              open ? "scale-100" : "scale-0"
            }`} />
            <Image 
              src="/LOGO.webp" 
              alt="BMS Logo" 
              width={80} 
              height={80} 
              className={`relative z-10 opacity-95 transition-all duration-700 ease-out delay-600 ${
                open ? "scale-100 rotate-0" : "scale-75 rotate-12"
              }`}
            />
          </div>
          <h1 className={`text-2xl font-thin tracking-[0.2em] text-white mb-2 transition-all duration-600 ease-out delay-700 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>BMS</h1>
          <div className={`w-16 h-px bg-white/20 transition-all duration-500 ease-out delay-800 ${
            open ? "scale-x-100" : "scale-x-0"
          }`} />
        </div>

        {/* Navigation révolutionnaire - Staggered animation */}
        <div className="px-8 space-y-6">
          {NAV.map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group w-full relative block transition-all duration-600 ease-out ${
                  open 
                    ? "translate-x-0 opacity-100" 
                    : "translate-x-8 opacity-0"
                }`}
                style={{ 
                  transitionDelay: open ? `${900 + (index * 100)}ms` : '0ms'
                }}
              >
                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                  active
                    ? "bg-gradient-to-r from-brand-red/10 to-transparent border border-brand-red/20"
                    : "bg-white/[0.02] border border-white/5 group-hover:border-white/10"
                }`} />
                <div className="relative p-6 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    active
                      ? "bg-brand-red/20 shadow-[0_0_20px_rgba(234,46,46,0.3)]"
                      : "bg-white/5 group-hover:bg-white/10"
                  }`}>
                    <div className={`transition-all duration-300 ${
                      active ? "text-brand-red scale-110" : "text-white/60 group-hover:text-white/80"
                    }`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className={`font-light text-lg tracking-wide transition-colors duration-300 ${
                      active ? "text-white" : "text-gray-300 group-hover:text-white"
                    }`}>
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500 font-light tracking-wider">
                      {item.href === '/accueil' && 'Home'}
                      {item.href === '/roster' && 'Team'}
                      {item.href === '/shop' && 'Collection'}
                      {item.href === '/partners' && 'Partners'}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Close button - Design épuré avec animation */}
        <button
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
          className={`absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 ease-out ${
            open 
              ? "scale-100 rotate-0 opacity-100" 
              : "scale-75 rotate-90 opacity-0"
          }`}
          style={{ transitionDelay: open ? '600ms' : '0ms' }}
        >
          <X size={18} className="text-white/80" />
        </button>

        {/* Footer signature avec animation */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-center transition-all duration-700 ease-out delay-1000 ${
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
        </div>
      </div>
    </>
  );
}

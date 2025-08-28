"use client";

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PartnersPage() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation du titre principal
    gsap.fromTo(".page-title", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2
      }
    );

    // Animation de la ligne rouge - S'ÉTEND DES 2 CÔTÉS
    gsap.fromTo(".title-underline", 
      { width: 0, opacity: 0 },
      {
        width: "96px", // w-24 = 96px
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.6
      }
    );

    // Animation des cartes partenaires - STAGGER
    gsap.fromTo(".partner-card", 
      { y: 60, opacity: 0, rotationY: 10 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1, // Effet cascade
        scrollTrigger: {
          trigger: ".partners-grid",
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-blue-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="page-title text-8xl font-black text-white mb-8 tracking-tight opacity-0">
              PARTNERS
            </h1>
            <div className="title-underline w-24 h-1 bg-brand-red mx-auto opacity-0" />
          </div>
        </div>
      </section>

      {/* Partners Section - LAYERING 3D */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="partners-grid grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "RAZER", type: "Gaming Gear" },
              { name: "NIKE", type: "Apparel" },
              { name: "RED BULL", type: "Energy" },
              { name: "CORSAIR", type: "Hardware" },
              { name: "TWITCH", type: "Streaming" },
              { name: "DISCORD", type: "Community" }
            ].map((partner, i) => (
              <div key={partner.name} className="partner-card relative h-[40vh] opacity-0">
                
                {/* Logo background */}
                <div className="absolute top-0 left-0 w-[85%] h-[70%] z-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-2xl font-black mb-1">{partner.name}</div>
                    <code className="text-xs bg-gray-300 px-2 py-1 rounded">
                      logo-{partner.name.toLowerCase()}.png
                    </code>
                  </div>
                </div>

                {/* Info card qui DÉBORDE */}
                <div className="absolute bottom-0 right-0 w-[85%] h-[50%] z-20 bg-black border-4 border-white rounded-lg">
                  <div className="p-4 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-black text-white mb-1">
                      {partner.name}
                    </h3>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">
                      {partner.type}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
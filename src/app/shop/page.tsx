"use client";

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ShopPage() {

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

    // Animation des cartes produits - STAGGER
    gsap.fromTo(".product-card", 
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12, // Plus rapide pour les produits
        scrollTrigger: {
          trigger: ".products-grid",
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section - Style BMS */}
      <section className="relative py-32 bg-gradient-to-br from-red-900 via-black to-gray-900 overflow-hidden">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="page-title text-8xl font-black text-white mb-8 tracking-tight opacity-0">
              SHOP
            </h1>
            <div className="title-underline w-24 h-1 bg-brand-red mx-auto opacity-0" />
          </div>
        </div>
      </section>

      {/* Products Section - LAYERING 3D */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Grid produits avec effet 3D */}
          <div className="products-grid grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "JERSEY", price: "€89" },
              { name: "HOODIE", price: "€119" },
              { name: "CAP", price: "€49" },
              { name: "GAMING KIT", price: "€249" },
              { name: "ACCESSORIES", price: "€29" },
              { name: "LIMITED", price: "€199" }
            ].map((product, i) => (
              <div key={product.name} className="product-card relative h-[60vh] group opacity-0">
                
                {/* Image produit de fond */}
                <div className="absolute top-0 left-0 w-[90%] h-[75%] z-10">
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-xl font-black mb-1">{product.name}</div>
                      <code className="text-xs bg-gray-300 px-2 py-1 rounded">
                        {product.name.toLowerCase()}.jpg
                      </code>
                    </div>
                  </div>
                </div>

                {/* Info card qui DÉBORDE */}
                <div className="absolute bottom-0 right-0 w-[90%] h-[50%] z-20 bg-black border-4 border-brand-red rounded-lg">
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2">
                        {product.name}
                      </h3>
                      <div className="text-3xl font-black text-brand-red">
                        {product.price}
                      </div>
                    </div>
                    <button className="bg-white text-black px-6 py-2 font-bold uppercase tracking-wide hover:bg-gray-100 transition-all duration-300">
                      Shop
                    </button>
                  </div>
                </div>

                {/* Badge disponibilité */}
                <div className="absolute top-2 right-2 z-30 bg-green-500 text-white px-3 py-1 text-xs font-black rounded">
                  DISPO
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

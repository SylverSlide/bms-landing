"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AccueilPage() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [parallaxProgress, setParallaxProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation seulement au premier chargement
    if (!hasAnimated) {
      setHasAnimated(true);
    }

    // PARALLAX GSAP sur les sections layées
    const timer = setTimeout(() => {
      
      // Parallax section NEW DROP - VRAIE démarquation
      const newDropImages = document.querySelectorAll('.new-drop-img');
      newDropImages.forEach((img, index) => {
        gsap.fromTo(img, 
          { 
            y: index === 0 ? 80 : 300 // Image 2 part de VRAIMENT plus bas
          },
          {
            y: index === 0 ? -30 : -200, // Image 2 monte VRAIMENT plus vite
            ease: "none",
            scrollTrigger: {
              trigger: img.closest('section'),
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5 // Plus fluide
            }
          }
        );
      });

      // Parallax section THE CREW - VRAIE démarquation  
      const crewImages = document.querySelectorAll('.crew-img');
      crewImages.forEach((img, index) => {
        gsap.fromTo(img,
          {
            y: index === 0 ? 60 : 280 // Image 2 part de VRAIMENT plus bas
          },
          {
            y: index === 0 ? -20 : -180, // Image 2 monte VRAIMENT plus vite
            ease: "none",
            scrollTrigger: {
              trigger: img.closest('section'),
              start: "top bottom", 
              end: "bottom top",
              scrub: 0.5 // Plus fluide
            }
          }
        );
      });

      // Animation des titres au scroll
      gsap.fromTo(".scroll-title", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".scroll-title",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

              // Logo shield mobile - Apparition douce (pas cringe)
        gsap.fromTo(".mobile-shield", 
          { 
            opacity: 0,
            y: 20 // Très léger mouvement vertical
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power1.out", // Plus doux que power2
            delay: 0.3 // Petit délai après l'arrivée sur la page
          }
        );

        // Parallax mobile shield au scroll
        gsap.to(".mobile-shield", {
          yPercent: -6,       // très léger
          ease: "none",
          scrollTrigger: {
            trigger: ".section-conteneur", // parent de l'image
            start: "top bottom",
            end: "bottom top",
            scrub: 0.2      // fluidifie sans être bouncy
          }
        });

      // Animation des soulignements au scroll - SÉPARÉS
      gsap.fromTo(".underline-drop", 
        { width: 0 },
        {
          width: "100%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".underline-drop",
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(".underline-crew", 
        { width: 0 },
        {
          width: "100%", 
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".underline-crew",
            start: window.innerWidth < 768 ? "top 90%" : "top 50%", // Responsive
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animation des lignes rouges au scroll
      gsap.fromTo(".red-line", 
        { width: "96px" }, // w-24 = 96px
        {
          width: "128px", // w-32 = 128px
          duration: 1, // Plus long aussi
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".red-line",
            start: "top 60%", // Plus tard
            toggleActions: "play none none reverse"
          }
        }
      );

    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [hasAnimated]);

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section - Image responsive */}
      <section className="bg-black">
        
        {/* Image Desktop - Horizontale */}
        <div className="hidden sm:block py-4 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4">
            <Image 
              src="/bms_esports_cover.jpg" 
              alt="BMS Esports Cover" 
              width={800}
              height={200}
              quality={100}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Image Mobile - Logo BMS Shield */}
        <div className="block sm:hidden py-12 section-conteneur">
          <div className="max-w-sm mx-auto px-4">
            <div className="relative">
              {/* Background pour faire ressortir le logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl" />
              
              {/* Logo BMS Shield avec animation */}
              <div className="relative p-8 flex items-center justify-center">
                <Image 
                  src="/bms_mobile.jpg" 
                  alt="BMS Shield Logo" 
                  width={300}
                  height={300}
                  quality={100}
                  className="mobile-shield w-full h-auto max-w-[280px] opacity-0"
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Section Collection - EFFET 3D LAYERING */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
        
        {/* Motifs de fond - Style gaming */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ea2e2e' stroke-width='1'%3E%3Cpath d='M10 10L90 10L90 90L10 90Z'/%3E%3Cpath d='M20 20L80 20L80 80L20 80Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Left: Typography - Animation au scroll */}
            <div className="space-y-8">
              <div>
                <h2 className="scroll-title text-8xl font-black text-white mb-4 leading-none tracking-tight">
                  NEW<br/>
                  <span className="relative">
                    DROP
                    {/* Soulignement qui s'active au scroll */}
                    <div className="underline-drop absolute bottom-0 left-0 w-0 h-1 bg-brand-red" />
                  </span>
                </h2>
                <div className="red-line w-24 h-1 bg-brand-red" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="group"
              >
                <Link 
                  href="/shop"
                  className="relative inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold text-lg uppercase tracking-wide transition-all duration-300 hover:bg-gray-100 overflow-hidden"
                >
                  <span className="relative z-10">Découvrir</span>
                  {/* Effet shimmer subtil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600" />
                </Link>
              </motion.div>
            </div>

            {/* Right: Images avec animations hover subtiles */}
            <div className="relative h-[60vh] lg:h-[80vh] group">
              
              {/* Image de fond - Maillot 1 (vitesse normale) */}
              <div className="new-drop-img absolute top-0 left-0 w-[70%] h-[80%] z-10">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image 
                    src="/maillot_1.jpg" 
                    alt="BMS Maillot 1" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Image premier plan - Maillot 2 (vitesse rapide) */}
              <div className="new-drop-img absolute top-[20%] right-0 w-[70%] h-[80%] z-20">
                <div className="w-full h-full rounded-lg border-4 border-brand-red overflow-hidden">
                  <Image 
                    src="/maillot_2.jpg" 
                    alt="BMS Maillot 2" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Logo BMS statique */}
              <div className="absolute bottom-4 left-4 z-30">
                <Image 
                  src="/LOGO.webp" 
                  alt="BMS Logo" 
                  width={80} 
                  height={80}
                  className="w-16 h-16 opacity-90"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section équipe - EFFET 3D LAYERING */}
      <section className="relative py-32 bg-black overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Left: Images statiques et professionnelles */}
            <div className="relative h-[60vh] lg:h-[80vh]">
              
              {/* Image de fond - BMS Crew (vitesse normale) */}
              <div className="crew-img absolute top-0 right-0 w-[80%] h-[70%] z-10">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image 
                    src="/IMG_7394.png" 
                    alt="BMS Crew" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Image premier plan - qui DÉBORDE (vitesse rapide) */}
              <div className="crew-img absolute bottom-0 left-0 w-[75%] h-[70%] z-20">
                <div className="w-full h-full bg-gray-700 rounded-lg border-4 border-white flex items-center justify-center">
                  <div className="text-center text-white/70">
                    <div className="text-xl font-black mb-2">PHOTO ÉQUIPE</div>
                    <Image 
                    src="/bms_3.jpg" 
                    alt="BMS Crew" 
                    fill
                    className="object-cover"
                  />
                  </div>
                </div>
              </div>

              {/* Logo BMS statique */}
              <div className="absolute top-4 left-4 z-30">
                <Image 
                  src="/LOGO.webp" 
                  alt="BMS Logo" 
                  width={60} 
                  height={60}
                  className="w-12 h-12"
                />
              </div>

            </div>

            {/* Right: Typography - Animation au scroll */}
            <div className="space-y-8">
              <div>
                <h2 className="scroll-title text-8xl font-black text-white mb-4 leading-none tracking-tight">
                  THE<br/>
                  <span className="relative">
                    CREW
                    {/* Soulignement qui s'active au scroll */}
                    <div className="underline-crew absolute bottom-0 left-0 w-0 h-1 bg-brand-red" />
                  </span>
                </h2>
                <div className="red-line w-24 h-1 bg-brand-red" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                <Link 
                  href="/roster"
                  className="relative inline-flex items-center justify-center px-8 py-3 border-2 border-white hover:bg-white hover:text-black text-white font-bold text-lg uppercase tracking-wide transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Roster</span>
                  {/* Effet shimmer subtil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-600" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}


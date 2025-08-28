"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        router.push("/accueil");
      }, 500); // Délai pour l'animation de sortie
    }, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <motion.div 
      className="min-h-[100svh] flex items-center justify-center relative bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Background minimaliste */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
      
      {/* Logo avec animation Framer Motion */}
      <motion.div 
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0 bg-brand-red/5 rounded-full blur-3xl scale-150" 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1.4, 1.6, 1.4]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <Image 
          src="/LOGO.webp" 
          alt="BMS Logo" 
          width={180}
          height={180}
          priority 
          className="relative z-10 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px]"
        />
      </motion.div>
    </motion.div>
  );
}

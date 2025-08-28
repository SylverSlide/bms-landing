"use client";

import Image from "next/image";

export default function PartnersPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-blue-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-8xl font-black text-white mb-8 tracking-tight">
              PARTNERS
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto" />
          </div>
        </div>
      </section>

      {/* Partners Section - LAYERING 3D */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "RAZER", type: "Gaming Gear" },
              { name: "NIKE", type: "Apparel" },
              { name: "RED BULL", type: "Energy" },
              { name: "CORSAIR", type: "Hardware" },
              { name: "TWITCH", type: "Streaming" },
              { name: "DISCORD", type: "Community" }
            ].map((partner, i) => (
              <div key={partner.name} className="relative h-[40vh]">
                
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
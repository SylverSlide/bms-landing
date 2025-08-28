"use client";

import Image from "next/image";

export default function CompetitionsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-black to-purple-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-8xl font-black text-white mb-8 tracking-tight">
              MATCHES
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto" />
          </div>
        </div>
      </section>

      {/* Results Section - LAYERING 3D */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-12">
            {[
              { tournament: "CHAMPIONSHIP 2024", placement: "1ST", status: "WIN" },
              { tournament: "SPRING MAJOR", placement: "3RD", status: "WIN" },
              { tournament: "INTERNATIONAL CUP", placement: "LIVE", status: "LIVE" },
              { tournament: "WINTER FINALS", placement: "SOON", status: "UPCOMING" }
            ].map((comp, i) => (
              <div key={comp.tournament} className="relative h-32">
                
                {/* Background tournament */}
                <div className="absolute top-0 left-0 w-[75%] h-full z-10 bg-gray-200 rounded-lg flex items-center px-8">
                  <h3 className="text-3xl font-black">
                    {comp.tournament}
                  </h3>
                </div>

                {/* Result card qui DÉBORDE */}
                <div className="absolute top-4 right-0 w-[60%] h-full z-20 bg-black border-4 border-brand-red rounded-lg flex items-center justify-between px-8">
                  <div className="text-4xl font-black text-white">
                    {comp.placement}
                  </div>
                  <div className={`px-4 py-2 font-bold uppercase text-sm rounded ${
                    comp.status === 'WIN' ? 'bg-green-500 text-white' :
                    comp.status === 'LIVE' ? 'bg-brand-red text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {comp.status}
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
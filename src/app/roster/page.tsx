"use client";

import Image from "next/image";

export default function RosterPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section - Style BMS */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-red-900 overflow-hidden">
        
        {/* Background avec motifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M20 20L60 20L60 60L20 60Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-8xl font-black text-white mb-8 tracking-tight">
              ROSTER
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto" />
          </div>
        </div>
      </section>

      {/* Players Section - LAYERING 3D */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Grid de joueurs avec effet 3D - VRAIS JOUEURS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Ogey", realName: "Rayane Noubli", main: "Captain Falcon", country: "🇫🇷", joinDate: "2021" },
              { name: "crêpe salée", realName: "Laurent Vorburger", main: "Steve/Wario", country: "🇫🇷", joinDate: "2022" },
              { name: "Bloom4Eva", realName: "Oliver Alexander", main: "Bayonetta", country: "🇬🇧", joinDate: "2022" },
              { name: "Luugi", realName: "Adam Jassim", main: "Luigi", country: "🇬🇧", joinDate: "2024" },
              { name: "Vic", realName: "Victor Madubost", main: "Yoshi", country: "🇫🇷", joinDate: "2024" },
              { name: "Dizio", realName: "Adil Aiachine", main: "Fox", country: "🇫🇷", joinDate: "2024" }
            ].map((player, index) => (
              <div key={player.name} className="relative h-[50vh] group">
                
                {/* Image de fond */}
                <div className="absolute top-0 left-0 w-[85%] h-[80%] z-10">
                  <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-lg font-black mb-1">{player.name.toUpperCase()}</div>
                      <code className="text-xs bg-gray-400 px-2 py-1 rounded">
                        {player.name.toLowerCase().replace(' ', '-')}.jpg
                      </code>
                    </div>
                  </div>
                </div>

                {/* Overlay qui DÉBORDE */}
                <div className="absolute bottom-0 right-0 w-[85%] h-[60%] z-20 bg-black border-4 border-brand-red rounded-lg">
                  <div className="p-4 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-black text-white mb-1">
                      {player.name.toUpperCase()}
                    </h3>
                    <div className="text-sm text-brand-red uppercase tracking-widest mb-1">
                      {player.main}
                    </div>
                    <div className="text-xs text-gray-400">
                      {player.country} • {player.joinDate}
                    </div>
                  </div>
                </div>

                {/* Badge qui flotte */}
                <div className="absolute top-2 right-2 z-30 bg-brand-red text-white px-2 py-1 text-xs font-black rounded">
                  {player.country}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section - SOBRE */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-8">
            REJOINDRE BMS
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Équipe Smash Bros compétitive • France/UK
          </p>
          <button className="px-12 py-4 border-2 border-white hover:bg-white hover:text-black text-white font-bold text-lg uppercase tracking-wide transition-all duration-300">
            Contact
          </button>
        </div>
      </section>

    </div>
  );
}

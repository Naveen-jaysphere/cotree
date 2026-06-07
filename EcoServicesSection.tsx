import React, { useState } from 'react';
import { ECO_SERVICES } from '../utils/treeData';
import { Scissors, AlertTriangle, Leaf, Compass, ChevronRight, Check } from 'lucide-react';
import { ServiceDetail } from '../types';

export default function EcoServicesSection({ onSelectService }: { onSelectService: (serviceId: string) => void }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="h-6 w-6 stroke-[1.75]" />;
      case 'AlertTriangle': return <AlertTriangle className="h-6 w-6 stroke-[1.75]" />;
      case 'Leaf': return <Leaf className="h-6 w-6 stroke-[1.75]" />;
      case 'Compass': return <Compass className="h-6 w-6 stroke-[1.75]" />;
      default: return <Leaf className="h-6 w-6 stroke-[1.75]" />;
    }
  };

  return (
    <section id="services-grid" className="py-24 bg-stone-950 border-b border-stone-900 overflow-hidden relative">
      <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-900/50 text-emerald-400 px-3 py-1 rounded-full text-xs font-mono">
            <span>Our Professional Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Straightforward, Certified Tree Services
          </h2>
          <p className="text-stone-400 text-base sm:text-lg leading-relaxed">
            From safe, absolute tree removal to precision tree trimming, our services are structured to protect your home, keep your property clean, and get the job done right.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ECO_SERVICES.map((service: ServiceDetail) => {
            const isHovered = hoveredId === service.id;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group p-8 bg-stone-900/40 hover:bg-stone-900 border border-stone-800/80 hover:border-emerald-900/50 rounded-3xl transition-all duration-300 flex flex-col justify-between shadow-lg relative overflow-hidden"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Visual glow background in hover */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-emerald-900/5 rounded-full blur-2xl group-hover:bg-emerald-900/20 transition-all duration-300" />
                
                <div className="space-y-4">
                  {/* Icon and label */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-stone-950 border border-stone-800 text-emerald-400 rounded-2xl group-hover:bg-emerald-950 group-hover:border-emerald-800/40 transition-colors duration-200">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-stone-500 font-mono text-xs tracking-wider uppercase bg-stone-950/60 px-3 py-1 rounded-lg">
                      Est. Price: {service.basePrice}
                    </span>
                  </div>

                  {/* Title and main description */}
                  <h3 className="text-xl font-bold text-stone-100 font-sans group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Eco Highlight details */}
                  <div className="pt-3 border-t border-stone-800 flex items-start space-x-2 text-stone-400">
                    <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-emerald-400 font-bold uppercase font-mono tracking-wider">
                        Service Highlight:{" "}
                      </span>
                      <span className="text-xs text-stone-400 line-clamp-2">
                        {service.ecoHighlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Estimate CTA trigger */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 focus:outline-none"
                  >
                    <span>Run a ballpark calculation</span>
                    <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

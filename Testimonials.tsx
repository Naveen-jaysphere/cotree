import React, { useState } from 'react';
import { NEIGHBOR_TESTIMONIALS } from '../utils/treeData';
import { Star, ShieldCheck, MapPin, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [activeTest, setActiveTest] = useState(0);

  return (
    <section id="testimonials-gallery" className="py-24 bg-stone-950 border-b border-stone-900 overflow-hidden relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-emerald-950/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Testimonial slider section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-900/40 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono">
              <Quote className="h-3.5 w-3.5" />
              <span>Middle Tennessee Neighboorhood Reviews</span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
              What your neighbors say about <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Ingrid's custom care
              </span>
            </h2>

            {/* Testimonial Display Card */}
            <div className="bg-stone-900/40 border border-stone-800/80 rounded-3xl p-6 sm:p-8 relative min-h-[220px] transition-all">
              <Quote className="absolute right-6 top-6 h-12 w-12 text-stone-800 opacity-30" />
              
              <div className="flex items-center space-x-1 text-emerald-400 mb-4">
                {[...Array(NEIGHBOR_TESTIMONIALS[activeTest].rating)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-current" />
                ))}
              </div>

              <p className="text-stone-200 text-sm sm:text-base leading-relaxed italic mb-6">
                "{NEIGHBOR_TESTIMONIALS[activeTest].review}"
              </p>

              <div className="flex items-center justify-between border-t border-stone-800/60 pt-4">
                <div>
                  <div className="text-sm font-bold text-white font-sans">
                    {NEIGHBOR_TESTIMONIALS[activeTest].name}
                  </div>
                  <div className="text-xs text-stone-500 flex items-center gap-1 font-mono mt-0.5">
                    <MapPin className="h-3 w-3 text-emerald-500" />
                    <span>{NEIGHBOR_TESTIMONIALS[activeTest].location}</span>
                  </div>
                </div>

                <span className="text-[10px] text-emerald-400 uppercase font-mono tracking-widest bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-900/30">
                  {NEIGHBOR_TESTIMONIALS[activeTest].service}
                </span>
              </div>
            </div>

            {/* Dot selectors */}
            <div className="flex justify-start space-x-2.5 pt-2">
              {NEIGHBOR_TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTest(idx)}
                  className={`h-2.5 transition-all rounded-full ${
                    activeTest === idx ? 'w-8 bg-emerald-500' : 'w-2.5 bg-stone-800 hover:bg-stone-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Before / After graphic */}
          <div className="lg:col-span-5">
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                <span className="text-xs font-bold font-mono text-stone-400 uppercase tracking-widest">
                  Arborist Case Studies
                </span>
                <span className="text-[10px] bg-emerald-950 border border-emerald-900 text-emerald-400 px-2.5 py-0.5 rounded-md font-mono">
                  Preserved Oak
                </span>
              </div>

              {/* Slider image containers */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-bold text-center">
                    Before (Damaged Canopy)
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-red-950 bg-stone-950 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=400&h=300" 
                      alt="Damaged oak branches before eco-surgery"
                      className="object-cover w-full h-full grayscale opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 py-1 bg-red-950/60 text-[9px] text-red-300 text-center font-mono font-bold uppercase tracking-widest border-t border-red-900">
                      Unpruned Storm Risk
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-bold text-center">
                    After (Cleaned & Rooted)
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-950 bg-stone-950 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=400&h=300" 
                      alt="Clean and healthy tree canopy"
                      className="object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 py-1 bg-emerald-950/80 text-[9px] text-emerald-300 text-center font-mono font-bold uppercase tracking-widest border-t border-emerald-900">
                      Crowned & Restored
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanation caption */}
              <p className="text-stone-400 text-xs leading-relaxed mt-4 pt-4 border-t border-stone-800">
                <strong>Project: 150-Year-Old White Oak (West Meade).</strong> Lightning strike split the upper lead branch. We rigged ropes, meticulously pruned out only the decayed wood, aerated compacted limestone clay, and treated with active neem soil tea. Preserved.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

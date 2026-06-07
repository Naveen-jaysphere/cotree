import React from 'react';
import { TreePine, MapPin, Calendar, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header id="site-header" className="sticky top-0 z-50 bg-stone-900/90 backdrop-blur-md border-b border-emerald-950/40 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <div id="brand-logo" className="flex items-center space-x-3">
          <div className="p-2 sm:p-2.5 bg-emerald-800 text-emerald-100 rounded-xl shadow-md border border-emerald-700/50">
            <TreePine className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-1.5">
              C&O <span className="text-emerald-400 font-medium">Tree Service</span>
            </h1>
            <p className="text-[11px] text-stone-400 uppercase tracking-widest font-mono">
              Nashville & Surrounding Areas
            </p>
          </div>
        </div>

        {/* Location & Established metadata */}
        <div id="header-metadata" className="hidden md:flex items-center space-x-8 text-xs font-mono text-stone-300">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-emerald-500 animate-pulse" />
            <span>Nashville Area, TN</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-emerald-500" />
            <span>Est. 2019</span>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div id="header-cta" className="flex items-center space-x-4">
          <a
            href="tel:2149271976"
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-xl transition duration-200 text-sm shadow-lg shadow-emerald-900/20"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Us:</span>
            <span>(214) 927-1976</span>
          </a>
        </div>
      </div>
    </header>
  );
}

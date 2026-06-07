import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AboutIngrid from './components/AboutIngrid';
import EcoServicesSection from './components/EcoServicesSection';
import TreeConsultant from './components/TreeConsultant';
import CostEstimator from './components/CostEstimator';
import CommunityCare from './components/CommunityCare';
import Testimonials from './components/Testimonials';
import { ArrowRight, TreePine, ShieldCheck, Heart, Sparkles, Phone, HelpCircle, AlertCircle } from 'lucide-react';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  // Safe reference to the generated hero asset
  const heroImageSrc = "/src/assets/images/nashville_tree_hero_1780850727610.png";

  return (
    <div id="app-root" className="min-h-screen bg-stone-950 font-sans text-stone-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-emerald-950">
      
      {/* 1. Sticky Glass Header */}
      <Navbar />

      <main className="flex-grow">
        
        {/* 2. Hero Section - Custom Banner & Core Promise */}
        <section id="hero-banner" className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-900/35 z-10" />
          
          {/* Main photorealistic generated Middle Tennessee Oak hero image background */}
          <img 
            src={heroImageSrc} 
            alt="Majestic mature Oak tree just outside Nashville" 
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-[8000ms]"
            referrerPolicy="no-referrer"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full h-full py-10 flex flex-col justify-center">
            <div className="max-w-3xl space-y-6">
              
              {/* Top tag */}
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 px-3.5 py-2 rounded-xl text-xs font-mono select-none">
                <Sparkles className="h-4 w-4 animate-pulse text-emerald-400" />
                <span>C&O Tree Service | Clean & Professional</span>
              </div>

              {/* Catchy headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Tree Removal & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300">
                  Tree Trimming in Nashville
                </span>
              </h1>

              {/* Direct value prop */}
              <p className="text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-2xl drop-shadow">
                Based in Nashville and the surrounding areas, <strong>C&O Tree Service</strong> has provided straightforward, safe, and fully insured tree removal and tree trimming services since 2019. We clean up every twig and branch to leave your yard perfectly tidy.
              </p>

              {/* Multi-feature buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <a
                  href="#services-grid"
                  className="bg-emerald-600 hover:bg-emerald-500 text-stone-100 font-bold px-6 py-3.5 rounded-2xl transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/35 cursor-pointer select-none"
                >
                  <span>See Our Services</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#ai-advisor"
                  className="bg-stone-900/80 hover:bg-stone-900 text-stone-200 hover:text-white border border-stone-800 hover:border-emerald-900/50 font-semibold px-6 py-3.5 rounded-2xl transition text-sm flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer select-none"
                >
                  <span>Ask Virtual Ingrid</span>
                </a>
              </div>

              {/* Visual trust markers */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-stone-800/50 max-w-xl text-xs text-stone-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Licensed & Fully Insured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4 text-emerald-500" />
                  <span>Complete Yard Cleanup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TreePine className="h-4 w-4 text-emerald-500" />
                  <span>Nashville & Surrounding Areas</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Meet Ingrid Section */}
        <AboutIngrid />

        {/* 4. Service Display Section */}
        <EcoServicesSection onSelectService={handleSelectService} />

        {/* 5. Virtual Arborist API Consult Panel */}
        <TreeConsultant />

        {/* 6. Dynamic Estimator Section */}
        <CostEstimator defaultService={selectedServiceId} />

        {/* 7. Local Species Catalog & Wood Chip Program */}
        <CommunityCare />

        {/* 8. Testimonials & Before/After Gallery */}
        <Testimonials />

        {/* 9. Final CTA Banner section */}
        <section id="contact-banner" className="py-24 bg-gradient-to-t from-stone-950 to-stone-900 text-center relative overflow-hidden">
          <div className="absolute right-10 top-1/4 w-72 h-72 bg-emerald-900/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get an Estimate in the Nashville Area
            </h2>
            <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We offer free upfront bids for properties just outside of Nashville. Fully insured tree removal and precision trimming with zero hassle.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-3">
              <a
                href="tel:2149271976"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-2xl transition duration-200 flex items-center gap-2 text-sm shadow-xl shadow-emerald-900/20"
              >
                <Phone className="h-4.5 w-4.5" />
                <span>Call C&O: (214) 927-1976</span>
              </a>

              <a
                href="#site-header"
                className="text-stone-400 hover:text-stone-200 text-xs font-mono uppercase tracking-widest py-3 hover:underline"
              >
                Back To Top
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 10. Footer info */}
      <footer className="bg-stone-950 py-12 border-t border-stone-900 text-stone-500 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="text-stone-300 font-bold font-sans text-sm">
              C&O Tree Service
            </div>
            <p className="font-mono text-[10px]">
              Nashville Area, Tennessee • Established in 2019
            </p>
          </div>

          <div id="footer-notes" className="text-center md:text-right max-w-md space-y-1">
            <p className="leading-relaxed">
              Serving Franklin, Brentwood, Bellevue, West Meade, Hendersonville, and surrounding communities.
            </p>
            <p className="text-[10px] text-stone-600 font-mono">
              Professional Tree Care Specialists. &copy; {new Date().getFullYear()} C&O Tree Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

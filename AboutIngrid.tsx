import React from 'react';
import { Leaf, HardHat, Award, ShieldCheck, Heart } from 'lucide-react';

export default function AboutIngrid() {
  const pillars = [
    {
      icon: <Leaf className="h-5 w-5 text-emerald-400" />,
      title: "Safe Tree Trimming",
      desc: "We focus on clean, precise pruning to clear limbs near roofs, remove deadwood, and protect your home against Nashville storm damage."
    },
    {
      icon: <Award className="h-5 w-5 text-emerald-400" />,
      title: "Complete Debris Cleanup",
      desc: "We don't leave mess behind. Our crew cleans up every twig, branch, and leaves your lawn completely clear and tidy."
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      title: "Nashville & Surrounding Area",
      desc: "Serving Nashville, Franklin, Brentwood, Hendersonville, and neighboring areas with prompt, straightforward, and reliable service."
    }
  ];

  return (
    <section id="about-ingrid" className="py-20 bg-stone-900 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text columns */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono">
              <Heart className="h-3.5 w-3.5 fill-current animate-pulse" />
              <span>Meet the Owner</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Straightforward, Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Tree Removal & Trimming
              </span>
            </h2>

            <p className="text-stone-300 leading-relaxed text-base sm:text-lg">
              Hi, I’m <strong>Ingrid</strong>, the owner of <strong>C&O Tree Service</strong>. Since 2019, our team has provided reliable, clean, and professional tree removal and tree trimming services to homeowners and businesses throughout Nashville and the surrounding area.
            </p>

            <p className="text-stone-400 leading-relaxed text-sm sm:text-md">
              We started this company to deliver premium work at a fair price with absolute safety and transparency. C&O Tree Service is fully insured, equipped with heavy-duty rigging and climbing gear, and committed to leaving your site completely spotless when the job is done.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-stone-950/50 border border-stone-800 rounded-2xl">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">2019</div>
                <div className="text-xs text-stone-500 font-mono mt-1">Established locally</div>
              </div>
              <div className="p-4 bg-stone-950/50 border border-stone-800 rounded-2xl">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</div>
                <div className="text-xs text-stone-500 font-mono mt-1">Clean-Up Guarantee</div>
              </div>
              <div className="p-4 bg-stone-950/50 border border-stone-800 rounded-2xl">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Fully</div>
                <div className="text-xs text-stone-500 font-mono mt-1">Insured & Licensed</div>
              </div>
            </div>
          </div>

          {/* Decorative Features Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-950/80 rounded-3xl p-6 sm:p-8 border border-emerald-950/50 shadow-xl relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-emerald-900/10 rounded-full blur-2xl" />
              <h3 className="text-lg font-bold text-stone-100 font-sans mb-6 pb-2 border-b border-stone-800">
                Our Work Standard
              </h3>
              
              <div className="space-y-6">
                {pillars.map((pillar, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-emerald-950/55 border border-emerald-900/40 rounded-xl h-10 w-10 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-200">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-stone-400 leading-relaxed mt-1">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

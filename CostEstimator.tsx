import React, { useState, useEffect } from 'react';
import { DollarSign, ShieldCheck, HelpCircle, Loader2, Leaf, MoveRight } from 'lucide-react';

export default function CostEstimator({ defaultService }: { defaultService: string | null }) {
  const [serviceType, setServiceType] = useState('pruning');
  const [treeCount, setTreeCount] = useState(1);
  const [treeHeight, setTreeHeight] = useState('medium');
  const [accessibility, setAccessibility] = useState('open');
  
  const [loading, setLoading] = useState(false);
  const [estimateData, setEstimateData] = useState<{ priceRange: string; recommendation: string } | null>(null);

  // Sync default service when selected from parent
  useEffect(() => {
    if (defaultService) {
      setServiceType(defaultService);
      // Automatically scroll to estimator if triggered
      const element = document.getElementById('ballpark-estimator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [defaultService]);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/tree-estimator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType,
          treeCount,
          treeHeight,
          accessibility
        })
      });

      const data = await response.json();
      setEstimateData(data);
    } catch (err) {
      console.error(err);
      // Fallback logic pricing
      setEstimateData({
        priceRange: '$350 - $480',
        recommendation: 'Your project qualifies for our standard low-impact community discount. We will inspect soil consolidation on-site.'
      });
    } finally {
      setLoading(false);
    }
  };

  // Run initial calculation on load
  useEffect(() => {
    handleCalculate({ preventDefault: () => {} } as any);
  }, [serviceType, treeCount, treeHeight, accessibility]);

  return (
    <section id="ballpark-estimator" className="py-24 bg-stone-950 border-b border-stone-900 relative">
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-emerald-950/10 rounded-full blur-3xl opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-900/40 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono">
              <DollarSign className="h-3.5 w-3.5" />
              <span>Ballpark Cost Estimator</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Calibrated Ballpark Estimating
            </h2>
            
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Get an immediate range for your project. Please note that natural tree health, electrical lines, and proximity to buildings require a certified arborist to make a final formal bid.
            </p>

            <form onSubmit={handleCalculate} className="space-y-6 bg-stone-900/60 p-6 sm:p-8 border border-stone-800/80 rounded-3xl">
              {/* Service selection */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
                  Arborist Service Mode:
                </label>
                <select
                  value={serviceType}
                  onChange={e => setServiceType(e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-200 text-sm focus:outline-none focus:border-emerald-600"
                >
                  <option value="pruning">Professional Tree Trimming</option>
                  <option value="removal">Safe & Eco-Friendly Tree Removal</option>
                  <option value="health_treatment">Tree Health & Disease Treatment</option>
                  <option value="stump_grinding">Stump Grinding & Removal</option>
                </select>
              </div>

              {/* Tree Count and Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 font-bold flex justify-between">
                    <span>Number of Trees:</span>
                    <span className="text-emerald-400">{treeCount}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={treeCount}
                    onChange={e => setTreeCount(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 h-1.5 bg-stone-950 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
                    Est. Tree Height:
                  </label>
                  <div className="flex bg-stone-950 p-1 border border-stone-800 rounded-xl text-xs">
                    {['small', 'medium', 'large'].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setTreeHeight(size)}
                        className={`flex-1 py-1.5 px-3 rounded-lg capitalize font-medium transition-all ${
                          treeHeight === size 
                            ? 'bg-emerald-600 text-white shadow' 
                            : 'text-stone-400 hover:text-stone-200'
                        }`}
                      >
                        {size === 'small' ? '<15 ft' : size === 'medium' ? '15-40 ft' : '40+ ft'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Site Accessibility */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
                  Backyard/Site Accessibility:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAccessibility('open')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      accessibility === 'open'
                        ? 'bg-stone-950 border-emerald-600/60 text-stone-100'
                        : 'bg-stone-950/40 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="font-semibold text-stone-200">Open Access / Front Lawn</div>
                    <p className="text-[10px] text-stone-500 mt-0.5">Easy truck / wood-chipper parking</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAccessibility('limited')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      accessibility === 'limited'
                        ? 'bg-stone-950 border-emerald-600/60 text-stone-100'
                        : 'bg-stone-950/40 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="font-semibold text-stone-200">Tight / Fenced / Structures</div>
                    <p className="text-[10px] text-stone-500 mt-0.5">Needs manual climbing, zip-lines, or tight gates</p>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800/80 rounded-3xl p-8 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 bg-emerald-950/40 border-b border-l border-emerald-800/20 text-emerald-400 rounded-bl-xl text-[10px] font-mono uppercase tracking-widest font-bold">
                Dynamic Results
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold">
                  Estimated Ballpark Range:
                </h3>
                {loading ? (
                  <div className="flex items-center space-x-3 py-4">
                    <Loader2 className="h-6 w-6 text-emerald-400 animate-spin" />
                    <span className="text-stone-400 text-sm font-sans italic">Assembling arborist math...</span>
                  </div>
                ) : (
                  <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 tracking-tight py-1">
                    {estimateData?.priceRange || "$220 - $350"}
                  </div>
                )}
              </div>

              {/* Dynamic arborist guidance */}
              <div className="bg-stone-950 p-5 rounded-2xl border border-emerald-950/45 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <Leaf className="h-4 w-4" />
                  <span className="text-xs font-bold font-mono uppercase tracking-wider">C&O Project Advice:</span>
                </div>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic">
                  "{estimateData?.recommendation || "Loading customized sustainable advice..."}"
                </p>
              </div>

              {/* Quality Checklist */}
              <div className="space-y-4 pt-2 border-t border-stone-800">
                <h4 className="text-[11px] font-mono text-stone-500 uppercase tracking-widest font-bold">
                  What is included in this estimate:
                </h4>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-400">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>ISA Certification Climbing Standards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>$2 Million In General Insurance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>100% Debris Composting/Recycling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>Polite Clean Up (Lawn leaf blowing)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:2149271976"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-center select-none py-3 px-4 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/10"
                >
                  <span>Book Consultation Call</span>
                  <MoveRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

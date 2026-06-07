import React, { useState } from 'react';
import { NATIVE_NASHVILLE_TREES } from '../utils/treeData';
import { Leaf, Truck, Users, ShieldCheck, Heart, Search, CheckCircle2 } from 'lucide-react';
import { TreeSpecies } from '../types';

export default function CommunityCare() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTree, setSelectedTree] = useState<TreeSpecies | null>(NATIVE_NASHVILLE_TREES[0]);

  // Wood chip form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Filter local trees
  const filteredTrees = NATIVE_NASHVILLE_TREES.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setAddress('');
      setNotes('');
    }, 4000);
  };

  return (
    <section id="community-care" className="py-24 bg-stone-900 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Module 1: Native Species Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* List and Selector column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-900/40 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono">
                <Users className="h-3.5 w-3.5" />
                <span>Nashville Tree Care Guide</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Know Your Nashville Trees
              </h2>
              <p className="text-stone-400 text-xs">
                Since 2019, our crew has maintained and cut trees of all sizes across Nashville and the surrounding areas. Select a native tree to see care details:
              </p>
            </div>

            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-stone-500" />
              <input
                type="text"
                placeholder="Search maple, oak, hemlock..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-emerald-600 font-sans"
              />
            </div>

            {/* Tree listing */}
            <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin">
              {filteredTrees.map((tree) => (
                <button
                  key={tree.id}
                  onClick={() => setSelectedTree(tree)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex justify-between items-center ${
                    selectedTree?.id === tree.id
                      ? 'bg-emerald-950/30 border-emerald-800/80 text-emerald-400 shadow-md'
                      : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div>
                    <div className="font-bold text-xs text-stone-100">{tree.name}</div>
                    <div className="text-[10px] text-stone-500 italic font-mono mt-0.5">{tree.scientificName}</div>
                  </div>
                  <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-md ${
                    tree.type === 'evergreen' ? 'bg-teal-950 text-teal-300' : 'bg-amber-950 text-amber-300'
                  }`}>
                    {tree.type}
                  </span>
                </button>
              ))}
              {filteredTrees.length === 0 && (
                <p className="text-xs text-stone-500 italic">No matching Nashville species found.</p>
              )}
            </div>
          </div>

          {/* Details column */}
          <div className="lg:col-span-7">
            {selectedTree ? (
              <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 bg-emerald-950/30 border-b border-l border-emerald-800/20 text-emerald-400 rounded-bl-xl text-[9px] font-mono uppercase tracking-widest font-bold">
                  Arborist Leaflet
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-bold text-stone-100 font-sans">{selectedTree.name}</h3>
                  <div className="text-xs text-stone-400 font-mono italic">{selectedTree.scientificName}</div>
                </div>

                <p className="text-stone-300 text-sm leading-relaxed">{selectedTree.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800/40">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-widest font-bold mb-1">
                      Tennessee Soil Profile:
                    </span>
                    <span className="text-stone-300 leading-relaxed font-sans">{selectedTree.soilPreference}</span>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800/40">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-widest font-bold mb-1">
                      Optimal Prunings Month:
                    </span>
                    <span className="text-stone-300 leading-relaxed font-sans">{selectedTree.pruningSeason}</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-950/10 border border-emerald-950 rounded-2xl space-y-1">
                  <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono font-bold">
                    Primary Tree Characteristics:
                  </span>
                  <p className="text-stone-300 text-xs leading-relaxed">{selectedTree.ecoBenefit}</p>
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center border border-stone-800 rounded-3xl text-sm text-stone-500 italic">
                Choose a Nashville species from the left list to read arborist profile data.
              </div>
            )}
          </div>
        </div>

        {/* Module 2: Free Chip Delivery Waitlist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-stone-800/40">
          
          {/* Explanation Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono">
              <Truck className="h-3.5 w-3.5" />
              <span>Byproduct Drop-Off Program</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
              Free Wood Chip Delivery
            </h2>

            <p className="text-stone-300 text-sm leading-relaxed">
              When our crew performs tree trimming or tree removal services in Nashville and the surrounding areas, we generate wood chips. We dump these chips for free to local residents who need mulch.
            </p>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              If you need wood chips for landscaping, garden beds, or weed prevention, sign up below to join our local drop-off waitlist. When we are working on a job in your neighborhood, we can bring a truckload straight to your property.
            </p>

            <div className="flex gap-4 items-start text-xs text-stone-400">
              <ShieldCheck className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-200">Delivery Criteria:</strong> Chips are 100% standard wood chips of varying sizes. The minimum drop quantity is one full truckload (approximately 8 to 15 cubic yards). Your drop-off spot must be easily accessible by our large trucks.
              </div>
            </div>
          </div>

          {/* Form Widget */}
          <div className="lg:col-span-6">
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-md font-bold text-stone-100 font-sans mb-4 border-b border-stone-800 pb-2">
                Join the Free Mulch Waitlist
              </h3>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="p-3 bg-emerald-950 border border-emerald-900 rounded-full h-12 w-12 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="h-6 w-6 animate-pulse" />
                  </div>
                  <h4 className="text-base font-bold text-white">Added to our Waitlist!</h4>
                  <p className="text-stone-400 text-xs leading-relaxed max-w-sm mx-auto">
                    We have added you to our delivery database. When we are doing a job in your surrounding zip code, we will reach out to coordinate your free drop-off.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleChipSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider font-bold">
                        Full Name:
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Samuel Carter"
                        className="w-full px-3 py-2 bg-stone-900 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider font-bold">
                        Mobile Phone (to text before drop):
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="615-555-0144"
                        className="w-full px-3 py-2 bg-stone-900 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider font-bold">
                      Delivery Street Address (Nashville & Surrounding Areas):
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      placeholder="e.g. 102 Whispering Hills Dr, Franklin, TN"
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider font-bold">
                      Drop Site / Access Details (e.g. Driveway back end, dumping spot):
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="e.g. Dump on grass left of the wooden mailbox, no overhead wires."
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-emerald-600 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-center select-none py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <span>Request Free Wood Chip Drop</span>
                    <Truck className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

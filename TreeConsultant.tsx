import React, { useState, useRef, useEffect } from 'react';
import { AdvisorMessage } from '../types';
import { Bot, Send, User, Sparkles, Loader2, RefreshCw, AlertCircle } from 'lucide-react';

const SUGGESTIONS = [
  { label: "My oak has black spots on leaves", detail: "White Oak", symptom: "Black/brown leaf splotches" },
  { label: "Is ash borer active in Franklin?", detail: "Green Ash", symptom: "Foliage thinness, wood peckholes" },
  { label: "Clay soil maple root compaction", detail: "Sugar Maple", symptom: "Stunted growth, pale green leaves" },
  { label: "When's best to prune dogwoods?", detail: "Dogwood", symptom: "General seasonal grooming inquiry" }
];

export default function TreeConsultant() {
  const [messages, setMessages] = useState<AdvisorMessage[]>([
    {
      sender: 'ingrid',
      text: "Hello! I'm Ingrid, owner of C&O Tree Service. Ask me anything about tree removal, tree trimming, health symptoms, or scheduling diagnostics in the Nashville area. Choose a common Tennessee condition below or ask a question!",
      timestamp: new Date()
    }
  ]);
  const [question, setQuestion] = useState('');
  const [species, setSpecies] = useState('');
  const [symptom, setSymptom] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (e?: React.FormEvent, customQ?: string, customSpecies?: string, customSymptom?: string) => {
    if (e) e.preventDefault();
    
    const sendQ = customQ || question;
    const sendSpecies = customSpecies || species;
    const sendSymptom = customSymptom || symptom;

    if (!sendQ.trim()) return;

    setErrorStatus(null);
    const userMsg: AdvisorMessage = {
      sender: 'user',
      text: sendQ,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setQuestion('');
    setLoading(true);

    try {
      const response = await fetch("/api/tree-advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: sendQ,
          species: sendSpecies,
          sympton: sendSymptom,
          userLocation: "Nashville, Tennessee Area"
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to reach Virtual Ingrid.");
      }

      setMessages(prev => [...prev, {
        sender: 'ingrid',
        text: data.answer || "I will have to check that tree structures directly. Let me know if you would like automated review.",
        timestamp: new Date()
      }]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err.message || "Something went wrong. High load or missing server keys.");
    } finally {
      setLoading(false);
    }
  };

  const applyPreset = (preset: typeof SUGGESTIONS[0]) => {
    setSpecies(preset.detail);
    setSymptom(preset.symptom);
    handleSendMessage(undefined, `Could you help me diagose my ${preset.detail} with ${preset.symptom}?`, preset.detail, preset.symptom);
  };

  const clearChat = () => {
    setMessages([
      {
        sender: 'ingrid',
        text: "Chat cleared! I'm ready for another tree consultation. Let me know what species or health concerns we are evaluating.",
        timestamp: new Date()
      }
    ]);
    setSpecies('');
    setSymptom('');
    setErrorStatus(null);
  };

  return (
    <section id="ai-advisor" className="py-20 bg-stone-900 border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section title */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-900/50 text-emerald-400 px-3 py-1 rounded-full text-xs font-mono">
            <Sparkles className="h-3 w-3 animate-spin" />
            <span>Server-side AI Consultation</span>
          </div>
          <h2 className="text-3xl font-extrabold text-stone-100 font-sans tracking-tight">
            Consult C&O's Professional Tree Advisor
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            Get instant expert advice on Nashville tree species, trunk health symptoms, or trimming cycles before scheduling our crew.
          </p>
        </div>

        {/* Chat system */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[520px]">
          
          {/* Header */}
          <div className="bg-stone-900/80 px-6 py-4 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-950 border border-emerald-800 rounded-xl text-emerald-400">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-100 flex items-center gap-1.5">
                  C&O Tree Advisor – Ingrid
                </h3>
                <span className="text-[10px] text-emerald-500 font-mono flex items-center gap-1 uppercase">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" />
                  Active Online
                </span>
              </div>
            </div>
            
            <button
              onClick={clearChat}
              className="p-1.5 text-stone-500 hover:text-stone-300 hover:bg-stone-800 rounded-lg transition-colors text-xs flex items-center gap-1 font-mono"
              title="Reset conversation"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Clear</span>
            </button>
          </div>

          {/* Message scroll list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 font-sans text-sm bg-[linear-gradient(to_bottom,rgba(9,9,11,1),rgba(12,12,14,1))]">
            {messages.map((msg, index) => {
              const isIngrid = msg.sender === 'ingrid';
              return (
                <div
                  key={index}
                  className={`flex ${isIngrid ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start gap-3 max-w-[85%] ${isIngrid ? '' : 'flex-row-reverse'}`}>
                    <div className={`p-2 rounded-xl border flex-shrink-0 ${
                      isIngrid 
                        ? 'bg-emerald-950 border-emerald-900/50 text-emerald-400' 
                        : 'bg-stone-900 border-stone-800 text-stone-300'
                    }`}>
                      {isIngrid ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    
                    <div className="space-y-1">
                      <div className={`px-4 py-3 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                        isIngrid 
                          ? 'bg-emerald-950/20 text-stone-200 border border-emerald-950/60' 
                          : 'bg-emerald-800 text-white shadow-md'
                      }`}>
                        {msg.text}
                      </div>
                      <div className={`text-[10px] text-stone-500 ${isIngrid ? 'text-left' : 'text-right'} font-mono`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-950 border border-emerald-900/50 text-emerald-400 rounded-xl">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-stone-900/40 text-stone-400 border border-stone-800 italic flex items-center space-x-2">
                    <span>Ingrid is analyzing your tree care details...</span>
                  </div>
                </div>
              </div>
            )}

            {errorStatus && (
              <div className="p-3 bg-red-950/40 border border-red-950 text-red-400 rounded-xl flex items-start gap-2.5 text-xs">
                <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">System Report: </span>
                  {errorStatus}
                </div>
              </div>
            )}

            <div ref={bottomRef} className="h-2" />
          </div>

          {/* Quick presets footer */}
          <div id="quick-presets" className="px-6 py-2.5 bg-stone-950 border-t border-stone-900">
            <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block mb-1.5 font-bold">
              Nashville & Surrounding Area Common Cases:
            </span>
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => applyPreset(s)}
                  disabled={loading}
                  className="px-2.5 py-1 bg-stone-900 hover:bg-emerald-950 hover:border-emerald-900/50 text-stone-400 hover:text-emerald-300 border border-stone-800 rounded-lg text-xs transition-all duration-150 whitespace-nowrap cursor-pointer disabled:opacity-50"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form input field */}
          <form onSubmit={handleSendMessage} className="p-4 bg-stone-900 border-t border-stone-800 flex gap-2">
            <div className="flex-1 flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Diagnostic Tree Species? (optional...)"
                value={species}
                onChange={e => setSpecies(e.target.value)}
                disabled={loading}
                className="px-3 py-2 bg-stone-950 border border-stone-800 focus:outline-none focus:border-emerald-700/60 rounded-xl text-stone-200 text-xs sm:w-1/3"
              />
              <input
                type="text"
                placeholder="Tree Symptoms or Question? (e.g. brown leaves)"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                disabled={loading}
                className="flex-1 px-4 py-2.5 bg-stone-950 border border-stone-800 focus:outline-none focus:border-emerald-700/60 rounded-xl text-stone-200 text-xs"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-xl px-4 py-2.5 transition flex items-center justify-center cursor-pointer select-none"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

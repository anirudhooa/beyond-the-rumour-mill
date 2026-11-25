import React from 'react';
import { 
  Building2, 
  Map, 
  FileText, 
  BookMarked, 
  MessageSquareQuote, 
  Plus, 
  ShieldCheck,
  Bookmark,
  Bell,
  Search,
  Sparkles
} from 'lucide-react';

export default function Header({ 
  currentScreen, 
  setCurrentScreen, 
  savedResourcesCount = 0 
}) {
  const navItems = [
    { id: 1, label: "Explore Drives", icon: Building2 },
    { id: 2, label: "4-Week Roadmap", icon: Map },
    { id: 3, label: "Company Dossier", icon: FileText },
    { id: 4, label: "Curated Resources", icon: BookMarked },
    { id: 5, label: "Senior Debriefs", icon: MessageSquareQuote },
  ];

  return (
    <header className="border-b border-black/[0.06] bg-white/80 backdrop-blur-xl sticky top-0 z-40">
      {/* macOS Window Titlebar with Traffic Lights (from insp1.jpg) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 border-b border-black/[0.04] text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block border border-[#e0443e]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block border border-[#dea123]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block border border-[#1aab29]/50" />
            </div>
            <span className="font-semibold text-neutral-800">RumourMill Desktop</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">v2.0 Placement Intelligence</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Batch 2026 Verified
            </span>
          </div>
        </div>

        {/* Main Navigation Bar (inspired by placement.jpg) */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div 
            onClick={() => setCurrentScreen(1)} 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 rounded-2xl bg-neutral-900 flex items-center justify-center text-white shadow-md shadow-neutral-900/10 group-hover:scale-105 transition">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-tight text-neutral-900 text-base">
                  RumourMill
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-100 text-neutral-600 font-mono font-bold">
                  v2
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 hidden sm:block">
                Campus Placement Intelligence Hub
              </p>
            </div>
          </div>

          {/* Segmented Pills (from insp1.jpg & placement.jpg) */}
          <nav className="hidden lg:flex items-center bg-neutral-100/90 p-1 rounded-2xl border border-black/[0.04]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentScreen(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                  <span>{item.label}</span>
                  {item.id === 4 && savedResourcesCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-white text-neutral-900 text-[10px] flex items-center justify-center font-bold">
                      {savedResourcesCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls (from placement.jpg) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {savedResourcesCount > 0 && (
              <button
                onClick={() => setCurrentScreen(4)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700 text-xs font-medium border border-black/[0.04] transition"
              >
                <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Saved ({savedResourcesCount})</span>
              </button>
            )}

            <button
              onClick={() => setCurrentScreen(6)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs shadow-md shadow-neutral-900/10 hover:scale-[1.02] active:scale-[0.98] transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Share Experience</span>
            </button>

            {/* User Profile Avatar (from placement.jpg & insp1.jpg) */}
            <div className="w-8 h-8 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center font-bold text-xs text-neutral-700 overflow-hidden shrink-0">
              <span title="Placement Aspirant Profile">JD</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Subnav */}
        <div className="flex lg:hidden items-center gap-1 overflow-x-auto py-2 border-t border-black/[0.04]">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

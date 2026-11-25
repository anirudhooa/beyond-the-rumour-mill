import React from 'react';
import { 
  Building2, 
  Map, 
  FileText, 
  BookMarked, 
  MessageSquareQuote, 
  Plus, 
  ShieldCheck,
  Bookmark
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
    <header className="sticky top-0 z-40 bg-[#06141B]/85 backdrop-blur-2xl border-b border-[#4A5C6A]/35">
      {/* macOS Window Titlebar with Traffic Lights (insp1.jpg) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 border-b border-[#4A5C6A]/20 text-[11px] text-[#9BA8AB]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block border border-[#e0443e]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block border border-[#dea123]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block border border-[#1aab29]/50" />
            </div>
            <span className="font-medium text-[#CCD0CF]">RumourMill Desktop</span>
            <span className="text-[#4A5C6A]">•</span>
            <span className="text-[#9BA8AB]">v2.0 Placement Intelligence</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#34d399] bg-[#34d399]/10 px-2.5 py-0.5 rounded-full border border-[#34d399]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
              Batch 2026 Verified
            </span>
          </div>
        </div>

        {/* Main Navigation Bar (placement.jpg in new palette) */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div 
            onClick={() => setCurrentScreen(1)} 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 rounded-2xl bg-[#11212D] border border-[#4A5C6A]/40 flex items-center justify-center text-[#CCD0CF] shadow-sm group-hover:border-[#9BA8AB]/40 transition">
              <ShieldCheck className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold tracking-tight text-[#CCD0CF] text-base">
                  RumourMill
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#253745] text-[#CCD0CF] font-mono font-medium border border-[#4A5C6A]/30">
                  v2
                </span>
              </div>
              <p className="text-[11px] text-[#9BA8AB] hidden sm:block">
                Campus Placement Intelligence Hub
              </p>
            </div>
          </div>

          {/* iOS / macOS Segmented Navigation Pills (insp1.jpg & placement.jpg) */}
          <nav className="hidden lg:flex items-center bg-[#11212D] p-1 rounded-full border border-[#4A5C6A]/35 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentScreen(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#253745] text-[#CCD0CF] shadow-sm border border-[#4A5C6A]/60'
                      : 'text-[#9BA8AB] hover:text-[#CCD0CF] hover:bg-[#253745]/40'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#CCD0CF]' : 'text-[#9BA8AB]'}`} />
                  <span>{item.label}</span>
                  {item.id === 4 && savedResourcesCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-[#38bdf8] text-[#06141B] text-[10px] flex items-center justify-center font-bold">
                      {savedResourcesCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {savedResourcesCount > 0 && (
              <button
                onClick={() => setCurrentScreen(4)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#11212D] hover:bg-[#253745] text-[#CCD0CF] text-xs font-medium border border-[#4A5C6A]/40 transition"
              >
                <Bookmark className="w-3.5 h-3.5 text-[#f59e0b] fill-[#f59e0b]" />
                <span>Saved ({savedResourcesCount})</span>
              </button>
            )}

            {/* High-contrast Pill Button (#CCD0CF base with #06141B text) */}
            <button
              onClick={() => setCurrentScreen(6)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs shadow-md hover:shadow-lg active:scale-95 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Share Experience</span>
            </button>

            {/* User Profile Avatar */}
            <div className="w-8 h-8 rounded-full bg-[#253745] border border-[#4A5C6A]/50 flex items-center justify-center font-semibold text-xs text-[#CCD0CF] overflow-hidden shrink-0">
              <span title="Placement Aspirant Profile">JD</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Subnav */}
        <div className="flex lg:hidden items-center gap-1 overflow-x-auto py-2 border-t border-[#4A5C6A]/20 scrollbar-none">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
                  isActive
                    ? 'bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/60'
                    : 'text-[#9BA8AB]'
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

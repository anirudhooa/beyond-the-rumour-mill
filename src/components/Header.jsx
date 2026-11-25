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
    { id: 2, label: "Foundation Roadmap", icon: Map },
    { id: 3, label: "Company Dossiers", icon: FileText },
    { id: 4, label: "Curated Resources", icon: BookMarked },
    { id: 5, label: "Senior Debriefs", icon: MessageSquareQuote },
  ];

  return (
    <header className="sticky top-0 z-40 bg-black/75 backdrop-blur-2xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 gap-4">
          {/* Apple Style Brand Identity */}
          <div 
            onClick={() => setCurrentScreen(1)} 
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#2c2c2e] to-[#1c1c1e] border border-white/10 flex items-center justify-center text-white shadow-sm group-hover:border-white/20 transition">
              <ShieldCheck className="w-4 h-4 text-[#0a84ff]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold tracking-tight text-white text-sm md:text-base">
                  RumourMill
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#30d158]/10 text-[#30d158] border border-[#30d158]/20">
                  Verified Intelligence
                </span>
              </div>
            </div>
          </div>

          {/* iOS / macOS Segmented Control Navigation */}
          <nav className="hidden md:flex items-center bg-[#1c1c1e]/80 p-1 rounded-full border border-white/[0.08] shadow-inner">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentScreen(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2c2c2e] text-white shadow-sm border border-white/10'
                      : 'text-[#86868b] hover:text-[#f5f5f7]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 4 && savedResourcesCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-[#0a84ff] text-white text-[10px] flex items-center justify-center font-bold">
                      {savedResourcesCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-2.5 shrink-0">
            {savedResourcesCount > 0 && (
              <button
                onClick={() => setCurrentScreen(4)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1c1c1e] hover:bg-[#2c2c2e] text-[#f5f5f7] text-xs font-medium border border-white/[0.08] transition"
              >
                <Bookmark className="w-3.5 h-3.5 text-[#ff9f0a] fill-[#ff9f0a]" />
                <span>Saved ({savedResourcesCount})</span>
              </button>
            )}

            <button
              onClick={() => setCurrentScreen(6)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs shadow-sm hover:opacity-95 active:scale-95 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Share Experience</span>
            </button>
          </div>
        </div>

        {/* Mobile Segmented Bar */}
        <div className="flex md:hidden items-center gap-1 overflow-x-auto py-2 border-t border-white/[0.06] scrollbar-none">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition ${
                  isActive
                    ? 'bg-[#2c2c2e] text-white'
                    : 'text-[#86868b]'
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

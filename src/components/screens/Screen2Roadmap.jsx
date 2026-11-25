import React, { useState } from 'react';
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  ThumbsUp, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { FOUNDATION_ROADMAP } from '../../data/mockData';

export default function Screen2Roadmap({ 
  savedResources, 
  onToggleSaveResource,
  onOpenDrawerWithTopic 
}) {
  const [completedItems, setCompletedItems] = useState({});
  const [activeWeek, setActiveWeek] = useState(1);

  const toggleComplete = (id) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalLinks = FOUNDATION_ROADMAP.reduce((acc, curr) => acc + curr.vettedLinks.length, 0);
  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / totalLinks) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* Apple-style Header */}
      <div className="bg-[#1c1c1e] border border-white/[0.08] rounded-3xl p-6 md:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a84ff]/10 border border-[#0a84ff]/20 text-xs font-medium text-[#0a84ff]">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Preparation</span>
          </div>

          <div className="text-xs text-[#86868b] font-medium">
            4-Week Elimination-to-Offer Pathway
          </div>
        </div>

        <div className="max-w-3xl space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            The 4-Week Placement Foundation Roadmap
          </h1>
          <p className="text-xs md:text-sm text-[#a1a1a6] leading-relaxed">
            Eliminate prep confusion and endless browser tabs. Each week focuses strictly on passing the successive campus interview barrier—capped at 3 vetted resources per topic to maximize retention.
          </p>
        </div>

        {/* Progress Tracker Bar */}
        <div className="bg-[#141416] p-4 rounded-2xl border border-white/[0.04] space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-[#a1a1a6] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#30d158]" />
              <span>Foundation Progress</span>
            </span>
            <span className="font-mono font-medium text-white">
              {completedCount} of {totalLinks} Topics Completed ({progressPercentage}%)
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#2c2c2e] overflow-hidden">
            <div 
              className="h-full bg-[#0a84ff] transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(progressPercentage, 4)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Week Selector Segmented Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {FOUNDATION_ROADMAP.map((w) => {
          const isSelected = activeWeek === w.week;
          const weekCompleted = w.vettedLinks.filter(l => completedItems[l.id]).length;
          return (
            <button
              key={w.week}
              onClick={() => setActiveWeek(w.week)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                isSelected
                  ? 'bg-[#2c2c2e] border-white/20 text-white shadow-sm'
                  : 'bg-[#1c1c1e] border-white/[0.06] text-[#86868b] hover:bg-[#242426] hover:text-[#f5f5f7]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-semibold uppercase tracking-wider ${isSelected ? 'text-[#0a84ff]' : 'text-[#636366]'}`}>
                  Week {w.week}
                </span>
                <span className="text-[11px] font-mono text-[#86868b]">
                  {weekCompleted}/3 Done
                </span>
              </div>
              <div className="font-medium text-xs md:text-sm text-[#f5f5f7] line-clamp-1">
                {w.title.split(': ')[1] || w.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Week Content Card */}
      {(() => {
        const currentWeekData = FOUNDATION_ROADMAP.find(w => w.week === activeWeek) || FOUNDATION_ROADMAP[0];
        return (
          <div className="bg-[#1c1c1e] border border-white/[0.08] rounded-3xl p-6 md:p-8 space-y-6">
            <div className="border-b border-white/[0.06] pb-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-semibold text-white tracking-tight">
                  {currentWeekData.title}
                </h2>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#141416] text-[#86868b] border border-white/[0.06]">
                  Top 3 Curated Resources
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#a1a1a6]">
                <strong className="text-white">Goal:</strong> {currentWeekData.objective}
              </p>

              {/* Focus Area Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {currentWeekData.focusAreas.map((area, aIdx) => (
                  <span 
                    key={aIdx} 
                    className="px-2.5 py-1 rounded-full text-xs bg-[#141416] text-[#86868b] border border-white/[0.04]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 Capped Vetted Resources */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                  Essential Resources for Week {activeWeek}
                </span>
                <span className="text-[11px] text-[#30d158] flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Placed Senior Verified
                </span>
              </div>

              <div className="grid gap-3.5">
                {currentWeekData.vettedLinks.map((link, lIdx) => {
                  const isDone = !!completedItems[link.id];
                  const isSaved = savedResources.includes(link.id);

                  return (
                    <div
                      key={link.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        isDone 
                          ? 'bg-[#141416]/50 border-white/[0.04]' 
                          : 'bg-[#141416] border-white/[0.06] hover:border-white/15'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#0a84ff]/10 text-[#0a84ff] border border-[#0a84ff]/20">
                              #{lIdx + 1}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#2c2c2e] text-[#a1a1a6]">
                              {link.type}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#30d158]/10 text-[#30d158] border border-[#30d158]/20">
                              {link.tag}
                            </span>
                            <span className="text-xs text-[#86868b] flex items-center gap-1 font-mono">
                              <Clock className="w-3.5 h-3.5 text-[#636366]" />
                              {link.timeEstimate}
                            </span>
                          </div>

                          <h3 className={`text-base font-medium ${isDone ? 'text-[#636366] line-through' : 'text-white'}`}>
                            {link.title}
                          </h3>

                          <p className="text-xs text-[#86868b] italic">
                            "{link.whyUseful}"
                          </p>

                          <div className="text-[11px] text-[#636366] flex items-center gap-2">
                            <span>{link.author}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-[#86868b]">
                              <ThumbsUp className="w-3 h-3 text-[#ff9f0a]" />
                              {link.upvotes} campus upvotes
                            </span>
                          </div>
                        </div>

                        {/* Interactive Action Controls */}
                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                          <button
                            onClick={() => onToggleSaveResource(link.id)}
                            className={`p-2 rounded-full text-xs font-medium flex items-center gap-1.5 border transition ${
                              isSaved
                                ? 'bg-[#ff9f0a]/10 text-[#ff9f0a] border-[#ff9f0a]/20'
                                : 'bg-[#1c1c1e] hover:bg-[#2c2c2e] text-[#86868b] border-white/[0.08]'
                            }`}
                            title="Save / Bookmark resource"
                          >
                            {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-[#ff9f0a]" /> : <Bookmark className="w-3.5 h-3.5" />}
                            <span>{isSaved ? "Saved" : "Save"}</span>
                          </button>

                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-[#1c1c1e] hover:bg-[#2c2c2e] text-[#f5f5f7] text-xs font-medium border border-white/[0.08] transition flex items-center gap-1"
                            title="Open external source"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#86868b]" />
                          </a>

                          <button
                            onClick={() => toggleComplete(link.id)}
                            className={`p-2 rounded-full text-xs font-medium flex items-center gap-1.5 transition ${
                              isDone
                                ? 'bg-[#30d158] text-white'
                                : 'bg-[#1c1c1e] hover:bg-[#2c2c2e] text-[#f5f5f7] border border-white/[0.08]'
                            }`}
                          >
                            {isDone ? <CheckCircle className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5 text-[#636366]" />}
                            <span>{isDone ? "Done" : "Mark Done"}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Jump to company topics */}
            <div className="bg-[#141416] p-4 rounded-2xl border border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="space-y-0.5 text-center md:text-left">
                <div className="text-xs font-medium text-white">
                  Looking for company-specific interview topics?
                </div>
                <div className="text-[11px] text-[#86868b]">
                  Drill down into dynamic programming, system design, and database concurrency modules.
                </div>
              </div>
              <button
                onClick={() => onOpenDrawerWithTopic("topic-dsa")}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs transition"
              >
                <span>Explore Topic Modules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

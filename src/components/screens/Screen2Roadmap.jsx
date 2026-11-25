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
  Award,
  Calendar
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
      {/* Header (placement.jpg style) */}
      <div className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#253745] text-xs font-medium text-[#CCD0CF] border border-[#4A5C6A]/40">
            <Compass className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Structured Placement Prep</span>
          </div>

          <div className="text-xs text-[#9BA8AB] font-medium">
            4-Week Elimination-to-Offer Pathway
          </div>
        </div>

        <div className="max-w-3xl space-y-1">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#CCD0CF] tracking-tight">
            The 4-Week Placement Foundation Roadmap
          </h1>
          <p className="text-xs md:text-sm text-[#9BA8AB] leading-relaxed">
            Eliminates prep confusion. Each week focuses on passing the successive interview barrier—capped at 3 vetted resources per topic to maximize retention.
          </p>
        </div>

        {/* Progress Tracker (placement.jpg Activity style) */}
        <div className="bg-[#06141B]/60 p-4 rounded-2xl border border-[#4A5C6A]/25 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-[#CCD0CF] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#34d399]" />
              <span>Foundation Progress Tracker</span>
            </span>
            <span className="font-mono font-medium text-[#CCD0CF]">
              {completedCount} of {totalLinks} Topics Completed ({progressPercentage}%)
            </span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-[#253745] overflow-hidden">
            <div 
              className="h-full bg-[#38bdf8] transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(progressPercentage, 4)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Week Selector Segmented Pills (from insp1.jpg & placement.jpg) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {FOUNDATION_ROADMAP.map((w) => {
          const isSelected = activeWeek === w.week;
          const weekCompleted = w.vettedLinks.filter(l => completedItems[l.id]).length;
          return (
            <button
              key={w.week}
              onClick={() => setActiveWeek(w.week)}
              className={`p-4 rounded-3xl border text-left transition-all duration-200 ${
                isSelected
                  ? 'bg-[#253745] border-[#4A5C6A]/70 text-[#CCD0CF] shadow-md'
                  : 'bg-[#11212D] border-[#4A5C6A]/30 text-[#9BA8AB] hover:border-[#9BA8AB]/40 hover:text-[#CCD0CF]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-semibold uppercase tracking-wider ${isSelected ? 'text-[#38bdf8]' : 'text-[#9BA8AB]/70'}`}>
                  Week {w.week}
                </span>
                <span className={`text-[11px] font-mono font-medium ${isSelected ? 'text-[#CCD0CF]' : 'text-[#9BA8AB]'}`}>
                  {weekCompleted}/3 Done
                </span>
              </div>
              <div className="font-semibold text-xs md:text-sm line-clamp-1 text-[#CCD0CF]">
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
          <div className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#4A5C6A]/30 pb-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-semibold text-[#CCD0CF] tracking-tight">
                  {currentWeekData.title}
                </h2>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/40">
                  Top 3 Curated Resources
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#9BA8AB] font-normal">
                🎯 <strong className="text-[#CCD0CF] font-medium">Goal:</strong> {currentWeekData.objective}
              </p>

              {/* Focus Area Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {currentWeekData.focusAreas.map((area, aIdx) => (
                  <span 
                    key={aIdx} 
                    className="px-2.5 py-1 rounded-full text-xs bg-[#06141B]/60 text-[#9BA8AB] border border-[#4A5C6A]/30 font-medium"
                  >
                    • {area}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 Capped Vetted Resources */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9BA8AB]">
                  Essential Resources for Week {activeWeek}
                </span>
                <span className="text-[11px] text-[#34d399] flex items-center gap-1 font-medium">
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
                      className={`p-5 rounded-3xl border transition-all ${
                        isDone 
                          ? 'bg-[#06141B]/30 border-[#4A5C6A]/20' 
                          : 'bg-[#06141B]/60 border-[#4A5C6A]/30 hover:border-[#9BA8AB]/40 hover:bg-[#162a39]'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#253745] text-[#CCD0CF]">
                              #{lIdx + 1}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#11212D] text-[#9BA8AB] border border-[#4A5C6A]/35">
                              {link.type}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20">
                              {link.tag}
                            </span>
                            <span className="text-xs text-[#9BA8AB] flex items-center gap-1 font-mono">
                              <Clock className="w-3.5 h-3.5 text-[#9BA8AB]/70" />
                              {link.timeEstimate}
                            </span>
                          </div>

                          <h3 className={`text-base font-semibold ${isDone ? 'text-[#9BA8AB]/50 line-through' : 'text-[#CCD0CF]'}`}>
                            {link.title}
                          </h3>

                          <p className="text-xs text-[#9BA8AB] italic">
                            "{link.whyUseful}"
                          </p>

                          <div className="text-[11px] text-[#9BA8AB] flex items-center gap-2">
                            <span>{link.author}</span>
                            <span className="text-[#4A5C6A]">•</span>
                            <span className="flex items-center gap-1 text-[#CCD0CF] font-medium">
                              <ThumbsUp className="w-3 h-3 text-[#f59e0b]" />
                              {link.upvotes} campus upvotes
                            </span>
                          </div>
                        </div>

                        {/* Interactive Action Controls */}
                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                          <button
                            onClick={() => onToggleSaveResource(link.id)}
                            className={`p-2 rounded-2xl text-xs font-medium flex items-center gap-1.5 border transition ${
                              isSaved
                                ? 'bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/30'
                                : 'bg-[#253745] hover:bg-[#344b5d] text-[#CCD0CF] border-[#4A5C6A]/40'
                            }`}
                            title="Save / Bookmark resource"
                          >
                            {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-[#f59e0b]" /> : <Bookmark className="w-3.5 h-3.5" />}
                            <span>{isSaved ? "Saved" : "Save"}</span>
                          </button>

                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-2xl bg-[#253745] hover:bg-[#344b5d] text-[#CCD0CF] text-xs font-medium border border-[#4A5C6A]/40 transition flex items-center gap-1"
                            title="Open external source"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#9BA8AB]" />
                          </a>

                          <button
                            onClick={() => toggleComplete(link.id)}
                            className={`p-2 rounded-2xl text-xs font-medium flex items-center gap-1.5 transition ${
                              isDone
                                ? 'bg-[#CCD0CF] text-[#06141B] font-semibold'
                                : 'bg-[#253745] hover:bg-[#344b5d] text-[#CCD0CF] border border-[#4A5C6A]/40'
                            }`}
                          >
                            {isDone ? <CheckCircle className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5 text-[#9BA8AB]" />}
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
            <div className="bg-[#06141B]/60 p-4 rounded-2xl border border-[#4A5C6A]/30 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="space-y-0.5 text-center md:text-left">
                <div className="text-xs font-semibold text-[#CCD0CF]">
                  Looking for company-specific interview topics?
                </div>
                <div className="text-[11px] text-[#9BA8AB]">
                  Drill down into dynamic programming, system design, and database concurrency modules.
                </div>
              </div>
              <button
                onClick={() => onOpenDrawerWithTopic("topic-dsa")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs transition shadow-sm"
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

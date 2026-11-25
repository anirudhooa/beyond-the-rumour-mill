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
      <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-xs font-bold text-neutral-800">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Placement Prep</span>
          </div>

          <div className="text-xs text-neutral-500 font-bold">
            4-Week Elimination-to-Offer Pathway
          </div>
        </div>

        <div className="max-w-3xl space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
            The 4-Week Placement Foundation Roadmap
          </h1>
          <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
            Eliminates prep confusion. Each week focuses on passing the successive interview barrier—capped at 3 vetted resources per topic to maximize retention.
          </p>
        </div>

        {/* Progress Tracker (placement.jpg Activity style) */}
        <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200/80 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-neutral-700 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Foundation Progress Tracker</span>
            </span>
            <span className="font-mono font-bold text-neutral-900">
              {completedCount} of {totalLinks} Topics Completed ({progressPercentage}%)
            </span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-neutral-200 overflow-hidden">
            <div 
              className="h-full bg-neutral-900 transition-all duration-300 rounded-full"
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
                  ? 'bg-neutral-900 border-neutral-900 text-white shadow-md'
                  : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                  Week {w.week}
                </span>
                <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-white' : 'text-neutral-500'}`}>
                  {weekCompleted}/3 Done
                </span>
              </div>
              <div className="font-bold text-xs md:text-sm line-clamp-1">
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
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
            <div className="border-b border-neutral-100 pb-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight">
                  {currentWeekData.title}
                </h2>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-700">
                  Top 3 Curated Resources
                </span>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 font-medium">
                🎯 <strong>Goal:</strong> {currentWeekData.objective}
              </p>

              {/* Focus Area Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {currentWeekData.focusAreas.map((area, aIdx) => (
                  <span 
                    key={aIdx} 
                    className="px-2.5 py-1 rounded-full text-xs bg-neutral-50 text-neutral-700 border border-neutral-200 font-medium"
                  >
                    • {area}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 Capped Vetted Resources */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Essential Resources for Week {activeWeek}
                </span>
                <span className="text-[11px] text-emerald-600 flex items-center gap-1 font-bold">
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
                          ? 'bg-neutral-50/60 border-neutral-200' 
                          : 'bg-neutral-50 border-neutral-200/90 hover:border-neutral-400 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-neutral-900 text-white">
                              #{lIdx + 1}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-neutral-700 border border-neutral-200">
                              {link.type}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {link.tag}
                            </span>
                            <span className="text-xs text-neutral-500 flex items-center gap-1 font-mono">
                              <Clock className="w-3.5 h-3.5 text-neutral-400" />
                              {link.timeEstimate}
                            </span>
                          </div>

                          <h3 className={`text-base font-bold ${isDone ? 'text-neutral-400 line-through' : 'text-neutral-900'}`}>
                            {link.title}
                          </h3>

                          <p className="text-xs text-neutral-600 italic">
                            "{link.whyUseful}"
                          </p>

                          <div className="text-[11px] text-neutral-500 flex items-center gap-2">
                            <span>{link.author}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-neutral-700 font-semibold">
                              <ThumbsUp className="w-3 h-3 text-amber-500" />
                              {link.upvotes} campus upvotes
                            </span>
                          </div>
                        </div>

                        {/* Interactive Action Controls */}
                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                          <button
                            onClick={() => onToggleSaveResource(link.id)}
                            className={`p-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 border transition ${
                              isSaved
                                ? 'bg-amber-50 text-amber-700 border-amber-300'
                                : 'bg-white hover:bg-neutral-100 text-neutral-600 border-neutral-200'
                            }`}
                            title="Save / Bookmark resource"
                          >
                            {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" /> : <Bookmark className="w-3.5 h-3.5" />}
                            <span>{isSaved ? "Saved" : "Save"}</span>
                          </button>

                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-2xl bg-white hover:bg-neutral-100 text-neutral-900 text-xs font-bold border border-neutral-200 transition flex items-center gap-1"
                            title="Open external source"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                          </a>

                          <button
                            onClick={() => toggleComplete(link.id)}
                            className={`p-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
                              isDone
                                ? 'bg-neutral-900 text-white'
                                : 'bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-200'
                            }`}
                          >
                            {isDone ? <CheckCircle className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5 text-neutral-400" />}
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
            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="space-y-0.5 text-center md:text-left">
                <div className="text-xs font-bold text-neutral-900">
                  Looking for company-specific interview topics?
                </div>
                <div className="text-[11px] text-neutral-500">
                  Drill down into dynamic programming, system design, and database concurrency modules.
                </div>
              </div>
              <button
                onClick={() => onOpenDrawerWithTopic("topic-dsa")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition"
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

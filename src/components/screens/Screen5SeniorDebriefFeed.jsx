import React, { useState } from 'react';
import { 
  MessageSquareQuote, 
  ThumbsUp, 
  AlertTriangle, 
  Flag, 
  Clock, 
  ShieldCheck, 
  Plus, 
  HelpCircle, 
  BookMarked,
  Filter
} from 'lucide-react';

export default function Screen5SeniorDebriefFeed({ 
  debriefs, 
  onMarkHelpful, 
  onOpenReportModal, 
  onOpenSeniorSurvey, 
  selectedCompanyId 
}) {
  const [filterCompany, setFilterCompany] = useState("All");

  const companiesList = ["All", "Microsoft", "Amazon", "Deloitte USI", "Optum"];

  const filteredDebriefs = debriefs.filter(d => {
    if (filterCompany === "All") return true;
    return d.companyName.toLowerCase().includes(filterCompany.toLowerCase());
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#253745] text-xs font-medium text-[#CCD0CF] border border-[#4A5C6A]/40">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Senior Insights</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSeniorSurvey}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs shadow-sm transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Share Interview Experience</span>
            </button>
          </div>
        </div>

        <div className="max-w-3xl space-y-1">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#CCD0CF] tracking-tight">
            Senior Interview Debriefs & Authentic Feedback
          </h1>
          <p className="text-xs md:text-sm text-[#9BA8AB] leading-relaxed">
            Eliminates awkward DMs to busy seniors. Read structured, verified drive debriefs submitted via our 5-minute debrief tool—complete with actual questions asked and critical traps to avoid.
          </p>
        </div>

        {/* Company Filter Tabs (insp1.jpg style segmented pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none">
          <span className="text-xs text-[#9BA8AB] font-medium shrink-0 mr-1 flex items-center gap-1 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {companiesList.map((comp) => (
            <button
              key={comp}
              onClick={() => setFilterCompany(comp)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
                filterCompany === comp
                  ? 'bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/60 shadow-sm'
                  : 'bg-[#11212D] text-[#9BA8AB] hover:text-[#CCD0CF] border border-[#4A5C6A]/30'
              }`}
            >
              {comp}
            </button>
          ))}
        </div>
      </div>

      {/* Debrief Cards List */}
      <div className="space-y-6">
        {filteredDebriefs.map((debrief) => (
          <div
            key={debrief.id}
            className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl hover:border-[#9BA8AB]/40 hover:bg-[#162a39] transition duration-200"
          >
            {/* Senior Meta Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4A5C6A]/25 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#253745] border border-[#4A5C6A]/40 flex items-center justify-center text-2xl shadow-inner shrink-0">
                  {debrief.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold text-[#CCD0CF] tracking-tight">
                      {debrief.seniorName}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#34d399]" /> Placed Senior
                    </span>
                  </div>
                  <div className="text-xs text-[#CCD0CF] font-medium">
                    {debrief.role} • {debrief.companyName} ({debrief.ctcOffered})
                  </div>
                  <div className="text-[11px] text-[#9BA8AB] font-normal">
                    {debrief.batch} • Interview faced on {debrief.driveDateFaced}
                  </div>
                </div>
              </div>

              {/* ITER-01: Flag Button directly beside time-spent badge */}
              <div className="flex items-center gap-2 self-start md:self-auto">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#06141B]/60 text-[#9BA8AB] flex items-center gap-1 border border-[#4A5C6A]/30">
                  <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
                  Submitted in {debrief.timeSpentInMinutes} mins
                </span>

                <button
                  onClick={() => onOpenReportModal({ name: debrief.companyName, ...debrief })}
                  className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#253745] hover:bg-[#ff453a]/20 text-[#CCD0CF] hover:text-[#ff453a] border border-[#4A5C6A]/40 transition flex items-center gap-1"
                  title="Flag as outdated or rumour"
                >
                  <Flag className="w-3 h-3 text-[#ff453a]" />
                  <span>Flag Stale</span>
                </button>
              </div>
            </div>

            {/* Rounds Faced Breakdown */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#9BA8AB] block">
                Rounds Completed
              </span>
              <div className="text-xs font-medium text-[#CCD0CF] bg-[#06141B]/60 p-3 rounded-2xl border border-[#4A5C6A]/25">
                {debrief.roundsFaced}
              </div>
            </div>

            {/* Key Golden Advice */}
            <div className="bg-[#06141B]/60 border border-[#4A5C6A]/30 rounded-2xl p-4 text-xs md:text-sm text-[#CCD0CF] space-y-1">
              <span className="font-semibold text-[#CCD0CF] flex items-center gap-1.5 uppercase text-[11px] tracking-wide">
                Key Interview Advice
              </span>
              <p className="leading-relaxed font-normal text-[#9BA8AB]">
                "{debrief.keyAdvice}"
              </p>
            </div>

            {/* Actual Questions Faced */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#CCD0CF] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#38bdf8]" />
                <span>Actual Interview Questions & Prompts Faced:</span>
              </span>
              <div className="grid gap-2">
                {debrief.actualQuestionsAsked.map((q, qIdx) => (
                  <div 
                    key={qIdx}
                    className="p-3 rounded-2xl bg-[#06141B]/60 border border-[#4A5C6A]/25 text-xs text-[#CCD0CF] flex items-start gap-2.5 font-normal"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#253745] text-[#CCD0CF] flex items-center justify-center font-semibold text-[10px] shrink-0 mt-0.5 border border-[#4A5C6A]/40">
                      {qIdx + 1}
                    </span>
                    <span className="leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fatal Traps / Mistakes to Avoid */}
            <div className="bg-[#ff453a]/10 border border-[#ff453a]/20 rounded-2xl p-4 space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff453a] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#ff453a]" />
                Elimination Pitfall to Avoid
              </span>
              <p className="text-xs text-[#ff453a]/90 leading-relaxed font-normal">
                {debrief.commonTrapsToAvoid}
              </p>
            </div>

            {/* Top 3 Study Links Contributed */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#CCD0CF] flex items-center gap-1.5">
                <BookMarked className="w-4 h-4 text-[#34d399]" />
                <span>Study Links Recommended by Senior:</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {debrief.topLinksContributed.map((linkTitle, lIdx) => (
                  <span
                    key={lIdx}
                    className="px-3 py-1 rounded-full bg-[#253745] border border-[#4A5C6A]/40 text-xs text-[#CCD0CF] flex items-center gap-1.5 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                    {linkTitle}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer: Helpful Feedback Button */}
            <div className="border-t border-[#4A5C6A]/25 pt-4 flex items-center justify-between">
              <button
                onClick={() => onMarkHelpful(debrief.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 transition ${
                  debrief.markedHelpful
                    ? 'bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/60 shadow-sm'
                    : 'bg-[#06141B]/60 hover:bg-[#253745] text-[#9BA8AB] hover:text-[#CCD0CF] border border-[#4A5C6A]/25'
                }`}
              >
                <ThumbsUp className={`w-3.5 h-3.5 ${debrief.markedHelpful ? 'text-[#38bdf8]' : 'text-[#f59e0b]'}`} />
                <span>{debrief.markedHelpful ? "Helpful" : "Helpful"} ({debrief.helpfulCount})</span>
              </button>

              <span className="text-[11px] text-[#9BA8AB]/70 font-mono">
                Verified Campus Placement Record
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

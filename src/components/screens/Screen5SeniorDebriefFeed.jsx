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
      <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-xs font-bold text-neutral-800">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Senior Insights</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSeniorSurvey}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs shadow-sm transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Share Interview Experience</span>
            </button>
          </div>
        </div>

        <div className="max-w-3xl space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Senior Interview Debriefs & Authentic Feedback
          </h1>
          <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
            Eliminates awkward DMs to busy seniors. Read structured, verified drive debriefs submitted via our 5-minute debrief tool—complete with actual questions asked and critical traps to avoid.
          </p>
        </div>

        {/* Company Filter Tabs (insp1.jpg style segmented pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none">
          <span className="text-xs text-neutral-400 font-bold shrink-0 mr-1 flex items-center gap-1 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {companiesList.map((comp) => (
            <button
              key={comp}
              onClick={() => setFilterCompany(comp)}
              className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
                filterCompany === comp
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
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
            className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm hover:border-neutral-300 hover:shadow-md transition duration-200"
          >
            {/* Senior Meta Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-2xl shadow-inner shrink-0">
                  {debrief.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-extrabold text-neutral-900 tracking-tight">
                      {debrief.seniorName}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" /> Placed Senior
                    </span>
                  </div>
                  <div className="text-xs text-neutral-900 font-bold">
                    {debrief.role} • {debrief.companyName} ({debrief.ctcOffered})
                  </div>
                  <div className="text-[11px] text-neutral-500 font-medium">
                    {debrief.batch} • Interview faced on {debrief.driveDateFaced}
                  </div>
                </div>
              </div>

              {/* ITER-01: Flag Button directly beside time-spent badge */}
              <div className="flex items-center gap-2 self-start md:self-auto">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-neutral-100 text-neutral-700 flex items-center gap-1 border border-neutral-200">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  Submitted in {debrief.timeSpentInMinutes} mins
                </span>

                <button
                  onClick={() => onOpenReportModal({ name: debrief.companyName, ...debrief })}
                  className="px-3 py-1 rounded-full text-[11px] font-bold bg-neutral-50 hover:bg-rose-50 text-neutral-600 hover:text-rose-600 border border-neutral-200 hover:border-rose-200 transition flex items-center gap-1"
                  title="Flag as outdated or rumour"
                >
                  <Flag className="w-3 h-3 text-rose-500" />
                  <span>Flag Stale</span>
                </button>
              </div>
            </div>

            {/* Rounds Faced Breakdown */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
                Rounds Completed
              </span>
              <div className="text-xs font-bold text-neutral-800 bg-neutral-50 p-3 rounded-2xl border border-neutral-200">
                {debrief.roundsFaced}
              </div>
            </div>

            {/* Key Golden Advice */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 text-xs md:text-sm text-neutral-900 space-y-1">
              <span className="font-extrabold text-neutral-900 flex items-center gap-1.5 uppercase text-[11px] tracking-wide">
                Key Interview Advice
              </span>
              <p className="leading-relaxed font-medium text-neutral-700">
                "{debrief.keyAdvice}"
              </p>
            </div>

            {/* Actual Questions Faced */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-neutral-700" />
                <span>Actual Interview Questions & Prompts Faced:</span>
              </span>
              <div className="grid gap-2">
                {debrief.actualQuestionsAsked.map((q, qIdx) => (
                  <div 
                    key={qIdx}
                    className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 flex items-start gap-2.5 font-medium"
                  >
                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {qIdx + 1}
                    </span>
                    <span className="leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fatal Traps / Mistakes to Avoid */}
            <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-4 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                Elimination Pitfall to Avoid
              </span>
              <p className="text-xs text-rose-950 leading-relaxed font-medium">
                {debrief.commonTrapsToAvoid}
              </p>
            </div>

            {/* Top 3 Study Links Contributed */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                <BookMarked className="w-4 h-4 text-emerald-600" />
                <span>Study Links Recommended by Senior:</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {debrief.topLinksContributed.map((linkTitle, lIdx) => (
                  <span
                    key={lIdx}
                    className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 flex items-center gap-1.5 font-bold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {linkTitle}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer: Helpful Feedback Button */}
            <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
              <button
                onClick={() => onMarkHelpful(debrief.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
                  debrief.markedHelpful
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                <ThumbsUp className={`w-3.5 h-3.5 ${debrief.markedHelpful ? 'text-white' : 'text-amber-500'}`} />
                <span>{debrief.markedHelpful ? "Helpful" : "Helpful"} ({debrief.helpfulCount})</span>
              </button>

              <span className="text-[11px] text-neutral-400 font-mono">
                Verified Campus Placement Record
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
      <div className="bg-[#1c1c1e] border border-white/[0.08] rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a84ff]/10 border border-[#0a84ff]/20 text-xs font-medium text-[#0a84ff]">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Senior Insights</span>
          </div>

          <button
            onClick={onOpenSeniorSurvey}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs shadow-sm transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Share Interview Experience</span>
          </button>
        </div>

        <div className="max-w-3xl space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Senior Interview Debriefs & Authentic Feedback
          </h1>
          <p className="text-xs md:text-sm text-[#a1a1a6] leading-relaxed">
            Eliminates awkward DMs to busy 4th-year seniors. Read structured, verified drive debriefs submitted via our 5-minute debrief tool—complete with actual questions asked and critical traps to avoid.
          </p>
        </div>

        {/* Company Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 scrollbar-none">
          <span className="text-xs text-[#86868b] font-medium shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {companiesList.map((comp) => (
            <button
              key={comp}
              onClick={() => setFilterCompany(comp)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
                filterCompany === comp
                  ? 'bg-[#2c2c2e] text-white border border-white/20 shadow-sm'
                  : 'bg-[#141416] text-[#86868b] hover:text-[#f5f5f7] border border-white/[0.06]'
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
            className="bg-[#1c1c1e] border border-white/[0.08] rounded-3xl p-6 md:p-8 space-y-6 shadow-xl hover:border-white/20 transition duration-200"
          >
            {/* Senior Meta Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#2c2c2e] border border-white/10 flex items-center justify-center text-xl shadow-inner shrink-0">
                  {debrief.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold text-white tracking-tight">
                      {debrief.seniorName}
                    </h2>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#30d158]/10 text-[#30d158] border border-[#30d158]/20 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Placed Senior
                    </span>
                  </div>
                  <div className="text-xs text-[#0a84ff] font-medium">
                    {debrief.role} • {debrief.companyName} ({debrief.ctcOffered})
                  </div>
                  <div className="text-[11px] text-[#86868b]">
                    {debrief.batch} • Interview faced on {debrief.driveDateFaced}
                  </div>
                </div>
              </div>

              {/* Time Spent Badge & Flagging Button */}
              <div className="flex items-center gap-2 self-start md:self-auto">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#141416] border border-white/[0.04] text-[#86868b] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#ff9f0a]" />
                  Submitted in {debrief.timeSpentInMinutes} mins
                </span>

                <button
                  onClick={() => onOpenReportModal({ name: debrief.companyName, ...debrief })}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#141416] hover:bg-[#2c2c2e] text-[#86868b] hover:text-[#ff453a] border border-white/[0.06] transition flex items-center gap-1"
                >
                  <Flag className="w-3 h-3 text-[#ff453a]" />
                  <span>Report</span>
                </button>
              </div>
            </div>

            {/* Rounds Faced Breakdown */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#86868b] block">
                Rounds Completed
              </span>
              <div className="text-xs font-medium text-[#f5f5f7] bg-[#141416] p-3 rounded-2xl border border-white/[0.04]">
                {debrief.roundsFaced}
              </div>
            </div>

            {/* Key Golden Advice */}
            <div className="bg-[#141416] border border-white/[0.06] rounded-2xl p-4 text-xs md:text-sm text-[#f5f5f7] space-y-1">
              <span className="font-semibold text-[#0a84ff] flex items-center gap-1.5 uppercase text-[11px] tracking-wide">
                Key Advice
              </span>
              <p className="leading-relaxed font-normal text-[#a1a1a6]">
                "{debrief.keyAdvice}"
              </p>
            </div>

            {/* Actual Questions Faced */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#f5f5f7] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#0a84ff]" />
                <span>Actual Interview Questions & Prompts Faced:</span>
              </span>
              <div className="grid gap-2">
                {debrief.actualQuestionsAsked.map((q, qIdx) => (
                  <div 
                    key={qIdx}
                    className="p-3 rounded-xl bg-[#141416] border border-white/[0.04] text-xs text-[#f5f5f7] flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#2c2c2e] text-[#0a84ff] border border-white/10 flex items-center justify-center font-semibold text-[10px] shrink-0 mt-0.5">
                      {qIdx + 1}
                    </span>
                    <span className="leading-relaxed text-[#a1a1a6]">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fatal Traps / Mistakes to Avoid */}
            <div className="bg-[#141416] border border-white/[0.04] rounded-2xl p-4 space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff453a] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Elimination Pitfall to Avoid
              </span>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                {debrief.commonTrapsToAvoid}
              </p>
            </div>

            {/* Top 3 Study Links Contributed */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#f5f5f7] flex items-center gap-1.5">
                <BookMarked className="w-4 h-4 text-[#30d158]" />
                <span>Top Study Links Recommended by Senior:</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {debrief.topLinksContributed.map((linkTitle, lIdx) => (
                  <span
                    key={lIdx}
                    className="px-3 py-1 rounded-full bg-[#141416] border border-white/[0.06] text-xs text-[#a1a1a6] flex items-center gap-1.5 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
                    {linkTitle}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer: Helpful Feedback Button */}
            <div className="border-t border-white/[0.06] pt-4 flex items-center justify-between">
              <button
                onClick={() => onMarkHelpful(debrief.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 transition ${
                  debrief.markedHelpful
                    ? 'bg-[#30d158] text-white shadow-sm'
                    : 'bg-[#141416] hover:bg-[#2c2c2e] text-[#86868b] border border-white/[0.06]'
                }`}
              >
                <ThumbsUp className={`w-3.5 h-3.5 ${debrief.markedHelpful ? 'text-white' : 'text-[#ff9f0a]'}`} />
                <span>{debrief.markedHelpful ? "Helpful" : "Helpful"} ({debrief.helpfulCount})</span>
              </button>

              <span className="text-[11px] text-[#636366]">
                Verified Campus Placement Record
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

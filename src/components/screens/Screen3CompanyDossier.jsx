import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Flag, 
  BarChart3, 
  BookMarked, 
  MessageSquareQuote, 
  ShieldCheck, 
  ChevronRight,
  Filter
} from 'lucide-react';

export default function Screen3CompanyDossier({ 
  companies, 
  selectedCompanyId, 
  onSelectCompany, 
  onOpenDrawerWithTopic, 
  onNavigateToDebriefs, 
  onOpenReportModal 
}) {
  const [selectedRoundType, setSelectedRoundType] = useState("All");
  const company = companies.find(c => c.id === selectedCompanyId) || companies[0];
  const isFresh = company.isFresh;

  const roundTypes = ["All", "Aptitude / OA", "Technical DSA", "System Design", "HR & Culture"];

  const filteredRounds = company.rounds.filter(round => {
    if (selectedRoundType === "All") return true;
    if (selectedRoundType === "Aptitude / OA") {
      return round.title.toLowerCase().includes("oa") || 
             round.title.toLowerCase().includes("assessment") || 
             round.title.toLowerCase().includes("cognitive");
    }
    if (selectedRoundType === "Technical DSA") {
      return round.title.toLowerCase().includes("technical") || 
             round.title.toLowerCase().includes("structures") || 
             round.title.toLowerCase().includes("coding");
    }
    if (selectedRoundType === "System Design") {
      return round.title.toLowerCase().includes("design") || 
             round.title.toLowerCase().includes("core") ||
             round.description.toLowerCase().includes("system design");
    }
    if (selectedRoundType === "HR & Culture") {
      return round.title.toLowerCase().includes("hr") || 
             round.title.toLowerCase().includes("culture") || 
             round.title.toLowerCase().includes("partner") ||
             round.title.toLowerCase().includes("managerial");
    }
    return true;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Company Selector Switcher */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-white/[0.06] scrollbar-none">
        <span className="text-xs text-[#86868b] font-medium shrink-0 mr-2">
          Company:
        </span>
        {companies.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              onSelectCompany(c.id);
              setSelectedRoundType("All");
            }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition duration-200 ${
              c.id === company.id
                ? 'bg-[#2c2c2e] text-white border border-white/20 shadow-sm'
                : 'bg-[#1c1c1e] text-[#86868b] hover:text-[#f5f5f7] border border-white/[0.06]'
            }`}
          >
            <span>{c.logo}</span>
            <span>{c.name}</span>
            {!c.isFresh && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9f0a]" title="Archive Record" />
            )}
          </button>
        ))}
      </div>

      {/* Canonical Dossier Header */}
      <div className="bg-[#1c1c1e] border border-white/[0.08] rounded-3xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#2c2c2e] border border-white/10 flex items-center justify-center text-3xl shadow-inner shrink-0">
              {company.logo}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {company.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#141416] text-[#86868b] border border-white/[0.06]">
                  {company.category} Track
                </span>
              </div>
              <div className="text-sm font-medium text-[#0a84ff]">
                {company.role}
              </div>
              <p className="text-xs text-[#a1a1a6] max-w-xl">
                {company.overview}
              </p>
            </div>
          </div>

          {/* Freshness Badge & Immediate Notice Action (ITER-01) */}
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <div className="flex items-center gap-2">
              {isFresh ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#30d158]/10 text-[#30d158] border border-[#30d158]/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Current ({company.batch})</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#ff9f0a]/10 text-[#ff9f0a] border border-[#ff9f0a]/20">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Previous Batch Record</span>
                </div>
              )}

              {/* Relocated Flag Outdated Button (ITER-01: Visible above the fold) */}
              <button
                onClick={() => onOpenReportModal(company)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141416] hover:bg-[#2c2c2e] text-[#86868b] hover:text-[#ff453a] border border-white/[0.08] text-xs font-medium transition"
                title="Flag outdated format or unverified rumour"
              >
                <Flag className="w-3.5 h-3.5" />
                <span>Flag Stale Info</span>
              </button>
            </div>

            <div className="text-[11px] text-[#86868b]">
              Verified: <span className="text-[#f5f5f7] font-mono">{company.verifiedDate}</span>
            </div>
          </div>
        </div>

        {/* Notice Alert if Outdated */}
        {company.rumourAlert && (
          <div className="bg-[#ff9f0a]/10 border border-[#ff9f0a]/20 rounded-2xl p-4 text-xs text-[#ff9f0a] flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-semibold block">Verification Notice</span>
              <p>{company.rumourAlert}</p>
            </div>
          </div>
        )}

        {/* Eligibility & Package Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#141416] p-4 rounded-2xl border border-white/[0.04]">
          <div>
            <span className="text-[10px] text-[#86868b] uppercase font-medium block">Drive Date</span>
            <span className="text-xs md:text-sm font-semibold text-[#f5f5f7] flex items-center gap-1 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-[#0a84ff]" />
              {company.driveDate}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#86868b] uppercase font-medium block">Compensation</span>
            <span className="text-xs md:text-sm font-semibold text-white mt-0.5 block">
              {company.ctc}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#86868b] uppercase font-medium block">Cutoff Criteria</span>
            <span className="text-xs md:text-sm font-semibold text-[#f5f5f7] mt-0.5 block">
              Min {company.cgpaCutoff} CGPA
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#86868b] uppercase font-medium block">Eligible Branches</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {company.eligibleBranches.map((b) => (
                <span key={b} className="px-2 py-0.5 text-[10px] rounded-full bg-[#2c2c2e] text-[#a1a1a6] font-medium">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Topic Weightage Visual Proportional Bars */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a1a1a6] flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#0a84ff]" />
              <span>Campus Interview Topic Weightage</span>
            </span>
            <span className="text-[11px] text-[#86868b]">100% Preparation Allocation</span>
          </div>

          {/* Proportional Multi-Bar */}
          <div className="w-full h-2 rounded-full bg-[#2c2c2e] flex overflow-hidden">
            {company.topicWeightage.map((tw, idx) => (
              <div
                key={idx}
                className={`${tw.color} transition-all`}
                style={{ width: `${tw.percentage}%` }}
                title={`${tw.topic}: ${tw.percentage}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1">
            {company.topicWeightage.map((tw, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#a1a1a6]">
                <span className={`w-2 h-2 rounded-full ${tw.color}`} />
                <span className="truncate">{tw.topic}</span>
                <strong className="text-white ml-auto font-mono">{tw.percentage}%</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Round Sequence with ITER-03 Round Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span>Verified Round Sequence & Elimination Process</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1c1c1e] text-[#86868b] border border-white/[0.06]">
                {filteredRounds.length} Rounds
              </span>
            </h2>
            <p className="text-xs text-[#86868b]">
              Filter by round type to target specific elimination barriers.
            </p>
          </div>

          <button
            onClick={() => onOpenDrawerWithTopic("topic-dsa")}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs transition"
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Top-3 Vetted Study Links</span>
          </button>
        </div>

        {/* ITER-03: Round Type Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto bg-[#161618] p-1.5 rounded-2xl border border-white/[0.06] scrollbar-none">
          <span className="text-xs text-[#86868b] font-medium flex items-center gap-1 px-2 shrink-0">
            <Filter className="w-3 h-3 text-[#0a84ff]" /> Round Type:
          </span>
          {roundTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedRoundType(type)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition duration-200 ${
                selectedRoundType === type
                  ? 'bg-[#2c2c2e] text-white shadow-sm border border-white/10'
                  : 'text-[#86868b] hover:text-[#f5f5f7]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Filtered Rounds List */}
        <div className="space-y-3.5">
          {filteredRounds.map((round) => (
            <div
              key={round.roundNumber}
              className="bg-[#1c1c1e] border border-white/[0.08] rounded-2xl p-5 md:p-6 space-y-3 hover:border-white/20 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#2c2c2e] text-white font-semibold text-xs flex items-center justify-center shrink-0 border border-white/10">
                    {round.roundNumber}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white">
                      {round.title}
                    </h3>
                    <div className="text-xs text-[#86868b]">
                      Platform: <strong className="text-[#f5f5f7]">{round.platform}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#141416] text-[#86868b] flex items-center gap-1 font-mono border border-white/[0.04]">
                    <Clock className="w-3 h-3 text-[#636366]" />
                    {round.duration}
                  </span>

                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#ff453a]/10 text-[#ff453a] border border-[#ff453a]/20">
                    {round.eliminationRate}
                  </span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-[#a1a1a6] leading-relaxed">
                {round.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-[#30d158] flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified questions from recent drive
                </span>

                <button
                  onClick={() => onOpenDrawerWithTopic(round.roundNumber === 1 ? "topic-dsa" : round.roundNumber === 2 ? "topic-sysdesign" : "topic-os-dbms")}
                  className="inline-flex items-center gap-1 text-xs text-[#0a84ff] font-medium hover:underline transition"
                >
                  <span>Recommended Study Links for Round {round.roundNumber}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {filteredRounds.length === 0 && (
            <div className="bg-[#1c1c1e] p-8 rounded-2xl text-center text-[#86868b] text-xs">
              No rounds match the selected filter. Switch back to "All" to view the full round sequence.
            </div>
          )}
        </div>
      </div>

      {/* Jump to Experienced Thoughts Feed */}
      <div className="bg-[#1c1c1e] border border-white/[0.08] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-base font-medium text-white flex items-center justify-center md:justify-start gap-2">
            <MessageSquareQuote className="w-5 h-5 text-[#ff9f0a]" />
            <span>Looking for unfiltered senior interview advice?</span>
          </div>
          <div className="text-xs text-[#86868b]">
            Read structured debriefs submitted by placed seniors for {company.name}.
          </div>
        </div>

        <button
          onClick={onNavigateToDebriefs}
          className="px-4 py-2 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white font-medium text-xs border border-white/10 transition"
        >
          View Senior Debriefs ({company.seniorDebriefCount})
        </button>
      </div>
    </div>
  );
}

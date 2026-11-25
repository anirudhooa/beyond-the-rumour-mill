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
  const company = companies.find(c => c.id === selectedCompanyId) || companies[0];
  const isFresh = company.isFresh;

  // ITER-03: Interactive Round-Filter Pills
  const [selectedRoundFilter, setSelectedRoundFilter] = useState("All");

  const roundFilterCategories = [
    { id: "All", label: "All Rounds" },
    { id: "OA", label: "Online Assessment (OA)" },
    { id: "Tech", label: "Technical & DSA" },
    { id: "Design", label: "System Design & Core" },
    { id: "HR", label: "Culture & HR" }
  ];

  const filteredRounds = company.rounds.filter(r => {
    if (selectedRoundFilter === "All") return true;
    if (selectedRoundFilter === "OA") return r.title.toLowerCase().includes("oa") || r.title.toLowerCase().includes("assessment");
    if (selectedRoundFilter === "Tech") return r.title.toLowerCase().includes("technical") || r.title.toLowerCase().includes("data structures");
    if (selectedRoundFilter === "Design") return r.title.toLowerCase().includes("system") || r.title.toLowerCase().includes("core");
    if (selectedRoundFilter === "HR") return r.title.toLowerCase().includes("hr") || r.title.toLowerCase().includes("culture") || r.title.toLowerCase().includes("managerial");
    return true;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Company Selector Switcher Pills (insp1.jpg & placement.jpg) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs text-[#9BA8AB] font-medium shrink-0 mr-1 uppercase tracking-wider">
          Company:
        </span>
        {companies.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelectCompany(c.id)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition duration-200 ${
              c.id === company.id
                ? 'bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/60 shadow-sm'
                : 'bg-[#11212D] text-[#9BA8AB] hover:text-[#CCD0CF] border border-[#4A5C6A]/30'
            }`}
          >
            <span>{c.logo}</span>
            <span>{c.name}</span>
            {!c.isFresh && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" title="Previous Batch Archive" />
            )}
          </button>
        ))}
      </div>

      {/* Canonical Dossier Header */}
      <div className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-3xl bg-[#253745] border border-[#4A5C6A]/40 flex items-center justify-center text-3xl shadow-inner shrink-0">
              {company.logo}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-semibold text-[#CCD0CF] tracking-tight">
                  {company.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/40">
                  {company.category} Track
                </span>
              </div>
              <div className="text-sm font-medium text-[#CCD0CF]">
                {company.role}
              </div>
              <p className="text-xs text-[#9BA8AB] max-w-xl">
                {company.overview}
              </p>
            </div>
          </div>

          {/* ITER-01 (CP6 High Priority Fix): Relocated Flag Outdated Button Directly Beside Verified Badge */}
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <div className="flex flex-wrap items-center gap-2">
              {isFresh ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" />
                  <span>Verified Current ({company.batch})</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 shadow-sm">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Previous Batch Archive</span>
                </div>
              )}

              {/* ITER-01: Moved to prominent top position beside badge */}
              <button
                onClick={() => onOpenReportModal(company)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#253745] hover:bg-[#ff453a]/20 text-[#CCD0CF] hover:text-[#ff453a] border border-[#4A5C6A]/50 text-xs font-medium transition shadow-sm"
                title="Flag outdated format or unverified rumour"
              >
                <Flag className="w-3.5 h-3.5 text-[#ff453a]" />
                <span>Flag Stale / Rumour</span>
              </button>
            </div>

            <div className="text-[11px] text-[#9BA8AB] font-normal">
              Verified: <span className="text-[#CCD0CF] font-mono font-medium">{company.verifiedDate}</span>
            </div>
          </div>
        </div>

        {/* Notice Alert if Outdated */}
        {company.rumourAlert && (
          <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/25 rounded-2xl p-4 text-xs text-[#f59e0b] flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-semibold block">Active Campus Rumour Alert</span>
              <p className="text-[#f59e0b]/90">{company.rumourAlert}</p>
            </div>
          </div>
        )}

        {/* Eligibility & Package Grid (placement.jpg style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#06141B]/60 p-4 rounded-2xl border border-[#4A5C6A]/25">
          <div>
            <span className="text-[10px] text-[#9BA8AB] uppercase font-medium block">Drive Date</span>
            <span className="text-xs md:text-sm font-semibold text-[#CCD0CF] flex items-center gap-1 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
              {company.driveDate}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#9BA8AB] uppercase font-medium block">Compensation</span>
            <span className="text-xs md:text-sm font-semibold text-[#CCD0CF] mt-0.5 block">
              {company.ctc}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#9BA8AB] uppercase font-medium block">Cutoff Criteria</span>
            <span className="text-xs md:text-sm font-semibold text-[#CCD0CF] mt-0.5 block">
              Min {company.cgpaCutoff} CGPA
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#9BA8AB] uppercase font-medium block">Eligible Branches</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {company.eligibleBranches.map((b) => (
                <span key={b} className="px-2 py-0.5 text-[10px] rounded-full bg-[#11212D] text-[#9BA8AB] font-medium border border-[#4A5C6A]/35">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Topic Weightage Visual Proportional Bars */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9BA8AB] flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#38bdf8]" />
              <span>Campus Interview Topic Weightage</span>
            </span>
            <span className="text-[11px] text-[#9BA8AB] font-mono">100% Preparation Allocation</span>
          </div>

          {/* Proportional Multi-Bar */}
          <div className="w-full h-2.5 rounded-full bg-[#253745] flex overflow-hidden">
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
              <div key={idx} className="flex items-center gap-2 text-xs text-[#9BA8AB]">
                <span className={`w-2 h-2 rounded-full ${tw.color}`} />
                <span className="truncate">{tw.topic}</span>
                <strong className="text-[#CCD0CF] ml-auto font-mono">{tw.percentage}%</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Round Sequence with ITER-03 Round Filter Pills */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#CCD0CF] tracking-tight flex items-center gap-2">
              <span>Verified Round Sequence & Elimination Process</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/40 font-mono font-medium">
                {filteredRounds.length} Rounds
              </span>
            </h2>
            <p className="text-xs text-[#9BA8AB]">
              Each round is timestamped and cross-checked with placed candidates.
            </p>
          </div>

          <button
            onClick={() => onOpenDrawerWithTopic("topic-dsa")}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs shadow-sm transition"
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Top-3 Vetted Study Links</span>
          </button>
        </div>

        {/* ITER-03: Interactive Round-Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 bg-[#11212D] p-2 rounded-2xl border border-[#4A5C6A]/35">
          <span className="text-xs text-[#9BA8AB] font-medium px-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {roundFilterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedRoundFilter(cat.id)}
              className={`px-3 py-1 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                selectedRoundFilter === cat.id
                  ? 'bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/60 shadow-sm'
                  : 'text-[#9BA8AB] hover:text-[#CCD0CF] hover:bg-[#253745]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Round Cards */}
        <div className="space-y-3.5">
          {filteredRounds.map((round) => (
            <div
              key={round.roundNumber}
              className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-5 md:p-6 space-y-3 hover:border-[#9BA8AB]/40 hover:bg-[#162a39] transition duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#4A5C6A]/25 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-2xl bg-[#253745] text-[#CCD0CF] font-semibold text-xs flex items-center justify-center shrink-0 border border-[#4A5C6A]/40">
                    {round.roundNumber}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#CCD0CF]">
                      {round.title}
                    </h3>
                    <div className="text-xs text-[#9BA8AB]">
                      Platform: <strong className="text-[#CCD0CF] font-medium">{round.platform}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#06141B]/60 text-[#9BA8AB] flex items-center gap-1 font-mono border border-[#4A5C6A]/25">
                    <Clock className="w-3 h-3 text-[#9BA8AB]/70" />
                    {round.duration}
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#ff453a]/15 text-[#ff453a] border border-[#ff453a]/25">
                    {round.eliminationRate}
                  </span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-[#9BA8AB] leading-relaxed font-normal">
                {round.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-[#34d399] flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified questions from recent drive
                </span>

                <button
                  onClick={() => onOpenDrawerWithTopic(round.roundNumber === 1 ? "topic-dsa" : round.roundNumber === 2 ? "topic-sysdesign" : "topic-os-dbms")}
                  className="inline-flex items-center gap-1 text-xs text-[#38bdf8] hover:text-[#7dd3fc] font-medium transition"
                >
                  <span>Recommended Study Links for Round {round.roundNumber}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jump to Experienced Thoughts Feed */}
      <div className="bg-[#06141B]/70 border border-[#4A5C6A]/35 text-[#CCD0CF] rounded-3xl p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-base font-semibold text-[#CCD0CF] flex items-center justify-center md:justify-start gap-2">
            <MessageSquareQuote className="w-5 h-5 text-[#f59e0b]" />
            <span>Looking for unfiltered senior interview advice?</span>
          </div>
          <div className="text-xs text-[#9BA8AB]">
            Read structured debriefs submitted by placed seniors for {company.name}.
          </div>
        </div>

        <button
          onClick={onNavigateToDebriefs}
          className="px-5 py-2.5 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs transition shadow-sm"
        >
          View Senior Debriefs ({company.seniorDebriefCount})
        </button>
      </div>
    </div>
  );
}

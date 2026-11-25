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
        <span className="text-xs text-neutral-400 font-bold shrink-0 mr-1 uppercase tracking-wider">
          Company:
        </span>
        {companies.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelectCompany(c.id)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-2xl text-xs font-bold whitespace-nowrap transition duration-200 ${
              c.id === company.id
                ? 'bg-neutral-900 text-white shadow-md'
                : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
            }`}
          >
            <span>{c.logo}</span>
            <span>{c.name}</span>
            {!c.isFresh && (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" title="Previous Batch Archive" />
            )}
          </button>
        ))}
      </div>

      {/* Canonical Dossier Header */}
      <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-3xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-3xl shadow-inner shrink-0">
              {company.logo}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  {company.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-neutral-100 text-neutral-700">
                  {company.category} Track
                </span>
              </div>
              <div className="text-sm font-bold text-neutral-800">
                {company.role}
              </div>
              <p className="text-xs text-neutral-500 max-w-xl">
                {company.overview}
              </p>
            </div>
          </div>

          {/* ITER-01 (CP6 High Priority Fix): Relocated Flag Outdated Button Directly Beside Verified Badge */}
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <div className="flex flex-wrap items-center gap-2">
              {isFresh ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Current ({company.batch})</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 shadow-sm">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Previous Batch Archive</span>
                </div>
              )}

              {/* ITER-01: Moved to prominent top position beside badge */}
              <button
                onClick={() => onOpenReportModal(company)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 hover:bg-rose-50 text-neutral-700 hover:text-rose-600 border border-neutral-200 hover:border-rose-200 text-xs font-bold transition shadow-sm"
                title="Flag outdated format or unverified rumour"
              >
                <Flag className="w-3.5 h-3.5 text-rose-500" />
                <span>Flag Stale / Rumour</span>
              </button>
            </div>

            <div className="text-[11px] text-neutral-500 font-medium">
              Verified: <span className="text-neutral-800 font-mono font-bold">{company.verifiedDate}</span>
            </div>
          </div>
        </div>

        {/* Notice Alert if Outdated */}
        {company.rumourAlert && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold block">Active Campus Rumour Alert</span>
              <p>{company.rumourAlert}</p>
            </div>
          </div>
        )}

        {/* Eligibility & Package Grid (placement.jpg style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
          <div>
            <span className="text-[10px] text-neutral-400 uppercase font-bold block">Drive Date</span>
            <span className="text-xs md:text-sm font-extrabold text-neutral-900 flex items-center gap-1 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
              {company.driveDate}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-neutral-400 uppercase font-bold block">Compensation</span>
            <span className="text-xs md:text-sm font-black text-neutral-900 mt-0.5 block">
              {company.ctc}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-neutral-400 uppercase font-bold block">Cutoff Criteria</span>
            <span className="text-xs md:text-sm font-extrabold text-neutral-900 mt-0.5 block">
              Min {company.cgpaCutoff} CGPA
            </span>
          </div>

          <div>
            <span className="text-[10px] text-neutral-400 uppercase font-bold block">Eligible Branches</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {company.eligibleBranches.map((b) => (
                <span key={b} className="px-2 py-0.5 text-[10px] rounded-full bg-white text-neutral-700 font-bold border border-neutral-200">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Topic Weightage Visual Proportional Bars */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-neutral-900" />
              <span>Campus Interview Topic Weightage</span>
            </span>
            <span className="text-[11px] text-neutral-500 font-mono">100% Preparation Allocation</span>
          </div>

          {/* Proportional Multi-Bar */}
          <div className="w-full h-2.5 rounded-full bg-neutral-200 flex overflow-hidden">
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
              <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600">
                <span className={`w-2 h-2 rounded-full ${tw.color}`} />
                <span className="truncate">{tw.topic}</span>
                <strong className="text-neutral-900 ml-auto font-mono">{tw.percentage}%</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Round Sequence with ITER-03 Round Filter Pills */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight flex items-center gap-2">
              <span>Verified Round Sequence & Elimination Process</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-200 text-neutral-800 font-mono font-bold">
                {filteredRounds.length} Rounds
              </span>
            </h2>
            <p className="text-xs text-neutral-500">
              Each round is timestamped and cross-checked with placed candidates.
            </p>
          </div>

          <button
            onClick={() => onOpenDrawerWithTopic("topic-dsa")}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs shadow-sm transition"
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Top-3 Vetted Study Links</span>
          </button>
        </div>

        {/* ITER-03: Interactive Round-Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 bg-white p-2 rounded-2xl border border-neutral-200">
          <span className="text-xs text-neutral-400 font-bold px-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {roundFilterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedRoundFilter(cat.id)}
              className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedRoundFilter === cat.id
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
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
              className="bg-white border border-neutral-200 rounded-3xl p-5 md:p-6 space-y-3 hover:border-neutral-300 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-2xl bg-neutral-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {round.roundNumber}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">
                      {round.title}
                    </h3>
                    <div className="text-xs text-neutral-500">
                      Platform: <strong className="text-neutral-800">{round.platform}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-neutral-100 text-neutral-700 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-neutral-500" />
                    {round.duration}
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                    {round.eliminationRate}
                  </span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-normal">
                {round.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-emerald-600 flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified questions from recent drive
                </span>

                <button
                  onClick={() => onOpenDrawerWithTopic(round.roundNumber === 1 ? "topic-dsa" : round.roundNumber === 2 ? "topic-sysdesign" : "topic-os-dbms")}
                  className="inline-flex items-center gap-1 text-xs text-neutral-900 font-extrabold hover:underline transition"
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
      <div className="bg-neutral-900 text-white rounded-3xl p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-base font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <MessageSquareQuote className="w-5 h-5 text-amber-400" />
            <span>Looking for unfiltered senior interview advice?</span>
          </div>
          <div className="text-xs text-neutral-400">
            Read structured debriefs submitted by placed seniors for {company.name}.
          </div>
        </div>

        <button
          onClick={onNavigateToDebriefs}
          className="px-5 py-2.5 rounded-2xl bg-white hover:bg-neutral-100 text-neutral-900 font-extrabold text-xs transition shadow-sm"
        >
          View Senior Debriefs ({company.seniorDebriefCount})
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Award,
  Filter
} from 'lucide-react';

export default function Screen1Home({ 
  companies, 
  onSelectCompany, 
  onNavigateToRoadmap,
  onNavigateToDebriefs 
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [filterFreshOnly, setFilterFreshOnly] = useState(false);

  const roles = ["All", "SDE", "Analyst", "Core"];

  const filteredCompanies = companies.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.overview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "All" || c.category === selectedRole;
    const matchesFresh = !filterFreshOnly || c.isFresh;
    return matchesSearch && matchesRole && matchesFresh;
  });

  return (
    <div className="space-y-10 pb-16">
      {/* Apple-style Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1c1c1e] to-[#141416] p-8 md:p-12 border border-white/[0.08] shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a84ff]/10 border border-[#0a84ff]/20 text-xs font-medium text-[#0a84ff]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Placement Intelligence</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Stop Guessing on WhatsApp. <br />
            <span className="text-[#86868b]">Prepare with verified campus intelligence.</span>
          </h1>

          <p className="text-sm md:text-base text-[#a1a1a6] leading-relaxed max-w-2xl font-normal">
            Every company dossier is confirmed with recent drive dates, exact test platforms, elimination percentages, and top 3 senior-vetted study resources. Zero forward noise.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onNavigateToRoadmap}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs md:text-sm shadow-sm hover:opacity-95 active:scale-98 transition"
            >
              <span>Explore 4-Week Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToDebriefs}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] text-[#f5f5f7] font-medium text-xs md:text-sm border border-white/[0.08] transition"
            >
              <Award className="w-4 h-4 text-[#ff9f0a]" />
              <span>Read Senior Debriefs</span>
            </button>
          </div>
        </div>

        {/* Ambient Subtle Radial Glow */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#0a84ff]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Discovery, Search & Segmented Controls */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
              <span>Active Placement Drives</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#1c1c1e] text-[#86868b] border border-white/[0.06]">
                {filteredCompanies.length} available
              </span>
            </h2>
            <p className="text-xs text-[#86868b]">
              Verified drive dates, selection rounds, and eligibility criteria.
            </p>
          </div>

          {/* Search Bar - Apple Style */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
            <input
              type="text"
              placeholder="Search company (Microsoft, Amazon, Optum...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1c1c1e] border border-white/[0.08] rounded-full pl-9 pr-4 py-2 text-xs text-[#f5f5f7] placeholder-[#636366] focus:outline-none focus:border-[#0a84ff] focus:ring-1 focus:ring-[#0a84ff] transition"
            />
          </div>
        </div>

        {/* Segmented Role Switcher & Freshness Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#161618] p-2 rounded-2xl border border-white/[0.06]">
          <div className="flex items-center gap-1 overflow-x-auto">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                  selectedRole === role
                    ? 'bg-[#2c2c2e] text-white shadow-sm border border-white/10'
                    : 'text-[#86868b] hover:text-[#f5f5f7]'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 cursor-pointer text-xs text-[#a1a1a6] font-medium pr-2 select-none">
            <input
              type="checkbox"
              checked={filterFreshOnly}
              onChange={(e) => setFilterFreshOnly(e.target.checked)}
              className="w-4 h-4 rounded text-[#0a84ff] bg-[#1c1c1e] border-white/20 focus:ring-[#0a84ff]"
            />
            <span>Current Batch Only</span>
          </label>
        </div>
      </div>

      {/* Company Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCompanies.map((comp) => {
          const isFresh = comp.isFresh;
          return (
            <div
              key={comp.id}
              className={`rounded-2xl bg-[#1c1c1e] border transition-all duration-200 hover:border-white/20 hover:bg-[#242426] flex flex-col justify-between overflow-hidden shadow-sm ${
                isFresh 
                  ? 'border-white/[0.08]' 
                  : 'border-white/[0.08]'
              }`}
            >
              {/* Card Header & Verification Status Badge */}
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#2c2c2e] border border-white/10 flex items-center justify-center text-xl shadow-inner shrink-0">
                      {comp.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-white tracking-tight">
                        {comp.name}
                      </h3>
                      <div className="text-xs text-[#86868b]">
                        {comp.role}
                      </div>
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className="shrink-0">
                    {isFresh ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#30d158]/10 text-[#30d158] border border-[#30d158]/20">
                        <CheckCircle2 className="w-3 h-3 text-[#30d158]" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#ff9f0a]/10 text-[#ff9f0a] border border-[#ff9f0a]/20">
                        <AlertTriangle className="w-3 h-3 text-[#ff9f0a]" />
                        Previous Batch
                      </span>
                    )}
                  </div>
                </div>

                {/* Drive Date / Batch */}
                <div className="flex items-center gap-2 text-[11px] text-[#86868b] bg-[#141416] px-3 py-1.5 rounded-xl border border-white/[0.04]">
                  <Calendar className="w-3.5 h-3.5 text-[#0a84ff] shrink-0" />
                  <span>Drive: <strong className="text-[#f5f5f7] font-medium">{comp.driveDate}</strong> ({comp.batch})</span>
                </div>

                {/* Notice Alert if Present */}
                {comp.rumourAlert && (
                  <div className="bg-[#ff9f0a]/10 border border-[#ff9f0a]/20 rounded-xl p-2.5 text-[11px] text-[#ff9f0a] flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#ff9f0a] shrink-0 mt-0.5" />
                    <span><strong>Notice:</strong> {comp.rumourAlert}</span>
                  </div>
                )}

                {/* Criteria: Package & CGPA */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#141416] p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="text-[10px] text-[#86868b] block uppercase font-medium">Package</span>
                    <span className="font-semibold text-white">{comp.ctc}</span>
                  </div>
                  <div className="bg-[#141416] p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="text-[10px] text-[#86868b] block uppercase font-medium">Eligibility</span>
                    <span className="font-semibold text-[#f5f5f7]">{comp.cgpaCutoff} CGPA</span>
                  </div>
                </div>

                {/* Rounds Summary Preview */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-[#86868b]">
                    <span>{comp.rounds.length} Selection Rounds</span>
                    <span className="text-[#0a84ff] font-medium">Step 1 to {comp.rounds.length}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {comp.rounds.map((r, rIdx) => (
                      <div 
                        key={rIdx} 
                        className="flex-1 h-1.5 rounded-full bg-[#2c2c2e] overflow-hidden" 
                        title={`Round ${r.roundNumber}: ${r.title}`}
                      >
                        <div className={`h-full ${rIdx === 0 ? 'bg-[#0a84ff]' : 'bg-[#30d158]'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-3.5 bg-[#161618] border-t border-white/[0.06] flex items-center gap-2">
                <button
                  onClick={() => onSelectCompany(comp.id)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white font-medium text-xs border border-white/10 transition"
                >
                  <span>View Dossier</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#86868b]" />
                </button>

                <button
                  onClick={() => {
                    onSelectCompany(comp.id);
                    onNavigateToDebriefs();
                  }}
                  className="py-1.5 px-3 rounded-full text-[#86868b] hover:text-white hover:bg-[#2c2c2e] text-xs font-medium transition"
                  title="Read Placed Senior Feedback"
                >
                  Debriefs ({comp.seniorDebriefCount})
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

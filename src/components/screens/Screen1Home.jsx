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
  Filter,
  CheckCircle,
  BarChart2,
  Users,
  Compass
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
    <div className="space-y-8 pb-16">
      {/* Top Greeting & Quick Action Row (inspired by placement.jpg) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
            Welcome back, Candidate!
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Track verified campus placement drives, 4-week preparation milestones, and senior debriefs.
          </p>
        </div>

        {/* Global Search Bar (insp1.jpg & placement.jpg) */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search company (Microsoft, Amazon, Optum...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-neutral-200/90 rounded-2xl pl-10 pr-4 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 shadow-sm transition"
          />
        </div>
      </div>

      {/* ITER-02 (CP6 High Priority Iteration): Elevated 'Start Here (4-Week Roadmap)' & Placement Analytics (placement.jpg layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Dark Analytics Card (placement.jpg: "Overall Information") */}
        <div className="lg:col-span-5 rounded-3xl bg-[#18181b] text-white p-6 md:p-7 space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Placement Intelligence</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                2026 Batch Active
              </span>
            </div>

            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-4xl md:text-5xl font-black tracking-tight text-white">
                100%
              </span>
              <span className="text-xs text-neutral-400">
                Drive Details Stamped & Batch Verified
              </span>
            </div>
          </div>

          {/* Quick Metrics Sub-Pills (placement.jpg style) */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="bg-white/10 rounded-2xl p-3 text-center border border-white/5">
              <div className="text-xl font-extrabold text-white">6</div>
              <div className="text-[10px] text-neutral-400 font-medium">Dossiers</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 text-center border border-white/5">
              <div className="text-xl font-extrabold text-white">12</div>
              <div className="text-[10px] text-neutral-400 font-medium">Vetted Links</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 text-center border border-white/5">
              <div className="text-xl font-extrabold text-white">15+</div>
              <div className="text-[10px] text-neutral-400 font-medium">Debriefs</div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-white/10">
            <span className="text-xs text-neutral-400">Zero WhatsApp rumor noise</span>
            <button
              onClick={onNavigateToDebriefs}
              className="text-xs font-bold text-white flex items-center gap-1 hover:underline"
            >
              <span>Read Senior Debriefs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Elevated 'Start Here' Roadmap Spotlight Card (ITER-02 & placement.jpg: "Weekly progress" & "Month goals") */}
        <div className="lg:col-span-7 rounded-3xl bg-white border border-black/[0.06] p-6 md:p-7 space-y-5 shadow-sm hover:shadow-md transition">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-neutral-900 text-white">
                  NEW TO PLACEMENTS?
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Step 1 of 4
                </span>
              </div>
              <h2 className="text-lg font-bold text-neutral-900 tracking-tight">
                Start Here: 4-Week Structured Foundation Roadmap
              </h2>
            </div>

            <button
              onClick={onNavigateToRoadmap}
              className="px-4 py-2 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition"
            >
              <span>Launch Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Week Progress Pills (ITER-02) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { week: 1, title: "Aptitude", done: "3/3 Topics", status: "Active" },
              { week: 2, title: "Algorithms", done: "3/3 Topics", status: "Upcoming" },
              { week: 3, title: "Core CS", done: "3/3 Topics", status: "Upcoming" },
              { week: 4, title: "System Design", done: "3/3 Topics", status: "Upcoming" }
            ].map((w, idx) => (
              <div 
                key={w.week}
                onClick={onNavigateToRoadmap}
                className={`p-3 rounded-2xl border cursor-pointer transition text-left ${
                  idx === 0 
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md' 
                    : 'bg-neutral-50/80 hover:bg-neutral-100 border-neutral-200/80 text-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold uppercase ${idx === 0 ? 'text-neutral-300' : 'text-neutral-400'}`}>
                    Week {w.week}
                  </span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${idx === 0 ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
                    {w.status}
                  </span>
                </div>
                <div className="font-bold text-xs truncate">{w.title}</div>
                <div className={`text-[10px] mt-0.5 ${idx === 0 ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {w.done}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar & Anti-Overload Assurance */}
          <div className="bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200/60 flex items-center justify-between text-xs text-neutral-600">
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Strictly 3 senior-vetted study resources per topic. Zero paralysis.</span>
            </span>
            <span className="font-mono font-bold text-neutral-900 hidden sm:inline">
              12 High-Yield Milestones
            </span>
          </div>
        </div>
      </div>

      {/* Discovery & Segmented Role Filter Section */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <span>Active Campus Drives & Verified Records</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-mono font-bold">
                {filteredCompanies.length} available
              </span>
            </h2>
            <p className="text-xs text-neutral-500">
              Filter by target role or explore verified interview round sequences.
            </p>
          </div>

          {/* Filter Pills (insp1.jpg style segmented buttons) */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-100 p-1.5 rounded-2xl border border-neutral-200/60">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  selectedRole === role
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50'
                }`}
              >
                {role}
              </button>
            ))}

            <div className="h-4 w-px bg-neutral-300 mx-1 hidden sm:block" />

            <label className="flex items-center gap-1.5 cursor-pointer text-xs text-neutral-700 font-semibold px-2 select-none">
              <input
                type="checkbox"
                checked={filterFreshOnly}
                onChange={(e) => setFilterFreshOnly(e.target.checked)}
                className="w-3.5 h-3.5 rounded text-neutral-900 bg-white border-neutral-300 focus:ring-neutral-900"
              />
              <span>Current Batch Only</span>
            </label>
          </div>
        </div>

        {/* Company Cards Grid (Clean Monochrome Cards from placement.jpg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCompanies.map((comp) => {
            const isFresh = comp.isFresh;
            return (
              <div
                key={comp.id}
                className="rounded-3xl bg-white border border-neutral-200/80 p-5 space-y-4 hover:border-neutral-400 hover:shadow-lg transition duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Header & Verification Status Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-2xl shadow-inner shrink-0">
                        {comp.logo}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base text-neutral-900 tracking-tight">
                          {comp.name}
                        </h3>
                        <div className="text-xs text-neutral-500 font-medium">
                          {comp.role}
                        </div>
                      </div>
                    </div>

                    {/* Freshness Badge */}
                    <div className="shrink-0">
                      {isFresh ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          <AlertTriangle className="w-3 h-3 text-amber-600" />
                          Previous Batch
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Drive Date Tag */}
                  <div className="flex items-center gap-2 text-[11px] text-neutral-600 bg-neutral-50 px-3 py-1.5 rounded-xl border border-neutral-100 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>Drive: <strong className="text-neutral-900">{comp.driveDate}</strong> ({comp.batch})</span>
                  </div>

                  {/* Criteria: Package & CGPA */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-neutral-50 p-2.5 rounded-2xl border border-neutral-100">
                      <span className="text-[10px] text-neutral-400 block uppercase font-bold">Package</span>
                      <span className="font-black text-neutral-900">{comp.ctc}</span>
                    </div>
                    <div className="bg-neutral-50 p-2.5 rounded-2xl border border-neutral-100">
                      <span className="text-[10px] text-neutral-400 block uppercase font-bold">Cutoff</span>
                      <span className="font-bold text-neutral-900">{comp.cgpaCutoff} CGPA</span>
                    </div>
                  </div>

                  {/* Rounds Multi-Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                      <span>{comp.rounds.length} Verified Rounds</span>
                      <span className="text-neutral-900 font-bold">Step 1 to {comp.rounds.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {comp.rounds.map((r, rIdx) => (
                        <div 
                          key={rIdx} 
                          className="flex-1 h-1.5 rounded-full bg-neutral-200 overflow-hidden" 
                          title={`Round ${r.roundNumber}: ${r.title}`}
                        >
                          <div className={`h-full ${rIdx === 0 ? 'bg-neutral-900' : 'bg-emerald-500'}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectCompany(comp.id)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs shadow-sm transition"
                  >
                    <span>View Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      onSelectCompany(comp.id);
                      onNavigateToDebriefs();
                    }}
                    className="py-2 px-3 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-bold transition"
                  >
                    Debriefs ({comp.seniorDebriefCount})
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

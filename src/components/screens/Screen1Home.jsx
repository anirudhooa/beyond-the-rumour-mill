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
      {/* Top Greeting & Search Row (inspired by placement.jpg) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#CCD0CF]">
            Welcome back, Candidate
          </h1>
          <p className="text-xs sm:text-sm text-[#9BA8AB]">
            Track verified campus placement drives, 4-week preparation milestones, and senior debriefs.
          </p>
        </div>

        {/* Global Search Bar (insp1.jpg & placement.jpg) */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9BA8AB]" />
          <input
            type="text"
            placeholder="Search company (Microsoft, Amazon, Optum...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#11212D] border border-[#4A5C6A]/40 rounded-full pl-10 pr-4 py-2 text-xs text-[#CCD0CF] placeholder-[#9BA8AB]/50 focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF] transition"
          />
        </div>
      </div>

      {/* ITER-02: Elevated 'Start Here (4-Week Roadmap)' & Placement Analytics (placement.jpg layout in New Theme) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Dark Analytics Card (placement.jpg: "Overall Information") */}
        <div className="lg:col-span-5 rounded-3xl bg-[#11212D] border border-[#4A5C6A]/35 p-6 md:p-7 space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#9BA8AB] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#34d399]" />
                <span>Placement Intelligence</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20">
                2026 Batch Active
              </span>
            </div>

            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#CCD0CF]">
                100%
              </span>
              <span className="text-xs text-[#9BA8AB]">
                Drive Details Stamped & Batch Verified
              </span>
            </div>
          </div>

          {/* Quick Metrics Sub-Pills (placement.jpg style) */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="bg-[#253745]/60 rounded-2xl p-3 text-center border border-[#4A5C6A]/25">
              <div className="text-xl font-semibold text-[#CCD0CF]">6</div>
              <div className="text-[10px] text-[#9BA8AB]">Dossiers</div>
            </div>
            <div className="bg-[#253745]/60 rounded-2xl p-3 text-center border border-[#4A5C6A]/25">
              <div className="text-xl font-semibold text-[#CCD0CF]">12</div>
              <div className="text-[10px] text-[#9BA8AB]">Vetted Links</div>
            </div>
            <div className="bg-[#253745]/60 rounded-2xl p-3 text-center border border-[#4A5C6A]/25">
              <div className="text-xl font-semibold text-[#CCD0CF]">15+</div>
              <div className="text-[10px] text-[#9BA8AB]">Debriefs</div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-[#4A5C6A]/30">
            <span className="text-xs text-[#9BA8AB]">Zero WhatsApp rumor noise</span>
            <button
              onClick={onNavigateToDebriefs}
              className="text-xs font-medium text-[#38bdf8] flex items-center gap-1 hover:underline"
            >
              <span>Read Senior Debriefs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Elevated 'Start Here' Roadmap Spotlight Card (ITER-02 & placement.jpg) */}
        <div className="lg:col-span-7 rounded-3xl bg-[#11212D] border border-[#4A5C6A]/35 p-6 md:p-7 space-y-5 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#4A5C6A]/30 pb-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/40">
                  NEW TO PLACEMENTS?
                </span>
                <span className="text-xs font-medium text-[#34d399] bg-[#34d399]/10 px-2 py-0.5 rounded-full border border-[#34d399]/20">
                  Step 1 of 4
                </span>
              </div>
              <h2 className="text-lg font-semibold text-[#CCD0CF] tracking-tight">
                Start Here: 4-Week Structured Foundation Roadmap
              </h2>
            </div>

            <button
              onClick={onNavigateToRoadmap}
              className="px-4 py-2 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs flex items-center gap-1.5 shadow-md transition"
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
                className={`p-3.5 rounded-2xl border cursor-pointer transition text-left ${
                  idx === 0 
                    ? 'bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]/70 shadow-sm' 
                    : 'bg-[#06141B]/50 hover:bg-[#253745]/40 border-[#4A5C6A]/20 text-[#9BA8AB]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-semibold uppercase ${idx === 0 ? 'text-[#38bdf8]' : 'text-[#9BA8AB]/70'}`}>
                    Week {w.week}
                  </span>
                  <span className={`text-[9px] font-medium px-1.5 py-0.2 rounded-full ${idx === 0 ? 'bg-[#38bdf8]/20 text-[#38bdf8]' : 'bg-[#253745]/40 text-[#9BA8AB]'}`}>
                    {w.status}
                  </span>
                </div>
                <div className="font-medium text-xs text-[#CCD0CF] truncate">{w.title}</div>
                <div className="text-[10px] mt-0.5 text-[#9BA8AB]">
                  {w.done}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar & Anti-Overload Assurance */}
          <div className="bg-[#06141B]/50 p-3.5 rounded-2xl border border-[#4A5C6A]/20 flex items-center justify-between text-xs text-[#9BA8AB]">
            <span className="flex items-center gap-2 font-normal">
              <CheckCircle className="w-4 h-4 text-[#34d399]" />
              <span>Strictly 3 senior-vetted study resources per topic. Zero paralysis.</span>
            </span>
            <span className="font-mono font-medium text-[#CCD0CF] hidden sm:inline">
              12 High-Yield Milestones
            </span>
          </div>
        </div>
      </div>

      {/* Discovery & Segmented Role Filter Section */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#CCD0CF] tracking-tight flex items-center gap-2">
              <span>Active Campus Drives & Verified Records</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#11212D] text-[#9BA8AB] border border-[#4A5C6A]/30 font-mono">
                {filteredCompanies.length} available
              </span>
            </h2>
            <p className="text-xs text-[#9BA8AB]">
              Filter by target role or explore verified interview round sequences.
            </p>
          </div>

          {/* Filter Pills (Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-2 bg-[#11212D] p-1.5 rounded-full border border-[#4A5C6A]/35">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                  selectedRole === role
                    ? 'bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/60 shadow-sm'
                    : 'text-[#9BA8AB] hover:text-[#CCD0CF]'
                }`}
              >
                {role}
              </button>
            ))}

            <div className="h-4 w-px bg-[#4A5C6A]/40 mx-1 hidden sm:block" />

            <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#9BA8AB] font-medium px-2 select-none">
              <input
                type="checkbox"
                checked={filterFreshOnly}
                onChange={(e) => setFilterFreshOnly(e.target.checked)}
                className="w-3.5 h-3.5 rounded text-[#38bdf8] bg-[#06141B] border-[#4A5C6A]/50 focus:ring-[#38bdf8]"
              />
              <span>Current Batch Only</span>
            </label>
          </div>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCompanies.map((comp) => {
            const isFresh = comp.isFresh;
            return (
              <div
                key={comp.id}
                className="rounded-3xl bg-[#11212D] border border-[#4A5C6A]/35 p-5 space-y-4 hover:border-[#9BA8AB]/40 hover:bg-[#162a39] transition duration-200 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  {/* Card Header & Verification Status Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#253745] border border-[#4A5C6A]/40 flex items-center justify-center text-2xl shadow-inner shrink-0">
                        {comp.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-[#CCD0CF] tracking-tight">
                          {comp.name}
                        </h3>
                        <div className="text-xs text-[#9BA8AB] font-normal">
                          {comp.role}
                        </div>
                      </div>
                    </div>

                    {/* Freshness Badge */}
                    <div className="shrink-0">
                      {isFresh ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20">
                          <CheckCircle2 className="w-3 h-3 text-[#34d399]" />
                          Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                          <AlertTriangle className="w-3 h-3 text-[#f59e0b]" />
                          Previous Batch
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Drive Date Tag */}
                  <div className="flex items-center gap-2 text-[11px] text-[#9BA8AB] bg-[#06141B]/60 px-3 py-1.5 rounded-xl border border-[#4A5C6A]/25">
                    <Calendar className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                    <span>Drive: <strong className="text-[#CCD0CF] font-medium">{comp.driveDate}</strong> ({comp.batch})</span>
                  </div>

                  {/* Criteria: Package & CGPA */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-[#06141B]/60 p-2.5 rounded-2xl border border-[#4A5C6A]/25">
                      <span className="text-[10px] text-[#9BA8AB] block uppercase font-medium">Package</span>
                      <span className="font-semibold text-[#CCD0CF]">{comp.ctc}</span>
                    </div>
                    <div className="bg-[#06141B]/60 p-2.5 rounded-2xl border border-[#4A5C6A]/25">
                      <span className="text-[10px] text-[#9BA8AB] block uppercase font-medium">Cutoff</span>
                      <span className="font-semibold text-[#CCD0CF]">{comp.cgpaCutoff} CGPA</span>
                    </div>
                  </div>

                  {/* Rounds Multi-Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-[#9BA8AB]">
                      <span>{comp.rounds.length} Selection Rounds</span>
                      <span className="text-[#38bdf8] font-medium">Step 1 to {comp.rounds.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {comp.rounds.map((r, rIdx) => (
                        <div 
                          key={rIdx} 
                          className="flex-1 h-1.5 rounded-full bg-[#253745] overflow-hidden" 
                          title={`Round ${r.roundNumber}: ${r.title}`}
                        >
                          <div className={`h-full ${rIdx === 0 ? 'bg-[#38bdf8]' : 'bg-[#34d399]'}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#4A5C6A]/25 flex items-center gap-2">
                  <button
                    onClick={() => onSelectCompany(comp.id)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#253745] hover:bg-[#344b5d] text-[#CCD0CF] font-medium text-xs border border-[#4A5C6A]/50 transition shadow-sm"
                  >
                    <span>View Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#9BA8AB]" />
                  </button>

                  <button
                    onClick={() => {
                      onSelectCompany(comp.id);
                      onNavigateToDebriefs();
                    }}
                    className="py-2 px-3.5 rounded-full bg-[#06141B]/60 hover:bg-[#253745] text-[#9BA8AB] hover:text-[#CCD0CF] text-xs font-medium border border-[#4A5C6A]/25 transition"
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

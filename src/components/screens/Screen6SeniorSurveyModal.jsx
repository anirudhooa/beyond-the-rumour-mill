import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Plus, 
  Trash2
} from 'lucide-react';

export default function Screen6SeniorSurveyModal({ 
  onAddDebrief, 
  onClose,
  companies 
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    seniorName: "Aayush Nehra (CSE)",
    companyName: "Microsoft",
    role: "SDE-1 (Cloud & Enterprise)",
    ctcOffered: "43.5 LPA",
    driveDateFaced: "12 Nov 2025",
    roundsFaced: "OA (Codility) + 2 Technical DSA Rounds + Director AA Round",
    keyAdvice: "Don't rush into code. Discuss brute force first, clarify edge cases with the interviewer, and calculate time complexity out loud before typing.",
    questionsAsked: [
      "Binary tree lowest common ancestor with negative node values",
      "Design a scalable LRU cache with concurrency locks"
    ],
    commonTrap: "Assuming the interviewer is looking for optimal code on line 1. They look for thought structure and communicability.",
    links: [
      { title: "NeetCode 150 Trees and Heaps", why: "Covers 90% of Microsoft Round 1 questions" },
      { title: "ByteByteGo System Design Basics", why: "Helps you draw clear architectural boxes in Round 2" },
      { title: "Striver 2D Dynamic Programming", why: "Essential for clearing the OA round" }
    ]
  });

  const [newQuestion, setNewQuestion] = useState("");

  // 5-Minute Timer Countdown Simulation (300 seconds total)
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const remainingSeconds = Math.max(300 - elapsedSeconds, 0);
  const formatTimer = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLinkChange = (index, field, value) => {
    setFormData(prev => {
      const updatedLinks = [...prev.links];
      updatedLinks[index] = { ...updatedLinks[index], [field]: value };
      return { ...prev, links: updatedLinks };
    });
  };

  const addLink = () => {
    if (formData.links.length < 3) {
      setFormData(prev => ({
        ...prev,
        links: [...prev.links, { title: "", why: "" }]
      }));
    }
  };

  const removeLink = (index) => {
    if (formData.links.length > 1) {
      setFormData(prev => ({
        ...prev,
        links: prev.links.filter((_, idx) => idx !== index)
      }));
    }
  };

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setFormData(prev => ({
        ...prev,
        questionsAsked: [...prev.questionsAsked, newQuestion.trim()]
      }));
      setNewQuestion("");
    }
  };

  const removeQuestion = (idx) => {
    setFormData(prev => ({
      ...prev,
      questionsAsked: prev.questionsAsked.filter((_, i) => i !== idx)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const minutesTaken = Math.max(1, Math.round(elapsedSeconds / 60));
    const newDebrief = {
      id: `deb-${Date.now()}`,
      companyId: companies.find(c => c.name.toLowerCase().includes(formData.companyName.toLowerCase()))?.id || "comp-1",
      companyName: formData.companyName,
      seniorName: formData.seniorName,
      avatar: "🎓",
      role: formData.role,
      batch: "2025 Placed (Verified)",
      ctcOffered: formData.ctcOffered,
      driveDateFaced: formData.driveDateFaced,
      submissionDate: "Just now",
      timeSpentInMinutes: minutesTaken,
      roundsFaced: formData.roundsFaced,
      keyAdvice: formData.keyAdvice,
      actualQuestionsAsked: formData.questionsAsked,
      commonTrapsToAvoid: formData.commonTrap,
      helpfulCount: 1,
      markedHelpful: false,
      topLinksContributed: formData.links.map(l => l.title || "Curated Placement Resource")
    };

    onAddDebrief(newDebrief);
    onClose();
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-[#1c1c1e] border border-white/[0.08] rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a84ff]/10 border border-[#0a84ff]/20 text-xs font-medium text-[#0a84ff]">
            <PenTool className="w-3.5 h-3.5" />
            <span>Senior Contribution</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#141416] border border-white/[0.06] text-[#86868b]">
            <Clock className="w-3.5 h-3.5 text-[#ff9f0a]" />
            <span>Target: {formatTimer(remainingSeconds)}</span>
          </div>
        </div>

        <div className="max-w-3xl space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Share Your Interview Experience in 5 Minutes
          </h1>
          <p className="text-xs md:text-sm text-[#a1a1a6] leading-relaxed">
            Engineered to respect your time. No lengthy essays required—just bullet points, questions asked, and your top 3 vetted study resources.
          </p>
        </div>

        {/* Segmented Step Indicator */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {[
            { step: 1, label: "Placement Info" },
            { step: 2, label: "Rounds Faced" },
            { step: 3, label: "Top 3 Links" },
            { step: 4, label: "Advice & Publish" }
          ].map((s) => (
            <div
              key={s.step}
              onClick={() => setCurrentStep(s.step)}
              className={`p-2.5 rounded-2xl border text-center cursor-pointer transition ${
                currentStep === s.step
                  ? 'bg-[#2c2c2e] text-white border-white/20 shadow-sm'
                  : currentStep > s.step
                  ? 'bg-[#141416] text-[#30d158] border-white/[0.06]'
                  : 'bg-[#141416] text-[#636366] border-white/[0.04]'
              }`}
            >
              <div className="text-[10px] uppercase font-semibold">Step {s.step}</div>
              <div className="text-xs font-medium truncate">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-[#1c1c1e] border border-white/[0.08] rounded-3xl p-6 md:p-8 space-y-6">
        {/* Step 1: Placement Info */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-white border-b border-white/[0.06] pb-3">
              Step 1: Placement Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-[#a1a1a6] block mb-1.5">
                  Your Name & Branch
                </label>
                <input
                  type="text"
                  value={formData.seniorName}
                  onChange={(e) => setFormData({ ...formData, seniorName: e.target.value })}
                  className="w-full bg-[#141416] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#a1a1a6] block mb-1.5">
                  Company Name
                </label>
                <select
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-[#141416] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                >
                  {companies.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Google">Google</option>
                  <option value="Oracle">Oracle</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-[#a1a1a6] block mb-1.5">
                  Role Offered
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-[#141416] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#a1a1a6] block mb-1.5">
                  Package Offered
                </label>
                <input
                  type="text"
                  value={formData.ctcOffered}
                  onChange={(e) => setFormData({ ...formData, ctcOffered: e.target.value })}
                  className="w-full bg-[#141416] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-medium text-[#a1a1a6] block mb-1.5">
                  Drive Date Faced
                </label>
                <input
                  type="text"
                  value={formData.driveDateFaced}
                  onChange={(e) => setFormData({ ...formData, driveDateFaced: e.target.value })}
                  className="w-full bg-[#141416] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-5 py-2 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs flex items-center gap-1.5 transition"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Rounds Faced */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-white border-b border-white/[0.06] pb-3">
              Step 2: Selection Rounds & Questions
            </h2>

            <div>
              <label className="text-xs font-medium text-[#a1a1a6] block mb-1.5">
                Interview Sequence & Platforms
              </label>
              <textarea
                rows={3}
                value={formData.roundsFaced}
                onChange={(e) => setFormData({ ...formData, roundsFaced: e.target.value })}
                className="w-full bg-[#141416] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                placeholder="e.g. OA on HackerRank -> Tech 1 (DSA/Trees) -> Tech 2 (System Design) -> HR"
                required
              />
            </div>

            <div>
              <label className="text-xs font-medium text-[#a1a1a6] block mb-1.5">
                Questions Asked
              </label>
              <div className="space-y-2 mb-3">
                {formData.questionsAsked.map((q, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#141416] p-2.5 rounded-xl border border-white/[0.04] text-xs text-[#f5f5f7]">
                    <span className="text-[#0a84ff] font-medium">Q{idx + 1}.</span>
                    <span className="flex-1 text-[#a1a1a6]">{q}</span>
                    <button
                      type="button"
                      onClick={() => removeQuestion(idx)}
                      className="p-1 text-[#636366] hover:text-[#ff453a]"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type another interview question asked..."
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  className="flex-1 bg-[#141416] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                />
                <button
                  type="button"
                  onClick={addQuestion}
                  className="px-4 py-2 bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white rounded-full text-xs font-medium"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 rounded-full bg-[#2c2c2e] text-[#a1a1a6] font-medium text-xs flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-5 py-2 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs flex items-center gap-1.5 transition"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Top 3 Study Links */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div>
                <h2 className="text-base font-semibold text-white">
                  Step 3: Recommend Top Study Links (Capped at 3)
                </h2>
                <p className="text-xs text-[#86868b]">
                  Provide only the highest-yield resources to prevent student overload.
                </p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#141416] text-[#a1a1a6] border border-white/[0.06]">
                {formData.links.length} / 3 Links
              </span>
            </div>

            <div className="space-y-3">
              {formData.links.map((link, idx) => (
                <div key={idx} className="bg-[#141416] p-4 rounded-2xl border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#0a84ff]">
                      Resource #{idx + 1}
                    </span>
                    {formData.links.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeLink(idx)}
                        className="text-xs text-[#86868b] hover:text-[#ff453a] flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="Resource Title (e.g. NeetCode 150 Trees)"
                    value={link.title}
                    onChange={(e) => handleLinkChange(idx, "title", e.target.value)}
                    className="w-full bg-[#1c1c1e] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Why this resource? (e.g. Exact pattern overlap with live coding round)"
                    value={link.why}
                    onChange={(e) => handleLinkChange(idx, "why", e.target.value)}
                    className="w-full bg-[#1c1c1e] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-[#a1a1a6] focus:outline-none focus:border-[#0a84ff]"
                    required
                  />
                </div>
              ))}
            </div>

            {formData.links.length < 3 && (
              <button
                type="button"
                onClick={addLink}
                className="w-full py-2.5 rounded-2xl border border-dashed border-white/20 text-xs font-medium text-[#86868b] hover:text-white hover:border-white/40 flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add Vetted Resource #{formData.links.length + 1}
              </button>
            )}

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 rounded-full bg-[#2c2c2e] text-[#a1a1a6] font-medium text-xs flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className="px-5 py-2 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs flex items-center gap-1.5 transition"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Advice & Publish */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-white border-b border-white/[0.06] pb-3">
              Step 4: Advice & Confirmation
            </h2>

            <div>
              <label className="text-xs font-medium text-[#a1a1a6] block mb-1.5">
                Key Advice for Juniors
              </label>
              <textarea
                rows={3}
                value={formData.keyAdvice}
                onChange={(e) => setFormData({ ...formData, keyAdvice: e.target.value })}
                className="w-full bg-[#141416] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                required
              />
            </div>

            <div>
              <label className="text-xs font-medium text-[#a1a1a6] block mb-1.5">
                Common Mistake to Avoid
              </label>
              <textarea
                rows={2}
                value={formData.commonTrap}
                onChange={(e) => setFormData({ ...formData, commonTrap: e.target.value })}
                className="w-full bg-[#141416] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#0a84ff]"
                required
              />
            </div>

            <div className="bg-[#141416] border border-white/[0.04] rounded-2xl p-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#30d158] shrink-0" />
              <div className="text-xs text-[#a1a1a6]">
                Your debrief will be published to the verified campus feed for juniors preparing for upcoming drives.
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-4 py-2 rounded-full bg-[#2c2c2e] text-[#a1a1a6] font-medium text-xs flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs shadow-sm transition"
              >
                <span>Publish Debrief</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

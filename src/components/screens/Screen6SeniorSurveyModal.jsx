import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Plus, 
  Trash2,
  Sparkles,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

export default function Screen6SeniorSurveyModal({ 
  onAddDebrief, 
  onClose,
  companies 
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // ITER-04: Optional study links toggle
  const [skipLinks, setSkipLinks] = useState(false);

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
      topLinksContributed: skipLinks 
        ? ["Text-Only Round Debrief (No Links Attached)"] 
        : formData.links.filter(l => l.title.trim()).map(l => l.title)
    };

    onAddDebrief(newDebrief);
    onClose();
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header (insp1.jpg & placement.jpg) */}
      <div className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#253745] text-xs font-medium text-[#CCD0CF] border border-[#4A5C6A]/40">
            <PenTool className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Senior Contribution</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-[#06141B]/60 text-[#CCD0CF] border border-[#4A5C6A]/35 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>5-Min Target: {formatTimer(remainingSeconds)}</span>
          </div>
        </div>

        <div className="max-w-3xl space-y-1">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#CCD0CF] tracking-tight">
            Share Your Drive Experience in 5 Minutes
          </h1>
          <p className="text-xs md:text-sm text-[#9BA8AB] leading-relaxed">
            Respecting your schedule: no essays, just bullet points, questions asked, and optional study links.
          </p>
        </div>

        {/* Step Indicator Pills */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {[
            { step: 1, label: "Placement Info" },
            { step: 2, label: "Rounds Faced" },
            { step: 3, label: "Links (Optional)" },
            { step: 4, label: "Advice & Publish" }
          ].map((s) => (
            <div
              key={s.step}
              onClick={() => setCurrentStep(s.step)}
              className={`p-2.5 rounded-2xl border text-center cursor-pointer transition ${
                currentStep === s.step
                  ? 'bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]/70 shadow-sm'
                  : currentStep > s.step
                  ? 'bg-[#34d399]/10 text-[#34d399] border-[#34d399]/20 font-medium'
                  : 'bg-[#06141B]/50 text-[#9BA8AB] border-[#4A5C6A]/20'
              }`}
            >
              <div className="text-[10px] uppercase font-semibold">Step {s.step}</div>
              <div className="text-xs font-medium truncate">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
        {/* Step 1: Placement Info */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-[#CCD0CF] border-b border-[#4A5C6A]/30 pb-3">
              Step 1: Placement Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-[#9BA8AB] block mb-1.5">
                  Your Name & Branch
                </label>
                <input
                  type="text"
                  value={formData.seniorName}
                  onChange={(e) => setFormData({ ...formData, seniorName: e.target.value })}
                  className="w-full bg-[#06141B]/60 border border-[#4A5C6A]/35 rounded-2xl px-3.5 py-2.5 text-xs text-[#CCD0CF] focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#9BA8AB] block mb-1.5">
                  Company Name
                </label>
                <select
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-[#06141B]/60 border border-[#4A5C6A]/35 rounded-2xl px-3.5 py-2.5 text-xs text-[#CCD0CF] focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                >
                  {companies.map(c => (
                    <option key={c.id} value={c.name} className="bg-[#11212D] text-[#CCD0CF]">{c.name}</option>
                  ))}
                  <option value="Google" className="bg-[#11212D] text-[#CCD0CF]">Google</option>
                  <option value="Oracle" className="bg-[#11212D] text-[#CCD0CF]">Oracle</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-[#9BA8AB] block mb-1.5">
                  Role Offered
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-[#06141B]/60 border border-[#4A5C6A]/35 rounded-2xl px-3.5 py-2.5 text-xs text-[#CCD0CF] focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#9BA8AB] block mb-1.5">
                  Package Offered
                </label>
                <input
                  type="text"
                  value={formData.ctcOffered}
                  onChange={(e) => setFormData({ ...formData, ctcOffered: e.target.value })}
                  className="w-full bg-[#06141B]/60 border border-[#4A5C6A]/35 rounded-2xl px-3.5 py-2.5 text-xs text-[#CCD0CF] focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-medium text-[#9BA8AB] block mb-1.5">
                  Drive Date When You Faced Interview
                </label>
                <input
                  type="text"
                  value={formData.driveDateFaced}
                  onChange={(e) => setFormData({ ...formData, driveDateFaced: e.target.value })}
                  className="w-full bg-[#06141B]/60 border border-[#4A5C6A]/35 rounded-2xl px-3.5 py-2.5 text-xs text-[#CCD0CF] focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-5 py-2.5 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs flex items-center gap-1.5 transition shadow-sm"
              >
                <span>Continue to Rounds</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Rounds Faced */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-[#CCD0CF] border-b border-[#4A5C6A]/30 pb-3">
              Step 2: Selection Rounds & Questions
            </h2>

            <div>
              <label className="text-xs font-medium text-[#9BA8AB] block mb-1.5">
                Interview Sequence & Platforms
              </label>
              <textarea
                rows={3}
                value={formData.roundsFaced}
                onChange={(e) => setFormData({ ...formData, roundsFaced: e.target.value })}
                className="w-full bg-[#06141B]/60 border border-[#4A5C6A]/35 rounded-2xl px-3.5 py-2.5 text-xs text-[#CCD0CF] placeholder-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                placeholder="e.g. OA on HackerRank -> Tech 1 (DSA/Trees) -> Tech 2 (System Design) -> HR"
                required
              />
            </div>

            <div>
              <label className="text-xs font-medium text-[#9BA8AB] block mb-1.5">
                Actual Questions Asked
              </label>
              <div className="space-y-2 mb-3">
                {formData.questionsAsked.map((q, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#06141B]/60 p-2.5 rounded-2xl border border-[#4A5C6A]/30 text-xs text-[#CCD0CF]">
                    <span className="text-[#38bdf8] font-semibold">Q{idx + 1}.</span>
                    <span className="flex-1">{q}</span>
                    <button
                      type="button"
                      onClick={() => removeQuestion(idx)}
                      className="p-1 text-[#9BA8AB] hover:text-[#ff453a] transition"
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
                  className="flex-1 bg-[#06141B]/60 border border-[#4A5C6A]/35 rounded-2xl px-3.5 py-2 text-xs text-[#CCD0CF] placeholder-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                />
                <button
                  type="button"
                  onClick={addQuestion}
                  className="px-4 py-2 bg-[#253745] hover:bg-[#344b5d] text-[#CCD0CF] border border-[#4A5C6A]/40 rounded-2xl text-xs font-semibold"
                >
                  Add Question
                </button>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 rounded-full bg-[#253745] text-[#9BA8AB] hover:text-[#CCD0CF] font-medium text-xs flex items-center gap-1.5 border border-[#4A5C6A]/30"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-5 py-2.5 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs flex items-center gap-1.5 transition shadow-sm"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Top 3 Study Links (ITER-04: Optional Switch) */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#4A5C6A]/30 pb-3">
              <div>
                <h2 className="text-base font-semibold text-[#CCD0CF] flex items-center gap-2">
                  <span>Step 3: Study Resources (Optional)</span>
                </h2>
                <p className="text-xs text-[#9BA8AB]">
                  Recommend up to 3 links, or toggle to submit text-only tips without URLs.
                </p>
              </div>

              {/* ITER-04: Toggle switch to skip link input */}
              <button
                type="button"
                onClick={() => setSkipLinks(!skipLinks)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                  skipLinks 
                    ? 'bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]/70' 
                    : 'bg-[#06141B]/60 text-[#9BA8AB] border-[#4A5C6A]/35'
                }`}
              >
                <span>{skipLinks ? "✓ Text-Only Mode (Links Skipped)" : "Skip Links (Text-Only)"}</span>
              </button>
            </div>

            {!skipLinks ? (
              <div className="space-y-3">
                {formData.links.map((link, idx) => (
                  <div key={idx} className="bg-[#06141B]/60 p-4 rounded-2xl border border-[#4A5C6A]/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#CCD0CF]">
                        Resource #{idx + 1} (Optional)
                      </span>
                      {formData.links.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeLink(idx)}
                          className="text-xs text-[#9BA8AB] hover:text-[#ff453a] flex items-center gap-1"
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
                      className="w-full bg-[#11212D] border border-[#4A5C6A]/35 rounded-xl px-3 py-2 text-xs text-[#CCD0CF] placeholder-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                    />

                    <input
                      type="text"
                      placeholder="Why recommended? (e.g. Exact pattern overlap with live round)"
                      value={link.why}
                      onChange={(e) => handleLinkChange(idx, "why", e.target.value)}
                      className="w-full bg-[#11212D] border border-[#4A5C6A]/35 rounded-xl px-3 py-2 text-xs text-[#9BA8AB] placeholder-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                    />
                  </div>
                ))}

                {formData.links.length < 3 && (
                  <button
                    type="button"
                    onClick={addLink}
                    className="w-full py-2.5 rounded-2xl border border-dashed border-[#4A5C6A]/50 text-xs font-medium text-[#9BA8AB] hover:text-[#CCD0CF] hover:border-[#CCD0CF]/60 flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Add Vetted Resource #{formData.links.length + 1}
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-[#06141B]/60 border border-[#4A5C6A]/30 rounded-2xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#34d399] mx-auto" />
                <h3 className="font-semibold text-sm text-[#CCD0CF]">Text-Only Mode Active</h3>
                <p className="text-xs text-[#9BA8AB] max-w-sm mx-auto">
                  Your advice and questions will be published without mandatory URLs. This lets you finish in under 3 minutes!
                </p>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 rounded-full bg-[#253745] text-[#9BA8AB] hover:text-[#CCD0CF] font-medium text-xs flex items-center gap-1.5 border border-[#4A5C6A]/30"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className="px-5 py-2.5 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs flex items-center gap-1.5 transition shadow-sm"
              >
                <span>Continue to Advice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Advice & Publish */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-[#CCD0CF] border-b border-[#4A5C6A]/30 pb-3">
              Step 4: Golden Advice & Final Publish
            </h2>

            <div>
              <label className="text-xs font-medium text-[#9BA8AB] block mb-1.5">
                Key Advice for Juniors
              </label>
              <textarea
                rows={3}
                value={formData.keyAdvice}
                onChange={(e) => setFormData({ ...formData, keyAdvice: e.target.value })}
                className="w-full bg-[#06141B]/60 border border-[#4A5C6A]/35 rounded-2xl px-3.5 py-2.5 text-xs text-[#CCD0CF] placeholder-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                required
              />
            </div>

            <div>
              <label className="text-xs font-medium text-[#9BA8AB] block mb-1.5">
                Common Mistake to Avoid
              </label>
              <textarea
                rows={2}
                value={formData.commonTrap}
                onChange={(e) => setFormData({ ...formData, commonTrap: e.target.value })}
                className="w-full bg-[#06141B]/60 border border-[#4A5C6A]/35 rounded-2xl px-3.5 py-2.5 text-xs text-[#CCD0CF] placeholder-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] focus:ring-1 focus:ring-[#CCD0CF]"
                required
              />
            </div>

            <div className="bg-[#34d399]/10 border border-[#34d399]/20 rounded-2xl p-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#34d399] shrink-0" />
              <div className="text-xs text-[#34d399] font-normal">
                Your debrief will be marked as a verified placement record for all juniors preparing for upcoming drives.
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-4 py-2 rounded-full bg-[#253745] text-[#9BA8AB] hover:text-[#CCD0CF] font-medium text-xs flex items-center gap-1.5 border border-[#4A5C6A]/30"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] font-semibold text-xs shadow-md transition"
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

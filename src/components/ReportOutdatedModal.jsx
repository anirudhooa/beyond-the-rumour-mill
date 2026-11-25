import React, { useEffect, useRef, useState } from 'react';
import { Flag, X, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ReportOutdatedModal({ isOpen, onClose, targetItem, onReportSuccess }) {
  const dialogRef = useRef(null);
  const [reason, setReason] = useState("outdated_batch");
  const [details, setDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      setIsSubmitted(false);
      setDetails("");
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onReportSuccess({
        targetId: targetItem?.id,
        targetName: targetItem?.name || targetItem?.companyName,
        reason,
        details,
        timestamp: new Date().toLocaleTimeString()
      });
      onClose();
    }, 1400);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="report-modal-title"
      className="p-0 bg-[#1c1c1e] text-[#f5f5f7] rounded-3xl border border-white/10 shadow-2xl max-w-lg w-[92vw] backdrop:bg-black/75 backdrop:backdrop-blur-xl"
    >
      <div className="p-6 md:p-7 space-y-5">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-2xl bg-[#ff453a]/15 border border-[#ff453a]/20 flex items-center justify-center text-[#ff453a]">
              <Flag className="w-4 h-4" />
            </div>
            <div>
              <h2 id="report-modal-title" className="text-base font-semibold text-white tracking-tight">
                Report Inaccurate or Outdated Information
              </h2>
              <p className="text-xs text-[#86868b]">
                Record: <strong className="text-white font-medium">{targetItem?.name || targetItem?.companyName || "Placement Record"}</strong>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#86868b] hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-2.5">
            <div className="w-12 h-12 rounded-full bg-[#30d158]/15 text-[#30d158] border border-[#30d158]/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-white tracking-tight">
              Notice Logged for Review
            </h3>
            <p className="text-xs text-[#86868b] max-w-xs mx-auto">
              Thank you for keeping campus placement intelligence accurate. Student coordinators will verify the update.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-[#ff9f0a]/10 border border-[#ff9f0a]/20 rounded-2xl p-3 text-xs text-[#ff9f0a] flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-[#ff9f0a] shrink-0 mt-0.5" />
              <span>
                Reported changes are cross-referenced with campus placement circulars and placed students.
              </span>
            </div>

            <div>
              <label className="text-xs font-medium text-[#86868b] block mb-1.5">
                Reason for Flagging
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full bg-[#141416] border border-white/[0.08] rounded-2xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#0a84ff] focus:border-[#0a84ff]"
              >
                <option value="outdated_batch" className="bg-[#1c1c1e] text-white">Outdated Information from Previous Batch</option>
                <option value="test_format_changed" className="bg-[#1c1c1e] text-white">Interview Rounds or Test Vendor Changed</option>
                <option value="unverified_whatsapp_rumour" className="bg-[#1c1c1e] text-white">Unverified WhatsApp Rumour Circulating</option>
                <option value="cgpa_criteria_mismatch" className="bg-[#1c1c1e] text-white">CGPA / Branch Eligibility Mismatch</option>
                <option value="broken_study_link" className="bg-[#1c1c1e] text-white">Broken / Irrelevant Vetted Study Link</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-[#86868b] block mb-1.5">
                Clarification / Updated Detail
              </label>
              <textarea
                rows={3}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="e.g. Assessment vendor was shifted to Mettle instead of AMCAT..."
                className="w-full bg-[#141416] border border-white/[0.08] rounded-2xl px-3.5 py-2 text-xs text-white placeholder-[#86868b]/60 focus:outline-none focus:ring-1 focus:ring-[#0a84ff] focus:border-[#0a84ff]"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/[0.08]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] text-[#86868b] hover:text-white text-xs font-medium border border-white/5 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white font-medium text-xs shadow-sm transition"
              >
                Submit Notice
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}

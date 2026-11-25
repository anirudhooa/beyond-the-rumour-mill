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
      className="p-0 bg-white text-neutral-900 rounded-3xl border border-neutral-200 shadow-2xl max-w-lg w-[92vw] backdrop:bg-black/40 backdrop:backdrop-blur-md"
    >
      <div className="p-6 md:p-7 space-y-5">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <Flag className="w-4 h-4" />
            </div>
            <div>
              <h2 id="report-modal-title" className="text-base font-extrabold text-neutral-900 tracking-tight">
                Report Inaccurate or Outdated Information
              </h2>
              <p className="text-xs text-neutral-500">
                Record: <strong className="text-neutral-900">{targetItem?.name || targetItem?.companyName || "Placement Record"}</strong>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-2.5">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 tracking-tight">
              Notice Logged for Review
            </h3>
            <p className="text-xs text-neutral-500 max-w-xs mx-auto">
              Thank you for keeping campus placement intelligence accurate. Student coordinators will verify the update.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-3 text-xs text-neutral-700 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                Reported changes are cross-referenced with campus placement circulars and placed students.
              </span>
            </div>

            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                Reason for Flagging
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
              >
                <option value="outdated_batch">Outdated Information from Previous Batch</option>
                <option value="test_format_changed">Interview Rounds or Test Vendor Changed</option>
                <option value="unverified_whatsapp_rumour">Unverified WhatsApp Rumour Circulating</option>
                <option value="cgpa_criteria_mismatch">CGPA / Branch Eligibility Mismatch</option>
                <option value="broken_study_link">Broken / Irrelevant Vetted Study Link</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                Clarification / Updated Detail
              </label>
              <textarea
                rows={3}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="e.g. Assessment vendor was shifted to Mettle instead of AMCAT..."
                className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-3.5 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-neutral-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-bold transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs shadow-sm transition"
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

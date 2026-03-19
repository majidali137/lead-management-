"use client";

import { useState } from "react";
import { createLead } from "@/utils/api";

const statuses = [
  "New",
  "Engaged",
  "Proposal Sent",
  "Closed-Won",
  "Closed-Lost",
];

export default function LeadForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", status: "New" });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    try {
      await createLead(form);
      setStatusMsg({ type: "success", text: "Lead created successfully!" });
      setForm({ name: "", email: "", status: "New" });
      onSuccess();
      setTimeout(() => setStatusMsg(null), 5000);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";

      setStatusMsg({
        type: "error",
        text: `Failed: ${errorMessage}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-xl border rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Create New Lead
      </h2>

      {statusMsg && (
        <div
          className={`mb-4 p-3 rounded-xl text-sm font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-2 ${
            statusMsg.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {/* Status Icon */}
          <span className="h-2 w-2 rounded-full bg-current mr-1" />
          {statusMsg.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <select
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all appearance-none bg-white"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          disabled={loading}
          className={`w-full py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 ${
            loading
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 active:scale-[0.98]"
          }`}
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
              Saving...
            </>
          ) : (
            "Add Lead"
          )}
        </button>
      </form>
    </div>
  );
}

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    status: "New",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createLead(form);
      setForm({ name: "", email: "", status: "New" });
      onSuccess();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-xl border rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4">Create New Lead</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <select
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          {statuses.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <button
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition"
        >
          {loading ? "Saving..." : "Add Lead"}
        </button>
      </form>
    </div>
  );
}

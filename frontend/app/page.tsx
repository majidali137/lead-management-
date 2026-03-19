"use client";

import { useEffect, useState } from "react";
import { getLeads } from "@/utils/api";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";

type Lead = {
  _id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
};

export default function Home() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const fetchLeads = async () => {
    const data = await getLeads();
    setLeads(data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Lead Manager</h1>

      <LeadForm onSuccess={fetchLeads} />

      <LeadList leads={leads} />
    </main>
  );
}

"use client";

type Lead = {
  _id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
};

const statusColor: Record<string, string> = {
  New: "bg-blue-100 text-blue-700",
  Engaged: "bg-yellow-100 text-yellow-700",
  "Proposal Sent": "bg-purple-100 text-purple-700",
  "Closed-Won": "bg-green-100 text-green-700",
  "Closed-Lost": "bg-red-100 text-red-700",
};

export default function LeadList({ leads }: { leads: Lead[] }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">All Leads</h2>

      <div className="grid gap-4">
        {leads.map((lead) => (
          <div
            key={lead._id}
            className="bg-white border shadow-sm hover:shadow-lg transition rounded-2xl p-5 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-gray-900">{lead.name}</p>
              <p className="text-sm text-gray-500">{lead.email}</p>
            </div>

            <div className="text-right space-y-1">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  statusColor[lead.status] || "bg-gray-100 text-gray-600"
                }`}
              >
                {lead.status}
              </span>

              <p className="text-xs text-gray-400">
                {new Date(lead.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

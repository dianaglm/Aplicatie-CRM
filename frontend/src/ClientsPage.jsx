import React, { useState } from "react";
import { 
  HiOutlineSearch, 
  HiOutlinePlus, 
  HiOutlineDotsHorizontal, 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineDocumentText, 
  HiOutlineUser, 
  HiOutlinePencilAlt, 
  HiOutlineTrash, 
  HiOutlineChatAlt2, 
  HiOutlinePaperAirplane,
  HiOutlineChevronDown
} from "react-icons/hi";

const avatarColors = [
  "bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-slate-500", 
  "bg-orange-500", "bg-cyan-500", "bg-rose-500", "bg-indigo-500"
];

const clientsData = [
  { id: 1, name: "Sarah Johnson", avatar: "SJ", avatarColor: avatarColors[0], type: "PF", email: "sarah@techflow.com", phone: "0722 123 456", notes: "Key decision maker. Prefers email communication.", activeInvoices: 2, status: "Active" },
  { id: 2, name: "DataVerse Corp", avatar: "DC", avatarColor: avatarColors[2], type: "PJ", email: "contact@dataverse.io", phone: "021 234 567", notes: "Large enterprise account. Quarterly billing.", activeInvoices: 0, status: "Active" },
  { id: 3, name: "Emma Williams", avatar: "EW", avatarColor: avatarColors[4], type: "PF", email: "emma.w@cloudnine.com", phone: "0744 345 678", notes: "Interested in premium tier.", activeInvoices: 1, status: "Pending" },
  { id: 4, name: "Innovate Labs", avatar: "IL", avatarColor: avatarColors[5], type: "PJ", email: "office@innovate.co", phone: "0755 456 789", notes: "Startup in growth phase.", activeInvoices: 0, status: "Lead" },
];

const statusColors = {
  Active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Pending: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Lead: "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  Overdue: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
};

export default function ClientsPage({ isDark }) {
  const [openActionMenu, setOpenActionMenu] = useState(null);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 px-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Clients <span className="text-slate-400 font-normal text-xl ml-1">({clientsData.length})</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-sm mt-1 font-medium">Manage and organize your client relationships</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#e71867] transition-colors" />
            <input
              type="text"
              placeholder="Search clients..."
              className={`pl-10 pr-4 py-2.5 rounded-2xl outline-none border transition-all text-sm w-64 ${
                isDark ? "bg-zinc-900 border-white/10 text-white focus:border-[#e71867]" : "bg-white border-slate-200 focus:border-[#e71867]"
              }`}
            />
          </div>
          
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#e71867] text-white text-sm font-bold hover:bg-[#c91458] shadow-lg shadow-[#e71867]/20 transition-all active:scale-95">
            <HiOutlinePlus size={20} />
            Add Client
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className={`rounded-[2.5rem] border overflow-hidden transition-all ${
        isDark ? "bg-zinc-900/50 border-white/10" : "bg-white border-slate-100 shadow-xl shadow-slate-200/50"
      }`}>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`text-[11px] uppercase tracking-[0.1em] ${isDark ? "bg-zinc-800/50 text-zinc-500" : "bg-slate-50 text-slate-500"}`}>
              <th className="px-6 py-5 font-bold">Type</th>
              <th className="px-6 py-5 font-bold">Client Name</th>
              <th className="px-6 py-5 font-bold">Contact Info</th>
              <th className="px-6 py-5 font-bold">Notes</th>
              <th className="px-6 py-5 font-bold text-center">Invoices</th>
              <th className="px-6 py-5 font-bold">Status</th>
              <th className="px-6 py-5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-medium">
            {clientsData.map((client) => (
              <tr key={client.id} className="group hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-lg text-[10px] font-black ${
                    client.type === 'PJ' ? "bg-violet-100 text-violet-600 dark:bg-violet-900/30" : "bg-slate-100 text-slate-600 dark:bg-zinc-800"
                  }`}>
                    {client.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${client.avatarColor} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                      {client.avatar}
                    </div>
                    <span className="font-bold text-sm tracking-tight">{client.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5 text-slate-900 dark:text-zinc-200">
                      <HiOutlineMail className="text-slate-400" size={14}/> {client.email}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <HiOutlinePhone size={14}/> {client.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-xs text-slate-500 dark:text-zinc-500 max-w-[180px] truncate leading-relaxed">
                    {client.notes}
                  </p>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="relative inline-block">
                    <HiOutlineDocumentText size={22} className={client.activeInvoices > 0 ? "text-[#e71867]" : "text-slate-300 dark:text-zinc-700"} />
                    {client.activeInvoices > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black ring-2 ring-white dark:ring-zinc-900">
                        {client.activeInvoices}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${statusColors[client.status]}`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right relative">
                  <button 
                    onClick={() => setOpenActionMenu(openActionMenu === client.id ? null : client.id)}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-xl transition-colors text-slate-400 hover:text-[#e71867]"
                  >
                    <HiOutlineDotsHorizontal size={20} />
                  </button>
                  
                  {openActionMenu === client.id && (
                    <div className={`absolute right-12 top-0 w-48 py-2 rounded-2xl shadow-2xl z-50 border transition-all ${
                      isDark ? "bg-zinc-900 border-white/10 text-zinc-300" : "bg-white border-slate-100 text-slate-700"
                    }`}>
                      <button className="w-full px-4 py-2.5 text-left text-xs font-bold hover:bg-[#e71867] hover:text-white flex items-center gap-3 transition-colors"><HiOutlineUser size={16}/> View Profile</button>
                      <button className="w-full px-4 py-2.5 text-left text-xs font-bold hover:bg-[#e71867] hover:text-white flex items-center gap-3 transition-colors"><HiOutlineChatAlt2 size={16}/> Add Note</button>
                      <button className="w-full px-4 py-2.5 text-left text-xs font-bold hover:bg-[#e71867] hover:text-white flex items-center gap-3 transition-colors"><HiOutlinePaperAirplane className="rotate-45" size={16}/> Send Email</button>
                      <div className="my-1 border-t border-slate-100 dark:border-white/5"></div>
                      <button className="w-full px-4 py-2.5 text-left text-xs font-bold text-red-500 hover:bg-red-500 hover:text-white flex items-center gap-3 transition-colors"><HiOutlineTrash size={16}/> Delete</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
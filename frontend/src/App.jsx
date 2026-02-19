import React, { useState } from 'react';
import { LayoutDashboard, Users, ShoppingCart, FileText, Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, active: true },
    { name: 'Comenzi', icon: <ShoppingCart size={20} />, active: false },
    { name: 'Clienți', icon: <Users size={20} />, active: false },
    { name: 'Facturi', icon: <FileText size={20} />, active: false },
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex min-h-screen bg-slate-50 dark:bg-darkBg transition-colors duration-300">
        
        {/* SIDEBAR */}
        <aside className="w-64 bg-white dark:bg-darkCard border-r border-slate-200 dark:border-slate-700 flex flex-col">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-brandPink dark:text-brandPink-dark tracking-tight">
              Furniture<span className="text-slate-800 dark:text-white">.</span>
            </h2>
          </div>
          
          <nav className="flex-1 px-4 space-y-1">
            {menuItems.map((item) => (
              <div 
                key={item.name}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                  item.active 
                    ? 'bg-pink-50 dark:bg-pink-900/20 text-brandPink font-semibold' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-100 dark:border-slate-800">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl transition-all active:scale-95"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-10 text-slate-800 dark:text-slate-100">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold">Bună, Manager!</h1>
              <p className="text-slate-500 dark:text-slate-400">Iată statusul atelierului tău astăzi.</p>
            </div>
            <button className="bg-brandPink hover:bg-pink-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-pink-200 dark:shadow-none transition-all active:scale-95">
              + Comandă Nouă
            </button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-40 bg-white dark:bg-darkCard rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
              <p className="text-slate-400 text-sm font-medium">Comenzi Active</p>
              <h3 className="text-4xl font-bold mt-2">12</h3>
            </div>
            <div className="h-40 bg-white dark:bg-darkCard rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
              <p className="text-slate-400 text-sm font-medium">Venit Lună</p>
              <h3 className="text-4xl font-bold mt-2">14.500 <span className="text-lg">RON</span></h3>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
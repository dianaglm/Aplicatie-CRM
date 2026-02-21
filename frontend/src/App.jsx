import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("");
  const isDark = theme === "dark";

  const sidebarStyle = `
    w-68
    h-screen 
    ${isDark ? "bg-zinc-900 text-white shadow-none" : 
      "bg-white text-black shadow-[rgba(0,0,15,0.1)_5px_0px_10px_0px]"}
    z-10
    transition-colors duration-300
  `;

  return (
    <div 
      className={`${
        theme ? "dark" : "" 
      } flex min-h-screen bg-white dark:bg-zinc-600`}
    >
      <aside className={sidebarStyle}>
        <div className="flex flex-col gap-2">
          
        </div>
      </aside>

      <main className={`flex-1 flex items-center justify-center
        ${isDark ? "bg-zinc-800 text-white" : "bg-[#F8F9FB] text-black" }`}>
          <button 
            onClick={() => setTheme("")} // Resetăm la default/light
            className="text-[10px] py-1 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600">
            Light
          </button>
          <button 
            onClick={() => setTheme("dark")} // Setăm pe dark
            className="text-[10px] py-1 bg-gray-800 text-white rounded hover:bg-black">
            Dark
          </button>
      </main>
    </div>
  )
}

export default App
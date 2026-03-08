import { useState } from "react";
import { LuHouse } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

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
    <div className={`${
        theme ? "dark" : "" 
      } flex min-h-screen bg-white dark:bg-zinc-600
      `}
    >
      <aside className={sidebarStyle}>
        {/*Logo section*/}
        <div className="flex flex-col items-center pt-12">
          <div 
            style={{ backgroundColor: '#e71867' }} 
            className="
              w-22 h-22 
              rounded-full 
              shadow-sm 
              shadow-[#e71867]/20
              cursor-pointer
              transition-all duration-150 
              hover:shadow-[0_0_25px_10px_rgba(231,24,103,2)]
              hover:scale-110
            "
            title="Logo CRM"
          ></div>
        </div>

        {/*Navigation buttons section*/}
        <nav style={{ fontFamily: "'Inter', sans-serif" }}
          className="mt-10 px-4">
            <button className = {`
              group
              flex items-center gap-2.5
              w-full px-4 py-2.5
              rounded-xl transition-all duration-300
              hover:bg-[#e71867]/10
              hover:text-[#e71867]
              ${isDark ? "text-[#cdcdd3]" : "text-[#6e7174]"}`}
            >
            
              {/* Iconița */}
              <LuHouse
                size={22} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Dashboard
              </span>
            </button>

            <button className = {`
              group
              flex items-center gap-2.5
              w-full px-4 py-2.5
              rounded-xl transition-all duration-300
              hover:bg-[#e71867]/10
              hover:text-[#e71867]
              ${isDark ? "text-[#cdcdd3]" : "text-[#6e7174]"}`}
            >
            
              {/* Iconița */}
              <IoIosNotifications
                size={22} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Notifications
              </span>
            </button>

            <button className = {`
              group
              flex items-center gap-2.5
              w-full px-4 py-2.5
              rounded-xl transition-all duration-300
              hover:bg-[#e71867]/10
              hover:text-[#e71867]
              ${isDark ? "text-[#cdcdd3]" : "text-[#6e7174]"}`}
            >
            
              {/* Iconița */}
              <IoMdSettings
                size={22} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Settings
              </span>
            </button>
          </nav>
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
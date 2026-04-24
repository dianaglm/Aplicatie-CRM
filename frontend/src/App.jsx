import { useState } from "react";
import { LuHouse } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { IoDocuments } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineCog } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";

function App() {
  const [theme, setTheme] = useState("");
  const isDark = theme === "dark";
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const sidebarStyle = `
    w-68
    h-screen 
    flex flex-col
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
          className="mt-10 px-4 flex-1">
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
              <HiOutlineUserGroup
                size={22} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Clients
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
              <FaCalendarAlt
                size={21} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Calendar
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
            
              <FaTasks
                size={21} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              <span className="text-inherit font-medium text-[15px]">
                Tasks
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
              <MdOutlineEmail
                size={22} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Email
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
              <FaChartColumn
                size={21} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Analytics
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
              <IoDocuments
                size={22} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Documents
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
              <HiOutlineUserCircle
                size={22} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Team
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
              <GoProject
                size={22} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />
              
              {/* Textul */}
              <span className="text-inherit font-medium text-[15px]">
                Projects
              </span>
            </button>

            <button 
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className = {`
              group
              flex items-center gap-2.5
              w-full px-4 py-2.5
              rounded-xl transition-all duration-300
              hover:bg-[#e71867]/10
              hover:text-[#e71867]
              ${isDark ? "text-[#cdcdd3]" : "text-[#6e7174]"}`}
            >
            
              <IoMdSettings
                size={22} 
                className="text-inherit transition-transform duration-300 group-hover:scale-110" 
              />

              <span className="text-inherit font-medium text-[15px]">
                Settings
              </span>
              
              <HiChevronDown className={`${isSettingsOpen ? 'rotate-180' : ''} transition-transform`} />
            </button>

            {isSettingsOpen && (
              <div className={`flex-1 flex items-center justify-center
                ${isDark ? "bg-zinc-800 text-white" : "bg-[#F8F9FB] text-black" }`}>
                  <button 
                    onClick={() => setTheme("")} 
                    className="flex-1 flex items-center justify-center py-1.5 rounded-md transition-all duration-300 hover:bg-gray-100 dark:border-gray-600">
                    <HiOutlineSun size={16} />
                    <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-[13px] font-medium">
                      Light
                    </span>
                  </button>
                  <button 
                    onClick={() => setTheme("dark")}
                    className="flex-1 flex items-center justify-center py-1.5 rounded-md transition-all duration-300 bg-gray-800 text-white rounded hover:bg-black">
                    <HiOutlineMoon size={16} />
                    <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-[13px] font-medium">
                      Dark
                    </span>
                  </button>
              </div>
            )}

          </nav>
          
          <div className="mt-auto px-4 pb-6 w-full"> 
            <button className={`
              group flex items-center gap-3 w-full px-4 py-3 rounded-xl 
              font-semibold text-[15px] transition-all duration-300
              ${isDark 
                ? 'text-red-400/80 hover:bg-red-500/10 hover:text-red-400' 
                : 'text-red-500/80 hover:bg-red-50 hover:text-red-600'}
            `}>
              <TbLogout size={22} className="transition-transform group-hover:-translate-x-1" />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>Logout</span>
            </button>
          </div>
      </aside>

      <main className={`flex-1 flex items-center justify-center
        ${isDark ? "bg-zinc-800 text-white" : "bg-[#F8F9FB] text-black" }`}>
          
      </main>
    </div>
  )
}

export default App
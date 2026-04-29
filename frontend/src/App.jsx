import React from "react";
import { useState } from "react";
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import ClientsPage from "./ClientsPage";

function App() {
  const [theme, setTheme] = useState("");
  const [isDark, setIsDark] = useState(false);
 // theme = "dark";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  
  return (
  <div className={isDark ? "dark" : ""}>
    {!isLoggedIn ? (
      <LoginPage onLogin={() => setIsLoggedIn(true)} isDark={isDark} />
    ) : (
      /* CONTAINERUL MAMA */
      <div className={`flex min-h-screen transition-colors duration-300 ${isDark ? "bg-zinc-950" : "bg-[#F8F9FB]"}`}>
        
        {/* SIDEBAR - Rămâne fix în stânga */}
        <Sidebar 
          isDark={isDark} 
          setIsDark={setIsDark} 
          setIsLoggedIn={setIsLoggedIn} 
          activePage={activePage} 
          setActivePage={setActivePage} 

          onLogout={() => {
            setIsLoggedIn(false); 
            setActivePage('dashboard'); 
          }}
        />

        {/* ZONA DE LUCRU (MAIN) */}
        <main className={`flex-1 transition-all duration-300 ${
          isDark 
            ? "bg-zinc-800 text-white" 
            : "bg-[#F8F9FB] text-black"
        }`}
        >
          
          {/* RENDER DINAMIC: Aici punem paginile în funcție de activePage */}
          <div className="p-8">
            
            {activePage === 'dashboard' && (
              /* Aici va veni codul tău de Dashboard (momentan gol) */
              <div className="animate-fade-in">
                {/* Dashboard-ul tău va „locui” aici */}
              </div>
            )}

            {activePage === 'clients' && ( <ClientsPage isDark={isDark} /> )}

            {/* Poți adăuga oricâte pagini noi aici după același model */}

          </div>
        </main>
      </div>
    )}
  </div>
);
}

export default App
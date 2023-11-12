import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";

//Components
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
//Components

//Icons
import { FiSettings} from "react-icons/fi";
//Icons

//Pages
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Datool from "./pages/Tools/Datool";
import Evenodd from "./pages/Tools/Evenodd";
import Freestrat from "./pages/Tools/Freestrat";
import Inclusivex from "./pages/Tools/Inclusivex";
import Overunder from "./pages/Tools/Overunder";
import ThemeSettings from "./components/ThemeSettings";
import About from "./pages/Others/About";
import Help from "./pages/Others/Help";
import Login from "./pages/Others/Login";
//Pages

import "./App.css";

function App() {
  const {
    open,
    setOpen,
    screenSize,
    setScreenSize,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 480) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [screenSize]);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleLoginClick = () => {
    // Add any login logic here
    setLoginClicked(true);
    // Navigate to the login page
    navigate("/login"); // Replace "/login" with the actual path of your login page
  };

  return (
    <div 
    className={
      currentMode === "Dark" ? "dark bg-slate-900 h-screen" : "h-screen bg-slate-200"
    }
    >
      <BrowserRouter>
        <div className="flex relative">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>

            <button
              type="button"
              className={`text-1xl p-3 hover:drop-shadow-xl hover:bg-light-gray ${currentMode === "Dark" ? "dark text-white" : "text-gray-800"}`}
              style={{ background: currentColor, borderRadius: "50%" }}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings />
            </button>

          </div>

          <div className={`fixed sidebar h-screen border-r ${currentMode === "Dark" ? "dark border-slate-200" : "border-gray-800"}'}`}>
            <Sidebar />
          </div>

          <div>
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* Home*/}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account/>} />
              <Route path="/reports" element={<Reports />} />
              {/* Home*/}

              {/* Tools */}
              <Route path="/digit analysis tool" element={<Datool />} />
              <Route path="/free even odd bot" element={<Evenodd />} />
              <Route path="/free strategy" element={<Freestrat/>} />
              <Route path="/inclusive x bot" element={<Inclusivex />} />
              <Route path="/free over under bot" element={<Overunder />} />
              {/* Tools */}

              {/* Other */}
              <Route path="/about derivatory" element={<About />} />
              <Route path="/help center" element={<Help />} />
              <Route path="/login" element={<Login/>} />
              {/* Other */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

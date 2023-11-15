import React, { useState, useEffect } from "react";
import { links } from "../nav/links";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useStateContext } from "../contexts/ContextProvider";

//Icons
import { BsArrowLeftShort } from "react-icons/bs";
import { TbLetterD } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { MdAccountCircle} from "react-icons/md";
// Icons

import "react-perfect-scrollbar/dist/css/styles.css";

import "../App.css";

const Sidebar = () => {

  const { open, setOpen, screenSize, themeSettings,
    setThemeSettings, currentColor, currentMode, setLoginClicked, loginClicked } = useStateContext();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleCloseSideBar = () => {
    if (open && screenSize <= 900) {
      setOpen(false);
    }
  };



  const activeLink =
    `flex items-center gap-5 ${open && "pl-4"} pt-3 pb-2.5 rounded-lg text-white text-md`;
    const normalLink =
    `flex items-center gap-5 ${open && "pl-4"} pt-3 pb-2.5 rounded-lg text-md text-gray-800 dark:text-gray-200`;

    const handleLoginClick = () => {
      // Add any login logic here
      setLoginClicked(true);
      // You might want to navigate to the login page here using react-router
    };

  
  return (
    <div
      className={`h-screen flex flex-col relative ${currentMode === 'Dark' ? 'dark bg-slate-900': 'bg-slate-200'} pt-2  duration-300 ${open ? "w-72" : "w-20"} ${loginClicked ? "hidden" : ""} `}
    >
      <BsArrowLeftShort
        onClick={toggleSidebar}
        className={`${currentMode === 'Dark' ? 'dark bg-slate-900 text-white border-white': 'bg-slate-200 text-gray-800 border-gray-800'} text-3xl rounded-full absolute -right-3 top-9 border cursor-pointer ${!open && "rotate-180"}`}
      />
      
      <div className={`px-4 pt-3 pb-4 border-b ${currentMode === 'Dark' ? 'dark border-white': 'border-gray-800'}`}>
        <BsRobot
          className={` ${currentMode === 'Dark' ? 'dark text-white': 'text-gray-800'} mr-2 text-4xl rounded cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`}
          style={{ background: 'transparent'}}
        />
        <h1 className={`${currentMode === 'Dark' ? 'dark text-white': 'text-gray-800'} origin-left font-medium text-2xl duration-300 ${!open && "hidden"}`}>Derivatory</h1>
      </div>

      <div className="scrollable pt-4">
        <div className="px-4">     
          <div className="pt-3">
            {links.map((item) => (
              <div key={item.title} className="mb-6">
              <div className={`${currentMode === 'Dark' ? 'dark text-gray-400': 'text-slate-600'} mb-2 uppercase ${open ? "pl-1" : "pl-0"}`}>{item.title}</div>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : ""              
                    })}
                    className={open ? activeLink : normalLink}
                  >
                    <span className={`${currentMode === 'Dark' ? 'dark text-white': 'text-gray-800'}`}>{link.icon}</span>
                    <span className={`capitalize ${currentMode === 'Dark' ? 'dark text-white': 'text-gray-800'} duration-300  ${!open && "hidden"}`}>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>    
        </div>
        <style>
          {`
          .scrollable::-webkit-scrollbar-thumb {
            background-color: ${currentColor} !important;
          }

          .scrollable::-webkit-scrollbar{
            background-color: ${currentMode === 'Dark' ? 'white' : '#6f7378'}
        `}
        </style>
      </div>
    </div>
  );
};

export default Sidebar;

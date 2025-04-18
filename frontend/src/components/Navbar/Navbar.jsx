import React, { useState , useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link , useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import Sidebar from "./Sidebar"; 

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation(); 

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    setActiveTab(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
  }, [location]);

  return (
    <>
      <nav className="w-full p-4 pt-6 top-0 left-0 mb-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left - Logo */}
          <Link to="/" onClick={() => setActiveTab("Home")}>
            <img src={assets.logo} alt="Web Logo" className="w-28 cursor-pointer" />
          </Link>

          {/* Center - Navbar Links */}
          <ul className="hidden md:flex space-x-14 text-white text-xl bg-gray-300/50 py-3 px-5 rounded-3xl font-normal">
            {["Home", "Resume", "About", "Showcase", "Contact"].map((item) => (
              <li key={item} className={`cursor-pointer px-5 py-1 rounded-3xl transition-all duration-300 
                  ${activeTab === item ? "bg-gray-400/50 text-white" : "hover:text-gray-300"}
                `}
              >
                <Link to={`/${item.toLowerCase()}`} onClick={() => setActiveTab(item)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right - Menu Button */}
          <button
            className="text-white font-bold px-4 py-2 rounded-lg cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            <CiMenuBurger size={30} className="w-10" strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* Sidebar Component */}
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
    </>
  );
};

export default Navbar;

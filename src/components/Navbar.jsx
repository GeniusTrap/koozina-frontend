import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#EADFC8] shadow-md z-50">

      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-6 md:py-0">
        
        <div className="flex items-center md:ml-12 lg:ml-40">
          <img src={assets.Logo} alt="Logo" className="h-8 sm:h-10" />
          <img src={assets.flag} alt="Tunisie" className="w-5 h-5 sm:w-5 sm:h-5 object-contain ml-4" />
        </div>

        <ul className="hidden md:flex gap-6 lg:gap-8 text-gray-800 font-medium md:mr-8 lg:mr-30 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-600 text-base lg:text-base mt-10 ${isActive ? "text-[#A67B5B]" : ""}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/nos-projets"
            className={({ isActive }) =>
              `hover:text-gray-600 text-base lg:text-base mt-10 ${isActive ? "text-[#A67B5B]" : ""}`
            }
          >
            Nos Projets
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `hover:text-gray-600 text-base lg:text-base mt-10 ${isActive ? "text-[#A67B5B]" : ""}`
            }
          >
            Catalogue
          </NavLink>
          <NavLink
            to="/devis"
            className={({ isActive }) =>
              `hover:text-gray-600 text-base lg:text-base mt-10 ${isActive ? "text-[#A67B5B]" : ""}`
            }
          >
            Devis
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-gray-600 text-base lg:text-base mt-10 ${isActive ? "text-[#A67B5B]" : ""}`
            }
          >
            Contact
          </NavLink>
        </ul>

        <div className="md:hidden">
          <img
            src={assets.menu_icon}
            alt="Menu"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      <hr className="w-3/4 md:w-1/4 mx-auto md:mx-0 md:ml-16 lg:ml-50 border-t-1 border-[#A67B5B]" />

      <div className="bg-[#EADFC8] py-1 sm:py-2 text-sm sm:text-base text-gray-700 font-medium flex items-center justify-center md:justify-start gap-2 md:ml-16 lg:ml-100">
        <span> Qualité Quartz Marbre </span>
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 bg-[#EADFC8] transition-all duration-300 z-50 ${
          visible ? "w-3/4 sm:w-2/3" : "w-0"
        } overflow-hidden shadow-lg`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-300">
            <img src={assets.Logo} alt="Logo" className="h-7 sm:h-8" />
            <img
              src={assets.dropdown_icon}
              alt="Fermer"
              className="w-4 cursor-pointer rotate-90"
              onClick={() => setVisible(false)}
            />
          </div>

          {/* 3. Liens mobile aussi plus grands */}
          <div className="flex flex-col mt-6 space-y-4 px-4 sm:px-6 text-gray-800 font-medium">
            <NavLink
              to="/"
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-3 text-base hover:text-gray-600 ${isActive ? "text-[#A67B5B] border-r-2 border-[#A67B5B]" : ""}`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/nos-projets"
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-3 text-base hover:text-gray-600 ${isActive ? "text-[#A67B5B] border-r-2 border-[#A67B5B]" : ""}`
              }
            >
              Nos Projets
            </NavLink>
            <NavLink
              to="/catalog"
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-3 text-base hover:text-gray-600 ${isActive ? "text-[#A67B5B] border-r-2 border-[#A67B5B]" : ""}`
              }
            >
              Catalogue
            </NavLink>
            <NavLink
              to="/devis"
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-3 text-base hover:text-gray-600 ${isActive ? "text-[#A67B5B] border-r-2 border-[#A67B5B]" : ""}`
              }
            >
              Devis
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-3 text-base hover:text-gray-600 ${isActive ? "text-[#A67B5B] border-r-2 border-[#A67B5B]" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {visible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setVisible(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
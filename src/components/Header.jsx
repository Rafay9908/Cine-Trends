import React from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
        <div className="container relative">
          <div className="flex flex-row justify-between items-center py-4 absolute w-full z-30">
            <div className="flex flex-row gap-6 items-center">
              <img src={logo} alt="CineTrends Logo" />
              <h3 className={`text-2xl font-bold ${isHome ? 'text-white' : 'text-black'}`}>CineTrends</h3>
            </div>
            <div>
              <img src={menu} alt="Menu Logo" />
            </div>
          </div>
        </div>
    </>
  );
}

export default Header;

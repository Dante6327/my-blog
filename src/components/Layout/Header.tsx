import React from "react";
import menu from "../../../public/icons/nav/w-menu.png";
import Logo from "./Logo";
import Home from "./Home";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex justify-between sm:justify-around items-center p-4">
      <Home />
      <Navigation />
    </header>
  );
};

export default Header;

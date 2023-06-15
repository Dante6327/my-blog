"use client";
import React from "react";
import DarkMode from "./DarkMode";
import { MENU_LIST } from "./MenuList";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex">
      <ul className="hidden sm:flex gap-4 items-center font-bold mr-2">
        {MENU_LIST.map(({ id, endpoint, name }) => (
          <li
            key={id}
            className="rounded hover:bg-gray-500 p-1 transition-all duration-600"
          >
            <Link href={endpoint}>{name}</Link>
          </li>
        ))}
      </ul>
      <DarkMode />
    </nav>
  );
};

export default Navigation;

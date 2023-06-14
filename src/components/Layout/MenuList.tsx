import { isDarkMode } from "@/recoil/Status";
import Link from "next/link";
import React from "react";

const MenuList = () => {
  return (
    <ul className="my-2 font-semibold text-lg w-screen text-center">
      {MENU_LIST.map((menu) => (
        <li
          key={menu.id}
          className="my-4 rounded hover:bg-gray-500 p-1 transition-transform hover:-translate-y-1"
        >
          <Link href={menu.endpoint}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;

export const MENU_LIST = [
  { id: 1, name: "Blog", endpoint: "/blog" },
  { id: 2, name: "Project", endpoint: "/project" },
  { id: 3, name: "Contact", endpoint: "/contact" },
];

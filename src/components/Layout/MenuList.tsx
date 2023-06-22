import { isDarkMode, isOpenMenu } from "../../../recoil/Status";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";

const MenuList = () => {
  const setOpenMenu = useSetRecoilState(isOpenMenu);

  const handleClick = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <ul className="my-2 font-semibold text-lg w-full text-center animate-fadeIn">
      {MENU_LIST.map((menu) => (
        <li
          key={menu.id}
          className="my-4 rounded hover:bg-gray-500 p-1 transition-transform hover:-translate-y-1"
        >
          <Link href={menu.endpoint} onClick={() => handleClick()}>
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;

export const MENU_LIST = [
  { id: 1, name: "Posts", endpoint: "/posts" },
  { id: 2, name: "Project", endpoint: "/project" },
  { id: 3, name: "About", endpoint: "/about" },
  { id: 4, name: "Contact", endpoint: "/contact" },
];

"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import { isOpenMenu } from "../../../recoil/Status";
import MenuList from "./MenuList";

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  const isOpen = useRecoilValue(isOpenMenu);
  return <main className="grow">{isOpen ? <MenuList /> : children}</main>;
};

export default Content;

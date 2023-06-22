"use client";
import { atom } from "recoil";

const localStorage =
  typeof window !== `undefined` ? window.localStorage : undefined;

export const isDarkMode = atom({
  key: "IsDarkMode",
  default: localStorage?.getItem("theme"),
});

export const isOpenMenu = atom({
  key: "IsOpenMenu",
  default: false,
});

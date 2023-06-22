import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import night from "../../../public/icons/nav/dark-mode.png";
import day from "../../../public/icons/nav/light-mode.png";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { isDarkMode } from "../../../recoil/Status";

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const setDarkMode = useSetRecoilState(isDarkMode);

  useEffect(() => {
    setDarkMode(theme);
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Image
        className="w-6"
        src={theme === "dark" ? day : night}
        alt="darkmode button"
        priority
      />
    </button>
  );
};

export default DarkMode;

"use client";
import { isOpenMenu } from "@/recoil/Status";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import homeLogo from "../../../public/icons/nav/home-logo.png";
import Link from "next/link";

const Home = () => {
  const setOpenMenu = useSetRecoilState(isOpenMenu);
  const [isOverLaptop, setIsOverLaptop] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    if (isOverLaptop) return;
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  useEffect(() => {
    const observer = new ResizeObserver((entries, bserver) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        if (width >= 768) {
          setIsOverLaptop(true);
          setOpenMenu(false);
        } else {
          setIsOverLaptop(false);
        }
      }
    });
    observer.observe(document.body);
  }, []);

  return (
    <div className="flex justify-center items-center">
      {loaded && isOverLaptop ? (
        <Link href="/">
          {loaded && (
            <Image
              src={homeLogo}
              alt="home icon"
              className="invisible md:visible w-10"
              priority
            />
          )}
        </Link>
      ) : (
        <button onClick={() => handleClick()}>
          <Image
            src={homeLogo}
            alt="menu icon"
            className="visible md:invisible w-10"
            priority
          />
        </button>
      )}
      <Link href="/">
        <span className="pl-2 text-xl font-bold rounded hover:bg-gray-500 p-1 transition-all duration-600">
          JP&apos;s Blog
        </span>
      </Link>
    </div>
  );
};

export default Home;
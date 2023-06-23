import About from "@/components/About/About";
import Profile from "@/components/Posts/Profile";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description: "Dante 커리어 소개 페이지",
};

const page = () => {
  return (
    <article>
      <Profile />
      <About />
    </article>
  );
};

export default page;

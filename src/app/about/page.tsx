import About from "@/components/About/About";
import Profile from "@/components/Posts/Profile";
import React from "react";

const page = () => {
  return (
    <article>
      <Profile />
      <About />
    </article>
  );
};

export default page;

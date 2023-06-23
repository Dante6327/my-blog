import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Dante에게 메일 보내기",
};

const page = () => {
  return (
    <article className="mb-20">
      <Contact />
    </article>
  );
};

export default page;

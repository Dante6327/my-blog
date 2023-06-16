import React from "react";
import Velog from "./svg/Velog";
import Github from "./svg/Github";

const Footer = () => {
  return (
    <section className="my-4 pt-2 border-t-[0.5px] border-slate-400 text-xs text-right">
      <br />
      <div className="flex items-center flex-row-reverse">
        <Velog />
        &nbsp;
        <Github />
      </div>
      © 2023~ dante blog Powered by Next.js, Vercel
    </section>
  );
};

export default Footer;

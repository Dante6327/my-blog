import React from "react";
import Velog from "./svg/Velog";
import Github from "./svg/Github";
import Instagram from "./svg/Instagram";

const Footer = () => {
  return (
    <section className="m-4 pt-2 border-t-[0.5px] border-slate-400 text-xs text-right">
      <br />
      <div className="flex items-center flex-row-reverse">
        <Instagram />
        &nbsp;
        <Velog />
        &nbsp;
        <Github />
      </div>
      © 2023~ dante blog Powered by Next.js, Github Pages
    </section>
  );
};

export default Footer;

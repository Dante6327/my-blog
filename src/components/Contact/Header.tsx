import React from "react";
import Github from "../Layout/svg/Github";
import Velog from "../Layout/svg/Velog";

const Header = () => {
  return (
    <section className="text-center mt-12">
      <h1 className="font-semibold text-2xl">Contact Me</h1>
      <p>jinpyeong93@gamil.com</p>
      <div className="flex justify-center items-center gap-2 mt-2">
        <Github width={28} height={28} />
        <Velog width={28} height={28} />
      </div>
    </section>
  );
};

export default Header;

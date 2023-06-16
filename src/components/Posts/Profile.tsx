import Image from "next/image";
import React from "react";
import me from "../../../public/images/profile/meeee.jpeg";
import Link from "next/link";
import Github from "../Layout/svg/Github";
import Velog from "../Layout/svg/Velog";

const Profile = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex justify-center items-center mx-auto">
        <Image
          className="w-24 h-24 my-8 rounded-full sm:w-32 sm:h-32"
          src={me}
          alt="Jinpyeong Kim. Frontend Developer"
        />
        <div className="ml-8">
          <p className="text-md font-semibold sm:text-lg">Jinpyeong Kim</p>
          <p className="text-sm sm:text-md">Junior Frontend Developer</p>
          <p className="flex gap-1 my-1">
            <Github />
            <Velog />
          </p>
          <span className="text-xs bg-slate-300 dark:bg-slate-800 rounded-lg p-[2px] px-2">
            <Link href="/contact">Contact Me!</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Profile;

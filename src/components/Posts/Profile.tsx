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
          <div className="flex text-xs justify-between">
            <p className="bg-slate-300 dark:bg-slate-800 rounded-lg px-1">
              <Link href="/contact">Contact Me!</Link>
            </p>
            <p className="bg-green-200 dark:bg-green-500 rounded-lg px-1">
              <a href="https://purrfect-corleggy-40a.notion.site/b378dbeb6ca2490fbde41b86e7abf77e?pvs=4">
                More About Me!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

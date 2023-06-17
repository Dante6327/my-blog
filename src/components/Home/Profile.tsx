import React from "react";

const Profile = () => {
  return (
    <div className="leading-8 p-4 mt-8">
      <h2 className="text-4xl font-semibold">Jinpyeong Kim</h2>
      <br />
      <div className="text-lg">
        <p>I&apos;m Frontend Developer</p>
        <p>My development values prioritize user experience.</p>
        <p className="mt-4">
          <a
            href="https://purrfect-corleggy-40a.notion.site/b378dbeb6ca2490fbde41b86e7abf77e?pvs=4"
            className="text-sm bg-slate-300 dark:bg-slate-800 rounded-lg px-2 hover:bg-slate-600 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black"
          >
            More About Me →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;

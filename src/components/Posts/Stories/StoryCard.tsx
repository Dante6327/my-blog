import { Post } from "@/service/posts";
import React from "react";
type Props = {
  storyTitle: string;
};
const StoryCard = ({ storyTitle }: Props) => {
  return (
    <div className="w-36 h-48 rounded-md p-2 bg-black dark:bg-slate-700 transition ease-in-out hover:scale-105 hover:cursor-pointer shadow-md">
      <div className="w-full h-full rounded-md p-4 bg-slate-200 dark:white font-semibold dark:text-black">
        {storyTitle}
      </div>
      <div className="text-center mt-[0.8px] w-[5.5px] h-[5.5px] mx-auto  bg-slate-400 rounded-2xl" />
    </div>
  );
};

export default StoryCard;

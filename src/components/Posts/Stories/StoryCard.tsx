import { Post } from "@/service/posts";
import React from "react";
type Props = {
  storyTitle: string;
};
const StoryCard = ({ storyTitle }: Props) => {
  return (
    <div className="w-40 h-60 rounded-md p-4 bg-slate-300 dark:bg-slate-600 transition ease-in-out hover:scale-105 hover:cursor-pointer">
      <div className="w-full h-full rounded-md p-4 bg-slate-200 dark:bg-slate-400">
        {storyTitle}
      </div>
      <div className="text-center w-2 h-2 mx-auto mt-1 bg-slate-800 rounded-2xl" />
    </div>
  );
};

export default StoryCard;

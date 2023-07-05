import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

const PostCard = ({ post: { title, date, category, path } }: Props) => {
  return (
    <Link href={`/posts/${path}`}>
      <article className="dark:bg-slate-700 rounded-md overflow-hidden shadow-sm shadow-gray-400 transition ease-in-out hover:scale-105 mt-1 max-w-sm mx-auto p-4">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold h-16">{title}</h3>
          <time className="self-end text-gray-400 text-xs">
            {date.toString()}
          </time>
          <p className="text-sm bg-orange-200 px-2 my-2 rounded-md dark:text-black">
            {category}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;

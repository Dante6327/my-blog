import { Post } from "@/service/posts";
import Link from "next/link";
import React from "react";

type Props = {
  storyPosts: Post[];
};

const Story = ({ storyPosts }: Props) => {
  return (
    <section>
      {storyPosts.map((post, index) => (
        <div
          className="max-w-3xl mx-auto pl-8 my-16 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 ease-in duration-200"
          key={post.path}
        >
          <Link href={`/posts/${post.path}`} className="flex gap-4 py-4">
            <div className="text-xl font-bold ">{index + 1}.</div>
            <div className="w-full">
              <h1 className="text-xl font-bold">{post.title}</h1>
              <h2 className="text-md text-slate-700 dark:text-slate-400">
                {post.description}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-600 text-right pr-4">
                {post.date.toString()}
              </p>
              <p className="bg-slate-300 dark:bg-slate-600 w-fit rounded-xl px-2 py-1 text-xs">
                {post.category}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Story;

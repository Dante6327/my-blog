import { Post } from "@/service/posts";
import React from "react";

type Props = {
  post: Post;
};

const PostTitle = ({ post }: Props) => {
  return (
    <section className="text-center">
      <h1 className="pt-16 text-4xl font-bold pb-2">{post.title}</h1>
      <h2 className="pb-2 text-md">{post.description}</h2>
      <h2 className="pb-8 text-xs border-b-[0.5px] border-gray-400">
        {`[${post.category}]`}
      </h2>
    </section>
  );
};

export default PostTitle;

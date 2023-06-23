import { Post } from "@/service/posts";
import React from "react";

type Props = {
  post: Post;
};

const PostTitle = ({ post }: Props) => {
  return (
    <section className="text-center">
      <h1 className="pt-16 text-4xl font-bold">{post.title}</h1>
      <h2 className="text-2xlp pb-8 border-b-[0.5px] border-gray-400">
        {post.category}
      </h2>
    </section>
  );
};

export default PostTitle;

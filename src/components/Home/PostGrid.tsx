import React from "react";
import type { Post } from "@/service/posts";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

const PostGrid = ({ posts }: Props) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 t-8 gap-2">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostGrid;

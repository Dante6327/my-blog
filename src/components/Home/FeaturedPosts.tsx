import { getAllPosts, getFeaturedPosts } from "@/service/posts";
import React from "react";
import PostGrid from "./PostGrid";

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();

  return (
    <div className="p-4 mt-8">
      <h2 className="text-4xl font-semibold">Featured Posts</h2>
      <PostGrid posts={posts} />
    </div>
  );
};

export default FeaturedPosts;

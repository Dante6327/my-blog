import { getAllPosts } from "@/api/posts";
import Filterableposts from "@/components/Posts/Filterableposts";
import React from "react";

const PostsPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <Filterableposts posts={posts} categories={categories} />;
};

export default PostsPage;

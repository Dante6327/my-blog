import { getAllPosts } from "@/service/posts";
import Filterableposts from "@/components/Posts/Filterableposts";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Dante의 Post 글",
};

const PostsPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <Filterableposts posts={posts} categories={categories} />;
};

export default PostsPage;

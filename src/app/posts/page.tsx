import { getAllPosts } from "@/service/posts";
import Filterableposts from "@/components/Posts/Filterableposts";
import React from "react";
import { Metadata } from "next";
import Stories from "@/components/Posts/Stories/Stories";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Dante의 Post 글",
};

const PostsPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  //여기 Post 데이터 형식으로 바꾸셈
  const stories = posts.filter((post) => post.story);
  const storyTitle = [...new Set(posts.map((post) => post.storyTitle))].filter(
    (title) => title
  );

  const storyObj = [
    ...new Set(
      stories.map((story) => {
        return JSON.stringify({
          story: story.story,
          storyTitle: story.storyTitle,
        });
      })
    ),
  ].map((story) => JSON.parse(story));

  return (
    <>
      <Stories storyObj={storyObj} />
      <Filterableposts posts={posts} categories={categories} />
    </>
  );
};

export default PostsPage;

"use client";
import { Post } from "@/api/posts";
import React, { useState } from "react";
import PostGrid from "../Home/PostGrid";
import Categories from "./Categories";
import CategoryTitle from "./CategoryTitle";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";

const Filterableposts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="pt-10">
      <h1 className="ml-4 mb-2 text-4xl font-bold">Posts</h1>
      {/* <CategoryTitle selected={selected} /> */}
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <PostGrid posts={filtered} />
      <div className="flex m-4"></div>
    </section>
  );
};

export default Filterableposts;

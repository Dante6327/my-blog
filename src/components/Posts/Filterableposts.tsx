"use client";
import { Post } from "@/service/posts";
import React, { useState } from "react";
import PostGrid from "../Home/PostGrid";
import Categories from "./Categories";

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
      <div className="m-4">
        <Categories
          categories={[ALL_POSTS, ...categories]}
          selected={selected}
          onClick={setSelected}
        />
        <PostGrid posts={filtered} />
      </div>
    </section>
  );
};

export default Filterableposts;

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
      <CategoryTitle selected={selected} />
      <div className="flex m-4">
        <PostGrid posts={filtered} />
        <Categories
          categories={[ALL_POSTS, ...categories]}
          selected={selected}
          onClick={setSelected}
        />
      </div>
    </section>
  );
};

export default Filterableposts;

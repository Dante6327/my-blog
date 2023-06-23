import { getNonFeaturedPosts } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

//react-multi-carousel 라이브러리 사용
const CarouselPosts = async () => {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="p-4 mt-8">
      <h2 className="text-4xl font-semibold">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPosts;

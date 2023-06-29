import StoryCard from "@/components/Posts/Stories/StoryCard";
import Story from "@/components/Story/Story";
import { getStoryPosts } from "@/service/posts";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const StoryPage = async ({ params: { slug } }: Props) => {
  const storyPosts = (await getStoryPosts(slug)).reverse();

  return (
    <article className="my-20">
      <h1 className="text-center text-2xl font-bold">
        {storyPosts[0].storyTitle}
      </h1>
      <Story storyPosts={storyPosts} />
    </article>
  );
};
export default StoryPage;

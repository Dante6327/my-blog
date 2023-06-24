import React from "react";
import StoryCard from "./StoryCard";
import Link from "next/link";

type Props = {
  storyObj: { story: string; storyTitle: string }[];
};

const Stories = ({ storyObj }: Props) => {
  return (
    <section className="pt-10 ml-4">
      <h1 className="mb-4 text-4xl font-bold">Story</h1>
      <span>
        시리즈로 작성한 포스트들을 묶어두었습니다. 각각의 시리즈마다 관련된
        포스트들을 편하게 보실 수 있습니다.
      </span>
      <div className="mt-4 p-4 flex flex-nowrap overflow-x-auto nowrap mr-10 gap-2 ">
        {storyObj.map((storyData, index) => (
          <div key={index}>
            <Link href={`/posts/story/${storyData.story}`}>
              <StoryCard storyTitle={storyData.storyTitle} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stories;

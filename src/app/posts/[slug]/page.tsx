import { getPostData } from "@/api/posts";
import MarkdownViewer from "@/components/Posts/MarkdownViewer";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const DetailPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);

  return (
    <article>
      <div className="text-center">
        <h1 className="pt-16 text-4xl font-bold">{post.title}</h1>
        <h2 className="text-2xlp pb-8 border-b-[0.5px] border-gray-400 ">
          {post.category}
        </h2>
      </div>
      <MarkdownViewer content={post.content} />
    </article>
  );
};

export default DetailPage;

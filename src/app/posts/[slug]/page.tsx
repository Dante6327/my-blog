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
      <h1 className="text-center p-16 text-6xl border-b-[0.5px] border-gray-400 font-bold">
        {post.title}
      </h1>
      <MarkdownViewer content={post.content} />
    </article>
  );
};

export default DetailPage;

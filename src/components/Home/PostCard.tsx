import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

const PostCard = ({
  post: { title, description, date, category, path },
}: Props) => {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-sm shadow-gray-400 transition ease-in-out hover:scale-105 mt-1 max-w-sm mx-auto">
        <Image
          src={`/images/posts/${path}.jpg`}
          alt={title}
          width={300}
          height={200}
          className="w-full h-40"
        />
        <div className="flex flex-col items-center">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <p className="text-sm bg-orange-200 px-2 my-2 rounded-md">
            {category}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;

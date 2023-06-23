import { Post } from "@/service/posts";
import Link from "next/link";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {
  movement: "prev" | "next";
  postData: Post;
};

const BeforeAndAfterButton = ({ movement, postData }: Props) => {
  return (
    <Link
      href={`/posts/${postData.path}`}
      className={`absolute truncate ${
        movement === "prev" ? "left-0 sm:left-2" : "right-0 sm:right-2"
      }`}
    >
      <div
        className={`flex items-center m-4 ${
          movement === "next" && "flex-row-reverse"
        } text-xs sm:text-sm`}
      >
        {movement === "prev" ? (
          <FiChevronLeft className="w-4" />
        ) : (
          <FiChevronRight className="w-4" />
        )}

        <span>{movement === "prev" ? "[이전 글]" : "[다음 글]"}</span>
        <span className="mx-1">{postData.title}</span>
      </div>
    </Link>
  );
};

export default BeforeAndAfterButton;

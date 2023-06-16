import { Post } from "@/api/posts";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BeforeAndAfterButton from "./BeforeAndAfterButton";

type Props = {
  bna: { prev: undefined | number; next: undefined | number };
  reversePosts: Post[];
};

const BeforeAndAfterPosts = ({ bna, reversePosts }: Props) => {
  return (
    <section className="flex relative h-12  w-full">
      {(bna.prev || bna.prev === 0) && (
        <BeforeAndAfterButton
          movement="prev"
          postData={reversePosts[bna.prev]}
        />
      )}
      {bna.next && (
        <BeforeAndAfterButton
          movement="next"
          postData={reversePosts[bna.next]}
        />
      )}
    </section>
  );
};

export default BeforeAndAfterPosts;

import { getAllPosts, getPostData } from "@/service/posts";
import BeforeAndAfterPosts from "@/components/Posts/BeforeAndAfterPosts";
import MarkdownViewer from "@/components/Posts/MarkdownViewer";
import PostTitle from "@/components/Posts/PostTitle";
import Profile from "@/components/Posts/Profile";

type Props = {
  params: {
    slug: string;
  };
};

const DetailPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const reversePosts = (await getAllPosts()).reverse();

  const nowPostIndex = reversePosts.findIndex(
    (postOne) => postOne.path === post.path
  );

  const bna =
    nowPostIndex === 0
      ? { prev: undefined, next: 1 }
      : nowPostIndex === reversePosts.length - 1
      ? { prev: nowPostIndex - 1, next: undefined }
      : { prev: nowPostIndex - 1, next: nowPostIndex + 1 };

  return (
    <article>
      <PostTitle post={post} />
      <MarkdownViewer content={post.content} />
      <Profile />
      <BeforeAndAfterPosts bna={bna} reversePosts={reversePosts} />
    </article>
  );
};

export default DetailPage;

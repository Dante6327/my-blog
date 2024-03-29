import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
  story: string;
  storyTitle: string;
};

export const getAllPosts = cache(async () => {
  const filepath = path.join(process.cwd(), "public", "data", "posts.json");
  return readFile(filepath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}

export async function getStoryPosts(story: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.story === story);
}

export type PostData = Post & { content: string };
export async function getPostData(filename: string): Promise<PostData> {
  const filepath = path.join(
    process.cwd(),
    "public",
    "data",
    "posts",
    `${filename}.md`
  );

  const metadata = await getAllPosts().then((post) =>
    post.find((post) => post.path === filename)
  );
  if (!metadata)
    throw new Error(`${filename}에 해당하는 포스트를 찾을 수 없습니다.`);

  const content = await readFile(filepath, "utf-8");
  return { ...metadata, content };
}

import CarouselPosts from "@/components/Home/CarouselPosts";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import Profile from "@/components/Home/Profile";

export default function HomePage() {
  return (
    <section className="w-full">
      <Profile />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  );
}

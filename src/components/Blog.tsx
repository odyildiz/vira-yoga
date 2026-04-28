import { fetchBlogPosts } from "@/lib/api";
import BlogCard from "./cards/BlogCard";

export default async function Blog() {
  const posts = await fetchBlogPosts();

  return (
    <section id="blog" className="py-xxl bg-surface-container-low px-gutter">
      <div className="max-w-max_width mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-h2 text-h2 text-on-background mb-4">Blog</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Yoga, farkındalık ve yaşam üzerine son yazılarımız.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-xl text-center">
          <button className="font-button text-button px-8 py-3 border border-outline rounded-full hover:bg-surface-container transition-colors duration-300">
            Tüm Blog Yazılarını Gör
          </button>
        </div>
      </div>
    </section>
  );
}

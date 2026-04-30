import { fetchBlogPosts } from "@/lib/api";
import BlogCard from "@/components/cards/BlogCard";

export const metadata = {
  title: "Blog | Vira Yoga",
  description: "Yoga, nefes, meditasyon ve yeni başlayanlar için Vira Yoga blog yazılarını inceleyin.",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <section id="ArticleGrid" className="py-12 md:py-16 px-6 md:px-8 max-w-7xl mx-auto min-h-[70vh]">
      <div className="mb-10 text-center md:text-left pt-8">
        <h1 className="font-h1 text-4xl md:text-5xl text-on-background mb-4">Blog</h1>
        <p className="text-on-surface-variant text-lg">Yoga, nefes, meditasyon ve stüdyo yaşamına dair yazılar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="article-list">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

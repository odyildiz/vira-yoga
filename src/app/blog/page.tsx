import { fetchBlogPosts } from "@/lib/api";
import BlogCard from "@/components/cards/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | Vira Yoga",
  description: "Yoga, nefes, meditasyon ve yeni başlayanlar için Vira Yoga blog yazılarını inceleyin.",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <>
      <Navbar solid={true} />
      <main className="flex-grow pb-24 md:pb-0">
        <section id="ArticleGrid" className="py-24 md:py-36 px-gutter max-w-max_width mx-auto min-h-[70vh]">
          <div className="mb-xl text-center md:text-left">
            <h1 className="font-h1 text-h1 text-on-background mb-4">Blog</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Yoga, nefes, meditasyon ve stüdyo yaşamına dair yazılar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg" id="article-list">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

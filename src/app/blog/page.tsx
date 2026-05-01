import { storageBaseUrl, fetchBlogPosts } from "@/lib/api";
import BlogCard from "@/components/cards/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Blog | Vira Yoga",
  description: "Yoga, nefes, meditasyon ve yeni başlayanlar için Vira Yoga blog yazılarını inceleyin.",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <>
      <Navbar />
      <main className="flex-grow pb-24 md:pb-0">
        <header className="relative w-full h-[350px] md:h-[450px] flex items-center overflow-hidden bg-on-background mt-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${storageBaseUrl}/image/hero/blog-page-hero-image.avif`}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Yoga Studio"
          />
          <div className="relative z-20 px-8 md:px-16 lg:px-24 w-full flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-24 max-w-7xl mx-auto">
            <h1 className="font-h1 text-[36px] md:text-[56px] text-white tracking-widest mb-4 drop-shadow-md">
              Blog
            </h1>
            <p className="font-body-lg text-white/90 max-w-2xl mb-8 drop-shadow-sm">
              Yoga, nefes, meditasyon ve stüdyo yaşamına dair yazılar.
            </p>
          </div>
        </header>

        <section id="ArticleGrid" className="pt-12 pb-24 px-gutter max-w-max_width mx-auto min-h-[70vh]">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg" id="article-list">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <Contact title="Bizimle İletişime Geç" description="Yazılarımız, derslerimiz veya stüdyomuz hakkında bilgi almak için buradayız." />
      </main>
      <Footer />
    </>
  );
}

import { fetchBlogPosts, fetchBlogPostBySlug } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import WhatsAppButton from "@/components/buttons/WhatsAppButton";
import CallButton from "@/components/buttons/CallButton";
import Contact from "@/components/Contact";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Vira Yoga`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await fetchBlogPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar solid={true} />

      <main className="pb-24 md:pb-0">
        {/* ── Article ─────────────────────────────────────────────── */}
        <article>
          {/* Article container: narrow on desktop for readability */}
          <div className="max-w-2xl mx-auto px-6 pt-28 md:pt-36">

            {/* ① Header */}
            <header className="mb-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors text-sm mb-8"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Tüm Yazılara Dön
              </Link>

              <div className="flex items-center justify-center gap-3 text-sm text-on-surface-variant mb-4">
                {post.readTime && (
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    {post.readTime}
                  </span>
                )}
              </div>

              <h1 className="font-h1 text-3xl md:text-4xl text-on-background mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {/* ② Cover Image */}
            {post.image && (
              <div className="mb-12 -mx-6 md:mx-0">
                <div className="relative w-full aspect-video rounded-none md:rounded-2xl overflow-hidden bg-surface-variant">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 720px"
                    priority
                  />
                </div>
              </div>
            )}

            {/* ③ Article Body */}
            {post.content && post.content.length > 0 ? (
              <div className="mb-16 space-y-0">
                {post.content.map((section, i) => (
                  <div key={i} className="mb-6">
                    {section.heading && (
                      <h2 className="font-h2 text-xl md:text-2xl text-on-background mt-10 mb-3 leading-snug">
                        {section.heading}
                      </h2>
                    )}
                    <p className="text-on-surface text-[1.05rem] leading-[1.85]">
                      {section.body}
                    </p>
                    {section.inlineCta && (
                      <Link
                        href={section.inlineCta.href}
                        className="inline-flex items-center gap-1 mt-2 text-primary font-semibold text-sm border-b border-primary pb-px hover:opacity-75 transition-opacity"
                      >
                        {section.inlineCta.text}
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-on-surface-variant text-center py-8">İçerik yakında eklenecek.</p>
            )}

            {/* ④ In-article CTA Block */}
            <div className="bg-surface-container-low border border-surface-dim rounded-2xl p-8 md:p-10 text-center mb-16">
              <h3 className="font-h3 text-xl md:text-2xl text-on-background mb-2">
                Hangi dersle başlayacağını bilmiyor musun?
              </h3>
              <p className="text-on-surface-variant text-base mb-6">
                Yoga deneyimine ve ihtiyacına göre sana uygun dersi birlikte seçebiliriz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <WhatsAppButton 
                  phoneNumber="905555555555" 
                  label="WhatsApp'tan Sor" 
                  variant="primary"
                />
                <CallButton 
                  phoneNumber="+905555555555" 
                  label="Bizi Ara" 
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </article>

        {/* ── Related Articles ────────────────────────────────────── */}
        <section className="border-t border-surface-dim pt-16 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-h2 text-2xl md:text-3xl text-on-background text-center mb-10">
              Benzer Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  id={`related-post-${item.id}`}
                  className="group flex flex-col"
                >
                  {item.image && (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-variant mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  {item.readTime && (
                    <span className="text-xs text-on-surface-variant mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {item.readTime}
                    </span>
                  )}
                  <h3 className="font-h3 text-lg text-on-background mb-2 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm flex-grow line-clamp-2 mb-3">
                    {item.excerpt}
                  </p>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                    Yazıyı Oku
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA Section ────────────────────────────────────── */}
        <Contact title="Vira Yoga'yı Yakından Tanı" description="Derslerimiz, programımız veya sormak istediklerin için bizimle iletişime geçebilirsin." />

        <Footer />
      </main>

      {/* ── Mobile Sticky Contact Bar ───────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-surface-variant shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex justify-between px-2 py-3 gap-2">
        <a
          href="tel:+905555555555"
          className="flex-1 flex flex-col items-center justify-center gap-1 text-primary hover:text-surface-tint"
        >
          <span className="material-symbols-outlined text-[24px]">call</span>
          <span className="text-[10px] font-bold">Ara</span>
        </a>
        <div className="w-px h-8 bg-surface-variant self-center" />
        <a
          href="https://wa.me/905555555555"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 text-green-600 hover:text-green-700"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>
        <div className="w-px h-8 bg-surface-variant self-center" />
        <Link
          href="/ders-programi"
          className="flex-1 flex flex-col items-center justify-center gap-1 text-on-surface-variant hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-[24px]">calendar_month</span>
          <span className="text-[10px] font-bold">Program</span>
        </Link>
      </div>
    </>
  );
}

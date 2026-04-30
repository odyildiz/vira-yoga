import { BlogPost } from "@/types";
import Link from "next/link";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="article-card flex flex-col bg-surface rounded-2xl border border-surface-dim overflow-hidden hover:shadow-md transition-shadow duration-300 group h-full">
      {post.image && (
        <div className="h-48 relative overflow-hidden bg-surface-variant">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-h3 text-xl text-on-background mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-dim">
          <span className="text-xs text-on-surface-variant flex items-center gap-1 font-semibold">
            {post.readTime && (
              <>
                <span className="material-symbols-outlined text-[16px]">schedule</span> {post.readTime}
              </>
            )}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary font-button text-sm font-bold flex items-center gap-1 hover:underline"
          >
            Yazıyı Oku <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

import { BlogPost } from "@/types";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <div className="bg-surface rounded-xl p-margin border border-surface-dim">
      <h3 className="font-h3 text-xl text-on-background mb-2">
        {post.title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-4">
        {post.excerpt}
      </p>
      <button className="text-primary font-button text-button hover:underline">
        Devamını Oku
      </button>
    </div>
  );
}

import { BlogPost } from "@/types";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <div className="bg-surface rounded-xl border border-surface-dim flex flex-col h-full overflow-hidden">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-margin flex flex-col flex-1">
        <h3 className="font-h3 text-xl text-on-background mb-2">
          {post.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-1">
          {post.excerpt}
        </p>
        <button className="text-primary font-button text-button hover:underline text-left mt-auto">
          Devamını Oku
        </button>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>
        <p className="mt-2 text-gray-500">Por {post.author} em {new Date(post.publishedAt).toLocaleDateString()}</p>
        <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-blue-500 hover:underline">
            Ler mais
        </Link>
    </div>
  );
}
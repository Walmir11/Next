import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogPage() {
    const publishedPosts = posts.filter(post => post.published);

    return (
        <section>
            <h1 className="text-3xl font-bold">Blog</h1>
            <p className="mt-4">Confira os posts mais recentes.</p>
            <div className="mt-6 grid gap-6">
                {publishedPosts.map(post => (
                    <article key={post.id} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p className="mt-2 text-gray-600">{post.excerpt}</p>
                        <p className="mt-2 text-gray-500">Por {post.author} em {new Date(post.publishedAt).toLocaleDateString()}</p>
                        <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-blue-500 hover:underline">
                            Ler mais
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
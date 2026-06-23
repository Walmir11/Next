import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map(post => ({
        slug: post.slug
    }));
}

export default async function PostPage({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mt-2 text-gray-500">Por {post.author} em {new Date(post.publishedAt).toLocaleDateString()}</p>
            <div className="mt-4 prose" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    );
}

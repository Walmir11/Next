import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <section>
            <h1 className="text-3xl font-bold">Blog</h1>
            <p className="mt-4">Confira os posts mais recentes.</p>
            <div className="mt-6 grid gap-6">
                {posts.map(post => (
                    <PostCard post={post} key={post.id}/>
                ))}
            </div>
        </section>
    );
}

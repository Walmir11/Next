import { posts } from "../data/posts";

export function getAllPosts() {
    return posts.filter(post => post.published);
}

export function getPostBySlug(slug) {
    return posts.find(post => post.slug === slug && post.published);
}

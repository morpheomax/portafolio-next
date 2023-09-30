// ListOfPosts.jsx
import React from "react";
import LikeButton from "./LikeButton";
import Link from "next/link";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export const ListOfPosts = async () => {
  const posts = await fetchPosts();

  return (
    <div className="mx-auto mt-8 max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Posts</h2>
      {posts.slice(0, 5).map((post) => (
        <article
          key={post.id}
          className="mb-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <Link href={`api/${post.id}`}>
            <h2 className="text-xl font-semibold text-blue-500 hover:underline cursor-pointer">
              {post.title}
            </h2>
          </Link>
          <p className="text-sm text-gray-700 mt-2">{post.body}</p>
          <LikeButton id={post.id} />
        </article>
      ))}
    </div>
  );
};

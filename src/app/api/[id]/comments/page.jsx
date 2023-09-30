import React from "react";

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

const Page = async ({ params }) => {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Comentarios</h2>
      <ul className="list-disc pl-4">
        {comments.map((comment) => (
          <li key={comment.id} className="mb-4">
            <h3 className="text-lg font-semibold text-blue-500 mb-1">
              {comment.name}
            </h3>
            <p className="text-gray-700">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;

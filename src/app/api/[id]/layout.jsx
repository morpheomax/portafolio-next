import Link from "next/link";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

const Page = async ({ children, params }) => {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <div className="container mx-auto mt-28">
      <article className="bg-white p-4 border rounded-lg shadow-md ">
        <h1 className="text-2xl font-semibold text-blue-500 hover:underline cursor-pointer mb-2">
          {post.title}
        </h1>
        <p className="text-gray-700">{post.body}</p>
        <Link
          href={`/api/${id}/comments`}
          className="block mt-4 text-blue-500 hover:underline"
        >
          Ver Comentarios
        </Link>
        {children}
      </article>
    </div>
  );
};

export default Page;

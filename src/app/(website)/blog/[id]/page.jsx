import { Suspense } from "react";
import { notFound } from "next/navigation";

const API_URL = "https://jsonplaceholder.typicode.com";

const getSingleBlog = async (id) => {
  const res = await fetch(`${API_URL}/posts/${id}`);

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to fetch blog");

  return res.json();
};
// Dynamic Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = await getSingleBlog(id);

  return {
    title: product.title,
    description: product.description,

    openGraph: {
      title: product.title,
      description: product.description,
      // images: [product.thumbnail],
    },
  };
}

// Async part: reads params + fetches data (runtime work)
const BlogContent = async ({ params }) => {
  const { id } = await params;
  const blog = await getSingleBlog(id);

  return (
    <article>
      <h1 className="text-3xl font-bold capitalize">{blog.title}</h1>
      <p className="mt-4 text-gray-700">{blog.body}</p>
    </article>
  );
};

// Placeholder shown while the blog loads
const BlogSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 w-3/4 rounded bg-gray-200" />
    <div className="mt-4 h-4 w-full rounded bg-gray-200" />
    <div className="mt-2 h-4 w-5/6 rounded bg-gray-200" />
    <div className="mt-2 h-4 w-2/3 rounded bg-gray-200" />
  </div>
);



// Page: stays synchronous so the shell can be prerendered
const BlogDetails = ({ params }) => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent params={params} />
      </Suspense>
    </main>
  );
};

export default BlogDetails;
import Link from "next/link";

export const metadata = {
  title: "Blog | MyBrand",
  description: "Tutorials, tips and insights about web development.",
};

const gradients = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-pink-500 to-rose-600",
  "from-amber-500 to-orange-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-sky-600",
];

const API_URL = "https://jsonplaceholder.typicode.com";

async function getPosts() {
  const res = await fetch(`${API_URL}/posts?_limit=90`, {
    next: { revalidate: 3600 }, // cache for 1 hour
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

async function getUsers() {
  const res = await fetch(`${API_URL}/users`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default async function BlogPage() {
  // Fetch both in parallel
  const [posts, users] = await Promise.all([getPosts(), getUsers()]);

  return (
    <main className="bg-white">
      {/* Page header */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-20">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Our Blog
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Latest articles & tutorials
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Tips, guides and insights on React, Next.js and modern web
            development.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => {
            const author = users.find((u) => u.id === post.userId);
            const authorName = author ? author.name : "Unknown";

            return (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Cover */}
                <Link href={`/blog/${post.id}`}>
                  <div
                    className={`flex h-44 items-center justify-center bg-gradient-to-br ${
                      gradients[index % gradients.length]
                    }`}
                  >
                    <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white backdrop-blur">
                      Post #{post.id}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold capitalize text-gray-900 line-clamp-2 group-hover:text-blue-600">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {post.body}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                        {authorName.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {authorName}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
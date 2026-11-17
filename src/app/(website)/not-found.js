import Link from "next/link";

export const metadata = {
	title: "Page Not Found | MyBrand",
	description: "The page you are looking for does not exist.",
};

export default function NotFoundPage() {
	return (
		<section className="bg-gradient-to-b from-blue-50 to-white">
			<div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
				<span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
					Error 404
				</span>

				<h1 className="mt-6 bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl">
					404
				</h1>

				<h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
					Oops! Page not found
				</h2>

				<p className="mt-3 max-w-md text-gray-600">
					The page you are looking for may have been moved, deleted, or never
					existed. Let&apos;s get you back on track.
				</p>

				<div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
					<Link
						href="/"
						className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow hover:bg-blue-700 sm:w-auto"
					>
						Back to Home
					</Link>
					<Link
						href="/blog"
						className="w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:w-auto"
					>
						Visit Blog
					</Link>
				</div>

				<p className="mt-10 text-sm text-gray-500">
					Need help?{" "}
					<Link
						href="/contact"
						className="font-semibold text-blue-600 hover:text-blue-700"
					>
						Contact us
					</Link>
				</p>
			</div>
		</section>
	);
}


import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-gray-50">
			<div className="mx-auto max-w-6xl px-4 py-10">
				<div className="grid gap-8 md:grid-cols-3">
					{/* Brand */}
					<div>
						<Link href="/" className="text-xl font-bold text-gray-900">
							MyBrand
						</Link>
						<p className="mt-3 text-sm text-gray-600">
							Building simple, fast and modern web experiences.
						</p>
					</div>

					{/* Quick links */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
							Quick Links
						</h3>
						<ul className="mt-3 space-y-2 text-sm">
							<li>
								<Link href="/" className="text-gray-600 hover:text-blue-600">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-gray-600 hover:text-blue-600"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="text-gray-600 hover:text-blue-600"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-600 hover:text-blue-600"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
							Contact
						</h3>
						<ul className="mt-3 space-y-2 text-sm text-gray-600">
							<li>hello@mybrand.com</li>
							<li>+880 1234 567890</li>
							<li>Dhaka, Bangladesh</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
					© 2026 MyBrand. All rights reserved.
				</div>
			</div>
		</footer>
	);
}

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Text content */}
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Welcome to MyBrand
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build fast, modern websites that{" "}
            <span className="text-blue-600">stand out</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            We create clean, responsive and high-performance web experiences
            that help your business grow online.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow hover:bg-blue-700 sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:w-auto"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex justify-center gap-8 md:justify-start">
            <div>
              <p className="text-2xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">30+</p>
              <p className="text-sm text-gray-500">Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">5+</p>
              <p className="text-sm text-gray-500">Years</p>
            </div>
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="flex justify-center">
          <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-6xl shadow-xl">
            🚀
          </div>
        </div>
      </div>
    </section>
  );
}
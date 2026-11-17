"use client";

export default function Error({ error, reset }) {
	return (
		<div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
			<h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>

			<p className="text-gray-500">{error.message}</p>

			<button
				onClick={() => reset()}
				className="bg-blue-600 text-white px-5 py-2 rounded"
			>
				Try Again
			</button>
		</div>
	);
}

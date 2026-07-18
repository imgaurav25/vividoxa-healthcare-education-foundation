import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="min-h-screen flex flex-col items-center justify-center text-center text-gray-700 p-4">
      <h1 class="text-8xl">🎃</h1>

      <h2 class="mt-6 text-4xl font-bold text-sky-700">
        404
      </h2>

      <p class="mt-2 text-lg text-gray-500">
        Oops! The page you're looking for doesn't exist.
      </p>

      <A
        href="/"
        class="mt-6 rounded-lg bg-sky-700 px-6 py-3 text-white hover:bg-sky-800 transition"
      >
        Go Back Home
      </A>
    </main>
  );
}

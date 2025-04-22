export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
        Ship Websites. Faster.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-6">
        This is a custom landing page inspired by Vercel.com, built to showcase responsive layout, clean design, and production-ready deployment using Next.js and Tailwind CSS.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#"
          className="bg-white text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
        >
          View Source Code
        </a>
        <a
          href="#"
          className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition"
        >
          Deploy Your Own
        </a>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <div className="bg-gray-900 shadow-lg rounded-lg p-8 max-w-2xl w-full text-white">
        <h1 className="text-3xl font-bold text-center mb-4">
          Personality Assessment
        </h1>
        <p className="text-lg text-center mb-6">
          This is a personality-based test. We use advanced AI models to analyze your responses and reveal hidden aspects of your personality.
        </p>
        <div className="flex justify-center">
          <Link
            href="/question1"
            className="py-3 px-6 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
          >
            Start Test
          </Link>
        </div>
      </div>
    </div>
  );
}

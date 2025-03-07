'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Result() {
  const [isCalculating, setIsCalculating] = useState(true);
  const [result, setResult] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const outcomes = [
        "You are 97% retarded.",
        "you seem very slow, I mean off the charts slow",
        "You are a complete idiot",
        "How disappointing, you are a complete moron",
        "Ewwww, you are a complete idiot",
      ];
      const randomIndex = Math.floor(Math.random() * outcomes.length);
      setResult(outcomes[randomIndex]);
      setIsCalculating(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <div className="bg-gray-900 shadow-lg rounded-lg p-8 max-w-2xl w-full text-center text-white">
        {isCalculating ? (
          <div>
            <p className="text-xl font-semibold mb-4">Calculating your results...</p>
            <button className="py-3 px-6 bg-blue-600 text-white font-semibold rounded opacity-50 cursor-not-allowed">
              Calculating...
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4">{result}</h2>
            <Link
              href="/"
              className="mt-4 inline-block py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600"
            >
              Retake Test
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

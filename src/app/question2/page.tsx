// app/question2/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Question2() {
  const [answer, setAnswer] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-gray-900 shadow-lg rounded-lg p-8 max-w-2xl w-full text-white">
        <h2 className="text-2xl font-bold mb-4">Question 2</h2>
        <p className="text-lg mb-6">
          On a scale of 1 to 5, how important is self-awareness in your daily life?
        </p>
        <div className="flex space-x-4 mb-6">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className="inline-flex items-center">
              <input
                type="radio"
                name="selfAwareness"
                value={num}
                checked={answer === String(num)}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-radio"
              />
              <span className="ml-1">{num}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-between">
          <Link
            href="/question1"
            className="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Back
          </Link>
          <Link
            href="/question3"
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

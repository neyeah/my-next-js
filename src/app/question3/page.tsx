// app/question3/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Question3() {
  const [answer, setAnswer] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-gray-900 shadow-lg rounded-lg p-8 max-w-2xl w-full text-white">
        <h2 className="text-2xl font-bold mb-4">Question 3</h2>
        <p className="text-lg mb-6">
          Do you believe that our perceptions shape the reality we experience?
        </p>
        <div className="flex space-x-6 mb-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="perceptionShape"
              value="yes"
              checked={answer === 'yes'}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="perceptionShape"
              value="no"
              checked={answer === 'no'}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
        <div className="flex justify-between">
          <Link
            href="/question2"
            className="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Back
          </Link>
          <Link
            href="/math"
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}

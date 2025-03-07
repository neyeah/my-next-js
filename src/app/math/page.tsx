'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MathTest() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (!submitted && timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  const handleSubmit = () => {
    if (submitted) return;
    setSubmitted(true);
    // Immediately redirect to the result page with no extra delay
    router.push('/result');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <div className="bg-gray-900 shadow-lg rounded-lg p-8 max-w-2xl w-full text-white">
        <h2 className="text-2xl font-bold mb-4">Math Challenge</h2>
        <p className="mb-4">
          Answer the following math questions within <strong>10 seconds</strong>!
        </p>
        <p className="mb-4">
          Time left: {timeLeft} second{timeLeft !== 1 && "s"}
        </p>
        {!submitted ? (
          <>
            <div className="mb-4">
              <p className="mb-2">1. What is 7 + 5?</p>
              <input
                type="text"
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
                className="mt-2 p-2 rounded bg-gray-800 border border-gray-700 w-full"
                placeholder="Your answer"
              />
            </div>
            <div className="mb-4">
              <p className="mb-2">2. What is 3 * 4?</p>
              <input
                type="text"
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
                className="mt-2 p-2 rounded bg-gray-800 border border-gray-700 w-full"
                placeholder="Your answer"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={submitted}
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
            >
              Submit Answers
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

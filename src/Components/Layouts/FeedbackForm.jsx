
import { useState } from 'react';
import Footer from './Footer';

export default function Feedback() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', { text, rating });
    setSubmitted(true);
    setText('');
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 py-16">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">We Value Your Feedback</h1>

        {submitted && (
          <div className="mb-6 p-3 text-green-700 bg-green-100 rounded-md text-center">
            Thank you for sharing your thoughts!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
            <textarea
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows="4"
              placeholder="Let us know what you think..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rate Your Experience</label>
            <div className="flex space-x-2 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={
                    star <= rating
                      ? 'text-yellow-400 transition-colors'
                      : 'text-gray-300 transition-colors'
                  }
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

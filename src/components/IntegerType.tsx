import { useState, useEffect } from "react";
import data from "../assets/integer";
import GameOver from "../pages/GameOver";

const IntegerType = () => {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [lock, setLock] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [correctFirstTry, setCorrectFirstTry] = useState(0);
  const [feedback, setFeedback] = useState(""); // Feedback message

  const question = data[index];

  useEffect(() => {
    if (timeLeft === 0) {
      next();
    }
    if (!lock) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, lock]);

  if (index === data.length) {
    return <GameOver correctFirstTry={correctFirstTry} />;
  }

  const handleSubmit = () => {
    if (!lock) {
      setAttempt((prev) => prev + 1);
      if (parseInt(userAnswer) === question.answer) {
        setLock(true);
        setFeedback("✅ Correct!"); // Show correct message
        if (attempt === 0) {
          setCorrectFirstTry((prev) => prev + 1);
        }
      } else {
        setLock(true); // Lock after wrong answer
        setFeedback(`❌ Wrong! Correct Answer: ${question.answer}`); // Show correct answer
      }
    }
  };

  const next = () => {
    setIndex((prev) => prev + 1);
    setUserAnswer("");
    setLock(false);
    setAttempt(0);
    setTimeLeft(30);
    setFeedback(""); // Reset feedback
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <div className="text-2xl font-semibold text-center mb-6">
        {index + 1}. {question.question}
      </div>
      <div className="text-xl font-bold text-red-400 mb-4">
        Time Left: {timeLeft}s
      </div>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="w-64 p-3 rounded-lg border border-gray-300 bg-white text-black text-xl text-center mb-4"
        disabled={lock}
      />
      <div className="text-lg font-semibold mb-4">
        {feedback && (
          <span
            className={
              feedback.includes("✅") ? "text-green-400" : "text-red-400"
            }
          >
            {feedback}
          </span>
        )}
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-medium hover:bg-blue-600 transition mr-4"
          disabled={lock}
        >
          Submit
        </button>
        {lock && (
          <button
            onClick={next}
            className="mt-4 px-6 py-3 bg-green-500 rounded-lg text-white text-lg font-medium hover:bg-green-600 transition"
          >
            Next
          </button>
        )}
      </div>
      <div className="mt-4 text-gray-400">
        {index + 1} of {data.length} Questions
      </div>  
    </div>
  );
};

export default IntegerType;

import { useState, useEffect } from "react";
import data from "../assets/data";
import GameOver from "../pages/GameOver";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [answer, setAnswer] = useState(true);
  const [attempt, setAttempt] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [correctFirstTry, setCorrectFirstTry] = useState(0);

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

  if (index === 5) {
    return <GameOver correctFirstTry={correctFirstTry} />;
  }

  const tryAgain = () => {
    setLock(false);
    setTimeLeft(30);
  };

  const next = () => {
    if (lock || timeLeft === 0) {
      document.querySelectorAll("li").forEach((li) => {
        li.classList.remove("bg-green-500", "bg-red-900");
        li.style.textDecoration = "none";
      });
      setAttempt(0);
      setIndex((prev) => prev + 1);
      setLock(false);
      setTimeLeft(30);
    }
  };

  const checkAns = (e, ans) => {
    if (!lock) {
      setAttempt((prev) => prev + 1);
      if (question.answer === ans) {
        e.target.classList.add("bg-green-500");
        setAnswer(true);
        setLock(true);
        setTimeLeft(-1); // Stop timer
        if (attempt === 0) {
          setCorrectFirstTry((prev) => prev + 1);
        }
      } else {
        e.target.style.textDecoration = "line-through";
        e.target.classList.add("bg-red-900");
        setAnswer(false);
        setLock(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      <div className="text-2xl font-semibold text-center mb-6">
        {index + 1}. {question.question}
      </div>
      <div className="text-xl font-bold text-red-400 mb-4">
        Time Left: {timeLeft > 0 ? timeLeft : 0}s
      </div>
      <ul className="w-full max-w-md space-y-4">
        {[1, 2, 3, 4].map((opt) => (
          <li
            key={opt}
            onClick={(e) => checkAns(e, opt)}
            className="p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-blue-600 transition"
          >
            {question[`option${opt}`]}
          </li>
        ))}
      </ul>
      {answer && lock && (
        <>
          <div className="text-white text-2xl pt-4">Correct Answer!</div>
          <div className="text-white py-3">Number of Attempts: {attempt}</div>
        </>
      )}
      <div>
        <button
          onClick={next}
          className="mt-6 px-6 py-3 bg-blue-500 rounded-lg cursor-pointer text-white text-lg font-medium hover:bg-blue-600 transition"
        >
          Next
        </button>
        {!answer && lock && (
          <button
            onClick={tryAgain}
            className="mt-6 px-6 py-3 bg-red-600 rounded-lg text-white cursor-pointer text-lg font-medium hover:bg-red-800 transition ml-4"
          >
            Try Again
          </button>
        )}
      </div>
      <div className="mt-4 text-gray-400">{index + 1} of 5 Questions</div>
    </div>
  );
};

export default Quiz;

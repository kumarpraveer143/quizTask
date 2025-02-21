import { useNavigate } from "react-router-dom";

const GameOver = ({ correctFirstTry }) => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Game Over</h1>
      <p className="text-lg">Thanks For Playing!</p>
      <h2 className="text-3xl my-4">
        You have {correctFirstTry} question right!
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer mt-4"
        onClick={() => {
          navigate("/");
        }}
      >
        Play Again!
      </button>
    </div>
  );
};

export default GameOver;

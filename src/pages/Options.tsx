import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-900 text-white">
      <div
        className="flex-1 flex items-center justify-center bg-blue-600 cursor-pointer hover:bg-blue-700 transition h-1/2 sm:h-full"
        onClick={() => navigate("/mcq")}
      >
        <h2 className="text-3xl font-bold">Quiz (MCQ)</h2>
      </div>
      <div
        className="flex-1 flex items-center justify-center bg-green-600 cursor-pointer hover:bg-green-700 transition h-1/2 sm:h-full"
        onClick={() => navigate("/integer")}
      >
        <h2 className="text-3xl font-bold">Integer Type Problem</h2>
      </div>
    </div>
  );
};

export default Options;

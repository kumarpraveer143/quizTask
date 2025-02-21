import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div
        className="w-1/2 flex items-center justify-center bg-blue-600 cursor-pointer hover:bg-blue-700 transition"
        onClick={() => {
          navigate("/mcq");
        }}
      >
        <h2 className="text-3xl font-bold">Quiz (MCQ)</h2>
      </div>
      <div
        className="w-1/2 flex items-center justify-center bg-green-600 cursor-pointer hover:bg-green-700 transition"
        onClick={() => {
          navigate("/integer");
        }}
      >
        <h2 className="text-3xl font-bold">Integer Type Problem</h2>
      </div>
    </div>
  );
};

export default Options;

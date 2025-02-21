import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Options from "./pages/Options";
import Quiz from "./components/Quiz";
import IntegerType from "./components/IntegerType";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Options />} />
        <Route path="/mcq" element={<Quiz />} />
        <Route path="/integer" element={<IntegerType />} />
      </Routes>
    </Router>
  );
}

export default App;

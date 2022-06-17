import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authen from "./routes/Authen";
import Homepage from "./routes/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Authen />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;

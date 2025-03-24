import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapComponent from "./components/MapComponent";
import UploadComponent from "./components/UploadComponent";
import ResultComponent from "./components/ResultComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/upload" element={<UploadComponent />} />
        <Route path="/results" element={<ResultComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

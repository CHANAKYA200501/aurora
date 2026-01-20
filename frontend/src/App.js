import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import Analytics from "./pages/Analytics";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />

      {/* Main page container */}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
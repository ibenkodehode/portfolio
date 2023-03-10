// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Routes
import Home from "./components/routes/Home";
import Error from "./components/routes/Error";

function App() {
  return (
    <div className="app" id="top-page">
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

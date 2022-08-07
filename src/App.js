import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

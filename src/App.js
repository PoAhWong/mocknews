import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./components/newspage/NewsPage";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="news" element={<NewsPage />}>
        <Route path=":category" element={<NewsPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

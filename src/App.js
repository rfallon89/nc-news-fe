import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Article } from "./components/Article";
import { NavBar } from "./components/NavBar";
import { ArticlesContainer } from "./components/InfiniteScroll";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticlesContainer />} />
        <Route path="/topic/:topic" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}
export default App;

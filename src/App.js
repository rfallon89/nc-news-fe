import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Article } from "./components/Article";
import { NavBar } from "./components/NavBar";
import { Login } from "./components/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:topic" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;

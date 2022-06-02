import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import WritePost from "./Pages/WritePost/WritePost";
import SinglePostPage from "./Pages/SinglePost/SinglePostPage";
import DataJson from "./db.json";

function App() {
  localStorage.setItem("posts", JSON.stringify(DataJson));
  return (
    <Router>
      <div className="nav-container">
        <nav>
          <div className="logo">
            <h2>
              Blog With <span>React</span>
            </h2>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/write-post">Write A Post</Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/write-post" element={<WritePost />} />
        <Route
          path="/post/:postId"
          element={<SinglePostPage DataJson={DataJson} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

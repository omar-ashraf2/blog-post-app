import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const beforeParse = localStorage.getItem("posts");
    const posts = JSON.parse(beforeParse);
    if (posts) {
      setPosts(posts);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Home;

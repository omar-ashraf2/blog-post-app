import React from "react";
import "./posts.css";
import Post from "../Post/Post";

function Posts({ posts }) {
  return (
    <div className="posts" id="posts-destination">
      {posts?.map((p, idx) => {
        return <Post post={p} key={idx} />;
      })}
    </div>
  );
}

export default Posts;

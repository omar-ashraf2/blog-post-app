import React, { useEffect, useState } from "react";
import "./singlePostPage.css";
import SinglePost from "../../components/SinglePost/SinglePost";
import Sidebar from "../../components/Sidebar/Sidebar";

function SinglePostPage({ DataJson }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const beforeParse = localStorage.getItem("posts");
  const posts = JSON.parse(beforeParse);

  //handling window Resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);



  return (
    <div className="singlePost">
      <SinglePost singlePost={posts} />
      {windowWidth > 1300 ? <Sidebar className="sidebar" sideData={DataJson} /> : false}
    </div>
  );
}

export default SinglePostPage;

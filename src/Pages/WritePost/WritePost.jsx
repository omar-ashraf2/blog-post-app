import React from "react";
import "./writePost.css";
import WritePostComp from "../../components/WritePostComp/WritePostComp";


function WritePost({ writeData }) {

  return (
    <div className="writePost">
      <WritePostComp addPost={writeData} />
    </div>
  );
}

export default WritePost;

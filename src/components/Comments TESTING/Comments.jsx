import React, { useEffect, useState } from "react";
import "./comments.css";
import SingleComment from "../SingleComment/SingleComment";

function Comments() {
  //fetching comments api
  // const [commentsState, setComments] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/comments?_limit=8")
  //     .then((response) => response.json())
  //     .then((json) => setComments(json))
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  return (
    {/*<div className="commentsContainer">
      {commentsState.map((comment) => {
        return <SingleComment key={comment.id} commentsContent={comment} />;
      })}
    </div>*/}
  );
}

export default Comments;

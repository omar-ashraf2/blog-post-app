import React, { useEffect, useState } from "react";
import "./commentBox.css";
import AppendComment from "../AppendComment/AppendComment";

function CommentBox() {
  // appending options
  const [isOpen, setOpen] = useState(false);
  const handleBtns = () => {
    setOpen(isOpen ? true : true);
  };

  //comments
  const useLocalStorageForComments = (storageKey, fallbackState) => {
    const [commentsLocal, setCommentsLocal] = useState(
      JSON.parse(window.localStorage.getItem(storageKey)) ?? fallbackState
    );
    useEffect(() => {
      window.localStorage.setItem(storageKey, JSON.stringify(commentsLocal));
    }, [commentsLocal, storageKey]);

    return [commentsLocal, setCommentsLocal];
  };

  const [commentsArray, setCommentsArray] = useLocalStorageForComments(
    "comments",
    []
  );
  const [comment, setComment] = useState([]);
  const [id, setID] = useState(1);

  // date convert
  let date = new Date();

  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  //handling comments
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    let commentObj = {
      id,
      comment,
      createdAt: dateMDY,
    };
    setID(id + 1);
    setCommentsArray([...commentsArray, commentObj]);
    setComment("");
    setOpen(false);
  };
  //delete comment
  const deleteComment = (id) => {
    const filteredComments = commentsArray.filter((ele) => {
      return ele.id !== id;
    });
    setCommentsArray(filteredComments);
  };
  //saving comments to local storage
  useEffect(() => {
    window.localStorage.setItem("comments", JSON.stringify(commentsArray));
  }, [commentsArray]);
  // deleting all and clearing LS
  const deleteAll = () => {
    setCommentsArray([]);
    window.localStorage.removeItem("comments");
  };
  return (
    <div>
      <div className="commentsContainer" id="commentsContainer">
        {commentsArray.length > 0 && (
          <button className="deleteAll" onClick={deleteAll}>
            Delete All Comments
          </button>
        )}
        <h2>Leave Us a Comment</h2>
        <form onSubmit={handleCommentSubmit} autoComplete="off">
          <textarea
            placeholder="Add Your Comment"
            required
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            onFocus={handleBtns}
          ></textarea>
          {isOpen && (
            <div className="btn">
              <input type="submit" value="Comment"></input>
              <button
                id="clear"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
      {commentsArray.length > 0 && (
        <AppendComment comments={commentsArray} deleteComment={deleteComment} />
      )}
      {commentsArray.length < 1 && <h2 className="noComments">No Comments</h2>}
    </div>
  );
}

export default CommentBox;

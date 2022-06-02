// import React, { useEffect, useState } from "react";
// import "./singleComment.css";
// import { FaReply } from "react-icons/fa";
// import { AiOutlinePlus } from "react-icons/ai";
// import { AiOutlineMinus } from "react-icons/ai";
// import Reply from "../Reply TESTING/Reply";

// const useLocalStorage = (storageKey, fallbackState) => {
//   const [value, setValue] = useState(
//     JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
//   );
//   useEffect(() => {
//     localStorage.setItem(storageKey, JSON.stringify(value));
//   }, [value, storageKey]);

//   return [value, setValue];
// };

function SingleComment({ commentsContent }) {


  // //handle reply button
  // const [isOpen, setOpen] = useLocalStorage("is-open", false);
  // const handleToggle = () => {
  //   setOpen(!isOpen);
  // };
  // useEffect(() => {
  //   localStorage.setItem("is-open", JSON.stringify(isOpen));
  // }, [isOpen]);


  return (
     {/*<div className="commentsContainerSingle">
      <div className="replyContainer">
        <div className="comments reply-to">
          <form
            onSubmit={handleCommentSubmit}
            autoComplete="off"
            className="commentForm"
          >
            <textarea
              className="commentField"
              name="reply"
              id="reply-content"
              cols="60"
              rows="5"
              placeholder="Comment.."
              required
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            ></textarea>
            <button className="commentBtn" type="submit">
              Comment
            </button>
          </form>
        </div>
      </div>
      </div>*/}
  );
}

export default SingleComment;

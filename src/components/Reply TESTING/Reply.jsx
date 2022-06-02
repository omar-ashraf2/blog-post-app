import React from "react";
import "./reply.css";

function Reply() {
  return (
    <div className="replyContainer">
      <div className="comments reply-to">
        <div className="reply-field">
          <textarea
            name="reply"
            id="reply-content"
            cols="60"
            rows="5"
            placeholder="Reply.."
          ></textarea>
        </div>
        <div className="reply-btn">
          <button>Reply</button>
        </div>
      </div>
    </div>
  );
}

export default Reply;

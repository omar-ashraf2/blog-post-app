import React, { useState } from "react";
import "./appendComment.css";

function AppendComment({ comments, deleteComment }) {

  //switching the edit mode
  const [updateMode, setUpdateMode] = useState(false);
  const handleBtns = () => {
    setUpdateMode(updateMode ? false : true);
  };
  //setting up the main states
  const [commentArr, setCommetnArr] = useState(comments);
  const [editContactId, setEditContactId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    comment: "",
  });
  /*****************************/
  //Still working on it
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      comment: editFormData.comment,
      createdAt: editFormData.createdAt,
    };

    const newContacts = [...commentArr];

    const index = commentArr.findIndex(
      (contact) => contact.id === editContactId
    );

    newContacts[index] = editedContact;

    setCommetnArr(newContacts);
    setEditContactId(null);
  };

  /*****************************/

  return comments.map((c) => (
    <div className="singleCommentContainer" key={c.id}>
      <form autoComplete="off" onSubmit={handleEditFormSubmit}>
        <div className="commentsContainer">
          <span className="dateSpan">Created at {c.createdAt}</span>
          {updateMode ? (
            <div>
              <textarea
                placeholder="Update"
                required
                name="comment"
                value={editFormData.comment}
                onChange={handleEditFormChange}
              ></textarea>

              <div className="btn">
                <button
                  id="clear"
                  className="cancelWhenEditComment"
                  onClick={handleBtns}
                >
                  Cancel
                </button>
              </div>
              <div className="commentBtns onUpdate">
                <input
                  className="updateWhenEditComment"
                  type="submit"
                  value="Save"
                  onClick={handleBtns}
                ></input>
              </div>
            </div>
          ) : (
            <div className="commentBtns onUpdate">
              <p className="commentBody">{c.comment}</p>
              <button
                className="cancelWhenEditComment"
                id="deleteCmt"
                onClick={() => deleteComment(c.id)}
              >
                Delete
              </button>
              <div className="commentBtns onUpdate">
                <input
                  className="updateWhenEditComment"
                  type="submit"
                  value="Update"
                  onClick={handleBtns}
                ></input>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  ));
}

export default AppendComment;

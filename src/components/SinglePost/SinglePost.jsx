import React, { useState, useEffect } from "react";
import "./singlepost.css";
import { useLocation } from "react-router-dom";
import CommentBox from "../CommentBox/CommentBox";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

function SinglePost({ singlePost }) {
  // setting state to change the posts date
  const [posts, setPosts] = useState(singlePost);

  // setting new state to store the new title and body
  const [editFormData, setEditFormData] = useState({
    title: "",
    body: "",
  });

  // setting state to turn of and off the update mode
  const [updateMode, setUpdateMode] = useState(false);

  // the main method to get the post date depending on its ID to fetch the correct date
  const location = useLocation();
  const path = location.pathname.split("/")[2] - 1;

  //Update functions to handle the change of the values and using the editFormData to push a new object 
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleUpdate = (event) => {
    const editedPosts = {
      title: editFormData.title,
      body: editFormData.body,

      id: posts[path].id,
      profilePicture: posts[path].profilePicture,
      postPicture: posts[path].postPicture,
      date: posts[path].date,
      username: posts[path].username,
    };
    const newPosts = [...posts];
    newPosts[path] = editedPosts;
    setPosts(newPosts);
    setUpdateMode(false);
  };

  //Delete 
  const handleDelete = (id) => {
    const filteredPosts = posts.filter((e) => {
      return e.id !== id;
    });
    setPosts(filteredPosts);
  };

  //saving new posts to local storage
  useEffect(() => {
    window.localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);


  return (
    <div className="singlePostContainer">
      {posts[path].postPicture && (
        <img className="postCover" src={posts[path].postPicture} alt="Cover" />
      )}
      <div className="dateTitle">
        <span>{posts[path].date}</span>
        {updateMode ? (
          <input
            className="writeInput writeText postTitleEdit"
            type="text"
            autoFocus
            name="title"
            value={editFormData.title}
            onChange={handleEditFormChange}
          />
        ) : (
          <h2 className="postTitle">{posts[path].title}</h2>
        )}
      </div>
      {/* if update mode is true render the input fields to edit */}
      {updateMode ? (
        <textarea
          type="text"
          className="writeInput writeText editPostBody"
          rows="10"
          cols="60"
          name="body"
          value={editFormData.body}
          onChange={handleEditFormChange}
        ></textarea>
      ) : (
        <p className="postContent">{posts[path].body}</p>
      )}
      <div className="footer">
        <div className="authorInfo">
          <img src={posts[path].profilePicture} alt="authorIcon" />
          <h4>By {posts[path].username}</h4>
        </div>
        <div className="adjustPost">
          {updateMode ? (
            <div>
              <button
                className="updateBtnEdit"
                onClick={(event) => handleUpdate(event, posts)}
              >
                Update
              </button>
              <button
                className="updateBtnEdit"
                onClick={() => setUpdateMode(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button className="editBtn" onClick={() => setUpdateMode(true)}>
              <FaEdit />
            </button>
          )}
          <button
            className="deleteBtn"
            onClick={() => handleDelete(posts[path].id)}
          >
            <AiFillDelete />
          </button>
          <button className="commentBtn">
            <AiOutlineComment />
          </button>
        </div>
      </div>
      {/* Rendering the Comments Box */}
      <CommentBox />
    </div>
  );
}

export default SinglePost;

import React, { useEffect, useReducer, useState } from "react";
import "./WritePostComp.css";
import { AiFillFileAdd } from "react-icons/ai";

function WritePostComp() {
  //posts
  const useLocalStorageForPosts = (storageKey, fallbackState) => {
    const [postsLocal, setPostsLocal] = useState(
      JSON.parse(window.localStorage.getItem(storageKey)) ?? fallbackState
    );
    return [postsLocal, setPostsLocal];
  };
  const [postsArray, setPostsArray] = useLocalStorageForPosts("posts", []);
  const [username, setName] = useState([]);
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  let postPicture =
    "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  let profilePicture = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  // date convert
  let date = new Date();

  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  const [id, setID] = useReducer((x) => x + 1, 9);
  //handling posts
  const handlePostSubmit = (e) => {
    e.preventDefault();
    let postObj = {
      id,
      username,
      title,
      body,
      postPicture,
      profilePicture,
      date: dateMDY,
    };
    setID(id);
    setPostsArray([...postsArray, postObj]);
    setName("");
    setTitle("");
    setBody("");
  };

  //saving posts to local storage
  useEffect(() => {
    window.localStorage.setItem("posts", JSON.stringify(postsArray));
  }, [postsArray]);
  return (
    <div className="writePostContainer">
      <img className="postImg" alt="" src={postPicture} />
      <form
        className="writeForm"
        onSubmit={handlePostSubmit}
        autoComplete="off"
      >
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Name"
            className="writeInput"
            autoFocus={true}
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <div className="writeTitle">
            <label htmlFor="fileInput " style={{ display: "none" }}>
              <AiFillFileAdd className="addFileIcon" />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            ></input>
          </div>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story.."
            type="text"
            className="writeInput writeText"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default WritePostComp;

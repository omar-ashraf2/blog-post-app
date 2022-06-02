import React from "react";
import "./post.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Post({ post }) {
  //received the post array after maping in Posts component to display each post 
  return (
    <div className="postCard">
      <div className="imgData">
        <div className="backgroundImg">
          <img className="postCover" src={post.postPicture} alt="postPicture" />
        </div>
        <div className="publicationDetails">
          <Link className="authorDetails" to={`/post/${post.id}`}>
            <AiOutlineUser className="authorIcon" />
            {post.username}
          </Link>
          <span>
            <AiOutlineCalendar className="authorIcon" />
            {post.date}
          </span>
        </div>
      </div>
      <div className="postData">
        <h1 className="title">{post.title}</h1>
        <p className="description">{post.body}</p>
        <div className="postReadMore">
          <Link to={`/post/${post.id}`}>Read More &rarr;</Link>
        </div>
      </div>
    </div>
  );
}

export default Post;

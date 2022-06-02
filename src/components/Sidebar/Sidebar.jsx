import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Sidebar({ sideData }) {
  // const [sidePosts, setSideData] = useState([]);

  // useEffect(() => {
  //   const getSideData = async () => {
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //     );
  //     const response = await res.json();
  //     setSideData(response);
  //   };
  //   getSideData();
  // }, []);
  // console.log(sidePosts);
  return (
    <div className="sidebar" key={sideData.id}>
      <div className="sidebarTitle">
        <h2>You May Also Like</h2>
      </div>
      {sideData.map((s) => {
        return (
          <div className="sidebarItems" key={s.id}>
            <div className="sidebarList">
              <div className="sidebarListItem">
                <div className="sidebarImg">
                  <img src={s.postPicture} alt="rc" />
                </div>
                <div className="sidebarText">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <div className="postReadMore">
                    <Link to={`/post/${s.id}`}>Read More &rarr;</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="sidebarTitle followUs">
        <h2>Follow Us</h2>
      </div>
      <div className="socialIcons">
        <BsFacebook className="socialIcon" />
        <BsLinkedin className="socialIcon" />
        <BsTwitter className="socialIcon" />
        <BsInstagram className="socialIcon" />
      </div>
    </div>
  );
}

export default Sidebar;

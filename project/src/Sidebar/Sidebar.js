import { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(true);

  const handleClickMenu = () => {
    setIsShowSideBar(!isShowSideBar);
    setIsShowMenu(!isShowMenu);
  };
  const handleClose = () => {
    setIsShowSideBar(!isShowSideBar);
    setIsShowMenu(!isShowMenu);
  };
  return (
    <div className="sidebar">
      <i
        className={isShowMenu ? "fa-solid fa-bars" : "fa-solid fa-bars none"}
        onClick={handleClickMenu}
      ></i>
      <div className={isShowSideBar ? "nav display-block" : "nav"}>
        <ul>
          <li className="li-icon">
            <i class="fa-solid fa-xmark" onClick={handleClose}></i>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service"> Services</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;

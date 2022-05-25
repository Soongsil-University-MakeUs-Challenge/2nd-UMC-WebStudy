import React from "react";
import ukovIcon from "../assets/ukov-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
function navBar() {
  return (
    <div className="topBar">
      <div className="logoAndMenu">
        <img className="logo" src={ukovIcon} alt="UKOV-logo" />
        <ul className="menuContainer">
          <li className="menuList">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              홈
            </Link>
          </li>
          <li className="menuList">
            <Link
              to="/program"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              프로그램
            </Link>
          </li>
          <li className="menuList">
            <Link
              to="/recruit"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              리크루팅
            </Link>
          </li>
        </ul>
        <GiHamburgerMenu className="hambergerMenu" color="#6d6d6d" size="30" />
      </div>
    </div>
  );
}
export default navBar;

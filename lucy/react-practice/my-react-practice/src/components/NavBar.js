import React from "react";
import ukovIcon from "../assets/ukov-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";

function navBar() {
  return (
    <div className="topBar">
      <div className="logoAndMenu">
        <img className="logo" src={ukovIcon} alt="UKOV-logo" />
        <ul className="menuContainer">
          <li className="menuList">홈</li>
          <li className="menuList">프로그램</li>
          <li className="menuList">리쿠르팅</li>
        </ul>
        <GiHamburgerMenu className="hambergerMenu" color="#6d6d6d" size="30" />
      </div>
    </div>
  );
}
export default navBar;

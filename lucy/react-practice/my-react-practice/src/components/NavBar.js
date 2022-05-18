import React from "react";
import ukovIcon from "../assets/ukov-icon.png";

function navBar() {
  return (
    <div>
      {/* 상단바 - 로고와 메뉴 이동  */}
      <div className="topBar">
        <div className="logoAndMenu">
          <img className="logo" src={ukovIcon} alt="UKOV-logo" />
          <ul className="menuContainer">
            <li className="menuList">홈</li>
            <li className="menuList">프로그램</li>
            <li className="menuList">리쿠르팅</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default navBar;

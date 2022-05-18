import React from "react";
import Ukov from "../assets/ukov.png";

function Navbar() {
  return (
    <nav>
      <div className="nav_logo">
        <img src={Ukov} alt="Ukov" id="nav_logo" />
      </div>
      <div className="nav_button_list">
        <span className="nav_button">홈</span>
        <span className="nav_button">프로그램</span>
        <span className="nav_button">리쿠르팅</span>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import Ukov from "../assets/ukov.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav">
        <div className="nav_logo">
          <img src={Ukov} alt="Ukov" id="nav_logo" />
        </div>
        <div className="nav_button_list">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="nav_button">소개</span>
          </Link>
          <Link to="/tommy" style={{ textDecoration: "none", color: "black" }}>
            <span className="nav_button">후기</span>
          </Link>
          <Link to="umc_web" style={{ textDecoration: "none", color: "black" }}>
            <span className="nav_button">프로그램 및 기타</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

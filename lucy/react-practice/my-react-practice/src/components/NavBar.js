import ukovIcon from "../assets/ukov-icon.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar-container">
        <img className="logo navBar-items" src={ukovIcon} alt="UKOV" />
        <ul className="navMenu-container navBar-items">
          <li className="navMenu-items">홈</li>
          <li className="navMenu-items">프로그램</li>
          <li className="navMenu-items">리쿠르팅</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

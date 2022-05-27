import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => (
  <div className="homeBox">
    <div className="homeText">Welcome SSUMC!</div>
    <div className="homeInput">
      <Link to="/login">
        <button className="homeLogin">로그인</button>
      </Link>
      <Link to="/signup">
        <button className="homeSignUp">회원가입</button>
      </Link>
    </div>
  </div>
);

export default Home;

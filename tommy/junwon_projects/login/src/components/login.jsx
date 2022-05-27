import React from "react";

const Login = (props) => (
  <div className="loginBox">
    <div className="loginTitle">로그인</div>
    <div className="login">
      <form>
        <input type="text" name="id" placeholder="아이디" />
        <br />
        <input type="password" name="password" placeholder="비밀번호" />
        <br />
        <br />
        <br />
        <br />
        <input
          className="loginSubmit"
          type="submit"
          name="submit"
          value="LogIn"
        />
      </form>
    </div>
  </div>
);

export default Login;

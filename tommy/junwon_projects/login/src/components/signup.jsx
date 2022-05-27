import React from "react";

const Signup = (props) => (
  <div className="signUpBox">
    <div className="signUpTitle">회원가입</div>
    <div className="signUp">
      <form>
        <input type="text" name="name" placeholder="이름" />
        <br />
        <input type="text" name="id" placeholder="아이디" />
        <br />
        <input type="password" name="password" placeholder="비밀번호" />
        <br />
        <input type="password" name="password" placeholder="비밀번호 확인" />
        <br />
        <br />
        <br />
        <input
          className="signUpSubmit"
          type="submit"
          name="submit"
          value="Complete"
        />
      </form>
    </div>
  </div>
);

export default Signup;

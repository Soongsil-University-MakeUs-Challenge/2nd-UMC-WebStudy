import React from "react";
import softBank from "../assets/soft-bank.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerBox">
          <div className="contact">Contact Info</div>
          <div className="contactInfo">
            공식 메일 : danjang@ukov.kr<br></br>
            카카오톡 플러스 친구 : UKOV 대학생벤처기사단
          </div>
          <div className="copyRight">
            Copyright©2020 ukov. All right reserved
          </div>
          <img className="softBank" src={softBank} alt="softBank" />
        </div>
      </div>
    </>
  );
}
export default Footer;

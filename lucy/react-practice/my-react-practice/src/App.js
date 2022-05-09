import React from "react";
import ukovIcon from "./assets/ukov-icon.png";
import softBank from "./assets/soft-bank.png";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div>
      <div className="topBar">
        <div className="logoAndMenu">
          <img className="logo" src={ukovIcon} alt="UKOV-logo" />
          <ul>
            <li>리쿠르팅</li>
            <li>프로그램</li>
            <li>홈</li>
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="intro">
          우리는 대학생<br></br>
          벤처기사단입니다.
        </div>
        <div className="subIntro">
          UKOV는 Undergraduated Knights of Venture의 약자로, <br></br>
          소프트뱅크벤처스의 후원 아래 엄선된 스타트업의 일을 돕고 함께 성장해
          나가는 대외활동입니다.
        </div>
        <div className="mainInfo">
          <div className="mainInfoTitle">UKOV 미션</div>
          <p className="mainInfoSubTitle">
            더 많은 사람들이 스타트업 생태계로 Soft-landing 하는 것
          </p>
          <p className="mainInfoParagraph">
            스타트업 인턴십을 통해 스타트업의 현장을 피부로 느끼고 <br></br>
            개인에게 맞는 일을 탐색합니다. <br></br>
            또한 동기들과의 협업 프로젝트를 통해 업무 협력성을 기르고<br></br>
            세상을 보는 시야를 확장합니다.
          </p>
        </div>
        <div className="mainInfo">
          <div className="mainInfoTitle">UKOV 비전</div>
          <p className="mainInfoSubTitle">
            스타트업을 통해 세상에 더 많은 긍정적 영향을 미치는 것
          </p>
          <p className="mainInfoParagraph">
            성공적인 스타트업 생태계 구성원이 되는 성장의 경험을 <br></br>
            제공해주는 것을 목표로 합니다.<br></br>그 성장 싸이클을 통해 양질의
            인재로 거듭나 <br></br>
            세상을 바꾸는 사람들이 되는 것을 꿈꿉니다.
          </p>
        </div>
      </div>
      <div className="mainBlack">
        <div className="mainBlackTitle">11년의 여정</div>
        <div className="mainBlackInfo">
          우리는 주체적으로 배우고 변화에 도전하면서 <br></br>
          스타트업 생태계를 위한 인재를 배출해내고 있습니다.
        </div>
        <div className="recordBoxContainer">
          <div className="recordBox">
            <div className="recordBoxBig">11년</div>
            <div className="recordBoxSmall">역사</div>
          </div>
          <div className="recordBox">
            <div className="slash">/</div>
          </div>
          <div className="recordBox">
            <div className="recordBoxBig">190명</div>
            <div className="recordBoxSmall">누적멤버</div>
          </div>
          <div className="recordBox">
            <div className="slash">/</div>
          </div>
          <div className="recordBox">
            <div className="recordBoxBig">23건</div>
            <div className="recordBoxSmall">미니프로젝트</div>
          </div>
        </div>
      </div>
      dd
      {/* <div className="reviewContainer">
        <div className="reviewTitle">UKVO 후기</div>
        <div className="reviewSubtitle">더 많은 후기 보러가기</div>
      </div> */}
      <div className="mainBlack">
        <div className="mainBlackTitle">BEGIN YOUR JOURNEY TO START-UP!</div>
        <div className="mainBlackInfo">
          1월 1일부터 11월 15일까지 제 23기 UKOV 단원을 모집합니다.<br></br>
          주체적으로 배우고 변화에 도전하면서 스타트업 생태계의 인재가 될 당신을
          기다립니다.
        </div>
      </div>
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
    </div>
  );
}

export default App;

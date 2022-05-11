import React from "react";
import ukovIcon from "./assets/ukov-icon.png";
import softBank from "./assets/soft-bank.png";
import "./index.css";
import "./App.css";
import { AiOutlineRightCircle } from "react-icons/ai";
import { AiOutlineLeftCircle } from "react-icons/ai";
// import daangn from "./assets/company.png";

function App() {
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
      {/* 메인 - 홈페이지에서 제일 위에 보이는 (흰)부분 main이라 칭함 */}
      <div className="main">
        {/* intro - 메인에 가장 크게 보이는 소개 문구 */}
        <div className="intro">
          우리는 대학생<br></br>
          벤처기사단입니다.
        </div>
        <div className="subIntro">
          UKOV는 Undergraduated Knights of Venture의 약자로, <br></br>
          소프트뱅크벤처스의 후원 아래 엄선된 스타트업의 일을 돕고 함께 성장해
          나가는 대외활동입니다.
        </div>

        {/* mainInfo - 메인에 보이는 정보 */}
        <div className="mainInfoContainer">
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
              제공해주는 것을 목표로 합니다.<br></br>그 성장 싸이클을 통해
              양질의 인재로 거듭나 <br></br>
              세상을 바꾸는 사람들이 되는 것을 꿈꿉니다.
            </p>
          </div>
        </div>
      </div>
      {/* mainBlack - 어두운 배경색 */}
      <div className="mainBlack">
        <div className="mainBlackTitle">11년의 여정</div>
        <div className="mainBlackInfo">
          우리는 주체적으로 배우고 변화에 도전하면서 <br></br>
          스타트업 생태계를 위한 인재를 배출해내고 있습니다.
        </div>
        {/* recordBox - 역사, 누적멤버, 미니프로젝트 갯수 기록*/}
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
      <div className="subInfo">
        <div className="reviewContainer">
          <div className="reviewTitle">UKVO 후기</div>
          <div className="reviewSubtitle">더 많은 후기 보러가기</div>

          <div className="reviewContentsContainer">
            <div className="reviewContent">
              <div className="reviewContentImg"> </div>
              <div className="reviewContentSmallTitle">UKOV 22기</div>
              <div className="reviewContentBigTitle">
                유일한 졸업생 단원이 전하는 후기 글이 넘치면 이렇게 줄여서…
              </div>
            </div>

            <div className="reviewContent">
              <div className="reviewContentImg"> </div>
              <div className="reviewContentSmallTitle">UKOV 22기</div>
              <div className="reviewContentBigTitle">
                유코브 선배들이 알려주는 유코브 합격꿀팁!
              </div>
            </div>

            <div className="reviewContent">
              <div className="reviewContentImg"> </div>
              <div className="reviewContentSmallTitle">UKOV 22기</div>
              <div className="reviewContentBigTitle">
                유코브 선배들이 알려주는 유코브 합격꿀팁!
              </div>
            </div>
          </div>

          <div className="reviewArrows">
            <AiOutlineLeftCircle
              className="reviewLeftArrow"
              size="34"
              color="#d6d6d6"
            />
            <AiOutlineRightCircle
              className="reviewRightArrow"
              size="34"
              color="#868686"
            />
          </div>
        </div>
        <div className="programContainer">
          <div className="programTitle">프로그램</div>
          <div className="programSubtitle">
            유코브 단원이 되면 다음과 같은 프로그램을 함께합니다.
          </div>
          <div className="programContentsContainer">
            <div className="programContent">
              <img
                className="programContentImg"
                src="https://ukov.co.kr/static/media/first.f121e05d.jpg"
                alt="programImg1"
              ></img>
            </div>

            <div className="programContent">
              <img
                className="programContentImg"
                src="https://ukov.co.kr/static/media/second.58a90b72.jpg"
                alt="programImg2"
              ></img>
            </div>

            <div className="programContent">
              <img
                className="programContentImg"
                src="https://ukov.co.kr/static/media/third.15eb8b88.jpg"
                alt="programImg3"
              ></img>
            </div>
          </div>
        </div>

        <div className="partnerCompanyContainer">
          <div className="partnerCompanyTitle">다양한 파트너사</div>
          <div className="partnerCompanySubtitle">
            세상에 큰 영향을 미치고 있는 <br></br>
            다양한 스타트업들과 함께 해왔습니다.
          </div>
          <div className="PCLogoContainer">
            <div className="PCLogo">1</div>
            <div className="PCLogo">2</div>
            <div className="PCLogo">3</div>
            <div className="PCLogo">4</div>

            <div className="PCLogo">5</div>
            <div className="PCLogo">6</div>
            <div className="PCLogo">7</div>
            <div className="PCLogo">8</div>

            <div className="PCLogo">9</div>
            <div className="PCLogo">10</div>
            <div className="PCLogo">11</div>
            <div className="PCLogo">12</div>

            <div className="PCLogo">13</div>
            <div className="PCLogo">14</div>
            <div className="PCLogo">15</div>
            <div className="PCLogo">16</div>
          </div>
        </div>
      </div>
      <div className="footerBlack">
        <div className="footerBlackTitle">BEGIN YOUR JOURNEY TO START-UP!</div>
        <div className="footerBlackInfo">
          1월 1일부터 11월 15일까지 제 23기 UKOV 단원을 모집합니다.<br></br>
          주체적으로 배우고 변화에 도전하면서 스타트업 생태계의 인재가 될 당신을
          기다립니다.
        </div>
        <button className="footerBlackBnt">지원 정보 보러가기</button>
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

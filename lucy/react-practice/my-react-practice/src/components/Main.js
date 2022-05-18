import React from "react";

function Main() {
  const mainInfoText = [
    {
      title: "UKOV 미션",
      subTitle: "더 많은 사람들이 스타트업 생태계로 Soft-landing 하는 것",
      text: "스타트업 인턴십을 통해 스타트업의 현장을 피부로 느끼고 개인에게 맞는 일을 탐색합니다. 또한 동기들과의 협업 프로젝트를 통해 업무 협력성을 기르고 세상을 보는 시야를 확장합니다.",
    },
    {
      title: "UKOV 비전",
      subTitle: "스타트업을 통해 세상에 더 많은 긍정적 영향을 미치는 것",
      text: "성공적인 스타트업 생태계 구성원이 되는 성장의 경험을 제공해주는 것을 목표로 합니다.그 성장 싸이클을 통해 양질의 인재로 거듭나 세상을 바꾸는 사람들이 되는 것을 꿈꿉니다.",
    },
  ];
  return (
    <div>
      {/* 메인 - 홈페이지에서 제일 위에 보이는 (흰)부분 main이라 칭함 */}
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

        {/* mainInfo - 메인에 보이는 정보 */}
        <div className="mainInfoContainer">
          {mainInfoText.map((information) => (
            <div className="mainInfo">
              <div className="mainInfoTitle">{information.title}</div>
              <p className="mainInfoSubTitle">{information.subTitle}</p>
              <p className="mainInfoParagraph">{information.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Main;

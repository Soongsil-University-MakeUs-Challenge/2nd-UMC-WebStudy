import { AiOutlineRightCircle } from "react-icons/ai";
import { AiOutlineLeftCircle } from "react-icons/ai";
import React from "react";

function SubInfo() {
  const reviews = [
    {
      reviewImg: " ",
      reviewSmall: "UKOV 22기",
      reviewBig: "유일한 졸업생 단원이 전하는 후기 글이 넘치면 이렇게 줄여서…",
    },
    {
      reviewImg: " ",
      reviewSmall: "UKOV 22기",
      reviewBig: "유코브 선배들이 알려주는 유코브 합격꿀팁!",
    },
    {
      reviewImg: " ",
      reviewSmall: "UKOV 22기",
      reviewBig: "유코브 선배들이 알려주는 유코브 합격꿀팁!",
    },
  ];
  const programs = [
    {
      src: "https://ukov.co.kr/static/media/first.f121e05d.jpg",
      alt: "programImg1",
    },
    {
      src: "https://ukov.co.kr/static/media/second.58a90b72.jpg",
      alt: "programImg2",
    },
    {
      src: "https://ukov.co.kr/static/media/third.15eb8b88.jpg",
      alt: "programImg3",
    },
  ];
  const partnerCompanyList = [
    { key: 1, name: 1 },
    { key: 2, name: 2 },
    { key: 3, name: 3 },
    { key: 4, name: 4 },
    { key: 5, name: 5 },
    { key: 6, name: 6 },
    { key: 7, name: 7 },
    { key: 8, name: 8 },
    { key: 9, name: 9 },
    { key: 10, name: 10 },
    { key: 11, name: 11 },
    { key: 12, name: 12 },
    { key: 13, name: 13 },
    { key: 14, name: 14 },
    { key: 15, name: 15 },
    { key: 16, name: 16 },
  ];

  return (
    <div className="subInfo">
      <div className="reviewContainer">
        <div className="reviewTitle">UKVO 후기</div>
        <div className="reviewSubtitle">더 많은 후기 보러가기</div>

        <div className="reviewContentsContainer">
          {reviews.map((review) => (
            <div className="reviewContent">
              <div className="reviewContentImg">{review.reviewImg}</div>
              <div className="reviewContentSmallTitle">
                {review.reviewSmall}
              </div>
              <div className="reviewContentBigTitle">{review.reviewBig}</div>
            </div>
          ))}
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
          {programs.map((program) => (
            <div className="programContent">
              <img
                className="programContentImg"
                src={program.src}
                alt={program.alt}
              ></img>
            </div>
          ))}
        </div>
      </div>

      <div className="partnerCompanyContainer">
        <div className="partnerCompanyTitle">다양한 파트너사</div>
        <div className="partnerCompanySubtitle">
          세상에 큰 영향을 미치고 있는 <br></br>
          다양한 스타트업들과 함께 해왔습니다.
        </div>
        <div className="PCLogoContainer">
          {partnerCompanyList.map((partnerCompany) => (
            <div key={partnerCompany.key} className="PCLogo">
              {partnerCompany.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SubInfo;

import React from "react";

function MainBlack() {
  return (
    <>
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
    </>
  );
}
export default MainBlack;

import React, { Component } from "react";

class Trip extends Component {
  render() {
    return (
      <>
        <div className="trip">
          <div className="trip_title">
            <span>11년의 여정</span>
          </div>
          <div className="trip_mini_title">
            <p>우리는 주체적으로 배우고 변화에 도전하면서</p>
            <p>스타트업 생태계를 위한 인재를 배출해내고 있습니다.</p>
          </div>
          <div className="trip_count">
            <div className="trip_count_box">
              <p className="trip_count_1">11년</p>
              <p className="trip_count_2">역사</p>
            </div>
            <div className="trip_count_slash"></div>
            <div className="trip_count_box">
              <p className="trip_count_1">190명</p>
              <p className="trip_count_2">누적 멤버</p>
            </div>
            <div className="trip_count_slash"></div>
            <div className="trip_count_box">
              <p className="trip_count_1">23건</p>
              <p className="trip_count_2">미니프로젝트</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Trip;

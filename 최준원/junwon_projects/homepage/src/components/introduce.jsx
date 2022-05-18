import React from "react";

function Introduce() {
  return (
    <>
      <div className="introduce_title_list">
        <p className="introduce_title 1">우리는 대학생</p>
        <p className="introduce_title 2">벤처기사단입니다.</p>
      </div>
      <div className="introduce_mini_title_list">
        <p className="introduce_mini_title 1">
          UKOV는 Undergraduated Knight of Ventures의 약자로,
        </p>
        <p className="introduce_mini_title 2">
          소프트뱅크 벤처스의 후원 아래 엄선된 스타트업의 일을 돕고 함께 성장해
          나가는 대외활동입니다.
        </p>
      </div>
      <div className="introduce_mission_vision">
        <div className="introduce_mission">
          <span className="introduce_mission_vision_title">UKOV 미션</span>
          <p className="introduce_mission_vision_content_1">
            더 많은 사람들이 스타트업 생태계로 Soft-landing 하는 것
          </p>
          <p className="introduce_mission_vision_content_2">
            스타트업 인턴쉽을 통해 스타트업 현장을 피부로 느끼고 개인에게 맞는
            일을 탐색합니다.
          </p>
          <p className="introduce_mission_vision_content_2">
            또한 동기들과의 협업 프로젝트를 통해 업무협력성을 기르고 세상을 보는
            시야를 확장합니다.
          </p>
        </div>
        <div className="introduce_vision">
          <span className="introduce_mission_vision_title">UKOV 비전</span>
          <p className="introduce_mission_vision_content_1">
            스타트업을 통해 세상에 더 많은 긍정적 영향을 미치는 것
          </p>
          <p className="introduce_mission_vision_content_2">
            성공적인 스타트업 생태계 구성원이 되는 성장의 경험을 제공해주는 것을
            목표로 합니다.
          </p>
          <p className="introduce_mission_vision_content_2">
            그 성장 싸이클을 통해 양질의 인재로 거듭나 세상을 바꾸는 사람들이
            되는 것을 꿈꿉니다.
          </p>
        </div>
      </div>
    </>
  );
}

export default Introduce;

// class Introduce extends Component {
//   render() {
//     return (
//       <>
//         <div className="introduce_title_list">
//           <p className="introduce_title 1">우리는 대학생</p>
//           <p className="introduce_title 2">벤처기사단입니다.</p>
//         </div>
//         <div className="introduce_mini_title_list">
//           <p className="introduce_mini_title 1">
//             UKOV는 Undergraduated Knight of Ventures의 약자로,
//           </p>
//           <p className="introduce_mini_title 2">
//             소프트뱅크 벤처스의 후원 아래 엄선된 스타트업의 일을 돕고 함께
//             성장해 나가는 대외활동입니다.
//           </p>
//         </div>
//         <div className="introduce_mission_vision">
//           <div className="introduce_mission">
//             <span className="introduce_mission_vision_title">UKOV 미션</span>
//             <p className="introduce_mission_vision_content_1">
//               더 많은 사람들이 스타트업 생태계로 Soft-landing 하는 것
//             </p>
//             <p className="introduce_mission_vision_content_2">
//               스타트업 인턴쉽을 통해 스타트업 현장을 피부로 느끼고 개인에게 맞는
//               일을 탐색합니다.
//             </p>
//             <p className="introduce_mission_vision_content_2">
//               또한 동기들과의 협업 프로젝트를 통해 업무협력성을 기르고 세상을
//               보는 시야를 확장합니다.
//             </p>
//           </div>
//           <div className="introduce_vision">
//             <span className="introduce_mission_vision_title">UKOV 비전</span>
//             <p className="introduce_mission_vision_content_1">
//               스타트업을 통해 세상에 더 많은 긍정적 영향을 미치는 것
//             </p>
//             <p className="introduce_mission_vision_content_2">
//               성공적인 스타트업 생태계 구성원이 되는 성장의 경험을 제공해주는
//               것을 목표로 합니다.
//             </p>
//             <p className="introduce_mission_vision_content_2">
//               그 성장 싸이클을 통해 양질의 인재로 거듭나 세상을 바꾸는 사람들이
//               되는 것을 꿈꿉니다.
//             </p>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Introduce;

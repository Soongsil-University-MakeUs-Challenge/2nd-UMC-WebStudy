import React, { Component } from "react";
import Partner from "./partner";

function Remainder() {
  const partners = [
    { partner: "img/group-4.png" },
    { partner: "img/group-11.png" },
    { partner: "img/group-14.png" },
    { partner: "img/group-21.png" },
    { partner: "img/group-5.png" },
    { partner: "img/group-12.png" },
    { partner: "img/group-15.png" },
    { partner: "img/group-20.png" },
    { partner: "img/group-8.png" },
    { partner: "img/group-13.png" },
    { partner: "img/group-16.png" },
    { partner: "img/group-18.png" },
    { partner: "img/group-9.png" },
    { partner: "img/group-10.png" },
    { partner: "img/group-17.png" },
  ];
  return (
    <>
      <div className="remainder_title">프로그램</div>
      <div className="remainder_mini_title">
        유코브 단원이 되면 다음과 같은 프로그램을 함께합니다.
      </div>
      <div className="remainder_programs">
        <div className="remainder_program 1">
          <p className="remainder_program_title">스타트업 인턴쉽</p>
          <p className="remainder_program_content">
            소프트뱅크벤처스가 투자한 엄선된 스타트업에서 인턴쉽을 수행합니다.
          </p>
        </div>
        <div className="remainder_program 2">
          <p className="remainder_program_title">미니 스타트업</p>
        </div>
        <div className="remainder_program 3">
          <p className="remainder_program_title">네트워킹</p>
        </div>
      </div>
      <div className="remainder_partner_title">다양한 파트너사</div>
      <div className="remainder_partner_mini_title">
        <p>세상에 큰 영향을 미치고 있는</p>
        <p>다양한 스타트업들과 함께 하였습니다.</p>
      </div>
      <div className="remainder_partners">
        {partners.map((partner) => (
          <Partner partner={partner} />
        ))}
      </div>
      <div className="remainder_apply">
        <div className="remainder_apply_title">
          <span>BEGIN YOUR JOURNEY TO START-UP!</span>
        </div>
        <div className="remainder_apply_mini_title">
          <p>1월 1일부터 11월 15일까지 제 23기 UKOV 단원을 모집합니다.</p>
          <p>
            주체적으로 배우고 변화에 도전하면서 스타트업 생태계의 인재가 될
            당신을 기다립니다.
          </p>
        </div>
        <div className="remainder_apply_button">지원 정보 보러가기</div>
      </div>
      <div className="remainder_credit">
        <div className="remainder_credit_info">Contact Info</div>
        <div className="remainder_credit_contact">
          <p>공식 메일 : danjang@ukov.kr</p>
          <p>카카오톡 플러스 친구 : UKOV 대학생벤처기사단</p>
        </div>
        <div className="remainder_credit_copyright">
          Copyright©2020 ukov. All right reserved
        </div>
      </div>
    </>
  );
}

export default Remainder;

// class Remainder extends Component {
//   state = {
//     partners: [
//       { partner: "img/group-4.png" },
//       { partner: "img/group-11.png" },
//       { partner: "img/group-14.png" },
//       { partner: "img/group-21.png" },
//       { partner: "img/group-5.png" },
//       { partner: "img/group-12.png" },
//       { partner: "img/group-15.png" },
//       { partner: "img/group-20.png" },
//       { partner: "img/group-8.png" },
//       { partner: "img/group-13.png" },
//       { partner: "img/group-16.png" },
//       { partner: "img/group-18.png" },
//       { partner: "img/group-9.png" },
//       { partner: "img/group-10.png" },
//       { partner: "img/group-17.png" },
//     ],
//   };
//   render() {
//     return (
//       <>
//         <div className="remainder_title">프로그램</div>
//         <div className="remainder_mini_title">
//           유코브 단원이 되면 다음과 같은 프로그램을 함께합니다.
//         </div>
//         <div className="remainder_programs">
//           <div className="remainder_program 1">
//             <p className="remainder_program_title">스타트업 인턴쉽</p>
//             <p className="remainder_program_content">
//               소프트뱅크벤처스가 투자한 엄선된 스타트업에서 인턴쉽을 수행합니다.
//             </p>
//           </div>
//           <div className="remainder_program 2">
//             <p className="remainder_program_title">미니 스타트업</p>
//           </div>
//           <div className="remainder_program 3">
//             <p className="remainder_program_title">네트워킹</p>
//           </div>
//         </div>
//         <div className="remainder_partner_title">다양한 파트너사</div>
//         <div className="remainder_partner_mini_title">
//           <p>세상에 큰 영향을 미치고 있는</p>
//           <p>다양한 스타트업들과 함께 하였습니다.</p>
//         </div>
//         <div className="remainder_partners">
//           {this.state.partners.map((partner) => (
//             <Partner partner={partner} />
//           ))}
//         </div>
//         <div className="remainder_apply">
//           <div className="remainder_apply_title">
//             <span>BEGIN YOUR JOURNEY TO START-UP!</span>
//           </div>
//           <div className="remainder_apply_mini_title">
//             <p>1월 1일부터 11월 15일까지 제 23기 UKOV 단원을 모집합니다.</p>
//             <p>
//               주체적으로 배우고 변화에 도전하면서 스타트업 생태계의 인재가 될
//               당신을 기다립니다.
//             </p>
//           </div>
//           <div className="remainder_apply_button">지원 정보 보러가기</div>
//         </div>
//         <div className="remainder_credit">
//           <div className="remainder_credit_info">Contact Info</div>
//           <div className="remainder_credit_contact">
//             <p>공식 메일 : danjang@ukov.kr</p>
//             <p>카카오톡 플러스 친구 : UKOV 대학생벤처기사단</p>
//           </div>
//           <div className="remainder_credit_copyright">
//             Copyright©2020 ukov. All right reserved
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Remainder;

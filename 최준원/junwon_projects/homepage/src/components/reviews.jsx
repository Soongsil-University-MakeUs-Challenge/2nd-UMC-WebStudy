import React from "react";
import Review from "./review";

function Reviews() {
  const reviews = [
    {
      review: "유일한 졸업생 단원이 전하는 후기 글이 넘치면 이렇게 줄여서 ...",
    },
    { review: "유코브 선배들이 알려주는 유코브 합격꿀팁!" },
    { review: "유코브 선배들이 알려주는 유코브 합격꿀팁!" },
  ];
  return (
    <>
      <div className="reviews_title">UKOV 후기</div>
      <div className="reviews_mini_title">더 많은 후기 보러가기</div>
      <div className="reviews_all">
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </div>
    </>
  );
}

export default Reviews;

// class Reviews extends Component {
//   state = {
//     reviews: [
//       {
//         review:
//           "유일한 졸업생 단원이 전하는 후기 글이 넘치면 이렇게 줄여서 ...",
//       },
//       { review: "유코브 선배들이 알려주는 유코브 합격꿀팁!" },
//       { review: "유코브 선배들이 알려주는 유코브 합격꿀팁!" },
//     ],
//   };
//   render() {
//     return (
//       <>
//         <div className="reviews_title">UKOV 후기</div>
//         <div className="reviews_mini_title">더 많은 후기 보러가기</div>
//         <div className="reviews_all">
//           {this.state.reviews.map((review) => (
//             <Review review={review} />
//           ))}
//         </div>
//       </>
//     );
//   }
// }

// export default Reviews;

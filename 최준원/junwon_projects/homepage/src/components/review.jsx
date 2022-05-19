import React, { Component } from "react";

// function Review(props) {
//   return (
//     <div className="review">
//       {/* <div className="review_box"></div> */}
//       <a href={`https://www.youtube.com/watch?v=${props.review.id}`}>
//         <div class="review_box">
//           <img
//             class="review_img_box"
//             src={props.review.snippet.thumbnails?.high.url}
//           />
//         </div>
//       </a>
//       <div className="review_box_title">UKOV 22기</div>
//       <div className="review_box_content">{props.review.snippet.title}</div>
//     </div>
//   );
// }

// export default Review;

function Review(props) {
  return (
    <div className="review">
      <div className="review_box"></div>
      <div className="review_box_title">UKOV 22기</div>
      <div className="review_box_content">{props.review}</div>
    </div>
  );
}

export default Review;

// class Review extends Component {
//   render() {
//     return (
//       <div className="review">
//         {/* <div className="review_box"></div> */}
//         <a href={`https://www.youtube.com/watch?v=${this.props.review.id}`}>
//           <div class="review_box">
//             <img
//               class="review_img_box"
//               src={this.props.review.snippet.thumbnails?.high.url}
//             />
//           </div>
//         </a>
//         <div className="review_box_title">UKOV 22기</div>
//         <div className="review_box_content">
//           {this.props.review.snippet.title}
//         </div>
//       </div>
//     );
//   }
// }

// export default Review;

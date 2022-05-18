import React, { Component } from "react";

// function Review(props) {
//   const review = props.review;
//   return (
//     <div className="review">
//       <div className="review_box"></div>
//       <div className="review_box_title">UKOV 22기</div>
//       <div className="review_box_content">{review}</div>
//     </div>
//   );
// }

// export default Review;

class Review extends Component {
  render() {
    const { review } = this.props.review;
    console.log(this.props);
    return (
      <div className="review">
        <div className="review_box"></div>
        <div className="review_box_title">UKOV 22기</div>
        <div className="review_box_content">{review}</div>
      </div>
    );
  }
}

export default Review;

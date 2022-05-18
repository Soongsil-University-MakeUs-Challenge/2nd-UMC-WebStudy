import React, { useEffect, useState } from "react";
import Review from "./review";
import axios from "axios";

function Reviews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=3&regionCode=kr&key=AIzaSyD-fIs7jzjFUiX4LV9uECojzUTwIUS1gQo"
      )
      .then((res) => setData(res.data.items));
  }, []);

  return (
    <>
      <div className="reviews_title">UKOV 후기</div>
      <div className="reviews_mini_title">더 많은 후기 보러가기</div>
      <div className="reviews_all">
        {data.map((review) => (
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

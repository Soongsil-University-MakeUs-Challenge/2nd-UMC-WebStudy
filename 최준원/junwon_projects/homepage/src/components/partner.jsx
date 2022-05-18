import React, { Component } from "react";

// function Partner(props) {
//   console.log(props);
//   return (
//     <div>
//       <div className="remainder_partner">
//         <img
//           src={props.partner}
//           className="remainder_partner_img"
//           alt="담번에 보여줌~"
//         />
//       </div>
//     </div>
//   );
// }

// export default Partner;

class Partner extends Component {
  render() {
    const { partner } = this.props.partner;
    console.log(this.props);
    return (
      <div>
        <div className="remainder_partner">
          <img
            src={partner}
            className="remainder_partner_img"
            alt="see you next time"
          />
        </div>
      </div>
    );
  }
}

export default Partner;

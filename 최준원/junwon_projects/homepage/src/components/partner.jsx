import React, { Component } from "react";

class Partner extends Component {
  render() {
    const { partner } = this.props.partner;
    return (
      <div>
        <div className="remainder_partner">
          <img src={partner} className="remainder_partner_img" />
        </div>
      </div>
    );
  }
}

export default Partner;

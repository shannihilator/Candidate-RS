import React, { Component } from "react";

class Char extends Component {
  render() {
    // console.log("props: ", this.props);
    return (
      <tr style={{ width: 200 }} className="mx-auto bg-primary">
        <td style={{ width: 100 }} className="mx-auto bg-primary">
          {this.props.char}
        </td>
        <td style={{ width: 100 }} className="mx-auto bg-primary">
          {this.props.count}
        </td>
      </tr>
    );
  }
}

export default Char;

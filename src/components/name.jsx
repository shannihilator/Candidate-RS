import React, { Component } from "react";

class Name extends Component {
  state = {
    Counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    console.log("props: ", this.props);
    return (
      <div className="h5 card-tile bg-success text-light px-2 pt-2">
        {this.props.display_name}
      </div>
    );
  }
}

export default Name;

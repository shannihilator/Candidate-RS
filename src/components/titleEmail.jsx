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
      <div>
        <p className="card-text bg-success text-light m-1 px-2 pb-2">
          Title: {this.props.title}
          <br />
          Email: {this.props.email_address}
        </p>
      </div>
    );
  }
}

export default Name;

import React, { Component } from "react";

class Name extends Component {
  render() {
    // console.log("props: ", this.props);
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

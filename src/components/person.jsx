import React, { Component } from "react";
import Name from "./name";
import TitleEmail from "./titleEmail";

class Person extends Component {
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
      <div style={{ width: 400 }} className="card mx-auto m-4 bg-success">
        <Name
          value={this.props.id}
          display_name={this.props.display_name}
          title={this.props.title}
          email_address={this.props.email_address}
        />
        <TitleEmail
          value={this.props.id}
          display_name={this.props.display_name}
          title={this.props.title}
          email_address={this.props.email_address}
        />
      </div>
    );
  }
}

export default Person;

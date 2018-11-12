import React, { Component } from "react";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const CORS_PROXY_URL = process.env.REACT_APP_CORS_PROXY_URL;
const SL_HEADER = {
  headers: {
    authorization: API_KEY
  }
};
const req = new Request(CORS_PROXY_URL + API_URL, SL_HEADER);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(req)
      .then(res => res.json())
      .then(json => {
        console.log("respond: ", json);

        this.setState({
          isLoaded: true,
          items: JSON.stringify(json.data)
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.state.items}
        </span>
      </div>
    );
  } //end of render

  getBadgeClasses() {
    let classes = "badge m-2 badge-primary";
    return classes;
  }
} // end of App class

export default App;

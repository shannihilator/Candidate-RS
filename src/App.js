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
      people: [],
      displayName: [],
      emailAddress: [],
      title: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(req)
      .then(res => res.json())
      .then(json => {
        console.log("json ", json);

        let peopleArray = [];
        let displayNameArray = [];
        let emailAddressArray = [];
        let titleArray = [];

        for (let i in json.data) {
          peopleArray.push([
            json.data[i].display_name,
            json.data[i].email_address,
            json.data[i].title
          ]);
        }

        for (let i in json.data) {
          displayNameArray.push(json.data[i].display_name);
        }

        for (let i in json.data) {
          emailAddressArray.push(json.data[i].email_address);
        }

        for (let i in json.data) {
          titleArray.push(json.data[i].title);
        }

        console.log("resArray: ", peopleArray);

        this.setState({
          isLoaded: true,
          people: peopleArray,
          displayName: displayNameArray,
          emailAddress: emailAddressArray,
          title: titleArray
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        {this.state.people.map(display_name => (
          <div style={{ width: 400 }} className="card m-5">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{display_name[0]}</li>
              <li className="list-group-item">{display_name[1]}</li>
              <li className="list-group-item">{display_name[2]}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  } //end of render
} // end of App class

export default App;

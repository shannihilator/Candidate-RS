import React, { Component } from "react";
import Person from "./components/person";

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
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(req)
      .then(res => res.json())
      .then(json => {
        // console.log("json ", json.data);

        this.setState({
          isLoaded: true,
          people: json.data
        });
      })
      .catch(err => console.log(err));
  }

  handleEmailCharCount = () => {
    // console.log("buttonPressed", this.state.people);
    let emailAddressArray = [];

    this.state.people.map(email_address =>
      emailAddressArray.push(email_address.email_address)
    );

    console.log("emailArray ", emailAddressArray);

    let charArray = [];
    let charArray2 = [];
    let charList = [];
    for (let i = 0; i < emailAddressArray.length; i++) {
      charArray.push(emailAddressArray[i].split(""));
      for (let j = 0; j < charArray.length; j++) {
        for (let k = 0; k < charList.length; k++) {
          if (charArray[j] != charList[k]) {
          }
        }
      }
    }
    console.log("char Length: ", charArray.length);
    console.log("charArray: ", charArray);
  };

  // need conditional render options
  render() {
    return (
      <div className="container pt-4">
        <div style={{ width: 400 }} className="card mx-auto m-4 bg-success">
          <button
            onClick={() => this.handleEmailCharCount()}
            style={{ width: 200 }}
            className="btn btn-warning btn-sm mx-auto my-2"
          >
            Level 2: email character count
          </button>
          <span className={this.getBadgeClasses()}>00</span>
        </div>
        {this.state.people.map(person => (
          <Person
            key={person.id}
            display_name={person.display_name}
            title={person.title}
            email_address={person.email_address}
          />
        ))}
      </div>
    );
  } //end of render

  getBadgeClasses() {
    let classes = "badge m-2 badge-primary";
    return classes;
  } //end of getBadgeClasses
} // end of App class

export default App;

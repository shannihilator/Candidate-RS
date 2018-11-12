import React, { Component } from "react";
import Person from "./components/person";
import Char from "./components/char";

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
      level2: [],
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

    // puts all of the email addresses into one array
    this.state.people.map(email_address =>
      emailAddressArray.push(email_address.email_address)
    );

    // console.log("emailAddressArray ", emailAddressArray);

    // charArray will consist of all the characters in an email
    let charArray = [];
    // charList will list all unique characters and their frequency
    let charList = [];

    // First we parse through every email in our email array
    for (let i = 0; i < emailAddressArray.length; i++) {
      charArray = emailAddressArray[i].split("");
      // Second we parse through every character in each email
      for (let j = 0; j < charArray.length; j++) {
        let isPresent = false;
        //Third we parse our charList to either add a new character or count an existing character
        for (let k = 0; k < charList.length; k++) {
          if (charArray[j] === charList[k][0]) {
            isPresent = true;
            charList[k][1]++;
            // console.log("true");
          }
        }
        if (!isPresent) {
          charList.push([charArray[j], 1]);
        }
      }
    }
    // console.log("char Length: ", charArray.length);
    // console.log("charArray: ", charArray);
    // console.log("charList: ", charList);

    // double checks total number of characters should be 542
    // let total = 0;
    // for (let i = 0; i < charList.length; i++) {
    //   total += charList[i][1];
    // }
    // console.log("total: ", total);

    // update charList to state
    this.setState({
      level2: charList
    });
  };

  //This function renders the level 2 table
  renderTable() {
    if (this.state.level2.length !== 0) {
      return (
        <div>
          <table
            style={{ width: 200 }}
            className="table table-sm text-light bg-primary mx-auto"
          >
            <thead>
              <tr>
                <th style={{ width: 100 }} scope="col">
                  Character
                </th>
                <th style={{ width: 100 }} scope="col">
                  Frequency
                </th>
              </tr>
            </thead>

            <tbody
              style={{ width: 200 }}
              className="mx-auto bg-primary text-center"
            >
              {this.state.level2.map(char => (
                <Char key={char[0]} char={char[0]} count={char[1]} />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

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
          {this.renderTable()}
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
} // end of App class

export default App;

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
        console.log("json ", json.data);

        this.setState({
          isLoaded: true,
          people: json.data
        });
      })
      .catch(err => console.log(err));
  }

  // need conditional render options
  render() {
    return (
      <div className="container pt-4">
        {this.state.people.map(person => (
          <Person
            value={person.id}
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

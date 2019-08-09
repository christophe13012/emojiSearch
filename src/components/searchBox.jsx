import React, { Component } from "react";
import data from "../emojis.json";
import Emoji from "./emoji.jsx";

class SearchBox extends Component {
  state = { searched: "" };
  onChange = e => {
    const searched = e.target.value.toLowerCase();
    this.setState({ searched });
  };
  render() {
    const emojis = Object.keys(data).map(key => [key, data[key]]);
    let arrayPng = [];
    emojis.forEach(emoji => {
      if (emoji[0] === this.state.searched) {
        arrayPng.push(emoji[0]);
      }
      emoji[1].forEach(el => {
        if (el === this.state.searched) {
          if (arrayPng.indexOf(emoji[0]) === -1) arrayPng.push(emoji[0]);
        }
      });
    });
    console.log(arrayPng);
    return (
      <div style={{ marginTop: 30, paddingLeft: 25, paddingRight: 25 }}>
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Search by keyword
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={this.onChange}
            value={this.state.searched}
          />
        </div>
        <ul className="list-group mt-3">
          {arrayPng.map((emoji, index) => (
            <Emoji key={index} emoji={emoji} />
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBox;

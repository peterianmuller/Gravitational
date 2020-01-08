import React from "react";
import logo from "../logo.svg";
import "../App.css";

class More extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handler}> More </button>
      </div>
    );
  }
}

export default More;

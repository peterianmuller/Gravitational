import React from "react";
import logo from "../logo.svg";
import "../App.css";

class Post extends React.Component {
  render() {
    return (
      <div>
        <div>
          <strong>1.</strong>
          <a>{this.props.title}</a>
          <a>({this.props.url})</a>
        </div>
        <div>
          <span>{this.props.points} points</span>
          <a> by {this.props.author}</a>
        </div>
      </div>
    );
  }
}

export default Post;

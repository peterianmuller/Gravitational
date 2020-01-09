import React from "react";
import logo from "../logo.svg";
import "../App.css";

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div class="post-top-line">
          <strong>1. </strong>
          <a className="post-title">{this.props.title}</a>
          <a className="post-url">({this.props.url})</a>
        </div>
        <div>
          <span className="post-points">{this.props.points} points</span>
          <a className="post-author"> by {this.props.author}</a>
        </div>
      </div>
    );
  }
}

export default Post;

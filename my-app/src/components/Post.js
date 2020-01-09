import React from "react";
import moment from "moment";
import logo from "../logo.svg";
import "../App.css";

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div class="post-top-line">
          <strong>{this.props.index + 1}. </strong>
          <a className="post-title">{this.props.title}</a>
          <a className="post-url">({this.props.url})</a>
        </div>
        <div>
          <span className="post-points">{this.props.points} points</span>
          <a className="post-second-line-item"> by {this.props.author}</a>
          <a className="post-second-line-item">
            {moment(moment.unix(this.props.time)).fromNow()}
          </a>
          <a className="post-second-line-item">
            {this.props.comments} comments
          </a>
        </div>
      </div>
    );
  }
}

export default Post;

import React from "react";
import logo from "../logo.svg";
import "../App.css";

function Post() {
  return (
    <div>
      <div>
        <strong>1.</strong>
        <a>Headline</a>
        <a>(URL)</a>
      </div>
      <div>
        <span>points</span>
        <a>author</a>
        <a>time</a>
        <a>comments</a>
      </div>
    </div>
  );
}

export default Post;

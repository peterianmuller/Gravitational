import React from "react";
import Post from "./Post.js";
import "../App.css";

class Posts extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ol className="posts">
        {this.props.posts.map(function(post, i) {
          console.log(post);
          return (
            <Post
              key={post.id}
              author={post.by}
              url={post.url}
              title={post.title}
              points={post.score}
              time={post.time}
              comments={post.descendants}
            />
          );
        })}
      </ol>
    );
  }
}

export default Posts;

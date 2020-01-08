import React from "react";
import Post from "./Post.js";

class Posts extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ol className="posts">
        {this.props.posts.map(function(post, i) {
          return (
            <Post
              key={post.id}
              author={post.by}
              url={post.url}
              title={post.title}
              points={post.score}
            />
          );
        })}
      </ol>
    );
  }
}

export default Posts;

import React from "react";
import Post from "./Post.js";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentWillMount() {
    if (this.state.posts.length < 30) this.fetchTopStories();
  }

  fetchTopStories() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(response => response.json())
      .then(data => {
        data.map(storyId => {
          fetch(` https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(response => response.json())
            .then(storyDetail => {
              this.setState(currentState => {
                currentState.posts.push(storyDetail);
                return { posts: currentState.posts };
              });
            });
        });
      });
  }

  render() {
    return (
      <ol className="posts">
        {this.state.posts.map(function(post) {
          console.log(post);
          return (
            <Post
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

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Post from "./components/Post.js";
import Posts from "./components/Posts.js";
import More from "./components/More.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = { posts: [], currentPage: 0 };
  }

  componentDidMount() {
    this.fetchTopStories();
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
    console.log(this.state.posts.slice(0, 30));
    return (
      <div className="App">
        <Nav />
        <More />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

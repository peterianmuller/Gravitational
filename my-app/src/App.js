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

  moreBtnClickHandler = e => {
    this.setState(currentState => {
      return {
        posts: currentState.posts,
        currentPage: ++currentState.currentPage
      };
    });
  };

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
    return (
      <div className="App">
        <Nav />
        <More handler={this.moreBtnClickHandler} />
        <Posts
          posts={this.state.posts.slice(
            this.state.currentPage * 30,
            (this.state.currentPage + 1) * 30
          )}
        />
      </div>
    );
  }
}

export default App;

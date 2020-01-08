import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Post from "./components/Post.js";
import Posts from "./components/Posts.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Posts />
    </div>
  );
}

export default App;

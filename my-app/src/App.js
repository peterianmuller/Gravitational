import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Post from "./components/Post.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Post />
    </div>
  );
}

export default App;

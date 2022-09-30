import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";





console.log(blogData)

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name="Overderreacted" />
      <About image="https://via.placeholder.com/215" about="I explain with words and code." />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

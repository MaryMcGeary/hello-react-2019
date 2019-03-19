import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";

//whole class is a render method
class App extends Component {
  // extends means inherit (Component from React pkg)
  render() {
    return (
      <div>
        <Header />
        <Counter />
        <Counter />
        <Footer copyrightYear={2019} copyrightHolder="Mary McGeary" />
      </div>
    );
  }
}

export default App; //this exports the above class

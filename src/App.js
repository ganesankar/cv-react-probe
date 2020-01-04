import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Container/About";
import Home from "./Container/Home";
import Export from "./Container/Export";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/export" component={Export} />
    </div>
  </Router>
);

export default App;
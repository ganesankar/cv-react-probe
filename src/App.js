import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Container/About";
import Home from "./Container/Home";
import Export from "./Container/Export";

import configureStore from "./store";
const store = configureStore();
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/export" component={Export} />
      </div>
    </Router>
  </Provider>
);

export default App;

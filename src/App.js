import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style/blk-design-system.css";
import "./App.css";
// Components
import Home from "./components/Home";
import Posts from "./components/Posts";
import Highchart from "./components/Highchart";
import Vis from "./components/Vis";
import Header from "./components/common/Header";

// Redux
import store from "./store";
import { Provider } from "react-redux";

export default class App extends Component {
  componentDidMount() {
    store.dispatch({
      type: "CHECK_USER"
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/highchart" component={Highchart} />
            <Route exact path="/vis" component={Vis} />
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

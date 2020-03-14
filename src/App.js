import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Posts from "./components/Posts";

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
          <Router>
            <Route exact path="/" component={Posts} />
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

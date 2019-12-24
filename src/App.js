import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import AppHeader from "./components/AppHeader";
import Section from "./components/Section";
import SettingsIcon from "./components/SettingsIcon";
import api from "./utils/api";
import sortByDate from "./utils/sortByDate";
import isLocalHost from "./utils/isLocalHost";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [],
    showMenu: false
  };
  componentDidMount() {
    // Fetch all todos
    api.getCv().then(todos => {
      if (todos.message === "unauthorized") {
        if (isLocalHost()) {
          alert(
            "FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info"
          );
        } else {
          alert(
            "FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct"
          );
        }
        return false;
      }

      const list = [];
      if (todos.length > 0) {
        todos.forEach(function(item, index) {
          list.push(item.data);
        });
      }

      this.setState({
        todos: list
      });
    });
  }

  closeModal = e => {
    this.setState({
      showMenu: false
    });
  };
  openModal = () => {
    this.setState({
      showMenu: true
    });
  };
  
  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        {todos &&
          todos.length > 0 &&
          todos.map((listItem, index) => {
            return (
              <React.Fragment key={index}>
                <Section fluid listItem={listItem}></Section>
              </React.Fragment>
            );
          })}
      </div>
    );
  }
}

function removeOptimisticTodo(todos) {
  // return all 'real' todos
  return todos.filter(todo => {
    return todo.ref;
  });
}

function getTodoId(todo) {
  if (!todo.ref) {
    return null;
  }
  return todo.ref["@ref"].id;
}

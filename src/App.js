import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "./components/Section";
import api from "./utils/api";
import isLocalHost from "./utils/isLocalHost";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [],
    loading: true
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
        todos: list,
        loading: false
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
    const { todos, loading } = this.state;
    todos.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
    return (
      <div className="app">
        {loading && (
          <div className="c-preloader  js-preloader"><i class="fas fa-circle-notch fa-spin fas-spin"></i>
            </div>
        )}

        {todos &&
          todos.length > 0 &&
          todos.map((listItem, index) => {
            return (
              <React.Fragment key={index}>
                <Section fluid listItem={listItem}></Section>
              </React.Fragment>
            );
          })}
        <Container fluid>
          <Row>
            <Col xs="12" sm="12" md="13" className="text-center">
              &copy; Ganesan Karuppaiya
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

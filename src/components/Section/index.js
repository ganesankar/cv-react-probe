import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import Contact from "../Contact";
import Intro from "../Intro";
import Expertise from "../Expertise";
import Skills from "../Skills";
import Experience from "../Experience";
import Education from "../Education";

export default class Section extends Component {
  state = {
    todos: [],
    showMenu: false
  };
  componentDidMount() {}
  title(listitem) {
    switch (listitem.type) {
      case "social":
        return <div />;
      case "intro":
        return <div />;
      case "contacts":
        return (
          <div>
            <h4> CONTACTS</h4> <p> Ways to reach me </p>
          </div>
        );
      default:
        return (
          <div>
            <h4>{listitem.name}</h4> <p>{listitem.desc}</p>
          </div>
        );
    }
  }
  renderTodos(listitem) {
    switch (listitem.type) {
      case "contacts":
        return <Contact data={listitem} />;
      case "intro":
        return <Intro data={listitem} />;
      case "expertise":
        return <Expertise data={listitem} />;
      case "skills":
        return <Skills data={listitem} />;
      case "experience":
        return <Experience data={listitem} />;
      case "education":
        return <Education data={listitem} />;
      case "projects":
        return <Experience data={listitem} />;
      case "otherprojects":
        return <Education data={listitem} />;
      case "awards":
        return <Education data={listitem} />;
      case "profile":
        return <Contact data={listitem} />;
      default:
        return "foo";
    }
  }
  render() {
    const { todos } = this.state;
    console.log("his.props.listItem", this.props.listItem);
    return (
      <Container fluid className="generalsec1">
        <Container>
          <Row>
            <Col xs="12" sm="2" md="4">
              {this.title(this.props.listItem)}
            </Col>
            <Col xs="12" sm="10" md="8">
              {this.renderTodos(this.props.listItem)}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

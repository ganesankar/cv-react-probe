import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import Contact from "../Contact";
import Intro from "../Intro";
import Expertise from "../Expertise";
import Skills from "../Skills";
import Experience from "../Experience";
import Education from "../Education";
import Social from "../Social";
import OtherProjects from "../OtherProjects";

export default class Section extends Component {
  state = {
    todos: [],
    showMenu: false
  };
  componentDidMount() {}
  title(listitem) {
    switch (listitem.type) {
      case "social":
        return (
          <div>
            <h4> SOCIAL</h4> <p> Kindof Active </p>
          </div>
        );
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
  sectionClass(listitemType) {
    switch (listitemType) {
      case "social":
        return "min10vh";
      case "contacts":
        return "min10vh";
      case "profile":
        return "min10vh";
      case "awards":
        return "min10vh";
      default:
        return "min80vh";
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
        return <OtherProjects data={listitem} />;
      case "awards":
        return <Education data={listitem} />;
      case "profile":
        return <Contact data={listitem} />;
      case "social":
        return <Social data={listitem} />;
      default:
        return "foo";
    }
  }
  render() {
    return (
      <Container fluid className={`generalsec1`}>
        <Container>
          <Row>
            <Col xs="12" sm="2" md="4" className="leftHead text-md-right text-sm-left">
              {this.title(this.props.listItem)}
            </Col>
            <Col
              xs="12"
              sm="10"
              md="8"
              className={`rightContent ${this.sectionClass(
                this.props.listItem.type
              )}`}
            >
              <div className="rightContainer">
                {this.renderTodos(this.props.listItem)}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

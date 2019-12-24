import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";

const Intro = props => {
  console.log("props.data", props.data);
  return (
    <Container fluid>
      <Row>
        <Col xs="12" sm="12" md="12">
          <h1>{props.data.name}
          </h1>
        {props.data.desc}</Col>
      </Row>
    </Container>
  );
};

export default Intro;

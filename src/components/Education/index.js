import React, { useState } from "react";
import { Col, Container, Row, Media } from "reactstrap";

const Education = props => {
  console.log("props.data", props.data);
  return (
    <Container fluid>
      <Row>
        <Media list>
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return (
              <Media tag="li">
                <Media body>
                  <Media heading>{item.name}</Media>
                  {item.desc}{" "}
                </Media>
              </Media>
            );
          })}</Media>
      </Row>
    </Container>
  );
};

export default Education;

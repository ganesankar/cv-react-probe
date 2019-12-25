import React from "react";
import { Col, Container, Row } from "reactstrap";

const OtherProjects = props => {
  return (
    <Container fluid>
      <Row>
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return (
              <Col xs="12" sm="12" md="12">
                <address>
                  <a rel="noopener noreferrer" href={item.link} target="_blank">
                    <strong> {item.name}</strong>
                    <br />
                    {item.desc}{" "}
                  </a>
                </address>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default OtherProjects;

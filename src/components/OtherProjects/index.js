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
                <strong className="text-primary">{item.name}</strong>
                <div className="dateDivider">
                  <div className="dateDividerLeft">
                    <a
                      rel="noopener noreferrer"
                      href={item.portfolio ? item.portfolio : item.link}
                      target="_blank"
                      className="text-secondary"
                    >
                      {item.elink ? item.portfolio : item.link}
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default OtherProjects;

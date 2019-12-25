import React from "react";
import { Col, Container, Row, Progress } from "reactstrap";

const Skills = props => {
  return (
    <Container fluid>
      <Row>
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return (
              <Col xs="12" sm="2" md="6">
                <address>
                  <strong>
                    {" "}
                    <span class="text-info">
                      {item.percentage}
                      {"% "}
                    </span>
                    {item.name}
                  </strong>
                  <br />
                  <Progress color="info" value={item.percentage} />
                </address>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Skills;

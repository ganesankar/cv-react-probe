import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Badge,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Expertise = props => {
  console.log("props.data", props.data);

  return (
    <Container fluid>
      <Row>
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return (
              <Col xs="12" sm="12" md="12">
                <address>
                  <strong> {item.name}</strong>
                  <br />
                  {item.desc}
                  <br />
                  {item.values &&
                    item.values.length > 0 &&
                    item.values.map((item1, index) => {
                      return (
                        <Badge href="#" color="primary">
                          {item1}
                        </Badge>
                      );
                    })}
                </address>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Expertise;

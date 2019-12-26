import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Contact = props => {
  return (
    <Container fluid>
      <Row>
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return (
              <Col xs="12" sm="2" md="3">
                <address>
                  <strong> {item.name}</strong>
                  <br />
                  <a
                    rel="noopener noreferrer"
                    href={item.link}
                    target="_blank"
                  >
                    {" "}
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

export default Contact;

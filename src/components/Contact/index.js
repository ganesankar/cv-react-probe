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
  console.log("props.data", props.data);
  return (
    <Container fluid>
      <Row>
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((contactItem, index) => {
            return (
              <Col xs="12" sm="2" md="3">
                <address>
                  <strong> {contactItem.name}</strong>
                  <br />
                  {contactItem.desc}
                </address>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Contact;

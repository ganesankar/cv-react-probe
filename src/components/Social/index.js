import React from "react";
import { Col, Container, Row } from "reactstrap";

const Social = props => {
  return (
    <Container fluid>
      <Row>
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return (
              <Col xs="12" sm="2" md="3">
                <address>
                  <a
                    rel="noopener noreferrer"
                    href={item.elink}
                    target="_blank"
                    className="btn btn-outline-info d-block"
                  >
                    <i className={`fab  fa-lg ${item.icon}`}></i> <br />
                    <strong>{item.name}</strong>
                  </a>
                </address>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Social;

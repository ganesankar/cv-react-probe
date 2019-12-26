import React from "react";
import _ from "lodash";
import { Col, Container, Row } from "reactstrap";

const Expertise = props => {
  const expresult = _.groupBy(props.data.values, "desc");
  return (
    <Container fluid>
      <Row>
        {props.data &&
          Object.keys(expresult).map((key, value, index) => {
            return (
              <Col xs="12" sm="12" md="12">
                <strong> {key}</strong>
                <br />
                <ol>
                  {expresult[key].length > 0 &&
                    expresult[key].map((item, index) => {
                      return (
                        <Col xs="12" sm="12" md="12">
                          <li>
                            <strong> {item.name}</strong>
                            <p>
                              {item.values &&
                                item.values.length > 0 &&
                                item.values.map((item1, index) => {
                                  return (
                                    <span class="badge badge-info mr-1">
                                      {item1}
                                    </span>
                                  );
                                })}
                            </p>
                          </li>
                        </Col>
                      );
                    })}
                </ol>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Expertise;

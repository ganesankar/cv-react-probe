import React from "react";
import { Col, Container, Row } from "reactstrap";

const OtherProjects = props => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          {props.data &&
            props.data.values.length > 0 &&
            props.data.values.map((item, index) => {
              return (
                <a
                  rel="noopener noreferrer"
                  href={item.portfolio ? item.portfolio : item.link}
                  target="_blank"
                  data-is-focusable={true}
                >
                  {item.portfolio ? item.portfolio : item.link}
                </a>
              );
            })}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default OtherProjects;

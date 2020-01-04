import React, { useState } from "react";

import { CompoundButton } from "office-ui-fabric-react";
const Contact = props => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return (
              <div className="ms-Grid-col ms-sm6 ms-md3 ms-lg3">
              <CompoundButton primary
                rel="noopener noreferrer"
                href={item.link}
                target="_blank"
                secondaryText={item.desc}
              >
                {item.name.toUpperCase()}
              </CompoundButton>
            </div>
              
            );
          })}
      </div>
    </div>
  );
};

export default Contact;

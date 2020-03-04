import React from "react";

const Social = props => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return (
              <div className="ms-Grid-col ms-sm6 ms-md3 ms-lg3">
                {item.name.toUpperCase()}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Social;

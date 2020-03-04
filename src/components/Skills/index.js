import React from "react";

const Skills = props => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6" />;
          })}
      </div>
    </div>
  );
};

export default Skills;

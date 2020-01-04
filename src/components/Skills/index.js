import React from "react";
import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";


const Skills = props => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        {props.data &&
          props.data.values.length > 0 &&
          props.data.values.map((item, index) => {
            return (
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <ProgressIndicator
                  label={`${item.name} : ${item.percentage} `}
                  description={` `}
                  percentComplete={Number(item.percentage / 100)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;

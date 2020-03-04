import React from "react";

import DateDivider from "../DateDivider";

const Education = props => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          {props.data &&
            props.data.values.length > 0 &&
            props.data.values.map((item, index) => {
              return (
                <div data-is-focusable={true}>
                  <div>
                    <DateDivider
                      startdate={item.startdate}
                      enddate={item.enddate}
                    />

                    <div>{item.name}</div>
                    <div>{`${item.institute} ${item.location &&
                      item.location}`}</div>
                    <div>{item.desc}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Education;

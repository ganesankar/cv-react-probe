import React, { useState } from "react";

import Moment from "react-moment";

const DateDivider = props => {
  return (
    <div className="dateDivider">
      <div className="dateDividerText">
        {props.startdate === "c" ? (
          "Present"
        ) : (
          <Moment
            format="MMM - YYYY"
            parse="DD/MM/YYYY"
            date={props.startdate}
          ></Moment>
        )}
        {' - '}
        {props.enddate === "c" ? (
          "Present"
        ) : (
          <Moment
            format="MMM - YYYY"
            parse="DD/MM/YYYY"
            date={props.enddate}
          ></Moment>
        )}
      </div>
    </div>
  );
};

export default DateDivider;

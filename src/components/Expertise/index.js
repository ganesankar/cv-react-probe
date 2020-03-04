import React from "react";
import _ from "lodash";

const Expertise = props => {
  const expresult = _.groupBy(props.data.values, "desc");
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        {props.data &&
          Object.keys(expresult).map((key, value, index) => {
            return (
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                <strong> {key}</strong>
                <br />
                <ol>
                  {expresult[key].length > 0 &&
                    expresult[key].map((item, index) => {
                      return (
                        <div className="ms-ListItem is-unread is-focusable">
                          <span className="ms-ListItem-primaryText">
                            {item.name}
                          </span>
                          <span className="ms-ListItem-tertiaryText" />
                        </div>
                      );
                    })}
                </ol>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Expertise;
